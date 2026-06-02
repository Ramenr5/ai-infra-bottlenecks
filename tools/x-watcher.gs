/**
 * AI Learn — X (Twitter) breaking-news watcher → Telegram (Google Apps Script)
 * ---------------------------------------------------------------------------
 * WHY: the cloud routines (AI Synthesis Tracker, Keynote Narrative Scout) run in
 * Anthropic's sandbox with NO outbound HTTP — they can only see X through Google's
 * LAGGED web index (~hours-to-1-day). This script runs on Google's servers (which
 * DO have egress) and polls the X API v2 directly for a curated set of credible
 * handles, forwarding fresh matches to Telegram in near-real-time (~5 min).
 * It is the companion to telegram-relay.gs and reuses the same bot.
 *
 * ⚠ COST GATE (read this first): this REQUIRES a paid X API v2 Bearer Token.
 *   - Free tier read cap (~100 posts/mo) is far too small to poll — unusable.
 *   - Basic tier (~$200/mo as of 2026, ~15k post-reads/mo) is the realistic floor;
 *     keep HANDLES tight and the poll interval modest to stay under the cap.
 *   If you don't want to pay, the routines' free `site:x.com` sweep is the
 *   ~1-day fallback already in place — this script is ONLY for sub-hour alerts.
 *
 * SETUP (one-time, ~10 min):
 *   1. developer.x.com → create Project/App → Keys & Tokens → copy the Bearer Token.
 *   2. New Apps Script project (or add to your telegram-relay project).
 *   3. Paste this file; fill X_BEARER_TOKEN, BOT_TOKEN, CHAT_ID below.
 *   4. Edit HANDLES (and optionally KEYWORDS) to taste.
 *   5. Run `primeSinceId` ONCE (marks "now" as the baseline so the first real
 *      poll doesn't dump a backlog), then run `setup` (authorize external requests).
 *   6. `setup` installs a 5-minute polling trigger (xWatch).
 *
 * Keep tokens ONLY in your Apps Script project — never commit them (repo = placeholders).
 */

var X_BEARER_TOKEN = '__PASTE_X_BEARER_TOKEN__';
var BOT_TOKEN      = '__PASTE_BOT_TOKEN__';   // same bot as telegram-relay.gs
var CHAT_ID        = '__PASTE_CHAT_ID__';

// Curated handles to watch — deal-breakers, principals, credible analysts.
// Keep total query under ~512 chars (Basic tier limit) → ~15-18 handles max.
var HANDLES = [
  'AnthropicAI','OpenAI','Google','satyanadella','sundarpichai',
  'elonmusk','dylan522p','Jukanlosreve','firstadopter','steph_palazzolo',
  'amir','EpochAIResearch','natolambert','GavinSBaker','Techmeme'
];

// Optional client-side keyword gate (case-insensitive). Empty [] = forward ALL
// non-retweet/non-reply posts from HANDLES. Adding terms cuts noise but NOT
// read-quota (filtering happens after the API read). To save quota, push the
// keywords into the query instead (see buildQuery comment).
var KEYWORDS = [
  'IPO','S-1','raise','raises','billion','capex','backlog','HBM','CoWoS',
  'Rubin','Vera','inference','token','data center','datacenter','funding','valuation','GW'
];

var MAX_RESULTS        = 25;     // posts per poll (counts toward monthly read cap)
var POLL_MINUTES       = 5;      // 5 min ≈ near-real-time; lower = more quota burn
var MAX_TELEGRAM_CHARS = 3500;
var X_API = 'https://api.x.com/2/tweets/search/recent';   // api.twitter.com also works

function buildQuery() {
  // Server-side query = handles only (short, fits Basic's 512-char cap).
  // To save read-quota, you CAN append a keyword group, e.g.:
  //   ... + ' (IPO OR "S-1" OR raises OR billion OR HBM OR Rubin)'
  // but watch the 512-char limit on Basic (1024 on Pro).
  var fromClause = HANDLES.map(function (h) { return 'from:' + h; }).join(' OR ');
  return '(' + fromClause + ') -is:retweet -is:reply lang:en';
}

