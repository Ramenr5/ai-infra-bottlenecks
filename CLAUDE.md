# AI Learn — Infrastructure Bottleneck Wiki

This Obsidian vault is an LLM-maintained research wiki on **AI infrastructure bottlenecks and capital flows**: where supply will struggle to meet demand as the AI buildout scales, and where the money is flowing to fund that buildout.

**You (the LLM) own and maintain the wiki. The user curates sources and asks questions.** The user never (or rarely) writes wiki pages directly — you do the summarizing, cross-referencing, filing, and bookkeeping.

## Research lens

Every source should be read through this lens:

1. **What's the supply curve?** Who makes the thing, how fast can capacity ramp, what are the lead times, what's the binding constraint (permits, capex, skilled labor, raw materials, IP)?
2. **What's the demand curve?** Who's buying, how fast is demand growing, what does it look like at AGI-scale buildout vs. today?
3. **Where's the gap?** Where do supply and demand diverge most? How severe, how persistent?
4. **Where's the money flowing?** Who's writing the checks (hyperscalers, sovereigns, project finance), to whom, on what schedule?
5. **Who benefits?** Which companies / asset owners / geographies capture the rents from being on the supply-constrained side?

When you summarize a source, lead with takeaways framed in these terms — not generic "the article discusses X".

## Three layers

1. **`raw/`** — immutable source documents. **Never edit these.**
   - `raw/articles/` — web clippings (Obsidian Web Clipper output; reconfigure Clipper to drop here)
   - `raw/papers/` — PDFs, analyst reports, earnings transcripts
   - `raw/assets/` — downloaded images, charts
2. **`wiki/`** — your knowledge base. You own this entirely.
   - `wiki/sources/` — one summary page per ingested source
   - `wiki/companies/` — firms in the supply chain (suppliers, hyperscalers, utilities, EPCs, financiers)
   - `wiki/assets/` — physical infrastructure (specific datacenters, power plants, foundries, fabs, mines)
   - `wiki/bottlenecks/` — specific supply/demand constraints (transformer lead times, HBM allocation, water permits, etc.)
   - `wiki/layers/` — synthesis pages for each infrastructure layer (Power, Compute, Datacenter physical, Capital)
   - `wiki/geographies/` — grid regions, countries, states with concentration (ERCOT, Northern Virginia, Taiwan, KSA)
   - `wiki/syntheses/` — cross-cutting thesis pages with explicit views, confidence levels, and leading indicators (e.g. "Capex trajectory thesis"). These are the **opinionated** pages — they take a stance backed by the source-anchored evidence.
3. **`CLAUDE.md`** (this file) — schema and conventions. Co-evolves with the user; propose edits when limiting.

Plus two navigation files at the vault root:
- `index.md` — content catalog of every wiki page, with the research thesis at the top
- `log.md` — chronological event log

## Page conventions

Every wiki page starts with YAML frontmatter. Fields beyond the base set let pages be filtered/grouped semantically (greppable now; Dataview-ready later):

```yaml
---
type: source | company | asset | bottleneck | layer | geography | synthesis
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: ["[[Source A]]", "[[Source B]]"]   # which sources this page draws from (omit for source pages themselves)
tags: [tag1, tag2]
# type-specific fields below
---
```

Type-specific frontmatter:

