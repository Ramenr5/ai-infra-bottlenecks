/**
 * AI Learn — Telegram relay (Google Apps Script)
 * ------------------------------------------------
 * Why this exists: the cloud routines (Daily Pulse, Regime Monitor, Gap Audit,
 * SemiAnalysis) run in Anthropic's sandbox, which BLOCKS outbound HTTP — so they
 * cannot call the Telegram API directly. They CAN create Gmail drafts (via MCP).
 * This script runs on Google's servers (which DO have network egress + native
 * Gmail access), reads those alert drafts, and forwards a concise summary to the
 * Telegram bot. Dedup via Script Properties so each draft is sent once.
 *
 * SETUP (one-time, ~5 min):
 *   1. Go to https://script.google.com  ->  New project
 *   2. Paste this whole file (replace the default Code.gs contents)
 *   3. Fill BOT_TOKEN and CHAT_ID below (do NOT commit the real token to git)
 *   4. Run `setup` once (authorize Gmail + external-request access when prompted)
 *   5. Run `relayAlerts` once to test (check Telegram)
 *   `setup` installs a time trigger that runs relayAlerts every 15 minutes.
 *
 * NOTE: keep the real token only in your Apps Script project. The copy in the
 * public GitHub repo uses placeholders.
 */

var BOT_TOKEN = '__PASTE_BOT_TOKEN__';   // e.g. 8744956601:AA...
var CHAT_ID   = '__PASTE_CHAT_ID__';     // e.g. 266952662

// Only drafts whose subject contains one of these prefixes get relayed:
var SUBJECT_MATCHES = [
  'AI Regime Monitor',
  'AI Infra Pulse',
  'Wiki gap audit',
  'SemiAnalysis new posts',
  'SemiAnalysis ingest'
];

var MAX_TELEGRAM_CHARS = 3800;   // Telegram hard limit is 4096; stay under it
var MAX_BODY_LINES      = 120;   // effectively send the whole concise draft; char cap is the real guard

function setup() {
  // remove any existing triggers for relayAlerts, then add a fresh 15-min trigger
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'relayAlerts') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('relayAlerts').timeBased().everyMinutes(15).create();
  Logger.log('Trigger installed: relayAlerts every 15 min.');
}

function relayAlerts() {
  if (BOT_TOKEN.indexOf('__') === 0 || CHAT_ID.indexOf('__') === 0) {
    Logger.log('Fill BOT_TOKEN and CHAT_ID first.'); return;
  }
  var props = PropertiesService.getScriptProperties();
  var sent = (props.getProperty('sentDraftIds') || '').split(',').filter(String);
  var sentSet = {}; sent.forEach(function (id) { sentSet[id] = true; });

  var drafts = GmailApp.getDrafts();
  var newlySent = [];

  drafts.forEach(function (d) {
    var id = d.getId();
    if (sentSet[id]) return;
    var msg = d.getMessage();
    var subj = msg.getSubject() || '';
    var matches = SUBJECT_MATCHES.some(function (p) { return subj.indexOf(p) !== -1; });
    if (!matches) return;

    var body = (msg.getPlainBody() || '');
    var lines = body.split('\n')
                    .map(function (s) { return s.replace(/\s+$/, ''); })
                    .filter(function (s) { return s.trim().length > 0; })
                    .slice(0, MAX_BODY_LINES);
    var text = subj + '\n\n' + lines.join('\n');
    // Only add the "truncated" note when content is ACTUALLY cut. Complete messages get no footer.
    if (text.length > MAX_TELEGRAM_CHARS) {
      text = text.substring(0, MAX_TELEGRAM_CHARS) + '\n…(truncated — full detail in Gmail draft)';
    }

    var resp = UrlFetchApp.fetch(
      'https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage',
      { method: 'post', muteHttpExceptions: true,
        payload: { chat_id: CHAT_ID, text: text, disable_web_page_preview: 'true' } }
    );
    if (resp.getResponseCode() === 200) newlySent.push(id);
    else Logger.log('Telegram error for "' + subj + '": ' + resp.getContentText());
  });

  if (newlySent.length) {
    var all = sent.concat(newlySent).slice(-300);  // remember last 300
    props.setProperty('sentDraftIds', all.join(','));
    Logger.log('Relayed ' + newlySent.length + ' alert(s) to Telegram.');
  } else {
    Logger.log('No new alert drafts to relay.');
  }
}