function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'xWatch') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('xWatch').timeBased().everyMinutes(POLL_MINUTES).create();
  Logger.log('Trigger installed: xWatch every ' + POLL_MINUTES + ' min.');
}

// Run ONCE before setup() so the first poll uses "now" as the floor (no backlog dump).
function primeSinceId() {
  var resp = xFetch(X_API + '?query=' + encodeURIComponent(buildQuery()) + '&max_results=10');
  if (resp.code === 200) {
    var d = JSON.parse(resp.body);
    if (d.meta && d.meta.newest_id) {
      PropertiesService.getScriptProperties().setProperty('x_since_id', d.meta.newest_id);
      Logger.log('Primed since_id = ' + d.meta.newest_id);
    } else { Logger.log('No recent posts to prime from; first poll may send a small batch.'); }
  } else { Logger.log('Prime failed ' + resp.code + ': ' + resp.body); }
}

function xWatch() {
  if (X_BEARER_TOKEN.indexOf('__') === 0 || BOT_TOKEN.indexOf('__') === 0 || CHAT_ID.indexOf('__') === 0) {
    Logger.log('Fill X_BEARER_TOKEN, BOT_TOKEN, CHAT_ID first.'); return;
  }
  var props = PropertiesService.getScriptProperties();
  var sinceId = props.getProperty('x_since_id') || '';

  var url = X_API
    + '?query=' + encodeURIComponent(buildQuery())
    + '&max_results=' + MAX_RESULTS
    + '&tweet.fields=created_at,author_id'
    + '&expansions=author_id&user.fields=username'
    + (sinceId ? '&since_id=' + sinceId : '');

  var resp = xFetch(url);
  if (resp.code === 429) { Logger.log('Rate-limited (429) — back off / widen POLL_MINUTES.'); return; }
  if (resp.code !== 200)  { Logger.log('X API error ' + resp.code + ': ' + resp.body); return; }

  var data = JSON.parse(resp.body);
  if (!data.data || !data.data.length) { Logger.log('No new posts.'); return; }

  var users = {};
  ((data.includes && data.includes.users) || []).forEach(function (u) { users[u.id] = u.username; });

  var sent = 0;
  data.data.slice().reverse().forEach(function (tw) {            // oldest→newest = chronological in TG
    var text = tw.text || '';
    if (KEYWORDS.length && !matchesKeyword(text)) return;
    var user = users[tw.author_id] || 'i';
    var msg = '🐦 @' + user + '\n' + text + '\nhttps://x.com/' + user + '/status/' + tw.id;
    if (msg.length > MAX_TELEGRAM_CHARS) msg = msg.substring(0, MAX_TELEGRAM_CHARS) + '…';
    sendTelegram(msg);
    sent++;
  });

  if (data.meta && data.meta.newest_id) props.setProperty('x_since_id', data.meta.newest_id);
  Logger.log('Polled; forwarded ' + sent + ' of ' + data.data.length + ' new post(s).');
}

function matchesKeyword(text) {
  var t = text.toLowerCase();
  for (var i = 0; i < KEYWORDS.length; i++) if (t.indexOf(KEYWORDS[i].toLowerCase()) !== -1) return true;
  return false;
}

function xFetch(url) {
  var r = UrlFetchApp.fetch(url, { method: 'get', muteHttpExceptions: true,
    headers: { Authorization: 'Bearer ' + X_BEARER_TOKEN } });
  return { code: r.getResponseCode(), body: r.getContentText() };
}

function sendTelegram(text) {
  UrlFetchApp.fetch('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage', {
    method: 'post', muteHttpExceptions: true,
    payload: { chat_id: CHAT_ID, text: text, disable_web_page_preview: 'true' } });
}
