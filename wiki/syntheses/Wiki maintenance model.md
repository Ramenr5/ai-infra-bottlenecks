---
type: synthesis
created: 2026-05-24
updated: 2026-05-24
sources: ["[[CLAUDE.md]]"]
tags: [meta, automation, operating-model]
---

# Wiki maintenance model

How this wiki is maintained, what an LLM is allowed to write autonomously, and what requires human judgment. Lives as a synthesis because the model **is** part of the thesis machinery — it determines what shows up here and what doesn't.

## Source of truth

The local Obsidian vault at `c:\Users\Jaden\OneDrive\Desktop\AI Learn` is the source of truth. The git remote (private GitHub) exists **only** to enable cloud-based automation — it is not a publication or backup target. Authoritative reads happen in Obsidian; the remote is round-tripped via `git pull` / `git push`.

This direction matters: if the routine commits a bad page, the fix is to edit locally and force-push, not to debug in GitHub.

## Page-type permission matrix

| Type | Folder | Who may write | Why |
| --- | --- | --- | --- |
| **source** | `wiki/sources/` | LLM (autonomous OK) | Mechanical extraction from a primary source. Schema is tight. Errors are recoverable — worst case is a duplicate or weak extract. |
| **raw extract** | `raw/articles/` | LLM (autonomous OK) | Verbatim quote dump. No interpretation. |
| **company** | `wiki/companies/` | Human-led | Requires framing: where in the value chain, what's the asymmetric exposure, what conflicts with consensus. Routine flags for review only. |
| **layer** | `wiki/layers/` | Human-led | Requires synthesis across sources and judgment on what belongs in the canonical narrative. |
| **bottleneck** | `wiki/bottlenecks/` | Human-led | Severity classification (`acute` / `structural` / `watch`) is opinionated. |
| **geography** | `wiki/geographies/` | Human-led | Similar — narrative framing. |
| **synthesis** | `wiki/syntheses/` | Human-led | The whole point of these is opinionated stitching across the wiki. LLM may draft on request, never autonomously. |
| **index.md / log.md** | root | LLM may append source entries; humans handle structural edits | Append-only for the routine; restructuring requires intent. |

## What the weekly routine does

Per the scheduled remote agent (Sundays 22:00 UTC = 8 AM Brisbane Monday):

1. Clones the GitHub repo (fresh checkout each run)
2. Reads `wiki/_meta/ingested-sources.md` to know what's already in
3. Fetches the SemiAnalysis archive, identifies new posts
4. For each new post (capped at 3 per run):
   - WebFetches the article
   - Writes a `raw/articles/...` extract
   - Writes a `wiki/sources/SemiAnalysis - ... .md` page
   - Appends to `wiki/_meta/ingested-sources.md`
5. Appends a "pending review" entry to `wiki/_meta/weekly-digest.md` listing what was added and which existing pages **might** need human review based on the new data
6. Appends a `[YYYY-MM-DD] AUTOMATED` entry to `log.md`
7. Commits and pushes

Then locally: `git pull`, open `weekly-digest.md`, decide what to integrate into layer/company/synthesis pages by hand.

## Hard constraints on the routine

- **Never edits** company, layer, bottleneck, geography, or synthesis pages
- **Caps at 3 articles per run** to bound blast radius (a bad week's worth is recoverable; runaway is not)
- **Skips paywalled articles** with a `paywalled-skipped` marker so they aren't re-checked weekly
- **No `index.md` structural changes** — only appends new sources to the Sources section
- **No deletes** — only writes and appends

## Why not full automation

Because the **value of this wiki is the framing, not the content**. Anyone can scrape SemiAnalysis. The differentiated layer is the bottleneck severity calls, the picks-and-shovels framing, the contradictions flagged in callouts. That layer is what the user is here to do, and what they want preserved as their own intellectual output. Routine handles the lower-leverage mechanical part so attention budget goes to synthesis.

The 3-article cap is the load-bearing constraint: it forces the human to review weekly rather than letting drift accumulate.

## When to expand or retire the routine

Expand when:
- A new high-signal newsletter source becomes a regular read (e.g., Epoch, additional SemiAnalysis-tier publications)
- The 3-article cap proves too tight for a publication's cadence

Retire when:
- Source quality degrades and false positives crowd the digest
- A run produces a bad ingest the human didn't catch before relying on it (the routine has burned trust)

## Related

- [[CLAUDE.md]] — the operating doc for the wiki itself
- [[Bottleneck ranking (May 2026)]] — example of the human-judgment layer the routine never touches
