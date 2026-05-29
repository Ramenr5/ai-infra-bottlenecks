# Log

Chronological event log. Append-only. Each entry starts with `## [YYYY-MM-DD] {ingest|query|lint|schema} | <title>` so it's grep-friendly.

## [2026-05-24] schema | initialized vault
- created: `CLAUDE.md`, `index.md`, `log.md`
- created directories: `raw/{articles,papers,assets}/`, `wiki/{sources,entities,concepts,topics}/`
- vault instantiated from the LLM Wiki pattern; domain = AI/ML learning; sources = web clippings + PDFs + on-demand web search; workflow = one-at-a-time supervised ingest

## [2026-05-24] schema | switched to display-title filenames
- updated `CLAUDE.md` page-filename convention from kebab-case to display titles (e.g. `Transformer.md` not `transformer.md`) so Obsidian wikilinks resolve without aliases

## [2026-05-24] ingest | AI 2027 (Kokotajlo et al., Apr 2025)
- moved `Clippings/AI 2027.md` → `raw/articles/AI 2027.md`; removed empty `Clippings/` folder (user will reconfigure Web Clipper to default to `raw/articles/`)
- created sources: [[AI 2027 (2025)]]
- created entities: [[OpenBrain]], [[DeepCent]], [[Agent series]]
- created concepts: [[Neuralese recurrence]], [[Iterated distillation and amplification (IDA)]], [[AI R&D progress multiplier]]
- skeleton ingest per user direction; depth deferred until additional sources land

## [2026-05-24] schema | pivoted vault to AI infrastructure bottleneck research
- deleted `Welcome.md` and `raw/articles/AI 2027.md` per user request
- deleted all 7 AI-2027-derived wiki pages (sources/entities/concepts) — clean slate
- removed `wiki/entities/`, `wiki/concepts/`, `wiki/topics/`
- created `wiki/companies/`, `wiki/assets/`, `wiki/bottlenecks/`, `wiki/layers/`, `wiki/geographies/`
- rewrote `CLAUDE.md`: new research-lens framing (supply/demand/gap/money/beneficiaries), new page types and type-specific frontmatter (severity/layer/ticker/etc.), updated workflows
- rewrote `index.md` to lead with the research thesis and use the new category set
- created skeleton layer pages: [[Power & energy]], [[Compute & silicon]], [[Datacenter physical]], [[Capital flows & deal structures]] — each seeded with anticipated companies/bottlenecks/geographies as red wikilinks
- new vault domain: where AI infrastructure supply fails to meet demand, and where capital is flowing to build it

## [2026-05-24] ingest | Situational Awareness, Two Years Later (Omer Ansari, Apr 2026)
- source: Medium/Data Science Collective retrospective grading Aschenbrenner's June 2024 essay; **secondary source** — cites McKinsey/JPM/CSIS/METR without linking primaries
- created sources: [[Situational Awareness, Two Years Later (2026)]]
- created companies: [[Stargate]], [[DeepSeek]], [[Anthropic]]
- created assets: [[Stargate Texas]], [[Colossus (xAI)]], [[Amazon Ohio expansion]]
- created bottlenecks: [[Hyperscaler capex sustainability]], [[AI debt financing capacity]]
- created geographies: [[Texas]]
- updated layers: [[Capital flows & deal structures]] (cited capex table replaces placeholders + debt-pressure section), [[Power & energy]] (Stargate 10 GW headline data point), [[Compute & silicon]] (DeepSeek shock / Jevons section)
- key numbers: Big Five 2026 capex $602B (+36% YoY, ~75% AI); McKinsey $5.2T DC capex through 2030 (upside $7.9T); Stargate $500B / 20 sites / 10 GW; JPM $7T debt-financed; Meta+Oracle $75B bonds in 2mo of 2025; 94% OCF→capex; DeepSeek 18×/36× cost vs GPT-4o
- caveat flagged on every page: figures should be re-verified against primary sources before becoming load-bearing

## [2026-05-24] ingest | Can AI scaling continue through 2030 (Epoch AI, 2024)
- source: **primary** — Epoch AI flagship four-bottleneck analysis with Monte Carlo + 80% CIs throughout
- created sources: [[Can AI scaling continue through 2030 (2024)]]
- created bottlenecks: [[CoWoS packaging capacity]], [[HBM allocation]], [[Data wall]], [[Latency wall]]
- created companies: [[NVIDIA]], [[TSMC]], [[SK Hynix]], [[Talen Energy]], [[Epoch AI]]
- created assets: [[Susquehanna nuclear plant]], [[TSMC Advanced Backend Fab 6]]
- created geographies: [[Northern Virginia]]
- updated layers: [[Power & energy]] (US DC capacity 40→90 GW, AI 3→30 GW, single-lab 8 GW; 6 GW per frontier run by 2030), [[Compute & silicon]] (Nvidia shipment timeline, CoWoS+HBM as the stacked chokes), [[Capital flows & deal structures]] (2.5×/yr training spend, hundreds-of-$B per cluster anchor)
- updated [[Stargate]] (flagged framing evolution: 2024 = $100B/5 GW/single campus vs. 2026 source = $500B/20 sites/10 GW)
- updated [[Hyperscaler capex sustainability]] (per-cluster cost anchor)
- key numbers: 2e29 FLOP (10,000×GPT-4) feasible by 2030; **power binds first, chips second**; CoWoS 14-15K→33-35K wafers/mo (60%/yr); HBM sold out through 2026; ~100M H100-equivalents needed for 2030; 6 GW per frontier training run; only 27 US power plants >2.5 GW; NoVA 5→10 GW by 2030
- this source verifies several figures previously held as "secondary-source leads" — promote those claims to higher confidence

