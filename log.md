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

## [2026-05-29] verify+update | Routine test drafts validated + verified signals folded in
- context: fired test runs of all routines; Daily Pulse + Regime Monitor + Gap Audit ALL produced high-quality Gmail drafts. Automation fully validated end-to-end on the WebSearch+Gmail-draft model.
- Regime Monitor test notably scored Andrej Karpathy = 0 (joined Anthropic but cautious on 2027-AGI timelines) — directional-scoring nuance working as designed; Pichai "compute constrained" = +1
- verified the drafts' standout signals via local WebSearch, then folded confirmed ones in:
  - **[[Anthropic]]**: SpaceX compute deal — $1.25B/mo through May 2029, up to $40B, 300+MW / 220K GPUs at Colossus 1 (renting xAI capacity); Q2 rev ~$10.9B (verified CNBC/Bloomberg/Fortune/TheInformation)
  - **[[Vertiv Holdings]]**: Q1 2026 — organic orders +252% YoY, backlog >$15B (+109%), adj EPS +83%, FY26 guide raised (verified 8-K)
  - **[[Transformer lead times]]**: updated ~110 → ~128wk avg (2026 WoodMac); GSU/large-custom up to ~208wk (4yr); ~$2B new US mfg not online until ~2028
  - **[[xAI]]**: Colossus 2 ramping (Southaven MS); complex → ~2 GW; Colossus 1 leased to Anthropic
  - **[[AI investment momentum tracker]]**: verdict deepened to 🟢 Accelerating (high conviction); 6 new ledger rows; added ledger-hygiene note (age out ~3-4wk)
- **correction caught by verification**: routine flagged "NVIDIA supply commitments $95.2B vs $145B" — verified $145B is CORRECT (the $29.8B→$145B jump = disclosure-definition change to "total supply incl. prepaids"). No page change. Logged as verified-non-signal in the tracker so it isn't re-flagged. Good example of the verify-before-commit discipline catching a WebSearch imprecision.
- still in Drafts (lower priority, not yet folded): GEV backlog $163B→~$176B / 100GW, PJM 2027/28 BRA $333/MW-day, SK Hynix 72% margin confirmed, Anthropic ARR $45B, EDA backlogs (Synopsys $11.3B / Cadence $8.0B)
- updated: [[Anthropic]], [[Vertiv Holdings]], [[Transformer lead times]], [[xAI]], [[AI investment momentum tracker]]

## [2026-05-29] verify+fold (round 2) | remaining draft items folded
- verified + folded the rest of the routine-draft signals:
  - **[[GE Vernova]]**: gas equip backlog + slot reservations **83 → 100 GW in Q1 2026** (21 GW signed in quarter), ≥110 GW YE26 target, $200B total backlog target pulled to 2027 (verified 8-K / Utility Dive)
  - **[[PJM]]**: 2027/28 BRA cleared **$333.44/MW-day (at FERC cap; uncapped ~$530, ~60% higher); fell 6,623 MW short of reliability requirement — first RTO-wide shortfall** (verified PJM / Utility Dive)
  - **[[SK Hynix]]**: Q1 2026 **72% operating margin (record; rev ₩52.6T, OP +405% YoY)**, outpacing Micron 67.6% / TSMC 58%; HBM demand exceeds supply 3yr out (verified SK Hynix IR / TrendForce / CNBC)
  - **EDA**: Cadence Q1 2026 backlog **$8.0B record** (FY26 guide +17%); Synopsys Q2 2026 backlog **~$11.0B** (EDA rev +8%) — folded into watchlist baseline
- updated all corresponding **watchlist baselines** (SK Hynix 72%, IG BBB 96bps, GEV 100GW, PJM $333.44, EDA $11.0B/$8.0B, transformer 128wk) so routines don't re-fire on them
- all draft items from the 2026-05-28/29 routine runs now verified + folded; Drafts queue cleared
- NOTE: user requested switching routine delivery from Gmail drafts → Telegram (via their "my stock briefing" bot). Finding: that bot is not visible in RemoteTrigger/CronList; no Telegram MCP connector exists. User opting to provide bot token + chat ID for direct api.telegram.org delivery. Telegram conversion pending token.

## [2026-05-29] schema | Telegram delivery LIVE via Apps Script relay
- finding: **CCR sandbox blocks ALL outbound HTTP** — confirmed by an isolated egress test (a cloud routine curl to api.telegram.org produced no message). So routines CANNOT hit Telegram directly. (Token itself is fine — verified locally via getMe/sendMessage.)
- solution shipped: **Gmail-draft → Google Apps Script relay → Telegram** (@MyStockss_bot, chat 266952662)
  - routines keep creating concise Gmail drafts (works via MCP in CCR)
  - `tools/telegram-relay.gs` runs on Google servers (has egress + Gmail access), every 15 min reads new alert drafts by subject prefix (AI Regime Monitor / AI Infra Pulse / Wiki gap audit / SemiAnalysis), forwards concise summary (subj + first ~14 lines, cap 1200 chars) to Telegram, dedups via Script Properties
  - repo copy = placeholder template (public repo); real token lives only in user's Apps Script
  - **confirmed working by user 2026-05-29**
- Regime Monitor delivery reverted from direct-curl (CCR-incapable) back to Gmail draft, like the other 3
- one-off "TG egress test" routine (trig_01JBbgh656QmsbsscCPzTMpQ) left DISABLED (user can delete in claude.ai UI)
- net architecture: 4 routines → Gmail drafts → Apps Script relay → Telegram push; human reviews concise alert, opens Gmail draft / repo for detail, commits locally

## [2026-05-29] schema | Telegram message concision: ===DETAIL=== split
- problem: relay was truncating daily messages (1200-char cap) AND appended "(full detail in Gmail draft)" to EVERY message even complete ones (misleading)
- fix part 1 (relay): cap 1200→3800 chars; footer only when actually truncated; **cut at a literal `===DETAIL===` marker — relay sends ONLY the concise top block to Telegram**, ignores everything below
- fix part 2 (all 4 routine prompts): drafts now structured as [CONCISE TOP BLOCK] + `===DETAIL===` + [full detail]:
  - Daily Pulse: top = signals only (1 line each) + counts; detail = ambiguous/stale/errors/watchlist-upkeep
  - Regime Monitor: top = regime verdict + net + up to 3 signals + 1-line lint; detail = full ledger rows/lint/why-it-matters/tracker-upkeep
  - Gap Audit: top = gap count + page names + top orphans; detail = full drafted page markdown + sources
  - SemiAnalysis: top = numbered titles; detail = URLs/summaries/filenames
- net: Telegram = tight phone alert (important points only); Gmail draft = full detail for local commit. Repo relay template updated; user must re-paste the relay code into their Apps Script (marker-cut + new caps).

## [2026-05-31] schema | Replace Gap Audit with AI Narrative & Findings Scout; fold in SemiAnalysis
- user request: drop the gap scan; add a real-time AI/tech narrative scout (NVDA announcements, AI findings, influential perspective pieces e.g. P3 Institute open-weights essay) from credible influential sources incl. SemiAnalysis substacks
- routine changes:
  - **repurposed Gap Audit** (trig_0167) → **"AI Narrative & Findings Scout"**, daily 13:00 UTC. Scans curated sources for NEW high-signal posts/announcements/papers; attaches a 1-line PERSPECTIVE (thesis relevance) to each; flags strong claims for stress-testing; Gmail draft → relay → Telegram (concise top + ===DETAIL===); material-gated (only sends on genuinely new high-signal content)
  - **disabled SemiAnalysis weekly** (trig_01AH) — folded into the scout's source list (reversible)
