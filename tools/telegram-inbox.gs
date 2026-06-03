/**
 * AI Learn — Telegram INBOUND bridge: reply-to-ingest (Google Apps Script)
 * ------------------------------------------------------------------------
 * Companion to telegram-relay.gs (outbound). This script reads YOUR replies to
 * the bot and queues them — so when the Narrative Scout / Synthesis Tracker sends
 * a Telegram message, you reply "ingest 2" (or validate / skip / note ...) and it
 * gets queued for the local wiki agent to action.
 *
 * WHY two steps: real ingestion needs WebFetch + writing pages + a git commit,
 * which the cloud routines CAN'T do (no WebFetch, read-only). Your LOCAL Claude
 * Code session does. So: Telegram reply = "flag it"; a local run = "do it".
 * The queue is a Gmail draft (no new credentials — reuses bot token + Gmail).
 *
 * COMMANDS (reply to a scout message in Telegram, or send standalone):
 *   ingest [n]    → queue item n (or the replied-to item) for full ingestion
 *   validate [n]  → queue for verification only (check figures vs primary)
 *   skip [n]      → mark not worth ingesting (logged, so it's not re-surfaced)
 *   note <text>   → attach a note/instruction to the replied-to item
 *   file <text>   → freeform "file this as ..." request
 * (a leading slash is fine too: /ingest 2)
 *
 * SETUP (one-time):
 *   1. New Apps Script project (KEEP SEPARATE from the relay, or remove the
 *      duplicate BOT_TOKEN/CHAT_ID vars if pasting into the same project).
 *   2. Paste this; fill BOT_TOKEN + CHAT_ID (same bot as the relay) + QUEUE_TO.
 *   3. Run `setupInbox` once (authorize Gmail + external requests).
 *   4. It installs a 1-minute poller (pollInbox).
 * NOTE: only ONE script may call Telegram getUpdates (the relay only SENDS, so
 * this is the sole consumer — fine). Keep tokens out of git (repo = placeholders).
 */

var BOT_TOKEN = '__PASTE_BOT_TOKEN__';            // same bot as telegram-relay.gs
var CHAT_ID   = '__PASTE_CHAT_ID__';              // only replies from this chat are accepted
var QUEUE_TO  = '__PASTE_YOUR_EMAIL__';           // e.g. jaden.cww5@gmail.com

var COMMANDS = ['ingest','validate','skip','note','file'];

function setupInbox() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'pollInbox') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('pollInbox').timeBased().everyMinutes(1).create();
  Logger.log('Inbox poller installed (every 1 min).');
}

function pollInbox() {
  if (BOT_TOKEN.indexOf('__') === 0 || CHAT_ID.indexOf('__') === 0 || QUEUE_TO.indexOf('__') === 0) {
    Logger.log('Fill BOT_TOKEN, CHAT_ID, QUEUE_TO first.'); return;
  }
  var props = PropertiesService.getScriptProperties();
  var offset = props.getProperty('tg_offset') || '';
  var url = 'https://api.telegram.org/bot' + BOT_TOKEN + '/getUpdates'
          + '?timeout=0&allowed_updates=' + encodeURIComponent('["message"]')
          + (offset ? '&offset=' + offset : '');

  var resp = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (resp.getResponseCode() !== 200) { Logger.log('getUpdates error: ' + resp.getContentText()); return; }
  var data = JSON.parse(resp.getContentText());
  if (!data.ok || !data.result.length) return;

  var lastId = offset ? parseInt(offset, 10) - 1 : 0;
  data.result.forEach(function (u) {
    if (u.update_id > lastId) lastId = u.update_id;
    var m = u.message;
    if (!m || !m.text) return;
    if (String(m.chat.id) !== String(CHAT_ID)) return;        // only YOU

    var text = m.text.trim();
    var lower = text.toLowerCase();
    var cmd = null;
    for (var i = 0; i < COMMANDS.length; i++) {
      var c = COMMANDS[i];
      if (lower === c || lower === '/' + c || lower.indexOf(c + ' ') === 0 || lower.indexOf('/' + c + ' ') === 0) { cmd = c; break; }
    }
    if (!cmd) return;                                          // ignore non-command chatter

    var note = text.replace(new RegExp('^/?' + cmd, 'i'), '').trim();
    var target = (m.reply_to_message && m.reply_to_message.text)
      ? m.reply_to_message.text
      : '(standalone — no replied-to message; applies to the most recent scout message)';

    // Queue as a Gmail draft the local agent reads + actions.
    var subject = 'AI INGEST QUEUE: ' + cmd.toUpperCase() + (note ? (' — ' + note.substring(0, 50)) : '');
    var body = 'COMMAND: ' + cmd + '\n'
             + 'NOTE: ' + (note || '(none)') + '\n'
             + 'TARGET (the scout message you replied to):\n' + target.substring(0, 800) + '\n\n'
             + '— Queued from Telegram. Local agent: action via the ingest-queue workflow, then delete this draft.';
    GmailApp.createDraft(QUEUE_TO, subject, body);

    tgSend('✅ Queued [' + cmd + ']' + (note ? ' "' + note + '"' : '')
         + ' — I\'ll action it on your next local wiki run.\n↳ ' + firstLine(target));
  });

  props.setProperty('tg_offset', String(lastId + 1));         // ack-confirm processed updates
}

function firstLine(s) { return (s || '').split('\n')[0].substring(0, 90); }
function tgSend(text) {
  UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
    { method: 'post', muteHttpExceptions: true,
      payload: { chat_id: CHAT_ID, text: text, disable_web_page_preview: 'true' } });
}