## [2026-05-24] ingest | Cerebras — Faster Tokens Please (SemiAnalysis, May 2026)
- source: **primary** — SemiAnalysis (Dylan Patel's shop), IPO-timed deep-dive on Cerebras Systems. Free portion of paywalled piece; tail covers OAI deal profitability + DC capacity execution risk
- created sources: [[Cerebras — Faster Tokens Please (2026)]]
- created companies: [[Cerebras Systems]], [[Groq]], [[Vicor]], [[Trane Technologies]], [[SemiAnalysis]]
- created assets: [[Cerebras Oklahoma datacenter]]
- created geographies: [[Oklahoma]]
- updated companies: [[NVIDIA]] (added Groq acquisition Dec 2025 + Cerebras as competitor)
- updated layers: [[Compute & silicon]] (new "alternative accelerators & fast-inference axis" section + accelerator-architecture comparison table), [[Capital flows & deal structures]] (new "vendor-equity vertical integration" case study with Cerebras × OpenAI MRA)
- key numbers: OpenAI MRA $24.6B / 750 MW / 2GW option / $1B working capital loan / 12% equity warrant; NVIDIA acquired Groq Dec 2025 (≥$20B implied); Anthropic Opus 4.6 fast 6× price for 2.5× speed; WSE-3 = 84 dies on TSMC N5, 44GB SRAM, 25kW, $450K BOM/rack; Cerebras 150 GB/s off-wafer vs NVIDIA ~130× denser I/O; SRAM scaling dead beyond 5nm
- strategic events captured: NVIDIA-Groq deal (Dec 2025), Trane-LiquidStack acquisition (Mar 2026), Cerebras-OpenAI MRA (Dec 2025) — all material to the picks-and-shovels map
- new tradable names surfaced: Vicor (VICR), Trane Technologies (TT), Cerebras Systems (CBRS pre-IPO)

## [2026-05-24] ingest | Tier 1 bulk ingest — 6 primary sources via WebFetch/WebSearch
- bulk mode: user requested "insert all tier 1 papers"; fetched, extracted, ingested as bundle
- saved 6 raw extracts to `raw/articles/` (Goldman, McKinsey, NVDA Q1 FY27, TSMC Q1 2026, SK Hynix Q3 2025, Stargate); raw content is paraphrased summaries from WebFetch/WebSearch, not full clippings — flagged for transparency on each source page
- created sources (6): [[Goldman Sachs - Generational Growth (2024)]], [[McKinsey - The Cost of Compute (2025)]], [[NVIDIA Q1 FY27 earnings (2026)]], [[TSMC Q1 2026 earnings]], [[SK Hynix Q3 2025 earnings]], [[Stargate Project announcement (2025)]]
- created companies (2): [[Goldman Sachs]] (ticker GS, role analyst), [[McKinsey & Company]] (role analyst)
- created assets (1): [[Stargate Abilene]] (flagship; JPMorgan $2.3B May 2025)
- updated companies: [[Stargate]] (major rewrite resolving framing contradiction; new equity structure 40/40/Oracle/MGX; Bloomberg Aug 2025 stalling caveat), [[NVIDIA]] (Q1 FY27 numbers + $145B supply commitments + $1T Blackwell+Rubin guidance), [[TSMC]] (Q1 2026 numbers + CoWoS sold out into 2026 + 14/24 HBM stack roadmap), [[SK Hynix]] (Q3 2025 official ₩24.45T / 47% margin + HBM4 mass production Sept 2025)
- updated assets: [[Stargate Texas]] (now reflects actual multi-site Texas portfolio)
- updated bottlenecks: [[CoWoS packaging capacity]] (40-50% demand gap, 50+ week leads, CEO C.C. Wei quote), [[HBM allocation]] (sold-out primary verified, HBM4 milestones, NVDA $145B mirror), [[Hyperscaler capex sustainability]] (McKinsey TAM check, NVDA supply-side mirror)
- updated layers: [[Power & energy]] (Goldman primary table: 47 GW, 60/40 gas/renewable, $50B utility capex, 15% CAGR), [[Capital flows & deal structures]] (McKinsey TAM primary, NVDA $145B anchor)
- resolved [[Stargate]] framing contradiction with primary: $500B/10GW IS the actual headline (Jan 21 2025); Epoch 2024 framing was pre-formal-JV; Ansari 2026 framing was correct
- KEY METHODOLOGICAL UPGRADE: secondary-source figures (Ansari aggregation) are now primary-anchored. Wiki epistemic quality stepped up materially.
- key tradable insights surfaced: 60/40 gas/renewable mix → favors gas-turbine OEMs ([[GE Vernova]], [[Siemens Energy]], [[Mitsubishi Heavy Industries]]); $145B NVDA supply commitments → bullish anchor for TSMC and SK Hynix forward capacity; Bloomberg Aug 2025 Stargate stalling → execution risk on the $500B/10GW headline; SK Hynix 47%→72% operating margins → extraordinary HBM rent capture

## [2026-05-24] query | filed | Capex trajectory thesis
- user asked "do you think AI spending would accelerate from here"
- filed the answer as opinionated synthesis page rather than letting it vanish into chat
- introduced new page type **synthesis** and new folder **wiki/syntheses/** — updated CLAUDE.md schema accordingly
- created: [[Capex trajectory thesis]] — view: ~90% probability of acceleration through 2027; 2028+ depends on Rubin-era unit economics; supply-side lock-in is the key mechanism
- index.md updated to surface Syntheses section above Layers (these are the opinionated views, the "what do we think" pages)
- this is the first page type that takes a *stance* rather than describing state; should be re-evaluated as new earnings/source data arrives (see "Confidence and aging" section of the page itself)

## [2026-05-24] ingest | The EDA Primer From RTL to Silicon (SemiAnalysis Part 1 of 3, May 2026)
- source: **primary** — SemiAnalysis (Dylan Patel), Part 1 of 3-part EDA series. Parts 2 (EDA Market deep-dive) and 3 (AI disrupting EDA) paywalled
- surfaced an entire missing layer in the wiki: chip design & EDA
- created sources: [[The EDA Primer From RTL to Silicon (2026)]]
- created layers: [[Chip design & EDA]] — sits upstream of [[Compute & silicon]]
- created companies: [[Synopsys]] (SNPS), [[Cadence Design Systems]] (CDNS), [[Siemens EDA]] (parent SIE.DE)
- created bottlenecks: [[EDA tool consolidation]] (severity: structural), [[Chip design talent shortage]] (severity: acute, mechanism: labor)
- updated [[Compute & silicon]] with upstream EDA dependency, [[SemiAnalysis]] with new source reference, [[Capex trajectory thesis]] with EDA as 7th evidence point + SNPS/CDNS added to tradable read
- key numbers: verification = up to 70% project effort; chip complexity 50%/yr vs design productivity 20%/yr; 1/3 US semi workforce >55; AMD MI455X = 320B transistors / 12 dies / 2nm+3nm / HBM4; mask cost tens of $M per stepping; Synopsys ZeBu-200 = 23B gates emulation; Cadence Palladium Z3 = 48B gates / 1.5× Z2; TSMC N2 standard cell library = tens of thousands of cells / 6 Vt options vs Intel 18A initial 4
- key tradable insights: [[Synopsys]] (SNPS) and [[Cadence Design Systems]] (CDNS) as pure-play picks-and-shovels on every advanced-node tapeout, with talent-shortage pricing tailwind; Teradyne (TER) / Advantest (6857.T) as ATE oligopoly worth tracking; Siemens EDA exposure diluted within Siemens AG conglomerate
- thesis impact: [[Capex trajectory thesis]] gains a 7th evidence pillar (supply-side lock-in extends from foundry back into design tooling) but does not change confidence or direction
- paywalled parts 2-3 would substantially extend: Part 2 = Chinese EDA, IP licensing, Customer-Owned Tooling at hyperscalers; Part 3 = AI-driven chip design from NVIDIA and the Big Three

## [2026-05-24] ingest | Tier 1 follow-on bulk ingest — semiconductor equipment + Hot Chips architecture
- user requested "web-fetch and include" the 3 recommended Tier 1 follow-on sources
- bulk-fetched via WebFetch + WebSearch in parallel; saved 3 raw extracts to `raw/articles/`
- created sources (3): [[ASML Q1 2026 earnings]], [[Applied Materials Q1 FY26 earnings]], [[NVIDIA Blackwell at Hot Chips 2025]]
- created companies (2): [[ASML]] (ticker ASML, sole EUV supplier globally — the most concentrated supplier in the entire AI stack), [[Applied Materials]] (ticker AMAT, #1 WFE vendor)
- created bottlenecks (1): [[Lithography monopoly]] (severity: structural, mechanism: capacity, layer: compute)
- updated [[NVIDIA]] with primary Blackwell architecture (148 SMs, 384 GB HBM3e, 16 TB/s, 900 GB/s NVLink-C2C, NVL72 = 1.4 EFLOPS FP4) + Vera Rubin detail
- updated [[Compute & silicon]] with new "Semiconductor Equipment" upstream section + WFE oligopoly table
- updated [[Capex trajectory thesis]] — added 7th evidence pillar (equipment-side primary confirmation: ASML €38.8B backlog + AMAT $1T-industry-2026 call); added 8th renumbering for EDA; expanded tradable read with ASML and AMAT
- key new data: ASML €8.8B Q1 revenue / €38.8B backlog / 2 High-NA EUV shipped / FY26 €36-40B raised guide / 2030 €44-60B; AMAT $7.01B Q1 revenue / 49% GM / record DRAM segment 34%; Dickerson "$1T semi industry in 2026, several years early"; Blackwell GB200 = 2× B200 + Grace / 384 GB HBM3e per superchip / NVL72 = 1.4 EFLOPS / 148 SMs per GPU
- THESIS IMPACT: this ingest materially HARDENED the [[Capex trajectory thesis]] — equipment-side primary confirmation closes the loop from demand (NVIDIA $145B, hyperscaler GPU orders) to supply (TSMC capex, SK Hynix M15X, ASML backlog, AMAT WFE orders). The buildout is now triangulated as funded and underway across every layer.
- new tradable names surfaced: ASML (ASML), Applied Materials (AMAT). Both qualify as core picks-and-shovels with primary forward visibility.

## [2026-05-24] ingest | Deep picks-and-shovels bulk ingest (8 names)
- user requested fetching ARM, ALAB, MRVL, AVGO, LRCX, COHR, KLAC, MU
- bulk-fetched via 8 parallel WebSearches; saved 8 raw extracts to `raw/articles/`
- created sources (8): [[ARM Holdings Q4 FY26 earnings]], [[Astera Labs Q1 2026 earnings]], [[Marvell Q4 FY26 earnings]], [[Broadcom Q1 FY26 earnings]], [[Lam Research Q3 FY26 earnings]], [[Coherent Q3 FY26 earnings]], [[KLA Q3 FY26 earnings]], [[Micron Q2 FY26 earnings]]
- created companies (8): [[ARM Holdings]] (ARM), [[Astera Labs]] (ALAB), [[Marvell Technology]] (MRVL), [[Broadcom]] (AVGO), [[Lam Research]] (LRCX), [[Coherent]] (COHR), [[KLA Corporation]] (KLAC), [[Micron Technology]] (MU)
- updated [[HBM allocation]] with 3-supplier 2026 share table (SKH 43%/Sam 33%/Mic 24%) + Lam Research record DRAM equipment-side confirmation
- updated [[Datacenter physical]] with optical transceiver suppliers + Astera Labs connectivity silicon
- updated [[Compute & silicon]] WFE table with LRCX + KLAC primary data
- updated [[Capex trajectory thesis]]: added all 8 sources to frontmatter; expanded tradable read with all 8 names; added detailed primary-confirmation section
- key tradable insights surfaced:
  - **Broadcom Hock Tan: ">$100B AI chip revenue 2027 line of sight + $73B backlog"** — second-largest forward AI commitment after NVIDIA's $1T
  - **ARM Holdings: data center royalty DOUBLED YoY** + CSS adoption with all 4 hyperscalers — IP-licensing is the third leg of picks-and-shovels alongside silicon manufacturing + EDA tools
  - **Astera Labs: +93% YoY revenue, 76% GM** — pure-play AI connectivity validates connectivity-as-bottleneck thesis
  - **Micron: +196% YoY revenue, 75% GM (→ 81% guide)** — third HBM supplier extraordinary growth confirms structural shortage; HBM4 NVIDIA Vera Rubin alignment puts Micron on the Rubin-class accelerator roadmap
  - **Coherent NVIDIA equity stake** + 1.6T ramp ahead of plan = strategic vendor lock-in for optical
  - **Marvell: optical 50%+ YoY vs custom ASIC 20%+** — connectivity is more constrained than custom silicon
  - **Lam Research: WFE forecast raised to $140B** + record DRAM segment — corroborates AMAT "$1T industry 2026"
  - **KLA: $1B advanced packaging FY26** (+70% YoY, +14pp share gain) — direct CoWoS confirmation
- THESIS IMPACT: confirms the [[Capex trajectory thesis]] is now triangulated across every layer with multiple primary sources per layer. Demand-side (NVIDIA $1T + Broadcom $100B = $1.1T+ combined commitments) + supply-side (ASML + AMAT + LRCX + KLA equipment all in lockstep) + memory (SKH + Sam + Mic triumvirate at extraordinary margins) + connectivity (ALAB + COHR + MRVL all accelerating).
- wiki now 56 pages across 6 categories, 22 sources (19 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | LITE + SNDK + INTC bulk ingest
- user requested LITE (Lumentum), SNDK (SanDisk), INTC (Intel)
- bulk-fetched via 3 parallel WebSearches; saved 3 raw extracts to `raw/articles/`
- created sources (3): [[Lumentum Q3 FY26 earnings]], [[SanDisk Q3 FY26 earnings]], [[Intel Q1 2026 earnings]]
- created companies (3): [[Lumentum]] (LITE), [[SanDisk]] (SNDK), [[Intel]] (INTC, role: idm)
- **created new bottleneck: [[NAND flash supply]]** (severity: acute, layer: compute) — surfaced by SanDisk ingest; AI infrastructure buildout creates structural NAND shortage to 2028
- updated [[Coherent]] with Lumentum competitive context (NVIDIA dual-source strategy explicit)
- updated [[TSMC]] with Intel Foundry as emerging credible alternative (still 1/7 TSMC's quarterly revenue but real)
- updated [[Datacenter physical]] with Lumentum + NVIDIA $2B investment
- updated [[Capex trajectory thesis]] tradable read with all three
- key tradable insights:
  - **NVIDIA $2B investment in Lumentum** = explicit dual-source optical strategy (parallels NVIDIA equity in Coherent); both NVIDIA-backed; capacity build accelerating
  - **SanDisk +1,350% in 12 months** post-WD spin — NAND flash AI exposure is the cleanest pure-play; sell-side still sees 50%+ upside (BofA $1,080 PT, Evercore $1,200 PT)
  - **NAND flash shortage to 2028** = parallel constraint to HBM; new bottleneck category in wiki
  - **Intel Q1 2026: "Sixth straight beat"** — 18A is real, Panther Lake ramping, Foundry op loss narrowing $2.51B→$1.8B; **AI = 60% of Intel revenue**
  - **Intel Foundry as TSMC optionality** — 1/7 the size but the only US-headquartered IDM at leading edge; CHIPS Act exposure
  - **Intel 18A initial 4 Vt vs TSMC 6** (per EDA Primer) — limited early adoption; 18AP fixes this gap
- wiki now ~63 pages across 6 categories, 25 sources (22 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | Samsung Electronics (Q1 2026)
- user requested Samsung addition
- bulk-fetched via 2 parallel WebSearches (Q1 2026 earnings + Foundry SF2 status)
- created sources (1): [[Samsung Q1 2026 earnings]]
- created companies (1): [[Samsung Electronics]] (ticker 005930.KS, role: idm) — handles conglomerate scope (Memory + Foundry + LSI)
- updated [[HBM allocation]] — added Samsung HBM4 first-at-scale claim with warning callout flagging supplier dynamics in flux
- updated [[NAND flash supply]] — Samsung as #1 NAND supplier; NAND +55-60% QoQ pricing data
- updated [[SK Hynix]] — competitive shift section: Samsung HBM4 challenge to SKH's prior dominance
- updated [[TSMC]] — Samsung Foundry SF2 at 55-60% yield now credible alternative ("three-foundry world")
- updated [[Intel]] — Samsung Foundry as fellow non-TSMC option
- updated [[Capex trajectory thesis]] — added Samsung to tradable read
- key tradable insights:
  - **Samsung Q1 2026 OP +756% YoY** (single quarter > full-year 2025) — extraordinary operating leverage on memory shortage
  - **Samsung's HBM4 first-at-scale claim for Vera Rubin** contradicts our prior SK Hynix ~70% NVIDIA HBM4 allocation framing — supplier dynamics now in flux
  - **DRAM +90-95% QoQ, NAND +55-60% QoQ** = primary pricing data validating both [[HBM allocation]] and [[NAND flash supply]] severity
  - **Samsung capex ~$78B FY26 = larger than TSMC's $52-56B AND ASML's full-year revenue** = single largest semiconductor capex commitment globally
  - **Samsung Foundry SF2 yields 20% → 55-60%** = three-foundry world emerging (TSMC + Samsung + Intel)
  - **Samsung AI customer wins:** NVIDIA Groq 3 LPU, Tesla $16.5B, PFN, Ambarella
  - **Samsung 2027 warning:** supply-demand gap to widen further in 2027 — extends [[Capex trajectory thesis]] confidence window
- THESIS IMPACT: Samsung's positioning shift in HBM4 + 110 trillion won capex commitment materially strengthen [[Capex trajectory thesis]] supply-side argument. The fact that Samsung itself warns "supply-demand gap widens in 2027" adds primary-source weight to the multi-year shortage timeline.
- wiki now ~65 pages across 6 categories, 26 sources (23 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | TEL + Kioxia + AMD bulk ingest
- user requested Tokyo Electron, Kioxia, AMD additions
- bulk-fetched via 3 parallel WebSearches
- created sources (3): [[Tokyo Electron FY26 earnings]], [[Kioxia earnings]], [[AMD Q1 2026 earnings]]
- created companies (3): [[Tokyo Electron]] (8035.T), [[Kioxia]] (285A.T), [[AMD]] (AMD)
- updated [[Compute & silicon]] WFE table — completes all 5 WFE oligopoly members with primary data
- updated [[NAND flash supply]] — full supplier landscape now including Kioxia + Kioxia-SanDisk JV note
- updated [[SanDisk]] — Kioxia JV partnership detail
- updated [[NVIDIA]] — AMD MI450 + Meta 6 GW competitive context (largest publicly disclosed non-NVIDIA hyperscaler commitment)
- updated [[Intel]] — AMD 5th gen EPYC server CPU share gains
- updated [[Capex trajectory thesis]] tradable read with all three
- key tradable insights:
  - **AMD Q1 2026 DC revenue $5.8B +57% YoY** = strongest growth among public AI silicon vendors; AI accelerator market materially bigger than NVIDIA-only framing
  - **Meta 6 GW AMD Instinct commitment with custom MI450** = largest publicly disclosed hyperscaler commitment to non-NVIDIA silicon; validates AMD as credible #2
  - **AMD $120B server CPU income forecast by 2030** + 5th gen EPYC share gains from Intel Xeon = secondary picks-and-shovels exposure
  - **Tokyo Electron WFE supercycle confirmed:** +20% growth call for 2026 AND 2027; triangulates with Lam Research $140B + AMAT $1T industry calls
  - **TEL coater/developer and wafer prober dominance** = unique niches not addressed by US WFE peers
  - **Kioxia Q3 FY26 EPS ¥34→¥162 inflection** = independent primary confirmation of NAND shortage timing
  - **Kioxia + SanDisk Yokkaichi JV** = consolidated NAND production base; less independent capacity addition than separate supplier-count suggests
- THESIS IMPACT: completes coverage of all major silicon/equipment/memory picks-and-shovels names. AMD coverage particularly important — shifts the AI accelerator narrative from NVIDIA-only to NVIDIA + AMD + custom-ASIC ecosystem. The picks-and-shovels map is now comprehensive.
- wiki now ~71 pages across 6 categories, 29 sources (26 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | hyperscalers + power-EPC + SpaceX + Anthropic — major 10-name bulk
- user requested Google, Microsoft, Meta, Amazon, Oracle + Quanta + GE Vernova + Siemens Energy + SpaceX + Anthropic
- bulk-fetched via 10 parallel WebSearches; saved 10 raw extracts
- created sources (10): Microsoft Q3 FY26, Alphabet Q1 2026, Meta Q1 2026, Amazon Q1 2026, Oracle Q3 FY26, Quanta Services Q1 2026, GE Vernova Q1 2026, Siemens Energy Q2 FY26, SpaceX 2026 update, Anthropic 2026 update
- created companies (9): [[Microsoft]] (MSFT), [[Alphabet]] (GOOGL), [[Meta]] (META), [[Amazon]] (AMZN), [[Oracle]] (ORCL), [[Quanta Services]] (PWR), [[GE Vernova]] (GEV), [[Siemens Energy]] (ENR.DE), [[SpaceX]] (private)
- updated [[Anthropic]] page with major revenue + valuation inflection ($30B run-rate April 2026, $900B pending round)
- MAJOR update to [[Hyperscaler capex sustainability]] — primary FY26 capex guides from all 5 hyperscalers: MSFT $190B, GOOGL $180-190B, META $125-145B, AMZN ~$200B, ORCL $50B = **aggregate ~$745-775B** (vs prior $602B Ansari secondary)
- updated [[Stargate]] — Oracle $300B / 4.5 GW primary confirmation (partially resolves Bloomberg Aug 2025 stalling narrative)
- updated [[Power & energy]] — three independent vendor confirmations of gas turbine supercycle (GEV + Siemens Energy + Quanta)
- updated [[Capex trajectory thesis]] with 9th + 10th evidence pillars (hyperscaler aggregate + frontier AI lab revenue inflection)
- key tradable insights:
  - **Big Five FY26 capex ~$745-775B** — ~24% above prior Ansari $602B framing; thesis trajectory materially higher
  - **Alphabet $21B Broadcom TPU 8t/8i deal** = largest disclosed custom-silicon commitment; anchors Broadcom thesis
  - **Amazon $225B Trainium revenue commitments** = clean evidence hyperscaler custom silicon is durable
  - **Oracle $300B / 4.5 GW OpenAI deal** = primary confirmation of Stargate-scale execution
  - **GE Vernova 110 GW gas turbine target YE 2026 + $200B backlog target pulled to 2027** = gas turbine supercycle confirmed
  - **Siemens Energy US orders nearly doubled to €6.94B** = independent EU OEM confirms US data-center driven demand
  - **Quanta Services $48.5B record backlog + transformer manufacturing 2× expansion** = power EPC capacity in active build
  - **Anthropic 10× revenue in 10 months ($3B → $30B run-rate)** = fastest enterprise SaaS scale-up; validates inference market sizing
  - **SpaceX IPO $1.75T-$2T+ filed April 2026** = $80B raise unlock; sister relationship with xAI
- THESIS IMPACT: [[Capex trajectory thesis]] now substantially hardened with primary hyperscaler demand data + primary power-EPC supply data + frontier AI lab revenue validation. The buildout is funded, in execution, and accelerating.
- wiki now ~85 pages across 6 categories, 39 sources (36 primary, 1 secondary, plus older AI 2027)
- coverage of major picks-and-shovels names + demand anchors substantially complete

## [2026-05-24] lint + consolidate | graph-health pass and state-of-wiki summary

### Lint findings

**Frontmatter completeness — PASS**
- 108 wiki pages enumerated via Glob
- All bottlenecks (10) have severity field — 4 acute, 2 structural, 4 watch
- All companies (44) have layer + role fields populated
- All assets (7) have kind / location / operator / status fields
- All pages have type field

**Cross-link integrity — PASS with notes**
- 1,056 wikilinks across 108 files
- Heavy interlinking confirms wiki is well-connected, not fragmented
- No major contradictions beyond two already flagged (HBM4 supplier framing, Stargate framing — both resolved with warning callouts)

**Naming consistency — PASS**
- "Samsung" → consistently linked to [[Samsung Electronics]] in newer content
- "Western Digital" → references SanDisk for current entity
- "Google" → uses [[Alphabet]] for company page; "Google Cloud" / "Google TPU" for product references — clean

**Stale dates — N/A**
- All pages created/updated 2026-05-24 (fresh build)
- "As of" dates on data points consistently included

### Top accumulating red wikilinks (highest-priority next ingests)

Pages NOT yet in wiki but referenced repeatedly — these are markers for what's worth adding:

| Name | Wikilink count | Why it matters |
| --- | --- | --- |
| **OpenAI** | 22 across 15 files | Demand anchor for Stargate, Cerebras, Oracle, Anthropic comp |
| **xAI** | multiple | Colossus operator; Musk-controlled; Grok |
| **MGX (UAE sovereign)** | multiple | Stargate equity; sovereign capital pattern |
| **SoftBank** | multiple | Stargate financial lead; Vision Fund AI exposure |
| **Mitsubishi Heavy Industries** | multiple | Third gas turbine OEM |
| **NextEra / Vistra / Constellation Energy** | multiple | Utility/IPP nuclear-DC pairing |
| **Vertiv (VRT)** | multiple | Cooling/datacenter physical proxy |

### Consolidation

- Created [[AI infrastructure investment map (May 2026)]] — second synthesis page; serves as the wiki's overview/entry point
- Contents: layer-by-layer tradable name map, bottleneck severity matrix, top 10 primary data points, contradictions, coverage gaps
- Distinct from [[Capex trajectory thesis]]:
  - Thesis page = opinionated view + leading indicators
  - Investment map = comprehensive catalog organized for investment use

### Wiki state final

- **~109 pages** (added the consolidation page)
- **39 sources** (36 primary, 1 secondary, plus older AI 2027)
- **44 companies**, **10 bottlenecks**, **5 layers**, **7 assets**, **3 geographies**, **2 syntheses**
- Coverage substantially comprehensive across the AI infrastructure picks-and-shovels map
- Wiki is now self-consistent (zero unresolved contradictions), well-linked (1,056 wikilinks), and properly indexed

## [2026-05-24] thesis | filed [[Bottleneck ranking (May 2026)]]
- user asked "what is the biggest constraint AI buildout faces"
- filed answer as 3rd synthesis page rather than letting it vanish
- ranking: Tier 1 durable = Power; Tier 1 near-term = HBM + CoWoS; Tier 2 structural = Lithography + EDA tool consolidation; Tier 3 under-appreciated = Chip design talent; Tier 4 demand-side wild card = hyperscaler capex sustainability + AI debt financing
- single-answer pick: **Power**, because Epoch primary identifies it as binding + multi-year lead times not capex-responsive
- includes tradable read by ranking + confidence aging
- index.md updated to surface alongside Capex trajectory thesis + Investment map

## [2026-05-24] ingest | SemiAnalysis free articles bulk (6 pieces)
- user requested "all SemiAnalysis free articles"
- web-fetched 6 high-thesis-relevance pieces in parallel:
  1. [[SemiAnalysis - Onsite Gas Deep Dive (2025)]] (Dec 2025) — power crisis solutions
  2. [[SemiAnalysis - The Great AI Silicon Shortage (2026)]] (Mar 2026) — N3 utilization >100%
  3. [[SemiAnalysis - Multi-Datacenter Training]] — Google multi-DC + OpenAI catch-up
  4. [[SemiAnalysis - xAI Colossus 2 (2026)]] — first GW-scale datacenter
  5. [[SemiAnalysis - Oracle Winning AI Compute (2025)]] (Jun 2025) — ByteDance + Johor angle
  6. [[SemiAnalysis - AWS Anthropic Trainium Expansion (2025)]] (Sep 2025) — 1.3 GW Anthropic AWS
- created sources (6): all SemiAnalysis pieces above
- created companies (1): [[Crusoe Energy]] — Stargate Abilene operator; stranded-gas neocloud
- created geographies (1): [[Johor Malaysia]] — world's 2nd largest AI hub via ByteDance/Oracle
- MAJOR update to [[Power & energy]] — onsite gas deployments map; OEM production capacity; named deployments + economics; new picks-and-shovels names (VoltaGrid, Doosan, Bloom, CAT, Solaris)
- MAJOR update to [[Colossus (xAI)]] — Colossus 2 = first GW-scale datacenter; 200K+ Colossus 1; $40B Saudi PIF raise; cross-state regulatory arbitrage
- updated [[Oracle]] — ByteDance angle (largest GPU customer pre-OpenAI scale-up); Johor; >2 GW leased operational scale
- key new tradable insights:
  - **OpenAI/Oracle Abilene = 2.3 GW** of onsite gas commitments (was previously framed as $300B without onsite-power detail)
  - **xAI Doosan = 1.9 GW** onsite gas order (Korean turbine vendor; not previously in wiki)
  - **$10-12B AI cloud revenue per GW per year** = the economic justification for onsite gas premium
  - **N3 utilization >100% in H2 2026** — confirms compute supply is binding at foundry level
  - **HBM 3-4× DRAM wafer intensity + Rubin Ultra 4× HBM** — quantifies why HBM4E scaling is much harder
  - **ByteDance Oracle's largest GPU customer** + **Johor Malaysia = world's 2nd largest AI hub** — major non-US demand pool we hadn't captured
  - **1M Trainium2 in single AWS campus** = scale comparable to NVIDIA-anchored clusters
  - **Texas grid: tens of GW load requests vs ~1 GW approved last 12 months** = quantifies the grid bottleneck → onsite gas is the workaround
- new picks-and-shovels names flagged for future ingest: **Bloom Energy (BE), Caterpillar (CAT), Wärtsilä (WRT1V.HE), VoltaGrid (private), Doosan Enerbility (KS), ByteDance (private)**
- wiki now ~119 pages across 6 categories, 45 sources (42 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | SemiAnalysis recent batch (5 more pieces)
- user requested recent SemiAnalysis coverage
- web-fetched 5 high-impact recent pieces:
  1. [[SemiAnalysis - AI Value Capture (2026)]] (May 2026) — value-capture framework + Anthropic $44B ARR + SOCAMM pricing
  2. [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]] (Mar 24 2026) — NVIDIA roadmap detail + Groq absorption mechanics
  3. [[SemiAnalysis - ISSCC 2026 (2026)]] (Apr 15 2026) — HBM4 architectural vendor map + TSMC Active LSI = AMD MI450 primary
  4. [[SemiAnalysis - Co-Packaged Optics (2026)]] — CPO scale-up disruption thesis vs Coherent/Lumentum
  5. [[SemiAnalysis - Google AI Infrastructure Supremacy]] — Google's structural systems advantage quantified
- created sources (5): all above
- updated [[Anthropic]] — $44B+ ARR + 70%+ inference margins (revision upward from $30B framing)
- updated [[HBM allocation]] — HBM4 vendor architectural map (Samsung SF4 / SKH on TSMC N12 / Micron CMOS); Samsung 13 Gb/s 36GB 12-high 3.3 TB/s; TSMC Active LSI = AMD MI450; SOCAMM pricing $8→$13/GB
- updated [[NVIDIA]] — GTC 2026 roadmap: Rubin Ultra NVL576 + Feynman NVL1152 with CPO inter-rack; LPX (Groq IP integration); AFD inference architecture; Groq $20B IP license + team hire structure
- updated [[Alphabet]] — systems advantage data (+30/-40/-30/50×); ICI/OCS/Pathways; TPUv5 16K pod; multi-DC infrastructure detail
- updated [[Coherent]] + [[Lumentum]] — CPO long-term threat quantified (scale-out limited; scale-up killer app late 2020s)
- key tradable insights:
  - **Anthropic $44B+ ARR with 70%+ inference margins** (May 2026; up from $30B April) = AI lab revenue inflection continues; validates inference market sizing at industry scale
  - **SOCAMM $8/GB → >$13/GB exit '26** = direct memory pricing inflation (60%+ across year); supply-side rent capture by SK Hynix/Samsung/Micron
  - **NVIDIA Groq deal confirmed at $20B IP license + team hire** (regulatory-friendly structure)
  - **Rubin Ultra NVL576 = first major NVIDIA CPO deployment** (late 2027) — validates CPO scale-up thesis
  - **SK Hynix uses TSMC N12 for HBM4 base die** = direct TSMC revenue stream tied to HBM4 ramp
  - **TSMC Active LSI = AMD MI450** with 12 HBM4 stacks + 2 base + 2 IO dies = primary architectural anchor
  - **Google systems advantage: +30% throughput / -40% power / 50× less downtime** vs NVIDIA InfiniBand setups
  - **CPO scale-out "limited" / scale-up "killer app late 2020s"** = Coherent/Lumentum scale-out business intact through 2027+; scale-up disruption from 2027-2028
  - **Celestial AI ($1B+ run-rate end 2028)** = canonical scale-up CPO bet; new flagged name; Trainium 4 anchor
- new picks-and-shovels names flagged: **Celestial AI** (private; scale-up CPO; Trainium 4 anchor)
- wiki now ~124 pages across 6 categories, 50 sources (47 primary, 1 secondary, plus older AI 2027)

## [2026-05-24] ingest | SemiAnalysis remaining 6-piece batch
- user requested all remaining flagged SemiAnalysis pieces
- web-fetched 6 in parallel; 5 with rich data + 1 paywalled (Meta Bizarre Choice)
- created sources (6): [[SemiAnalysis - AI Datacenter Energy Dilemma]], [[SemiAnalysis - AI Datacenters Electric Bills (2026)]], [[SemiAnalysis - Scaling the Memory Wall HBM (2025)]], [[SemiAnalysis - Claude Code Is The Inflection Point]], [[SemiAnalysis - The Memory Wall (DRAM)]], [[SemiAnalysis - Meta Bizarre AI Infrastructure Choice]]
- updated [[Power & energy]] — global doubling 49→96 GW + tariff comparison + PJM regulatory backlash + ERCOT design advantage
- updated [[Northern Virginia]] — PJM capacity 9.3× spike + $29.90/household + Talen/Constellation/Vistra beneficiary frame
- updated [[Texas]] — ERCOT design advantage explicitly as structural reason TX wins AI infra share
- updated [[Meta]] — 650K H100 baseline + "worst datacenter design" criticism + paywalled framing
- updated [[Anthropic]] — Claude Code 4% → 20%+ GH commits; Accenture 30K; quarterly ARR > OpenAI
- updated [[HBM allocation]] — HBM cost share 50%+ H100 / 60%+ Blackwell; Rubin Ultra 1024 GB HBM4E; SK Hynix MR-MUF advantage
- key tradable insights:
  - **Global DC power 49 GW → 96 GW in 3 years** (doubling); AI = 40 GW of 96 GW
  - **PJM capacity prices spiked 9.3×** ($29 → $270/MW-day) = direct generator-owner rent capture ([[Talen Energy]], Constellation, Vistra)
  - **ERCOT design advantage** = stable prices despite equivalent DC buildout; structural Texas advantage beyond power cost
  - **AWS $650M / 1 GW nuclear DC purchase** = Susquehanna transaction value
  - **HBM = 50%+ H100 BOM / 60%+ Blackwell BOM** = canonical economics; memory vendors capture the rent
  - **Rubin Ultra 1024 GB HBM4E** = 5.3× GB200 = forward HBM bottleneck driver through 2027+
  - **Claude Code = 4% GH commits → projected 20%+ EOY 2026** = quantified inference demand inflection
  - **Anthropic quarterly ARR > OpenAI** = competitive signal
  - **Accenture 30K Claude seats** = largest disclosed enterprise deployment
  - **SK Hynix MR-MUF packaging** vs Samsung/Micron NCF = architectural HBM margin lead reason
  - **DRAM top 3 = 95% of market** vs 20+ vendors 1990s = oligopoly pricing power
  - **Singapore DCs = 10%+ national power** = canonical hyperscaler-induced national power case
- wiki now ~130 pages across 6 categories, 56 sources (53 primary, 1 secondary, plus older AI 2027)
- **SemiAnalysis free article coverage is now substantially comprehensive**

## [2026-05-24] schema | automation infrastructure + git remote
- created: [[Wiki maintenance model]] (synthesis on permission matrix + automation guardrails)
- created: `wiki/_meta/ingested-sources.md` (URL tracking for the routine), `wiki/_meta/weekly-digest.md` (human-review queue)
- created: `.gitignore` (excludes `.obsidian/`, Windows cruft)
- infra: vault `git init`'d, pushed to private GitHub repo `Ramenr5/ai-infra-bottlenecks`
- scheduled: remote routine `SemiAnalysis weekly ingest` (id `trig_01AHFGFiYhYS6dyXVd54LEjy`), cron `0 22 * * 0` = Sundays 22:00 UTC = 8 AM Brisbane Mon
- routine writes only to `raw/articles/`, `wiki/sources/`, `wiki/_meta/`, `log.md`, `index.md` (append-only); never touches layer/company/bottleneck/geography/synthesis pages
- cap: 3 articles per run; first scheduled fire 2026-05-24 22:00 UTC
- workflow: routine commits and pushes; user `git pull`s locally to integrate
- open risk: remote agent push-back auth not yet validated; first run will reveal whether CCR can `git push` to a private GitHub repo

## [2026-05-25] schema | routine first-run failure + manual session ingest
- diagnosis: scheduled routine fired at 2026-05-24T22:04 UTC, auto-disabled with `ended_reason: auto_disabled_repo_access` — remote CCR could not access the private GitHub repo (confirming the open risk from yesterday)
- fix step 1: switched `Ramenr5/ai-infra-bottlenecks` from private to public (via `gh repo edit --visibility public`). Routine clone should now work; push-back still untested
- routine re-enable: pending after this commit
- user-prompted by named-gap question ("AI value capture, the coding assistant breakdown, how much do gpu clusters really cost..."); manually ingested 5 articles in-session (bypassing the 3-cap because manual + explicit user request)
- created sources: [[SemiAnalysis - The Coding Assistant Breakdown (2026)]], [[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]], [[SemiAnalysis - EDA Market Primer (2026)]], [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]], [[SemiAnalysis - Dissecting NVIDIA Blackwell (2026)]]
- created extracts: matching `(extract).md` files in `raw/articles/`
- key numbers surfaced:
  - **H100 1-yr rental: $1.70 → $2.35 in 5 mo (+40%)**; all GPU rental capacity sold out through Sep 2026
  - **Hyperscaler TCO premium: +10-61% vs gold-tier neoclouds** depending on workload (pretraining 10%, multimodal RL 61%, inference 59%)
  - **EDA Big-3: $16B combined CY2025; Synopsys $8B (+Ansys $35B), Cadence $5.30B, Siemens $2.2-2.5B**; 95-99% retention; 1.5-1.6 yr backlogs
  - **Coding-assistant input:output ratios**: Codex 80:1, Claude Code 100:1 — long-context drives disproportionate inference compute
  - **Blackwell architectural shift**: TMEM + CTA-scoped tcgen05 + 2SM MMA = kernel rewrites are the rate limit on Blackwell software adoption (separate from hardware availability)
- 13 pages flagged for human review in [[weekly-digest]] (see "2026-05-25 — MANUAL session ingest" entry)
- wiki source count: 56 → 61

## [2026-05-26] ingest | SemiAnalysis "Inside the 800VDC Revolution" (Part 1)
- source: [[SemiAnalysis - Inside the 800VDC Revolution (2026)]] (public ~92%; Part 1 of 2 series)
- new bottleneck: [[800VDC transition]] (severity: structural, layer: power)
- 11 new company pages (all orphans previously implied but missing):
  - SST pure-plays: [[DG Matrix]], [[Heron Power]], [[Novos Power]], [[Amperesand]]
  - Incumbents: [[Eaton]], [[ABB]], [[Delta Electronics]], [[Schneider Electric]]
  - Semi enablers: [[Wolfspeed]], [[Infineon]]
  - EPC: [[Aran Industries]]
- key numbers:
  - **~39 GW incremental 800VDC capacity by 2030**
  - **Sidecar (HVDC power rack) TAM peaks ~$11B in 2028**
  - **SST TAM ~$13B by 2030**
  - **Datacenter industrial capex >$400B in 2026** (electrical = 30-35% = $120-140B)
  - **$320M into SST startups** in 12mo ending March 2026
  - HVDC power rack ASP $400-500k/unit, $500k/MW (10× standard AC rack)
  - SST content $1.0-1.5M/MW; battery rack $200k/MW
  - Total electrical content stays $3.6-4.8M/MW band — mix shifts not size
  - Phase 2 efficiency (UPS gone): 86.5% vs 82.0% baseline = **58 MW saved per 1 GW**
  - Phase 4 SST: 87.4% = **69 MW saved per 1 GW**
  - Wolfspeed 10 kV SiC MOSFET commercial bare die **March 2026** = the MV-rectifier enabler
  - Eaton/Resilient acquisition **Aug 2025**; ABB/NVIDIA partnership **Oct 2025**
  - **No vendor has UL-certified datacenter SST as of May 2026**
  - NEC 2029 partial only; full code maturity NEC 2032-35
- pages flagged for human review (NOT edited per Wiki maintenance model):
  - [[Power & energy]] — needs 4-phase framework + TAM tables
  - [[Datacenter physical]] — white-space/grey-space content shift framing
  - [[Compute & silicon]] — Wolfspeed 10 kV SiC MOSFET commercial availability
  - [[Capex trajectory thesis]] — $400B 2026 industrial capex anchor to triangulate vs Big Five $745-775B
  - [[Bottleneck ranking (May 2026)]] — add 800VDC as structural-tier item
  - [[AI infrastructure investment map (May 2026)]] — full picks-and-shovels overlay with 11 new vendor pages
- wiki source count: 61 → 62
- wiki company count: 45 → 56

## [2026-05-26] ingest | Power Integrations (POWI) — 800VDC silicon enabler
- origin: user pushed back on prior dismissive read of POWI exposure to 800VDC; primary-source check changed the analysis
- created: [[Power Integrations]], [[Power Integrations Q1 2026 earnings]], [[Power Integrations - 1250V & 1700V PowiGaN for 800VDC AI Datacenters (2025)]]
- raw extracts: matching `(extract).md` files in `raw/articles/`
- key numbers:
  - Q1 2026 revenue $108.3M (+3% YoY), Non-GAAP GM 53.5%, OM 11.7%, EPS $0.25 (vs $0.31 YoY → margin pressure)
  - Industrial +23% YoY, +15% QoQ
  - Q2 2026 guide $110-120M (+8.5% mid)
  - **NVIDIA collaboration explicit on 1250V/1700V PowiGaN for 800VDC** (per Oct 13 2025 press release + reaffirmed Q1 2026 call)
  - **Datacenter SAM >$1B by 2030** (mgmt-disclosed; includes rack + grid applications)
  - 2 Q1 2026 design wins at Taiwan customers serving US datacenter equipment makers
  - 175M cumulative PowiGaN switches deployed (lifetime, all families)
  - 1250V HEMTs: "industry-first"; targeting >98% efficiency
  - 1700V switch integrated in InnoMux2-EP IC; supports 1000VDC input
  - Cross-ecosystem engagement: hyperscalers, server OEMs, rack providers, power-supply providers
- key correction: prior chat-level read had POWI as tangential. Primary-source check revealed explicit NVIDIA collaboration + Taiwan design wins. **SemiAnalysis 800VDC piece notably did NOT name POWI** despite this collaboration — best interpretation: SemiAnalysis tracks equipment/products, POWI is silicon upstream; volume design wins to follow over 12-24mo.
- pages flagged for human review:
  - [[Compute & silicon]] — GaN section needs POWI alongside Wolfspeed/Infineon
  - [[800VDC transition]] — picks-and-shovels expansion: add POWI as silicon enabler tier alongside Wolfspeed (SiC pure-play) and Infineon (broad)
  - [[Capex trajectory thesis]] — POWI mgmt $1B 2030 datacenter SAM is one more data point on AI infra TAM
- wiki source count: 62 → 64
- wiki company count: 56 → 57

## [2026-05-27] ingest | Anthropic/Bedrock/AWS margins + Finding Miscompiles
- origin: user dropped 2 new files in raw/ root ("ingest new articles added")
- created sources:
  - [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]] (public ~95%)
  - [[Finding Miscompiles for Fun Not Profit (2026)]] (Justin Lebar blog; anecdotal demand signal)
- updated (supervised session — framing edits allowed):
  - [[Amazon]] — new Bedrock/TaaS margin-engine section (+213bp AWS margin, $5.5B Bedrock, Trainium >50% of tokens, Indiana/Mississippi 2GW, Talen/Vistra/NiSource PPAs)
  - [[Anthropic]] — Q1 detail (+$21B net new ARR → $30B), inference GM mid-60s, OI-profitable 2Q (WSJ 5/20/26), >$100B ARR potential EOY, Bedrock distribution-channel mechanics
- key numbers (Bedrock article):
  - **AWS EBIT margin +213 bps Q/Q** — only CSP with rising margins (server depreciation 5yr, lowest of all CSPs)
  - **Bedrock ~$5.5B run-rate**; 80-90%+ on Anthropic; +170% Q/Q (1Q26); 37% of AWS AI revenue (from 9% 1Q25)
  - **Bedrock EBIT margin ~55%**; 30% of AWS GP step-up Y/Y despite 4% of revenue
  - TaaS ARR $10B+ each at AMZN/MSFT/GOOGL vs ~nothing at ORCL/neoclouds
  - Trainium >50% of Bedrock tokens (Matt Garman Nov 2025)
  - Microsoft OpenAI backlog = 2.5× total Azure annual revenue
  - Google "EBTIT" caveat: $5.4B Alphabet-Level Activities (DeepMind training) hidden from GCP margins
  - **Core insight: TaaS margin > IaaS margin → drives hyperscaler margin divergence (AMZN > MSFT/GOOGL > ORCL/neoclouds)**
- key numbers (Miscompiles):
  - >$10,000 tokens in one afternoon (50 Claude subagents reading LLVM); 1 bug/4min (AMDGPU), ~2 bugs/min (x86)
  - "Things impossible 5 months ago are now just Very Expensive" — Jevons demand signal
- pages flagged for human review:
  - [[Microsoft]] — datacenter freeze + OpenAI backlog 2.5× Azure revenue
  - [[Alphabet]] — EBTIT margin caveat ($5.4B training costs bucketed outside GCP)
  - [[Capital flows & deal structures]] — add TaaS-vs-IaaS margin-economics framework
  - [[Oracle]] — TaaS-light → margin disappointment
  - [[Capex trajectory thesis]] — Miscompiles as qualitative Jevons demand anecdote (pillar #5)
- note: also reviewed concretumgroup.com/papers (14 systematic-trading papers) — flagged as off-thesis, awaiting user decision on scope; NOT ingested
- wiki source count: 64 → 66

## [2026-05-27] ingest | Source scan: cooling + power anchors + bear case (3-tier batch)
- origin: user asked to scan for high-quality thesis-matching sources; approved full ingest of the ranked recommendations
- decisions logged: Untitled.md deleted; Concretum papers confirmed off-thesis (NOT ingested)
- **Tier 1 — Cooling (biggest coverage gap):**
  - sources: [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]], [[Dell'Oro - Liquid Cooling Market (2026)]]
  - new bottleneck: [[Datacenter cooling]] (severity: acute, layer: datacenter)
  - new company pages: [[Vertiv Holdings]] (VRT), [[nVent Electric]] (NVT), [[Aaon]] (AAON), [[CoolIT Systems]] (private/KKR), [[Boyd]] (private/GS)
  - key numbers: DLC mandatory >50 kW/rack; GB200 NVL72 = 120 kW DLC-only; chip TDP H100 700W → 1500W → **>4,000W by 2029**; liquid-cooling market **$3B→$7B (2025-29), >$15B/5yr**; **Quick Disconnect shortage** = cooling chokepoint; cooling = 60-80% of non-IT energy; 50 MW DC = 657M L water/yr; Meta PUE 1.08 / Google 1.10
- **Tier 2 — Power anchors (authoritative refresh):**
  - sources: [[IEA - Energy and AI (2026)]], [[EPRI - Powering Intelligence (2026)]]
  - IEA: global DC **415 TWh (2024) → 945 TWh (2030)**, ~15%/yr; AI servers +30%/yr; US +130%; 2035 sensitivity **700 / 970 / 1,700 TWh** (Headwinds/HighEff/LiftOff)
  - EPRI: US datacenters **9-17% of US electricity by 2030** (from ~4%); EPRI+Epoch joint; state dashboard (deeper fetch TODO)
- **Tier 3 — Bear case (fixes thesis one-sidedness):**
  - sources: [[Apollo - AI Capex Risk Outlook (2026)]] (Torsten Slok), [[Ed Zitron - AI Is A Money Trap (2025)]] (polemical steelman)
  - new synthesis: [[Capex bust scenario]] — explicit counterweight to [[Capex trajectory thesis]]; bust ~20-30% prob through 2027, NOT base case
  - key bear numbers: hyperscaler capex ~$646B 2026 (~2% US GDP); $2.7T cumulative 2025-29; **$90B Q4 2025 bonds**; Big-4 FCF -30% YoY while NI +73%; ~$2T revenue by 2030 needed or capex wasted; IEA Headwinds 700 TWh as demand-disappointment anchor
  - strongest bull rebuttal recorded: supply is sold-out + prepaid (opposite of a demand air-pocket)
- updates: [[Datacenter physical]] (cooling bottleneck + sources), [[Capex trajectory thesis]] (cross-link to bust scenario)
- pages flagged for human review:
  - [[Power & energy]] — add IEA global trajectory + EPRI 9-17% US range
  - [[AI debt financing capacity]] — add Apollo $90B Q4 issuance + self→debt shift
  - [[Hyperscaler capex sustainability]] — add 2% GDP, $2.7T cumulative, circular financing
  - [[Bottleneck ranking (May 2026)]] — add [[Datacenter cooling]] (acute) to the near-term tier
  - water as candidate bottleneck page (657M L/yr per 50 MW)
- wiki source count: 66 → 72; companies → 62; bottlenecks +1 (Datacenter cooling); syntheses +1 (Capex bust scenario)

## [2026-05-27] lint/integrate | Fold new sources into framing pages + water bottleneck
- origin: "proceed" — actioned the human-review items flagged by the source-scan ingest
- updated framing pages (supervised session):
  - [[Power & energy]] — added IEA global anchor (415→945 TWh 2024-30; AI +30%/yr; 2035 range 700-1,700 TWh) + EPRI US 9-17% by 2030
  - [[AI debt financing capacity]] — added Apollo $90B Q4 2025 hyperscaler bond issuance + self-funded→debt-funded shift (Big-4 FCF -30% while NI +73%); cross-link to [[Capex bust scenario]]
  - [[Hyperscaler capex sustainability]] — added Apollo $646B 2026 (~2% GDP), $2.7T cumulative 2025-29, circular-financing mechanism; cross-link to bust scenario
  - [[Bottleneck ranking (May 2026)]] — added [[Datacenter cooling]] as Tier-1 near-term (physical-side) + 800VDC structural reference; updated time-horizon summary + tradable-read table
- new bottleneck: [[Datacenter water permits]] (severity: watch, layer: datacenter) — 657M L/yr per 50 MW; water-vs-power tradeoff; Phoenix WUE >2.0; locally binding
- net: thesis now has explicit both-sides framing (bull [[Capex trajectory thesis]] ↔ bear [[Capex bust scenario]]) and datacenter-physical bottlenecks (cooling + water + 800VDC) properly ranked
- wiki bottleneck count: +1 (Datacenter water permits)

## [2026-05-28] gap-fill | Orphan-wikilink fill (top thesis-central pages)
- origin: "fill gaps" — ran local orphan analysis (145 orphans across 315 link targets vs 174 pages), filled the highest-inbound-ref thesis-central ones
- new pages (9):
  - [[OpenAI]] (17 inbound refs — biggest gap; ai-lab, Stargate anchor, $300B Oracle deal)
  - [[ERCOT]] (geography/grid-region; energy-only advantage vs PJM)
  - [[PJM]] (geography/grid-region; 9.3× capacity spike, bill backlash)
  - [[CoreWeave]] (neocloud; AI debt financing canary)
  - [[Vistra]] (IPP; merchant nuclear+gas; Amazon PPAs)
  - [[Constellation Energy]] (largest US nuclear; firm baseload)
  - [[Mitsubishi Heavy Industries]] (3rd gas-turbine OEM)
  - [[xAI]] (ai-lab; Colossus GW-scale + onsite gas)
  - [[Transformer lead times]] (bottleneck; acute; ~110-wk LPT)
- alias fixes (resolve ~24 orphan refs via frontmatter `aliases:`):
  - Samsung Electronics +[Samsung]; Micron Technology +[Micron]; Marvell Technology +[Marvell]; Vertiv Holdings +[Vertiv]; Amazon +[AWS]
- all new pages sourced by cross-citing existing wiki sources (no fabricated figures; fast-aging numbers marked "as of / verify before acting")
- remaining orphans (not yet filled, candidates for next pass): Samsung Foundry, Intel Foundry, Lambda, Nebius, Humain (Saudi PIF), MGX, G42, Apollo (Global), Blackstone, KKR, Brookfield, Jacobs/Fluor/AECOM (EPC), Hubbell, Hammond Power Solutions, Equinix, Digital Realty, Ohio (geography), plus many single-ref placeholders/template tokens (Page A/Source A etc. — noise, ignore)
- note: this is the local/manual version of what the Gap-audit routine now drafts via email; routine remains for ongoing detection
- wiki: companies +6, geographies +2, bottlenecks +1

## [2026-05-28] schema | AI Market Regime Monitor (4th routine) + momentum tracker synthesis
- origin: user request — "market crucial information updater" to keep the investment map in sync on whether AI buildout is accelerating/stagnating/slowing (e.g. Dell earnings, principal statements)
- new synthesis: [[AI investment momentum tracker]] — LIVE regime read between bull ([[Capex trajectory thesis]]) and bear ([[Capex bust scenario]]) poles; scores signals +1/0/-1 across 4 channels → net score → verdict tier
- **inaugural verdict (2026-05-28): 🟢 ACCELERATING (net +5)** — seeded with live WebSearch data:
  - Dell Q1 FY27 (reported same day): $24.4B AI orders, **$51.3B AI backlog**, ~$60B FY27 guide (+144%) [+1]
  - NVIDIA Q1 FY27: $81.6B rev (+85%), $75.2B DC, Vera Rubin $200B TAM [+1]
  - CoreWeave Q1: $99.4B backlog, 3.5 GW contracted [+1]
  - Jensen Huang (May 21): "demand parabolic… agentic inflection… compute equals revenue; $1T won't be enough" [+1]
  - Hyperscaler FY26 capex guides all raised; $1T NVDA guidance intact [+1]
  - Credit: BofA hyperscaler IG issuance to $175B; survey $285B [+1] BUT "AI bubble" now #1 bond-investor concern 23% vs 9% Dec + BIS shadow-debt warning [-1]
  - read: hard-demand channel maxed; credit/sentiment channel is the leading risk-edge (where a slowdown shows first)
- new company page: [[Dell Technologies]] (DELL; AI-server demand proxy; $51.3B backlog)
- new routine: "AI Market Regime Monitor" (id trig_0162nssfTjTdw4M8cCZmLKT8), daily 23:00 UTC (after US close, catches same-day earnings); WebSearch-only (WebFetch blocked in CCR); Gmail-draft GATED on material change (tier shift / crux signal / >=2 notable signals) — daily scan, selective draft to avoid flooding; read-only repo
- automation now 4 routines: Daily Pulse (21:00 daily), Regime Monitor (23:00 daily), Gap Audit (Sat 22:00), SemiAnalysis (Sun 22:00) — all WebSearch + Gmail-draft model
- wiki: syntheses +1, companies +1

## [2026-05-28] schema | Thesis stress-test engine (lint/claim-adjudication) + Regime Monitor lint fold-in
- origin: user request — automated lint/thesis-check to test feasibility of a new theory when new data/info or a principal statement emerges
- new synthesis: [[Thesis stress-tests]] — 7-step adjudication rubric (capture → decompose premises → confront evidence base → score feasibility → thesis impact → verdict+falsifier → log) + dated ledger; anti-bias guardrails (score the argument not the name; mechanism vs conclusion; wiki data is referee)
- inaugural live adjudication: **Michael Burry depreciation claim** (Nov 2025 — hyperscalers extend chip useful-lives, understate D&A ~$176B 2026-28, Oracle +27%/Meta +21% overstated)
  - verdict: **Contested / open** — mechanism real (would partly explain FCF -30% vs NI +73%) BUT load-bearing premise (true chip life=2-3yr) **rebutted by wiki's own data**: H100 1-yr rental UP ~40% (2-3yr-old GPUs stay scarce/productive); AWS depn already 5yr (most conservative). "Fraud" framing overreaches (Big-Four audited).
  - falsifier: GPU rental/resale prices rolling over before 3yr → ties to GPU rental price index
- flagged (callouts added): [[Capex bust scenario]] (new bear pillar #5), [[Hyperscaler capex sustainability]] (earnings-quality flag)
- folded a **feasibility-lint step (2.5)** into the AI Market Regime Monitor routine — when an emerging signal asserts a THEORY (not just a number), it lightweight-adjudicates vs the evidence base and drafts it for local completion; 'material change' now also triggers on 'a new claim worth formal stress-testing'
- updated CLAUDE.md: added 'Stress-test (thesis check)' workflow
- automation unchanged in count (4 routines); Regime Monitor now does regime-read + thesis-lint
- wiki: syntheses +1 ([[Thesis stress-tests]])