- new tracking file: [[sources-watchlist]] — curated influential sources in 5 tiers (compute/semis analysts, AI research/policy, strategy/markets, vendor/lab primary, papers); editable, scout reads it each run
- relay SUBJECT_MATCHES updated: dropped 'Wiki gap audit' + SemiAnalysis subjects, added 'AI Narrative' (user must update Apps Script copy)
- seed ingest (demo of the scout's intended output): [[P3 Institute - Open Source to Open Weights (2026)]] (attr. Bill Gurley) — open-source-as-strategy; closed cathedral vs open weights (China-dominant); claim 'Chinese open models global default by 2030 absent Western open frontier'
  - stress-tested in [[Thesis stress-tests]] → **Plausible (mechanism) / Contested (timeline)**: open commoditizes trailing capability (Jevons-real) but closed labs monetizing hard now + frontier gap persists; challenges the lab-rent thesis, NOT the infra picks-and-shovels thesis (open+cheap → more compute); surfaces a China/open-weights coverage gap
- routine lineup now: Daily Pulse (21:00 daily, quant), Regime Monitor (23:00 daily, accel/stag/slow + thesis-lint), AI Narrative Scout (13:00 daily, qualitative findings+perspective). Gap Audit + SemiAnalysis weekly disabled.
- flagged: [[AI infrastructure investment map (May 2026)]] (open-vs-closed value-migration); candidate synthesis 'Open weights vs closed cathedral'
- wiki: sources +1; meta +1 (sources-watchlist); stress-test ledger +1

## [2026-06-01] capability+ingest | "Build a narrative" mode added; CRWD + NOW ingested
- added generative **"build a narrative"** workflow to CLAUDE.md + `narratives/` folder (README with tagging contract). Mode allows labeled inference: every connection tagged [SOURCED: page, STRONG/MODERATE/WEAK] or [INFERRED: reasoning]; mandatory stress section; output saved to narratives/.
- first narrative: [narratives/2026-06-01 CRWD + NOW] — agentic-enterprise tailwind (CrowdStrike secures agents, ServiceNow orchestrates them) vs value-capture-to-labs risk. Backbone = present-tense sourced (primary filings) + forward-tense 3 inferred links + 1 sourced contradiction ([[SemiAnalysis - AI Value Capture (2026)]] "labs capturing all the value") → labeled a hypothesis.
- per user: ingested CRWD + NOW as **application-layer** wiki entities (taxonomy extension: layer=application, downstream AI beneficiaries):
  - [[CrowdStrike]] (CRWD) + [[CrowdStrike Q4 FY26 earnings]] — ending ARR $5.25B (+24%), FY27 guide $6.5B; Falcon Shield NAAR +300% (non-human identity), Charlotte AI +6×, AIDR +5× seq; tracking 1,800+ AI apps/160M instances
  - [[ServiceNow]] (NOW) + [[ServiceNow Q1 FY26 earnings]] — subscription $3.671B (+19% cc), FY26 guide ~$15.75B; AI commitments raised to $1.5B 2026; McDermott "quarterback / which agent or LLM to use" = agent control-plane claim (partly sources the narrative's inferred L5)
- key numbers verified via Motley Fool transcripts (SEC 8-Ks 403 the fetcher); flag verify before acting
- wiki: companies +2 (CrowdStrike, ServiceNow), sources +2; narratives +1; first use of layer=application

## [2026-06-01] ingest | Gap-fill the CRWD+NOW narrative (3 sources) — links re-scored
- user: "ingest all" the suggested gap-fillers. Ingested + folded back into the narrative:
  - [[Menlo - State of Enterprise AI (2025)]] — **$37B enterprise GenAI spend 2025, split ~$19B app / $18B infra** (foundation-model APIs $12.5B); Anthropic 40% of enterprise LLM spend (OpenAI 27%). **Partly resolves the value-capture contradiction**: app layer captured ~half (not all to labs) — but app half is fragmented, infra concentrates. → narrative L6 INFERRED→partly SOURCED
  - [[Identity security in the AI era (2026)]] — identity-security market $29B→$56B (2029); ~45 machine identities/human; **CRWD Next-Gen Identity ARR >$520M (+34%) + SGNL acquisition (Jan 2026)**; 69% say security slows agent adoption (gating bottleneck); Okta contests. → narrative L2/L3 INFERRED→SOURCED
  - [[MCP and the Agentic AI Foundation (2026)]] — MCP now open Linux-Foundation standard (Anthropic/Block/OpenAI + hyperscalers); 97M+ monthly SDK downloads. **Double-edged for NOW**: orchestration *protocol* commoditizes; NOW's moat must sit in governance layer above MCP. → narrative L5 sharpened
- narrative re-scored: present-tense well-sourced; value-capture contradiction **softened** (apps capture half) but live; two genuinely-inferred load-bearing bets remain — (a) NOW wins the governance layer above commoditizing MCP, (b) tailwind>threat direction. Upgraded from "hypothesis" → "evidenced thesis with 2 inferred bets."
- still-thin gaps flagged for scout: "AI eats SaaS"/seat-erosion (no strong source found), Microsoft bundling, CRWD July 2024 outage
- updated [[CrowdStrike]] (SGNL, $520M NHI ARR) + [[ServiceNow]] (MCP commoditization risk)
- candidate synthesis flagged: "AI value capture across the stack" (app-fragmented vs infra-concentrated)
- wiki: sources +3

## [2026-06-01] ingest | Chase the 2 thin narrative gaps (AI-eats-SaaS + MSFT bundling)
- [[AI eats SaaS - the seat-erosion debate (2026)]] — Nadella "per agent"/"SaaS is dead"; **IDC: seat-pricing obsolete by 2028, 70% of vendors refactor**; Bain outcome-pricing; "SaaSpocalypse" >$2T wiped; Fortune "agents aren't killing SaaS" but NOW earnings "fail to shift anti-SaaS vibes". NOW adapting (metered assists, Autonomous Workforce). → narrative seat-erosion gap now SOURCED; pressures the tailwind>threat bet (realistic bear = revenue mix + multiple reset, not death)
- [[Microsoft Agent 365 + security bundling (2026)]] — Defender bundling = canonical CRWD bear; **Microsoft Agent 365 (Nov 2025) = hyperscaler-scale competitor for NOW's exact agent-governance/control-plane layer** (also a partner → coopetition). Biggest new risk to the NOW half. → narrative L5 now contends with Agent 365, not just MCP commoditization
- updated narrative gaps section + [[CrowdStrike]] (Defender bundling) + [[ServiceNow]] (seat-erosion + Agent 365) risk sections
- net: both flagged gaps closed; the NOW control-plane bet is now the most-contested link (MCP commoditizes below + Microsoft Agent 365 competes above + seat-erosion resets the model)
- wiki: sources +2

## [2026-06-01] ingest | NVIDIA Computex 2026 Keynote — ANCHOR SOURCE
- user: ingest the Computex 2026 keynote (Jun 1 2026, Jensen Huang) as the core source for where AI is heading; every detail (suppliers → production → demand)
- created: [[NVIDIA Computex 2026 Keynote]] — comprehensive anchor source, heavily cross-linked
- honesty caveat logged in the page: assembled from credible secondary coverage (Tom's Hardware, CNBC, TrendForce, Fortune, DCD); NVIDIA blog/DCD 403'd the fetcher so raw video + full slide deck NOT directly captured; some Vera Rubin specs first disclosed GTC/CES 2026, reaffirmed here; search-sourced → verify
- key numbers:
  - **DEMAND: "$1T high-confidence demand + purchase orders Blackwell+Rubin through 2027"** (purchase-order framing, up from $500B yr ago); 2026 = "inflection point for inference"; "surprise new product" teased H2 2026
  - **Vera Rubin:** 1.3M components, ~10× perf/watt vs Grace Blackwell; 88-core Vera CPU + Rubin GPU 288GB HBM4 (8 stacks, 6.4GT/s, ~13TB/s) on TSMC 3nm; NVL144 = 3.6 NVFP4 EFLOPS / 1.2 FP8 EFLOPS (~3.3× B300); mass production confirmed (CES), ramp Q2 2026, launch late 2026
  - **Roadmap:** Rubin Ultra 2027 (NVL576/Kyber racks, 4 chiplets, ~100 PFLOPS FP4/GPU, **1TB HBM4E ~32TB/s**, rack 15 EFLOPS FP4) → Feynman 2028 (TSMC A16)
  - **Rubin CPX:** new GPU class for 1M+ token context inference on GDDR7 (cheaper inference economics)
  - **Networking:** X1600 converged IB/Ethernet switch; Spectrum-X Ethernet widespread adoption
  - **AI factory ODMs:** Asus, Ingrasys, Inventec, QCT, Supermicro, Wiwynn (orphan links — candidate pages)
  - **Supply chain:** TSMC (Rubin 3nm, Feynman A16) + CoWoS (NVDA books vast majority); HBM4 SK Hynix+Samsung(+Micron), NVDA sole/exclusive early HBM4 client (insulated from memory crunch); SK Hynix US HBM packaging $3.9B; NVDA booked entire server-plant capacity through 2026
  - **Consumer:** RTX Spark AI PC, DLSS 4.5; "new era of PC" + N1X Arm laptops w/ Microsoft
- updates: [[NVIDIA]] (Computex section), [[AI investment momentum tracker]] (+1 strong ledger row), [[HBM allocation]] (HBM4 exclusivity callout), index Sources (⭐ anchor)
- flagged: [[CoWoS packaging capacity]], [[Capex trajectory thesis]]; ODM partner pages (Supermicro/Wiwynn/Ingrasys/QCT/Inventec/Asus); concept candidate "Rubin CPX / disaggregated inference"
- this source is now the **core anchor for narratives** per user intent
- wiki: sources +1 (anchor)

## [2026-06-01] ingest | Computex supply-chain build-out: 10 ODM/supplier pages + raw clippings folded
- user dropped 2 raw clippings: NVIDIA GTC Taipei keynote landing page (event page w/ livestream embed + pregame guest list — NOT a transcript) and The Verge N1X piece. Folded their detail into [[NVIDIA Computex 2026 Keynote]]; deleted stray raw/Untitled.md
- N1X detail (The Verge 2026-05-30): NVIDIA N1/N1X Arm laptop chips (GPU IP + [[MediaTek]] SoC), OEMs Lenovo+Dell, breaks Qualcomm's Windows-on-Arm exclusivity
- pregame Taiwan ecosystem captured: TSMC/Quanta/Wistron (servers), Techman/Asus/MediaTek (PC/embedded), Delta/Pegatron/Foxconn (agentic+robotics), NTU/Visionbay/GMI Cloud (sovereign infra)
- created 10 supplier/ODM company pages (the physical production layer of the demand thesis):
  - [[Foxconn]] (2317.TW; largest NVDA server maker, ~$83B Q4'25 +22%), [[Quanta Cloud Technology]] (2382.TW; ~50% of Meta), [[Wiwynn]] (6669.TW; >50% rev Meta), [[Wistron]] (3231.TW), [[Inventec]] (2356.TW), [[Supermicro]] (SMCI), [[Ingrasys]] (Foxconn sub), [[Asus]] (2357.TW), [[MediaTek]] (2454.TW; N1X SoC), [[GMI Cloud]] (TW neocloud)
  - grounding: GB200 server ~$2-3M each, ~$210B/yr Blackwell-server revenue pool; Taiwan ODMs lifting on hyperscaler AI capex (verify financials)
- updated [[NVIDIA Computex 2026 Keynote]] (N1X + Taiwan ecosystem), index (ODM cluster), ingested-sources (2 raw clippings)
- Rubin CPX / disaggregated-inference captured in the keynote source; dedicated concept page still a candidate
- wiki: companies +10

## [2026-06-01] schema | Reframe the thesis spine on the Computex keynote + Rubin CPX concept
- user: reframe everything on the keynote + follow up with concept page
- new synthesis: [[Disaggregated inference (Rubin CPX)]] — inference splits into prefill (GDDR7, compute-bound) + decode (HBM, bandwidth-bound); NVIDIA built Rubin CPX for prefill. Cheapens long-context inference → Jevons (more demand), tilts value to application layer ([[CrowdStrike]]/[[ServiceNow]]), bifurcates memory (HBM + GDDR7). Honesty: architecture sourced, "expands pie → app wins" read-through partly inferred.
- reframed core syntheses around the keynote as the anchor:
  - [[Capex trajectory thesis]] — added "demand is now an ORDER BOOK not a forecast" reframe: $1T purchase orders + server-plant/CoWoS/HBM4 reservation + roadmap to Feynman 2028 → pushes ~90%-through-2027 to high end, extends visibility to 2028
  - [[AI investment momentum tracker]] — verdict re-anchored 2026-06-01 to the keynote (forecast→backlog); raises the floor
  - [[Bottleneck ranking (May 2026)]] — HBM intensity escalates (288GB→1TB/GPU + exclusive HBM4); Rubin CPX bifurcates memory (HBM+GDDR7); Kyber 600kW racks make 800VDC+cooling roadmap-confirmed
  - [[AI infrastructure investment map (May 2026)]] — spine redrawn as the keynote value chain (demand order book → silicon → NEW production/ODM layer → power/cooling → NEW inference economics → NEW client/N1X)
  - [[Capex bust scenario]] — order book trims near-term bust prob toward ~20% low end BUT raises concentration risk (single-vendor order book; POs cancellable; 2028+ ROI reckoning on a more levered/concentrated base)
- wiki: syntheses +1 (Disaggregated inference)

## [2026-06-01] schema | Capstone synthesis "AI value capture across the stack" + CRWD/NOW narrative re-run
- user: do both — build the value-capture capstone AND re-run the CRWD+NOW narrative with the Rubin CPX demand backbone
- created: [[AI value capture across the stack]] — opinionated capstone. View: value accrues to chokepoints, not to whoever's closest to the user. Framework: **rent = concentration × indispensability × capacity-constraint** (NOT revenue size — Foxconn $83B/qtr captures less rent than SK Hynix memory or ASML lithography). Layer map: infra tolls (memory/NVIDIA/TSMC-CoWoS/ASML/EDA) = durable HIGH rent; frontier labs = highest-rent-but-LEAST-durable (open-weights swing factor, [[P3 Institute - Open Source to Open Weights (2026)]]); application = stock-picker's layer (captured ~half per Menlo but fragmented + contested). Crux: does value migrate UP to labs ([[SemiAnalysis - AI Value Capture (2026)]]) or stay distributed ([[Menlo - State of Enterprise AI (2025)]])? Rubin CPX tilts it to the app layer.
- updated: [[2026-06-01 CRWD + NOW]] narrative — appended "Re-run 2026-06-01 (Computex reframe)" section. L6 (infra→app read-through) re-scored INFERRED → MECHANISTICALLY SOURCED via [[Disaggregated inference (Rubin CPX)]] (cheaper long-context agent inference → Jevons → more agentic surface for CRWD/NOW). Cuts both ways: bull (bigger cheaper surface + value-tilts-to-app) vs bear-unchanged (fragmented/contested layer — MSFT Agent 365, Okta, seat-erosion). Forward confidence upgraded low-moderate → moderate.
- cross-linked: [[Disaggregated inference (Rubin CPX)]], [[CrowdStrike]], [[ServiceNow]] → capstone; index.md Syntheses section +1
- wiki: syntheses +1 (AI value capture across the stack); narratives updated (CRWD+NOW re-run)

## [2026-06-01] ingest+schema | Computex keynote — second search pass (social/analyst) + forward synthesis
- user: look for more analysis of the NVIDIA Taiwan keynote on social/X, then deep-dive synthesis on the future progression of AI
- updated: [[NVIDIA Computex 2026 Keynote]] — added "Social/analyst follow-up" section from second search pass (ServeTheHome, Tom's HW, TechRadar, Morgan Stanley, SemiAnalysis "Inference Kingdom Expands", GlobalDataCenterHub, TheNextWeb). New sourced details: "compute is revenue / AI is a GDP generator"; **Revenue = (tokens/watt) × gigawatts**; 1-GW factory ~$100B → ~$150B/yr; **Five-Layer Cake**; Vera Rubin full production, ~3.5× train / ~5× infer, ~1/7 MoE token cost; Vera CPU 3nm 1.8× agentic; "largest networking company"; Nemotron 3 Ultra, Agent Toolkit + OpenShell (security = gating issue); robotics (Jetson Thor, Isaac GROOT, Cosmos 3, Alpamayo reasoning-AV); N1X (70B transistors, 6,144 CUDA, MediaTek); **$150B/yr in Taiwan ("epicentre")**; SemiAnalysis forward — **CPU scaling = emerging bottleneck** (Vera ETL256), Attention-FFN Disaggregation. Reconciled component count (1.3M board vs ~2M total parts / 150 partners).
- created: [[Future progression of AI (2026 view)]] — opinionated forward time-axis synthesis. **Four phases** (scaling→reasoning→**agentic/industrialization (now)**→physical AI); thesis: capability is **deployment-gated, not research-gated** — binding constraints are power/HBM/CPU/cost-per-token, not algorithms. Crux: does **Jevons** (cheaper inference → more demand) hold past 2027? Bull through 2027 high-confidence, 2028+ open (agent unit economics + [[Capex bust scenario]]). Open weights = swing factor (commoditizes labs, infra tolls win either way). Leading-indicator table + tradable read (core tolls / phase-3 agentic / phase-4 physical-AI option value).
- cross-linked: keynote ↔ both syntheses; capstone ↔ forward synthesis (layer-axis ↔ time-axis); index.md Syntheses +1
- wiki: syntheses +1 (Future progression of AI); sources updated (keynote)

## [2026-06-01] schema | Telegram consolidated to single "AI Synthesis Tracker" feed
- user: want Telegram to be recent news ON the syntheses, not current-state snapshots → chose "consolidate into one feed"
- routines: repurposed **AI Market Regime Monitor → AI Synthesis Tracker** (trig_0162nssfTjTdw4M8cCZmLKT8, daily 23:00 UTC / 9am Brisbane). New job: scan recent news (~2 days) against the synthesis pages' leading indicators + falsifiers; report only thesis movement CONFIRM(^)/CHALLENGE(v)/BREAK(x); subject `AI Synthesis Tracker {date}: {N} thesis updates`. Tracks: Future progression, Value capture, Disaggregated inference, Capex trajectory/bust, Bottleneck ranking, CRWD+NOW.
- **disabled**: AI Infra Daily Pulse (trig_01QAyouMLcYiXD3vNBTHKWL7) + AI Narrative & Findings Scout (trig_0167fvo4VoZrdNbzBF37JmSW)
- relay: added 'AI Synthesis Tracker' to SUBJECT_MATCHES in tools/telegram-relay.gs → **requires one-time re-paste of that array into the deployed Apps Script** (don't overwrite the token line)

## [2026-06-01] schema | New routine: Keynote Narrative Scout (social-insight mining)
- user: automate a daily query search across X/fintwit, Reddit, Substack for credible posts building on each keynote narrative thread (CPU, physical AI, software/application, etc.)
- created routine **Keynote Narrative Scout** (trig_01MJmhckpXPaKBT3Hj8sJ7c4, daily **02:00 UTC = 12pm Brisbane**, chosen to land after a full US social-posting day). Mines X/Reddit/Substack per keynote thread (9 threads: CPU/Vera, physical AI, software/app, inference econ, HBM, networking, power/AI-factory, Taiwan, demand/order-book), credibility-filters to known experts/original analysis, groups by thread, flags STRESS-TEST claims, suggests ingest-worthy sources. Anchored to wiki/sources/NVIDIA Computex 2026 Keynote.md so the thread list stays in sync.
- delivery: Gmail draft → relay → Telegram; subject `AI Narrative Scout {date}: {N} insights` — **reuses the 'AI Narrative' relay match, so NO Apps Script change needed**.
- active Telegram feeds now: (1) AI Synthesis Tracker 23:00 UTC (thesis movement), (2) Keynote Narrative Scout 02:00 UTC (social insight by thread). All other daily routines disabled.

## [2026-06-01] ingest+schema | Fill the thinnest narrative gaps: Physical AI + Application layer + Open weights
- user: build information around the narratives; chose to fill Physical AI & robotics + Application layer + open-weights (the 🔴/🟠 gaps from the gap audit)
- new LAYER pages: [[Physical AI & robotics]] (Phase-4 demand front; Jensen $40T humanoid TAM, NVDA physical-AI rev >$9B TTM; own the NVDA stack tolls, pure-plays mostly private), [[Application & software]] ("stock-picker's layer"; frontier labs + agentic SaaS; selection rule = data/ontology/identity moats agents can't route around)
- new SYNTHESIS: [[Open-weight commoditization (the swing factor)]] — de-single-sources the swing factor (was P3-only). Open-weight ~5% off closed frontier on code/reasoning → commoditizes model layer → value migrates to infra tolls + data-moat apps; barbell (open wins commodity tier, closed holds frontier tier). Outcome-robust case for "own the tolls".
- new COMPANIES: [[Tesla]] (Optimus, listed pure-play), [[Figure AI]] ($39B, BMW fleet), [[Unitree Robotics]] (China volume leader), [[Salesforce]] (Agentforce $800M ARR +169%), [[Palantir]] (AIP/ontology moat; financials to verify)
- new SOURCES: [[Physical AI & humanoid landscape (2026)]], [[Open-weight frontier parity (H1 2026)]], [[Salesforce Agentforce Q4 FY26 (2026)]] (all search-sourced, figures VERIFY)
- cross-linked: index.md (Layers +2, Syntheses +1, Companies +5, Sources +3); back-links from [[AI value capture across the stack]], [[Future progression of AI (2026 view)]], [[NVIDIA]] (physical-AI line), [[CrowdStrike]]/[[ServiceNow]] (layer link)
- closes the 2 largest gaps from the audit (🔴 Physical AI was near-zero; 🟠 Application had only 2 names; open-weights was single-sourced). Still open: Taiwan geo page, CPU-scaling bottleneck, AI-factory-economics synthesis, networking synthesis.

## [2026-06-01] ingest+schema | Fill CPU-scaling + AI-factory-economics gaps (in depth)
- user: fill CPU scaling + AI factory economics, in depth
- new BOTTLENECK: [[CPU scaling (host-CPU ratio)]] (severity watch, layer compute) — agentic/RL workloads are CPU-bound (orchestration, tool calls, data loading) → host CPU caps GPU utilization; CPU:GPU ratio shifting toward **1:1–1:2** (large under-modeled CPU-TAM expansion). NVDA Vera ETL256 (256 CPUs/rack) + Vera "CPU for agents" (88 Olympus Arm cores, 1.8× vs x86, 2× perf/watt) routes the new CPU rent to **Arm/NVDA**, erodes merchant x86 ([[Intel]]/[[AMD]]). Beneficiaries NVDA/[[ARM Holdings]]/[[TSMC]].
- new SYNTHESIS: [[AI factory economics (tokens per watt)]] — the buildout's organizing economic frame. Revenue = (tokens/watt) × GW → **power = the revenue denominator**; $100B/GW → ~$150B/yr; Morgan Stanley 100-MW model >50% margin ("NVIDIA or Huawei"), NVDA $5M GB200→$75M (15×). Honest crux: it's a **supply-side metric** — says nothing about whether demand clears at price (price-erosion, "dark output", the [[Capex bust scenario]] gap). Trust realized margin, not advertised tokens/watt.
- new SOURCE: [[AI factory tokenomics (2026)]] (token-economics framing + MS model + pricing tiers + skeptic side; figures VERIFY).
- cross-linked: index.md (Bottlenecks +1, Syntheses +1, Sources +1); [[Bottleneck ranking (May 2026)]] (CPU scaling added to tradable-read as emerging/watch); [[NVIDIA Computex 2026 Keynote]] anchor list +2. Still open: Taiwan geo page, networking/interconnect synthesis.

## [2026-06-01] ingest | Deepen CPU scaling + AI factory economics (second pass)
- user: continue building out cpu scaling and ai factory economics
- new SOURCES: [[Datacenter CPU landscape (2026)]] (server-CPU TAM re-rating: >4× CPU/GW, AMD >$120B-by-2030, Arm $100B TAM; **Arm ~50% of hyperscaler CPU compute**; Graviton/Axion/Cobalt + Arm AGI CPU; Intel share 52→43.9%), [[AI datacenter cost stack & token demand (2026)]] (1-GW cost stack capex $35-80B / GPU ~39% / TCO ~$8.5B-yr; **GPU-depreciation debate** Burry $176B + H100 +137%→−34% ROI; **demand side** Gartner $207B agent spend +139% but 73% over budget + Uber sticker-shock)
- expanded [[CPU scaling (host-CPU ratio)]]: added sized TAM section, the custom-silicon land-grab (Arm 50% + AGI CPU + hyperscaler Arm), refined beneficiaries (ARM = pure-play; Intel most exposed 52→43.9%; AMD mixed)
- expanded [[AI factory economics (tokens per watt)]]: added the cost stack ($/GW range + capex/TCO mix), the depreciation question (front-loaded ROI, Burry/Nadella, Amazon vs Meta split, bend-don't-break), and the demand-side "who buys the tokens" section (Gartner $207B vs sticker shock — the demand test for the supply-side metric)
- cross-linked: index Sources +2; [[ARM Holdings]] (CPU-scaling pure-play line)

## [2026-06-01] lint | Update narrative-gaps tracker (post-build refresh)
- user: update narrative gaps
- created [[narrative-gaps]] (wiki/_meta/) — living coverage dashboard across the 9 keynote threads + cross-cutting theses; 🟢/🟡/🔴 status, anchor pages, remaining gap, ranked next-to-build, quality/freshness gaps, changelog.
- post-build status: **5 threads filled today** (CPU scaling, AI-factory economics, Physical AI, Application layer, Open-weights). Remaining: **Taiwan geo page (🔴, #1 hole), Networking/interconnect synthesis (🟡), test-time-compute/reasoning page (🟡)**, Physical-AI supplier depth (🟡).
- index.md: added [[narrative-gaps]] pointer under maintenance.

## [2026-06-01] lint | Primary-verification pass on highest-stakes VERIFY figures
- user: verify the tagged figures + pull the filings
- pulled primaries: NVIDIA newsroom (Rubin platform) + dev blog (Vera CPU); Epoch AI 1-GW TCO; Salesforce Q4 FY26 press release; Palantir Q1 2026 release.
- **✅ verified → upgraded from VERIFY to primary:** NVIDIA Rubin in **full production** (partners H2'26), **10× inference token-cost** + **4× fewer GPUs for MoE training**, **50 PFLOPS NVFP4/GPU**, NVL72 = 72 Rubin + 36 Vera @ 260 TB/s (72×50=3.6 EFLOPS ✓); Vera CPU 88 Olympus / 1.2 TB/s / 1.5 TB LPDDR5X SOCAMM / 2× perf-watt / >22.5K sandboxes; Epoch 1-GW **$38B capex / $8.5B-yr TCO / 5yr-IT-14yr-facility**; Salesforce **Agentforce $800M (+169%)**, **Agentforce+Data360 $2.9B (+200%, incl $1.1B Informatica)**, Q4 rev $11.2B; Palantir Q1'26 **$1.6B (+85%), US +104%, RPO $4.45B, NDR 150%**, FY26 guide $7.7B.
- **⚠️ corrections (secondary was wrong):** Vera CPU **1.8× → up to 1.5×** agentic-sandbox vs x86 (NVIDIA primary); Epoch energy **$1.3B → $0.6B/yr**; Salesforce combined ARR **~$1.8B → $2.9B** (+ dropped wrong "$2.1B Data Cloud" / "+114% AI platform").
- **still secondary (not pulled):** NVDA 288GB HBM4 / perf-watt / component count / Rubin-Ultra-Feynman roadmap; CPU TAM (AMD/Arm/Intel-share); MS 100-MW model + token tiers + $40T TAM + Gartner $207B; physical-AI valuations.
- updated: [[Salesforce]], [[Salesforce Agentforce Q4 FY26 (2026)]], [[Palantir]], [[NVIDIA Computex 2026 Keynote]], [[CPU scaling (host-CPU ratio)]], [[AI factory economics (tokens per watt)]], [[AI datacenter cost stack & token demand (2026)]], index.md, [[narrative-gaps]].

## [2026-06-01] ingest | NVIDIA Computex keynote — ServeTheHome live coverage (image/slide processing)
- user: ingest the ServeTheHome live coverage; process the visual pictures/diagrams/ecosystem charts
- downloaded 17 keynote **slide images** to raw/assets/ and **read them visually**; created [[NVIDIA Computex 2026 Keynote - ServeTheHome Live (2026)]] (eyewitness liveblog + image-extracted data, with embedded slides).
- **image-verified off the actual slides:** full **Vera CPU spec sheet** (88c/176t Olympus Armv9.2, 10-wide, 2MB L2/164MB L3, 250–450W, 1.2 TB/s LPDDR5X ECC, 40% lower loaded latency, 3.4 TB/s C2C, 1.4 TB/s PCIe Gen6, 1.8 TB/s NVLink-C2C, 3× SQL); **"Compute is Revenue" 4-lever framework** (tokens/watt · TTFT · MTBI · **useful life ← CUDA installed base**); **DSX** AI-factory platform + **MaxLPS/Flex** power software; the **DSX ecosystem partner map** (energy/cooling, design/construction, compute, clouds — confirms GE Vernova/Vertiv/Eaton/Schneider/Cadence/Foxconn/CoreWeave etc.); **Vera early adopters OpenAI/Anthropic/SpaceX**; **Cosmos Coalition** (Agile Robots, Black Forest Labs, Generalist, LTX, Runway, SKILD AI); **Cadence Super Agent** (agentic chip design).
- **reconciled the Vera perf figure:** keynote slide = **"1.8× agentic sandbox vs x86"** (compilation 1.7× / Python 1.9×); dev blog = **~1.5× full-socket** → both NVIDIA, different conditions (un-did the earlier over-correction to flat 1.5×).
- updated: [[NVIDIA Computex 2026 Keynote]] (Vera full spec + DSX + Cosmos Coalition + 1.8/1.5 reconcile), [[CPU scaling (host-CPU ratio)]] (full Vera spec + adopters), [[AI factory economics (tokens per watt)]] (4-lever framework + DSX + NVIDIA useful-life rebuttal to depreciation bear), [[Physical AI & robotics]] (Cosmos Coalition), index.md, [[narrative-gaps]].
- raw: +17 slide images in raw/assets/.

## [2026-06-01] ingest+synthesis | Vera demand projection + DSX/Vera demand-vehicle names
- user: pull info on the DSX/Vera names; project Vera's demand
- pulled (WebSearch): NVIDIA **~$20B standalone Vera revenue FY27** (Jensen: excludes Vera-bundled-with-Rubin), **$200B TAM**, analyst **~4M Vera CPUs FY27** + potential **⅔ x86 share**; Rubin rack ramp **~30k (2026) → ~100k (2027)**, NVL72 = 72 Rubin + 36 Vera, BOM ~$7.8M; neocloud demand (CoreWeave $66.8-99.4B backlog/Meta $35.2B, Nscale ~200k GB300, Lambda MSFT deal, Crusoe 45GW); Arm AGI CPU comparator (>$2B FY28, $15B 2031).
- built **Vera demand projection (FY27)** section on [[CPU scaling (host-CPU ratio)]]: two pools — (1) **bundled attach** ~3.6M units/yr at 100k Rubin racks (near-certain, in the order book) + (2) **standalone $20B bet** on the CPU-scaling thesis (ETL256 racks). Base/bull/bear + "watch standalone bookings" tell; demand vehicles = OpenAI/Anthropic/SpaceX + neoclouds.
- new company pages: [[Nebius]], [[Lambda]], [[Nscale]] (neocloud Vera demand channels; figures VERIFY). updated [[CoreWeave]] (Meta $35.2B + Vera/DSX tag), [[Crusoe Energy]] (45GW + Vera/DSX tag).
- index: +3 neoclouds; CoreWeave line refreshed.

## [2026-06-01] lint | Tag DSX-confirmed energy/cooling + design partners
- user: tag the energy/cooling DSX partners as confirmed NVIDIA AI-factory partners
- added a "Confirmed NVIDIA DSX AI-factory partner" callout (citing [[NVIDIA Computex 2026 Keynote - ServeTheHome Live (2026)]]) to: [[GE Vernova]], [[Vertiv Holdings]], [[Eaton]], [[Schneider Electric]], [[ABB]], [[Delta Electronics]], [[Trane Technologies]] (Energy & Cooling) and [[Cadence Design Systems]] (Design & Construction — + the **Cadence Super Agent** agentic-chip-design launch, an EDA-disruption watch).
- compute ODMs (Foxconn/QCT/Supermicro/Wistron/Wiwynn/Asus/GMI) already covered as NVIDIA supply-chain pages — not re-tagged.

## [2026-06-02] schema+ingest | Synthesis Tracker financing/X fix + ingest Google $80B raise & Anthropic S-1
- user: why did the tracker miss Google $80B raise + Anthropic S-1? proceed with run + ingest; add X scan
- DIAGNOSIS: tracker ran 2026-06-01 23:02 UTC and DID work (caught Anthropic $65B/$965B raise, MiniMax M3, credit-spread divergence). Missed the two exact items due to (a) timing — both broke Jun 1, single run at 23:02 UTC, WebSearch indexing lag on same-day news; (b) no dedicated capital-markets/financing trigger (caught financing only incidentally via credit channel).
- FIX (trig_0162nssfTjTdw4M8cCZmLKT8): added CAPITAL MARKETS / FINANCING trigger (IPOs/S-1s, hyperscaler mega-raises, lab funding/valuations, bond+equity issuance) + reads [[Capital flows & deal structures]] + [[AI debt financing capacity]] + financing search queries + an **X/fintwit `site:x.com` breaking-news sweep** (with honest caveat: Google indexes X with lag, not real-time; true real-time needs an X API the CCR sandbox can't reach). Triggered a manual validation run.
- INGESTED: [[Alphabet $80B AI equity raise (2026)]] (equity not debt → de-risks debt-bust; Berkshire $10B; first raise since 2005) + [[Anthropic draft S-1 IPO filing (2026)]] (IPO ~Oct, ~$1T, ARR $47B → value-capture-at-labs + rebuts no-revenue bear).
- updated: [[Alphabet]], [[Anthropic]], [[Capital flows & deal structures]] (AI IPO race + funding-mix shift), [[Capex bust scenario]] (equity-funding counterweight callout), [[AI investment momentum tracker]] (+2 financing ledger rows), index.md, ingested-sources.md.

## [2026-06-02] schema | Add tools/x-watcher.gs — real-time X→Telegram watcher (companion to relay)
- user: proceed (build the X-API watcher for sub-hour breaking news)
- created tools/x-watcher.gs: Google Apps Script that polls X API v2 recent-search for a curated handle list (deal-breakers + principals + analysts), keyword-gates client-side, dedupes via since_id, forwards fresh posts to Telegram every ~5 min. Reuses the relay's bot token.
- HONEST CONSTRAINT documented in-file: requires a PAID X API v2 Bearer Token (Free tier read cap unusable; Basic ~$200/mo). This is the only path to sub-hour X alerts since the CCR sandbox has no egress; the routines' free site:x.com sweep remains the ~1-day fallback.
- repo copy uses placeholders; tokens live only in the user's Apps Script.

## [2026-06-02] narrative | Pivot CRWD+NOW → "Cybersecurity in the AI era" (identity as new perimeter)
- user: change the CRWD+NOW narrative to cybersecurity relating to AI
- created narratives/2026-06-02 AI cybersecurity.md (generative, tagged). Thesis: AI is a dual force — escalates attacker capability (Anthropic 80-90% autonomous attack) AND explodes the attack surface (machine:human identity 45-100:1) → security becomes a gating requirement → battleground shifts to IDENTITY. Beneficiaries = identity-chokepoint consolidators: PANW (+CyberArk $25B, Feb 2026), CRWD (Next-Gen Identity + SGNL), Okta (Okta for AI Agents, Apr 30). Backbone ~5 sourced (demand + identity land-grab) / 3 inferred (winner-picks, net-additive, durability). NEW contradiction surfaced: autonomous SOC = AI automating the defenders (security eats itself).
- broadens & supersedes [[2026-06-01 CRWD + NOW]] on the security axis (kept for the ServiceNow half + as record); added pivot pointers both ways.
- updated: narratives/README.md index (+ new entry, supersede note), [[CrowdStrike]] narrative link.
- external candidates to ingest: PANW-CyberArk $25B close, Okta for AI Agents, agentic-AI-security TAM $1.65B->$13.5B.

## [2026-06-03] ingest | AI-cybersecurity beneficiary pages + PANW-CyberArk / Okta-for-AI-Agents sources
- user: proceed (spin up beneficiary pages + ingest the two external anchors for the AI cybersecurity narrative)
- new COMPANY pages: [[Palo Alto Networks]] (platform consolidator + identity giant; FY26 NGS ARR ~$8.5B +53%; closed $25B CyberArk → Idira), [[Okta]] (pure-play identity; Okta for AI Agents GA Apr 2026; FY26 rev $2.92B; agent rev = FY28-29 story), [[CyberArk]] (PAM/machine-identity; absorbed into PANW), [[Zscaler]] (zero-trust/SSE; Q3 FY26 ARR $3.5B +25%), [[SentinelOne]] (AI-native XDR; Purple AI = autonomous SOC → the "security eats itself" double-edge; FY26 rev $1.0B). Figures VERIFY.
- new SOURCE pages: [[Palo Alto Networks - CyberArk acquisition (2026)]] (~$25B, closed Feb 11 2026, largest cyber deal; Idira launch May 12), [[Okta for AI Agents (2026)]] (GA Apr 30 2026; FY26 rev $2.92B; monetization FY28-29).
- de-inferred narrative L5: [[2026-06-02 AI cybersecurity]] now cites the new wiki source pages (identity land-grab = wiki-grounded, not external); moved PANW/Okta from external to grounded.
- index: +6 cyber companies (new AI-cybersecurity subsection) + 2 sources.

## [2026-06-03] schema | Telegram reply-to-ingest loop (tools/telegram-inbox.gs + CLAUDE.md workflow)
- user: how to validate/ingest by replying to the Telegram bot when a scout sends a message
- design: two-step loop (Telegram reply = flag; local Claude Code run = action), because CCR routines can't WebFetch/commit. Queue = a Gmail draft (no new creds).
- created tools/telegram-inbox.gs: Apps Script polls Telegram getUpdates (1-min), parses replies (ingest/validate/skip/note/file [+ item], captures reply_to_message as target), queues each as a Gmail draft "AI INGEST QUEUE:", ACKs back to Telegram. Reuses the relay's bot token + Gmail.
- added CLAUDE.md workflow "Process the ingest queue": list_drafts subject:"AI INGEST QUEUE" → cross-ref the scout draft for the URL → supervised ingest/validate/skip → delete queue draft.
- repo copy uses placeholders; one-time setupInbox() on the user's side.

## [2026-06-03] schema | Fully-automated Telegram reply-to-ingest (GitHub Action + dispatch)
- user: make reply-to-ingest fully automated
- architecture: Telegram reply → tools/telegram-inbox.gs fires GitHub repository_dispatch → .github/workflows/ingest.yml runs headless Claude Code in CI (full repo context + WebFetch + commit) → opens a PR → pings Telegram with the link. (Cloud routines can't do this — no WebFetch/egress/commit; GitHub Actions can.)
- created .github/workflows/ingest.yml (repository_dispatch type telegram-ingest; installs Claude Code, runs `claude -p` headless to ingest/validate per CLAUDE.md, peter-evans/create-pull-request opens the PR, curl pings Telegram). Secrets: ANTHROPIC_API_KEY, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
- upgraded tools/telegram-inbox.gs: ingest/validate → fireDispatch (needs a fine-grained GitHub PAT, Contents RW) with the matched scout-draft body (URLs) as payload; skip/note/file → Gmail-queue log.
- updated CLAUDE.md "Process the ingest queue": ingest/validate now CI-automated (PR-by-default, auto-merge opt-in); skip/note/file = local.
- HONEST: PR-by-default (review gate for VERIFY figures) — flip to auto-merge for true zero-touch; each ingest = a pay-per-use Anthropic API run. Repo copies use placeholders.

## [2026-06-03] ingest | Navitas (NVTS) 800V→6V GaN PDB at NVIDIA MGX → 800VDC transition
- user: NVTS showcased an 800V-to-6V AI server power board at NVIDIA AI Factory MGX (Computex); 97.5% peak eff, removes the 48V intermediate bus
- created [[Navitas Semiconductor]] (NVTS; GaN/SiC pure-play; in NVIDIA MGX 800VDC ecosystem; 800V→6V GaNFast PDB 97.5%/1MHz/2100 W-in³, 16 GaNFast FETs, removes 48V IBC = on-blade point-of-load for Phase 2 Kyber; Q1 FY26 rev $8.6M, loss-making, $122M ATM raise; high-beta/speculative vs POWI/Infineon) + source [[Navitas - 800V-6V PDB at NVIDIA MGX (2026)]].
- updated [[800VDC transition]] (added Navitas to semiconductor enablers; bumped updated date + sources), index.md (+NVTS company), ingested-sources.md. Figures VERIFY.

## [2026-06-03] schema | On-blade DC-DC socket comparison (POWI vs Infineon vs Navitas) on 800VDC page
- user: add a side-by-side of the on-blade DC-DC socket players
- added "The on-blade DC-DC socket (contested)" subsection to [[800VDC transition]]: comparison table (profile, GaN device class, architecture fit, on-blade product, NVIDIA status, scale/profitability, risk-reward) for [[Power Integrations]] / [[Infineon]] / [[Navitas Semiconductor]]. Key insight: the ±400V-bipolar (650V GaN, Infineon/Diablo-400) vs 800V-monopolar (1250/1700V, POWI) architecture fork decides who takes the volume socket; conviction ladder POWI > Infineon > Navitas. Figures VERIFY.

## [2026-06-03] ingest+synthesis | Broadcom Q2 FY26 → built Networking & interconnect synthesis (closes last 🟡 gap)
- user: validate AVGO transcript notes + assess thesis → proceed with all four
- validated user's notes against the Q2 FY26 transcript (all confirmed): $100B+ FY27 *reiterated not raised* (→ +0% week); "demand for XPUs and networking insatiable"; networking ~40% of AI semi + rich margins while XPU compresses; visibility to 2028 (2028>2027), >$30B bookings; OpenAI silicon delivered/late-2026 prod → 1.3GW '27 / 10GW '29; Meta 1GW order delivery H2'27 → 3GW '28; Google multi-gen TPU + "diversity of sources". New: Q2 AI semi $10.8B (+143%), Q3 guide $16B (+200%), record 67% op margin, **$35B Apollo/Blackstone compute-financing platform**.
- created [[Broadcom Q2 FY26 earnings (2026)]] source; updated [[Broadcom]] (Q2 section + answered the old margin open-question: networking rich / XPU compresses; Apollo platform).
- **built [[Networking & interconnect]] synthesis** (closes the last 🟡 narrative gap): own the interconnect toll not the accelerator volume; both NVDA ("largest networking co") + AVGO ("networking insatiable, rich margins") confirm; scale-up/scale-out/optics/CPO map (Broadcom/Marvell/Astera/Coherent/Lumentum); robust to merchant-vs-custom war; demand grows faster than compute via disaggregation.
- updated [[AI value capture across the stack]] (+Networking row = HIGH toll), [[AI investment momentum tracker]] (+1 Broadcom 2028-visibility row), [[narrative-gaps]] (networking gap → 🟢 done), index.md (+synthesis, +source, Broadcom line refreshed). Figures VERIFY.

## [2026-06-03] schema | Close AVGO read-through threads: Apollo/Blackstone $35B platform + MediaTek Google-TPU angle
- user: proceed (close the two remaining Broadcom read-throughs)
- [[Capex bust scenario]] §3 circular financing + [[Capital flows & deal structures]] private-credit: added the **Broadcom + Apollo + Blackstone $35B AI-XPU compute-financing platform** (20+ GW by 2028) — private credit underwriting custom silicon = the XPU analog to neocloud project finance; demand-to-2028 partly financed into existence (only as solid as labs' ability to pay).
- [[MediaTek]]: added **Front 2 — Google TPU** (co-develops Ironwood/TPU v7 with Broadcom on TSMC N3P; Google split Broadcom=training / MediaTek=inference / Marvell=edge = "diversity of sources"); the bigger-TAM datacenter thread vs N1X; memory ≈50% of XPU cost. Index line refreshed.

## [2026-06-03] query+ingest | 7-name rundown: ON/TER/QCOM/MRVL/AEHR/CLS/NOK + Semiconductor-test synthesis
- user: go through $ON $TER $QCOM $MRVL $AEHR $CLS $NOK thesis → ingest all
- validated each via search; sorted into tolls / cyclicals / options.
- new SYNTHESIS [[Semiconductor test (the AI test toll)]]: ATE duopoly (Teradyne + Advantest) + burn-in (Aehr); AI raises test intensity per chip (HBM KGD, multi-die SLT); concentrated + indispensable + robust-to-silicon-war = toll.
- new COMPANY pages: [[Teradyne]] (test duopoly, >50% HBM-stack test share, ~70% AI-rev, UR cobots), [[Aehr Test Systems]] (micro-cap AI burn-in, 3.5x book-to-bill, speculative), [[Celestica]] (EMS/ODM, FY26 $19B guide, HPS +63% hyperscaler switches; thin-rent/priced), [[onsemi]] (SiC/GaN 800VDC, $50k→$100k/MW content, auto-cyclical), [[Nokia]] (Infinera optical/DCI + AI-RAN, NVDA $1B stake, Nscale; RAN drag), [[Qualcomm]] (AI200/AI250 DC-inference late entry; lost WoA to N1X/MediaTek).
- updated [[Marvell Technology]] (Q1 FY27 record $2.418B, FY28 raised to $16.5B, custom XPU >2x w/ new Tier-1 program locked, Jensen "$1T networking" endorsement).
- cross-linked: [[800VDC transition]] (+onsemi), [[Networking & interconnect]] (+Nokia optical/DCI, +Celestica switch-build), [[Physical AI & robotics]] (+Teradyne/UR cobots); index +1 synthesis +6 companies. All figures VERIFY.
- conviction: tolls TER/MRVL > cyclicals CLS/ON > options NOK/AEHR/QCOM.

## [2026-06-03] ingest | Advantest — completes the semiconductor-test toll layer
- user: proceed (add Advantest)
- created [[Advantest]] (6857.T / ATEYY): the purest AI-test toll — ~70% of AI-chip testing (VERIFY), HBM/SoC-tester leader; FY26 guide ~$9B (+26%); SoC-tester market $8.7-9.5B CY26 (+32%); Blackwell + HBM3E/HBM4 test intensity = the moat. Cleaner pure-play than Teradyne (no robotics/handset dilution).
- updated [[Semiconductor test (the AI test toll)]] (Advantest now wikilinked + promoted to lead the quality-toll read), [[Teradyne]] (duopoly-peer link), index (+Advantest). VERIFY.

## [2026-06-03] verify+ingest | Goldman $5.3T/$7.6T capex (VERIFIED) + chokepoints + Phase 5 + cleanest-tolls framework
- user: verify Goldman capex; proceed+ingest; elaborate Phase 5; list cleanest tolls
- VERIFIED: Goldman raised 4-hyperscaler 2025-30 capex to **$5.3T (from $4.5T pre-Q1)**; **$7.6T aggregate 2026-31**; 2026 ≈ $725B (+77%). Confirmed correct.
- created [[Goldman - Hyperscaler capex $5.3T-$7.6T (2026)]] source; updated [[Capex trajectory thesis]] §9 (multi-year revision, estimates≠spend caveat) + momentum-tracker (+1).
- CHOKEPOINTS (new company stubs): [[Sivers Semiconductors]] (SIVE, InP CPO laser source — Tier-3 architecture bet), [[Soitec]] (SOI, Photonics-SOI substrate), [[Harmonic Drive Systems]] (6324.T, strain-wave reducer = humanoid joint; +Leaderdrive). Wired into [[Networking & interconnect]] (CPO laser/substrate sub-layer) + [[Physical AI & robotics]] (actuator picks-and-shovels — closes the flagged gap).
- PHASE 5 "Discovery (AI-for-science)" added to [[Future progression of AI (2026 view)]]: agents→physical AI→**discovery** (generate new knowledge: drugs/materials/science); the terminal compute sink + GDP payoff; hardest to play directly (compute tolls capture it); most speculative/back-loaded (bear).
- CLEANEST-TOLLS framework added to [[AI value capture across the stack]]: robust to BOTH the silicon war AND the architecture-within-optics fork. **Tier 1 (cleanest, upstream of both): TSMC, HBM, packaging/CoWoS, test (Advantest/Teradyne), EDA, ASML.** Tier 2: networking/optical-DSP (Broadcom/Marvell). Tier 3 (architecture bets): Sivers, Soitec, voltage-class power. NVIDIA fails fork 1.
- index +1 source +3 companies; figures VERIFY.

## [2026-06-03] ingest | Expand the 4 toll layers: +2 syntheses +14 companies (packaging/WFE/test/interconnect)
- user: list more companies from the 4 toll layers → ingest all
- grounded via search; built 2 new syntheses + 14 company pages (figures VERIFY).
- new SYNTHESES: [[Advanced packaging & OSAT (the AI packaging toll)]] (CoWoS sold-out → ASE/Amkor gatekeepers; hybrid bonding BESI the frontier; TCB Hanmi/ASMPT; metrology Camtek/Onto; bonding tools = cleaner toll than OSAT; incumbent share contestable), [[WFE & process control (the equipment toll)]] (ASML+Lasertec monopolies + KLA + WFE-5 + Entegris materials; robust-to-both-forks but cyclical to wafer capex).
- new COMPANIES: [[ASE Technology]] (44.6% pkg share, $7B capex), [[Amkor]] ($2B AZ), [[Hanmi Semiconductor]] (>90% HBM3E bonders, diversifying), [[ASMPT]] (TCB +146%, SK Hynix HBM4), [[BESI]] (hybrid-bonding leader, Micron HBM4), [[Kulicke & Soffa]], [[Camtek]] (>$105M AI orders), [[Onto Innovation]], [[Lasertec]] (~100% EUV mask inspection), [[FormFactor]] (probe-card leader, HBM4 wear cycle), [[Amphenol]] (connectors, +43-45%), [[Credo Technology]] (AEC +272%), [[Fabrinet]] (optical EMS, 1.6T), [[Entegris]] (materials/consumables).
- cross-linked: [[Networking & interconnect]] (+copper/AEC/optical-EMS rows), [[Semiconductor test (the AI test toll)]] (+FormFactor), [[AI value capture across the stack]] Tier-1 cleanest-tolls (+Lasertec, +BESI/ASE/Amkor, +FormFactor, +WFE note); index +2 syntheses +14 companies.
- caveat: deeper layers (WFE/materials/OSAT) are cyclical to total wafer capex, not pure AI; all search-sourced VERIFY.

## [2026-06-03] ingest | Goldman humanoid ecosystem map → Physical AI component-enabler map
- user: shared Goldman "Exhibit 2" humanoid map image (makers vs enablers); analyze + ingest
- created [[Goldman - Humanoid robot ecosystem map (2026)]] source (full taxonomy: ~40 makers / ~80 enablers verbatim).
- added the **component-enabler map** to [[Physical AI & robotics]] (foundation models / GPU-CPU / rotary+linear+dexterous actuators / sensors / vision-LiDAR / batteries; listed standouts bolded) — closes the actuator/sensor-supplier gap.
- key reads: makers mostly private+Chinese → own the enablers (actuators ~½ BOM); **LeaderDrive spans all 3 actuator categories** (multi-actuator China champion vs Japan rotary-only Harmonic Drive); China dominates the humanoid supply chain even more than AI-compute; vision=AV-LiDAR + batteries=EV cross-overs; NVIDIA cross-cutting (brains+GPU).
- updated [[Harmonic Drive Systems]] (LeaderDrive multi-category context + rotary peers); index +source. VERIFY (financials not in exhibit).

## [2026-06-03] verify+ingest | LeaderDrive (688017) + Goldman Exhibit 5 exposure ranking
- user: verify LeaderDrive thesis (688017, ~57.7B RMB; >60% share, 1,800 customers, roller-screw entry, directional long on humanoid mass production)
- VERIFIED w/ 1 correction: identity/products/customers (AGIBOT/UBTech) ✓; **share >60% is DATED (2020) — current ~30-40% (J.P. Morgan), still China #1**; Tesla/Figure = potential not confirmed; 2025 rev 570.7M RMB (+47%), NP 124.4M (>2x) → **~100× sales** (priced for the future). BOM 4-15% ✓ (gearboxes 30-50% of actuator cost).
- Goldman Exhibit 5: harmonic reduction gear = **#1 exposure (16)**; LeaderDrive in harmonic + roller screw. Added the full ranking table to [[Goldman - Humanoid robot ecosystem map (2026)]].
- created [[LeaderDrive]]: strong theme (content-per-robot, agnostic-to-maker, China cost edge) / high-risk vehicle (~100x sales, share eroding 60→30-40%, China A-share, roller-screw incumbents) → directional call option on humanoid units.
- updated [[Physical AI & robotics]] (exposure ranking + LeaderDrive favored-name note), [[Harmonic Drive Systems]] (LeaderDrive link + #1 ranking), index +LeaderDrive. VERIFY.
