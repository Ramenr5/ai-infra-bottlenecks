/**
 * AI Learn — Telegram INBOUND bridge: reply-to-ingest, FULLY AUTOMATED (Apps Script)
 * --------------------------------------------------------------------------------
 * Companion to telegram-relay.gs (outbound). Reads YOUR replies to the bot and:
 *   - ingest / validate  → fires a GitHub repository_dispatch that runs the
 *     .github/workflows/ingest.yml Action (real Claude Code agent: WebFetch the
 *     source, write wiki pages, open a PR), then you get a Telegram ping with the
 *     PR link. ZERO local session needed.
 *   - skip / note / file → logged to a Gmail "AI INGEST QUEUE" draft (light; no CI).
 *
 * COMMANDS (reply to a scout message in Telegram, or send standalone):
 *   ingest [n]    → auto-ingest item n (opens a PR)
 *   validate [n]  → auto-verify item n's figures vs primary (opens a PR)
 *   skip [n]      → log as not-worth-ingesting
 *   note <text>   → attach a note/instruction (logged)
 *   file <text>   → freeform request (logged)
 * (leading slash ok: /ingest 2)
 *
 * SETUP (one-time):
 *   A. Repo secrets (GitHub → Settings → Secrets and variables → Actions):
 *        ANTHROPIC_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 *   B. A fine-grained GitHub PAT with **Contents: Read and write** on the repo
 *        (needed to fire repository_dispatch). Paste it into GITHUB_PAT below.
 *   C. Fill BOT_TOKEN, CHAT_ID, QUEUE_TO, GITHUB_REPO.
 *   D. Run `setupInbox` once; it installs a 1-minute poller (pollInbox).
 *   E. Commit .github/workflows/ingest.yml to main (already in the repo).
 *
 * ⚠ Cost: each ingest = one Claude Code API run (pay-per-use ANTHROPIC_API_KEY).
 * Only ONE script may call Telegram getUpdates — the relay only SENDS, so this is
 * the sole consumer. Keep all tokens out of git (repo copy = placeholders).
 */

var BOT_TOKEN   = '__PASTE_BOT_TOKEN__';          // same bot as telegram-relay.gs
var CHAT_ID     = '__PASTE_CHAT_ID__';            // only replies from this chat are accepted
var QUEUE_TO    = '__PASTE_YOUR_EMAIL__';         // e.g. jaden.cww5@gmail.com (for skip/note logs)
var GITHUB_REPO = 'Ramenr5/ai-infra-bottlenecks'; // owner/repo
var GITHUB_PAT  = '__PASTE_GH_FINEGRAINED_PAT__'; // fine-grained PAT, Contents: Read and write

var CI_COMMANDS    = ['ingest', 'validate'];      // these fire the GitHub Action
var QUEUE_COMMANDS = ['skip', 'note', 'file'];    // these just log to Gmail
var ALL_COMMANDS   = CI_COMMANDS.concat(QUEUE_COMMANDS);

function setupInbox() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'pollInbox') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('pollInbox').timeBased().everyMinutes(1).create();
  Logger.log('Inbox poller installed (every 1 min).');
}

function pollInbox() {
  if ([BOT_TOKEN, CHAT_ID, QUEUE_TO, GITHUB_PAT].some(function (v) { return v.indexOf('__') === 0; })) {
    Logger.log('Fill BOT_TOKEN, CHAT_ID, QUEUE_TO, GITHUB_PAT first.'); return;
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
    if (String(m.chat.id) !== String(CHAT_ID)) return;            // only YOU

    var text = m.text.trim();
    var lower = text.toLowerCase();
    var cmd = null;
    for (var i = 0; i < ALL_COMMANDS.length; i++) {
      var c = ALL_COMMANDS[i];
      if (lower === c || lower === '/' + c || lower.indexOf(c + ' ') === 0 || lower.indexOf('/' + c + ' ') === 0) { cmd = c; break; }
    }
    if (!cmd) return;                                             // ignore non-command chatter

    var note = text.replace(new RegExp('^/?' + cmd, 'i'), '').trim();
    var replied = (m.reply_to_message && m.reply_to_message.text)
      ? m.reply_to_message.text
      : '(standalone — no replied-to message; use the most recent scout message)';

    if (CI_COMMANDS.indexOf(cmd) !== -1) {
      var scoutBody = findScoutBody(replied).substring(0, 30000);  // full scout msg w/ URLs
      var ok = fireDispatch(cmd, note, replied, scoutBody);
      tgSend(ok
        ? '⚙️ ' + cmd + ' started' + (note ? ' "' + note + '"' : '') + ' — a PR will appear in ~1-2 min.\n↳ ' + firstLine(replied)
        : '⚠️ ' + cmd + ' failed to start (check GITHUB_PAT / Action). See Apps Script logs.');
    } else {
      GmailApp.createDraft(QUEUE_TO, 'AI INGEST QUEUE: ' + cmd.toUpperCase() + (note ? ' — ' + note.substring(0, 50) : ''),
        'COMMAND: ' + cmd + '\nNOTE: ' + (note || '(none)') + '\nTARGET:\n' + replied.substring(0, 800)
        + '\n\n— Logged from Telegram; action on your next local wiki run.');
      tgSend('🗒️ Logged [' + cmd + ']' + (note ? ' "' + note + '"' : '') + '.\n↳ ' + firstLine(replied));
    }
  });

  props.setProperty('tg_offset', String(lastId + 1));
}

// Find the most recent scout Gmail draft whose body matches the replied-to text.
function findScoutBody(replied) {
  var key = (replied || '').replace(/\(standalone[\s\S]*$/, '').trim().substring(0, 40);
  var drafts = GmailApp.getDrafts();
  var best = '';
  for (var i = 0; i < drafts.length; i++) {
    var msg = drafts[i].getMessage();
    var subj = msg.getSubject() || '';
    if (subj.indexOf('AI Narrative Scout') === -1 && subj.indexOf('AI Synthesis Tracker') === -1) continue;
    var body = msg.getPlainBody() || '';
    if (key && body.indexOf(key) !== -1) return body;             // exact match wins
    if (!best) best = body;                                       // else newest scout as fallback
  }
  return best;
}

function fireDispatch(command, note, replied, scoutBody) {
  var r = UrlFetchApp.fetch('https://api.github.com/repos/' + GITHUB_REPO + '/dispatches', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { Authorization: 'Bearer ' + GITHUB_PAT, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
    payload: JSON.stringify({
      event_type: 'telegram-ingest',
      client_payload: { command: command, note: note, replied_to: replied, scout_body: scoutBody }
    })
  });
  if (r.getResponseCode() !== 204) { Logger.log('dispatch error ' + r.getResponseCode() + ': ' + r.getContentText()); return false; }
  return true;
}

function firstLine(s) { return (s || '').split('\n')[0].substring(0, 90); }
function tgSend(text) {
  UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
    { method: 'post', muteHttpExceptions: true,
      payload: { chat_id: CHAT_ID, text: text, disable_web_page_preview: 'true' } });
}