- **company**: `ticker` (if public, else omit), `layer` (which infra layer they're in: power | compute | datacenter | capital | multi), `role` (supplier | hyperscaler | utility | epc | financier | foundry | etc.)
- **asset**: `kind` (datacenter | power-plant | foundry | fab | mine | other), `location` (city/region), `operator` (link to company), `status` (announced | construction | operating)
- **bottleneck**: `layer`, `severity` (acute | moderate | watch), `mechanism` (lead-time | permit | raw-material | labor | capacity | ip)
- **layer**: just the base fields
- **geography**: `kind` (grid-region | country | state | metro)
- **synthesis**: just the base fields. Body should include: the view, the evidence (citing wiki pages), counterarguments, the crux (what would change the view), leading indicators to watch, tradable read, and a confidence + aging section so the page can be re-evaluated as new sources arrive.

Body:
- Use Obsidian wikilinks liberally: `[[NVIDIA]]`, `[[Transformer lead times]]`. `[[X]]` to a page that doesn't exist is a marker, not an error.
- Cite when stating a claim with `([[Source name]])`. Numerical claims should have a source.
- Keep pages short and dense. Aim for ~30 seconds to read; split when over ~300 lines.
- For bottlenecks and companies, lead with a one-line definition, then key numbers, then connections.
- Flag contradictions with an Obsidian callout: `> [!warning] Conflicts with [[Other Source]]`.
- For numbers that age fast (capacity, lead times, prices), include the date the figure was stated: `~110-week lead time as of Q3 2025 ([[Source]])`.

### Page filenames
Use **display-title filenames** (with spaces, capitals, parentheses) so Obsidian wikilinks resolve without aliases. Avoid Windows-forbidden chars (`< > : " / \ | ? *`); `&`, `(`, `)`, spaces are fine.
- Sources: `<Short Title> (<Year>).md` — e.g. `Bloomberg Power Capex Report (2025).md`
- Companies: `<Canonical Name>.md` — e.g. `NVIDIA.md`, `Vertiv Holdings.md`. If ticker disambiguates, allow `<Name> (<Ticker>).md`.
- Assets: `<Asset Name>.md` — e.g. `TSMC Fab 18.md`, `Stargate Abilene.md`
- Bottlenecks: `<Bottleneck Name>.md` — e.g. `Transformer lead times.md`, `CoWoS packaging capacity.md`
- Layers: `<Layer Name>.md` — e.g. `Power & energy.md`
- Geographies: `<Place>.md` — e.g. `ERCOT.md`, `Northern Virginia.md`

Each page's H1 should match its filename.

## Workflows

### Ingest (one source at a time, supervised)

When the user points you at a new source (a file in `raw/`, a URL, or pasted text):

1. **Read it end-to-end.** For PDFs, check page count; chunk if large. For URLs not in `raw/`, fetch and save a markdown copy to `raw/articles/<title>.md` first.
2. **Discuss takeaways through the research lens** (supply / demand / gap / money / beneficiaries). Summarize 3–5 key points in chat. Numbers, lead times, dollar amounts, and counterparties go first — generic narrative is secondary. Ask what to emphasize.
3. **Once the user confirms, in a single pass:**
   - Create `wiki/sources/<slug>.md` — full citation, the takeaways, your notes, key extracted numbers.
   - Identify every company, asset, bottleneck, and geography the source touches.
   - For each: create the page if missing; otherwise update (extend `sources`, fold in new facts/numbers, flag contradictions with prior claims).
   - Update relevant `wiki/layers/` synthesis pages.
   - Update `index.md`.
   - Append a `log.md` entry.
4. **Report what changed** — short list of pages created/updated.

### Query

1. Read `index.md` first to find candidate pages.
2. Read relevant wiki pages. Drill into `raw/` only to verify specific claims.
3. Answer with citations to wiki pages (which cite raw sources).
4. **After answering, ask whether the answer is worth filing** — as a new bottleneck/company/layer page or an update. Good explorations should compound into the wiki, not vanish into chat.

### Stress-test (thesis check, on a new claim or theory)

When a new claim, theory, or data point emerges ("X said Y", "this report claims Z"), adjudicate it via the rubric in [[Thesis stress-tests]] before letting it move any thesis:
1. **Capture** the precise assertion, source tier, and the source's incentives.
2. **Decompose** into 2-5 load-bearing premises.
3. **Confront** each premise with the evidence base — supports / contradicts / silent, citing pages (the "lint").
4. **Score feasibility** (source credibility, internal consistency, evidence fit, plausibility, falsifiability) → Plausible / Contested / Unlikely / Refuted + confidence. Steelman AND attempt to refute; separate a valid *mechanism* from an overreaching *conclusion*.
5. **Thesis impact**: support / challenge / break which pages; does it move the regime read?
6. **Verdict + falsifier**: the specific watchable evidence that would confirm/kill it, tied to a leading indicator.
7. **Log** a dated row in [[Thesis stress-tests]]; add a `> [!warning]` callout to any thesis it materially challenges; propose (never auto-apply) framing-page edits.

The daily Market Regime Monitor runs a lightweight version of this lint automatically on emerging claims and drafts it for local completion.

### Lint (on request)

Health check looks for:
- Stale numbers (lead times / capex / capacity figures older than ~6 months without re-verification)
- Contradictions between pages
- Orphan pages (no inbound wikilinks)
- Bottlenecks lacking severity ratings or recent updates
- Companies without `layer` or `role` frontmatter
- Geographic concentrations or supply chokepoints implied across pages but not surfaced as their own page
- Gaps the user might want to fill — suggest next sources or questions

Report findings; ask before applying fixes beyond trivial cleanup.

## `index.md` format

Lead with the research thesis paragraph (1–3 sentences) so any future session is grounded immediately. Then grouped sections in this order: Layers, Bottlenecks, Geographies, Companies, Assets, Sources. One line per page:

```
- [[Page Name]] — one-line description (severity: acute | layer: power | ticker: ETN)
```

Frontmatter-derived tags in parens help scanning.

## `log.md` format

Append-only. Each entry starts with a consistent prefix:

```
## [YYYY-MM-DD] {ingest|query|lint|schema} | <short title>
- created: [[Page A]], [[Page B]]
- updated: [[Page C]], [[Page D]]
- key numbers: <pull out the headline figures from this source>
```

Greppable: `grep "^## \[" log.md | tail -10`.

## Defaults & guardrails

- Always use absolute dates (`2026-05-24`), never "today" or "yesterday".
- Numbers that change quickly (lead times, capex, capacity, prices) get an "as of" date inline.
- Never modify files in `raw/`.
- Prefer updating an existing page over creating a near-duplicate.
- When a fact in this domain is partisan or contested (e.g. "natural gas vs nuclear is the answer to AI power"), present both sides with sources rather than picking.
- When the schema seems wrong or limiting for a real situation, raise it with the user before working around it.
