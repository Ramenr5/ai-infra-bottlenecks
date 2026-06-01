# Narratives

Generative narrative-building outputs. **Distinct from `wiki/`**: wiki pages stay grounded (claims trace to `raw/` sources); narratives here are allowed to make **labeled inferential leaps** — the analyst's read-throughs, second-order effects, and analogies that aren't spelled out in any source.

The protocol lives in [CLAUDE.md → "Build a narrative"](../CLAUDE.md). Invoke with: **"build a narrative on {topic}"**.

## The tagging contract

Every connection in a narrative is tagged so you can tell grounded links from inference:

- **`[SOURCED: <page / raw source>, STRONG|MODERATE|WEAK]`** — stated in or directly supported by a source.
  - **STRONG** = 3+ independent sources, or a primary (filing / transcript / company guidance)
  - **MODERATE** = 2 sources
  - **WEAK** = 1 source
  - Primary sources outweigh commentary.
- **`[INFERRED: <one-line reasoning>]`** — a leap not in any source. When unsure, it's `[INFERRED]`, never `[SOURCED]`.

A thesis whose load-bearing links are `[INFERRED]` is a **hypothesis to test, not a grounded call** — and each narrative says so in its confidence line (the sourced-vs-inferred mix).

## File convention

`narratives/{YYYY-MM-DD} {topic}.md` — each file ends with the list of wiki/raw sources it drew on.

## Output structure (per narrative)

1. Forward thesis (2-4 sentences)
2. Connection chain — each link tagged `[SOURCED: …]` or `[INFERRED: …]`
3. What would have to be true for it to play out
4. Inferred-link risks + contradictions (the honest section)
5. Overall confidence + sourced-vs-inferred mix
6. Source list

## Index

- [2026-06-01 CRWD + NOW](2026-06-01%20CRWD%20%2B%20NOW.md) — agentic-enterprise tailwind (CrowdStrike securing agents, ServiceNow orchestrating them) vs. the value-capture-to-labs risk. **Hypothesis** (forward backbone is 3 inferred links + a sourced contradiction).
