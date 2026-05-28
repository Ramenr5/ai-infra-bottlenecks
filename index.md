# Index

## Research thesis

**Where does AI infrastructure supply fail to keep up with demand, and where is the money flowing to build it?** This wiki maps the supply chain of the AI buildout — power, compute, datacenter physical, and capital — to identify acute bottlenecks (lead times, capacity, permits, labor, raw materials) and the companies, assets, and geographies that capture rents on the supply-constrained side. Every source is read through this lens: who supplies, who demands, what's the gap, who pays, who benefits.

**Current center of gravity:** *Power binds first, chip manufacturing binds second* (per [[Can AI scaling continue through 2030 (2024)|Epoch]]). Power-side numbers now primary-anchored to [[Goldman Sachs - Generational Growth (2024)|Goldman Sachs]]; capex TAM anchored to [[McKinsey - The Cost of Compute (2025)|McKinsey]] at $5.2T AI / $6.7T total through 2030. NVIDIA's **$145B supply commitments** and **$1T Blackwell+Rubin guidance** (2025-2027) close the math between hyperscaler demand and chip-supplier absorption. **CoWoS is sold out into 2026 with 50+ week lead times and demand exceeding supply by 40-50%** (per [[TSMC Q1 2026 earnings]] CEO C.C. Wei). **HBM is sold out through 2026** (per [[SK Hynix Q3 2025 earnings]]). Second axis: **inference interactivity tier** ([[Cerebras Systems]], [[Groq]] now NVIDIA-owned).

## Syntheses (opinionated thesis pages)

- [[Capex trajectory thesis]] — **AI spending accelerates through at least 2027 (~90% probability); 2028+ depends on GPT-5/6/Rubin-era unit economics.** Supply-side is sold out, demand-side has prepaid forward capacity. Includes tradable read and 10 leading indicators to watch.
- [[AI infrastructure investment map (May 2026)]] — **state-of-wiki consolidation.** Every tradable name organized by layer; bottleneck severity matrix; top 10 primary data points; material contradictions; coverage gaps. **Start here for a 5-min orientation to the entire wiki.**
- [[Bottleneck ranking (May 2026)]] — **what's the biggest constraint?** Tiered ranking: Power binds the durable case (multi-year); HBM + CoWoS bite the near-term; chip design talent is the under-appreciated long-term constraint.
- [[Capex bust scenario]] — **the deliberate bear counterweight to [[Capex trajectory thesis]].** Steelmans the ~$2T-revenue-by-2030 gap, circular financing, $90B/qtr bond issuance. NOT the base case (~20-30% through 2027) — the risk the bull thesis must survive. Both-sides epistemics.
- [[Wiki maintenance model]] — **operating model for this vault.** Source-of-truth = local Obsidian; GitHub remote enables weekly automated SemiAnalysis ingest (Sundays 22:00 UTC); routine never touches layer/company/bottleneck/synthesis pages — flags them for human review in [[weekly-digest]] instead.

## Layers

- [[Power & energy]] — generation, grid, transformers, behind-the-meter; **binds first** (3 sources)
- [[Compute & silicon]] — GPUs, HBM, advanced packaging, foundries; binds second + new fast-inference axis (3 sources)
- [[Chip design & EDA]] — Big Three EDA tools, IP licensing, PDK access, verification compute; sits upstream of silicon (1 source)
- [[Datacenter physical]] — cooling, optics, real estate, construction, workforce
- [[Capital flows & deal structures]] — hyperscaler capex, sovereign wealth, JVs, project finance (6 sources)

## Bottlenecks

- [[CoWoS packaging capacity]] — TSMC; **demand exceeds supply by 40-50%, 50+ week lead times** (severity: acute · layer: compute · 3 sources)
- [[HBM allocation]] — SK Hynix dominant; **sold out through 2026, HBM4 mass production began Sept 2025** (severity: acute · layer: compute · 3 sources)
- [[Data wall]] — text wall in ~5yr; multimodal extends; synthetic uncertain (severity: watch · layer: compute · 1 source)
- [[Latency wall]] — ~1e32 FLOP ceiling without new network topologies; distant (severity: watch · layer: compute · 1 source)
- [[Hyperscaler capex sustainability]] — McKinsey $5.2T AI TAM requires capex to hold/rise; cascade risk (severity: watch · layer: capital · 4 sources)
- [[AI debt financing capacity]] — JPM up to $7T debt-financed; concrete: JPMorgan $2.3B Abilene, Mizuho $10B SoftBank (severity: watch · layer: capital · 1 source)
- [[EDA tool consolidation]] — Big Three duopoly+1 with multi-year switching costs; Design Compiler still dominant 4 decades on (severity: structural · layer: chip-design · 1 source)
- [[Chip design talent shortage]] — verification engineers fastest-growing unfillable job; 1/3 of US semi workforce >55; 50%/yr complexity vs 20%/yr productivity (severity: acute · layer: chip-design · 1 source)
- [[Lithography monopoly]] — ASML sole EUV supplier globally; €38.8B backlog ~4yr forward visibility; 2 High-NA shipped Q1 2026 (severity: structural · layer: compute · 1 source)
- [[NAND flash supply]] — structural shortage expected to persist until 2028; AI servers >45% of SanDisk shipments; KV cache offload + checkpoints + training data drive demand (severity: acute · layer: compute · 1 source)
- [[800VDC transition]] — physics-forced shift from AC to 800VDC distribution as racks approach 600 kW+; **~39 GW incremental capacity by 2030; sidecar TAM $11B 2028 peak; SST TAM $13B 2030**; capex shifts within $3.6-4.8M/MW band across 4 phases (severity: structural · layer: power · 1 source)
- [[Datacenter cooling]] — air cooling obsolete >50 kW/rack; GB200 NVL72 (120 kW) is DLC-only, chip TDP **>4,000W by 2029**; liquid-cooling market **$3B→$7B (2025-29), >$15B/5yr**; Quick Disconnect shortage = the CoWoS-style chokepoint (severity: acute · layer: datacenter · 2 sources)

## Geographies

- [[Texas]] — Stargate's 10 GW + Amazon Ohio peer; fastest-growing US AI infra geography (kind: state · 1 source)
- [[Northern Virginia]] — 300 DCs, 5→10 GW by 2030; transmission-constrained (kind: metro · 1 source)
- [[Oklahoma]] — Cerebras's main DC; SPP grid (kind: state · 1 source)
- [[Johor Malaysia]] — world's 2nd largest AI hub; ByteDance + Oracle; 600-700 MW within a year, potentially 2 GW by 2028 (kind: metro · 1 source)

## Companies

- [[NVIDIA]] — dominant AI accelerator; Q1 FY27 DC revenue $75B (+92%); $145B supply commitments; $1T Blackwell+Rubin guidance (ticker: NVDA · 3 sources)
- [[TSMC]] — sole leading-edge logic foundry; Q1 2026 $35.9B / >30% FY guide; CoWoS sold out into 2026 (ticker: TSM · 2 sources)
- [[SK Hynix]] — dominant HBM supplier; Q3 2025 ₩24.45T revenue / 47% margin; HBM4 mass production Sept 2025; 2026 sold out (ticker: 000660.KS · 2 sources)
- [[Cerebras Systems]] — wafer-scale SRAM accelerator; IPO-bound; $24.6B OpenAI MRA (ticker: CBRS · 1 source)
- [[Groq]] — SRAM-machine inference accelerator; acquired by NVIDIA Dec 2025 (≥$20B) (1 source)
- [[Vicor]] — custom 25kW power delivery for Cerebras (ticker: VICR · 1 source)
- [[Trane Technologies]] — acquired LiquidStack Mar 2026; AI liquid cooling exposure (ticker: TT · 1 source)
- [[Talen Energy]] — Susquehanna nuclear; 960 MW Amazon PPA (ticker: TLN · 1 source)
- [[Stargate]] — $500B/10 GW OpenAI 40%/SoftBank 40%/Oracle/MGX JV; Bloomberg Aug 2025 stalling caveat (role: jv-vehicle · 3 sources)
- [[DeepSeek]] — Chinese AI lab; Jan 2025 V3/R1 shock at ~18×/36× cheaper (1 source)
- [[Anthropic]] — most aggressive AGI timeline; Claude Code cadence (1 source)
- [[Epoch AI]] — forecasting analyst shop; primary-source methodology (role: analyst · 1 source)
- [[SemiAnalysis]] — Dylan Patel's shop; primary AI hardware analyst (role: analyst · 1 source)
- [[Goldman Sachs]] — investment bank + analyst (Generational Growth on US power) (ticker: GS · role: analyst · 1 source)
- [[McKinsey & Company]] — consultancy + analyst (Cost of Compute on TAM) (role: analyst · 2 sources)
- [[Synopsys]] — Big Three EDA #1; Design Compiler, VCS, DesignWare IP, Sentaurus TCAD (ticker: SNPS · role: supplier · layer: chip-design · 1 source)
- [[Cadence Design Systems]] — Big Three EDA #2; JasperGold, Innovus, Palladium Z3 48B-gate emulation (ticker: CDNS · role: supplier · layer: chip-design · 1 source)
- [[Siemens EDA]] — Big Three EDA #3; Calibre dominant in physical verification; Mentor Graphics acquired by Siemens 2017 for $4.5B (parent ticker: SIE.DE · role: supplier · layer: chip-design · 1 source)
- [[ASML]] — sole EUV lithography supplier globally; Q1 2026 €8.8B revenue, €38.8B backlog, 2030 guide €44-60B (ticker: ASML · role: supplier · layer: compute · 1 source)
- [[Applied Materials]] — #1 WFE vendor; Q1 FY26 $7.01B revenue with record DRAM segment; CEO: "$1T semi industry 2026" (ticker: AMAT · role: supplier · layer: compute · 1 source)
- [[Lam Research]] — WFE #2-3; memory etch leader; Q3 FY26 $5.84B revenue; memory 39%/DRAM 27% record; raised WFE forecast $140B (ticker: LRCX · role: supplier · layer: compute · 1 source)
- [[KLA Corporation]] — process control monopoly ~58% share; Q3 FY26 $3.415B; advanced packaging $1B FY26 (+70% YoY, +14pp share) (ticker: KLAC · role: supplier · layer: compute · 1 source)
- [[Broadcom]] — hyperscaler custom ASIC (Google TPU, Meta MTIA, OpenAI, Anthropic) + Tomahawk/Jericho networking; **>$100B AI 2027 line of sight, $73B backlog** (ticker: AVGO · role: supplier · layer: compute · 1 source)
- [[Marvell Technology]] — custom AI ASIC (Microsoft Maia + others) + optical DSP; Q4 FY26 $1.65B DC record; FY27 optical +50% YoY guide (ticker: MRVL · role: supplier · layer: compute · 1 source)
- [[ARM Holdings]] — processor IP licensing (Neoverse server cores, CSS subsystems); Q4 FY26 record; data center royalty doubled YoY; CSS adoption with AWS/Google/NVDA/MSFT (ticker: ARM · role: supplier · layer: chip-design · 1 source)
- [[Astera Labs]] — pure-play AI connectivity silicon (Aries PCIe retimers, Scorpio fabric switches, Leo CXL); Q1 2026 +93% YoY, 76% GM (ticker: ALAB · role: supplier · layer: datacenter · 1 source)
- [[Coherent]] — optical transceiver leader; Q3 FY26 record $1.80B revenue; 1.6T ramp ahead of schedule; NVIDIA-backed (ticker: COHR · role: supplier · layer: datacenter · 1 source)
- [[Micron Technology]] — third HBM supplier ~24% share; Q2 FY26 $23.86B revenue (+196% YoY) / 75% GM; HBM4 12-high shipping aligned with NVIDIA Vera Rubin (ticker: MU · role: supplier · layer: compute · 1 source)
- [[Lumentum]] — optical transceiver vendor #2; Q3 FY26 $808M (+90% YoY); 1.6T DR4 OSFP debuted Mar 2026; **NVIDIA $2B investment** for US fab (ticker: LITE · role: supplier · layer: datacenter · 1 source)
- [[SanDisk]] — pure-play NAND flash post-Feb 2025 WD spin; Q3 FY26 ~$4.65B; AI servers >45% of shipments; stock +1,350% in 12 months (ticker: SNDK · role: supplier · layer: compute · 1 source)
- [[Intel]] — only US-headquartered IDM at leading edge; Q1 2026 $13.58B (+7% YoY), AI = 60% of revenue; **Foundry $5.4B op loss narrowing $2.51B→$1.8B**; Panther Lake 18A ramping 6-7× QoQ (ticker: INTC · role: idm · layer: compute · 2 sources)
- [[Samsung Electronics]] — only fully vertically integrated AI infra player (Memory + Foundry + LSI); **Q1 2026 OP +756% YoY (~$39B), single-quarter beat full-year 2025**; HBM4 first-at-scale claim for Vera Rubin; **~$78B FY26 capex RECORD**; Samsung Foundry SF2 yields 55-60% (ticker: 005930.KS · role: idm · layer: compute · 1 source)
- [[AMD]] — #2 AI accelerator after NVIDIA; Q1 2026 $10.3B revenue (+38% YoY), **DC $5.8B (+57%)**; **Meta 6 GW Instinct deal with custom MI450**; Helios rack-scale H2 2026 (ticker: AMD · role: supplier · layer: compute · 1 source)
- [[Tokyo Electron]] — final WFE oligopoly member; FY26 record 2.44T yen; +20% WFE growth call for 2026 AND 2027; 38% wafer prober dominance + 23% etch + 27% deposition (ticker: 8035.T · role: supplier · layer: compute · 1 source)
- [[Kioxia]] — Japanese NAND post-late-2024 IPO; **Q3 FY26 EPS surged ¥34→¥162** confirming NAND inflection; JV fabs with SanDisk in Yokkaichi; ADR pending (ticker: 285A.T · role: supplier · layer: compute · 1 source)
- [[Microsoft]] — hyperscaler #1 by capex commitment; **FY26 capex $190B (+61%)**; AI ARR $37B (+123%); Azure +40%; Maia + Cobalt custom silicon in production (ticker: MSFT · role: hyperscaler · layer: capital · 1 source)
- [[Alphabet]] — fastest cloud growth; Google Cloud +63%; Q1 2026 $109.9B revenue; **$460B cloud backlog**; **$21B Broadcom TPU 8t/8i deal**; FY26 capex $180-190B (raised) (ticker: GOOGL · role: hyperscaler · layer: capital · 1 source)
- [[Meta]] — most aggressive capex acceleration; **2026 capex $125-145B (raised, ~2× 2025)**; MTIA Gen 2 in production; **6 GW AMD Instinct deal**; ad revenue +33% YoY (ticker: META · role: hyperscaler · layer: capital · 2 sources)
- [[Amazon]] — largest AI capex committer ~$200B annual; AWS $37.6B Q1 (+28%); **$225B Trainium revenue commitments**; >1M NVIDIA GPUs 2026; FCF pressure $1.2B TTM (ticker: AMZN · role: hyperscaler · layer: capital · 1 source)
- [[Oracle]] — "GPU landlord"; Q3 FY26 $17.2B (+22%); **$553B RPO (+325% YoY)**; **$300B OpenAI deal across 4.5 GW**; FY26 capex $50B; $45-50B debt + equity raise planned (ticker: ORCL · role: hyperscaler-aspirant · layer: capital · 2 sources)
- [[Quanta Services]] — largest US electric EPC contractor; Q1 2026 $7.87B revenue; **$48.5B record backlog ($40.1B Electric)**; doubling transformer mfg capacity (ticker: PWR · role: epc · layer: power · 1 source)
- [[GE Vernova]] — dominant US gas turbine OEM; Q1 2026 orders +71% YoY ($18.3B); **$163B backlog**; **110 GW gas turbine target YE 2026**; $200B backlog target pulled to 2027 (ticker: GEV · role: supplier · layer: power · 1 source)
- [[Siemens Energy]] — European gas turbine + grid OEM; **Q2 FY26 record €17.7B orders**; €154B backlog; US orders nearly doubled to €6.94B (data-center driven) (ticker: ENR.DE / SMNSY ADR · role: supplier · layer: power · 1 source)
- [[SpaceX]] — private; **IPO filed Apr 1 2026 at $1.75T-$2T+ target with $80B raise**; Starlink $11.4B 2025 revenue (proj $20B 2026); sister relationship with xAI (Colossus) (ticker: pending IPO · role: connectivity · layer: datacenter · 1 source)
- [[Crusoe Energy]] — private neocloud; operates Stargate Abilene (Oracle/OpenAI contract); 360 MW + 1.2 GW Boom Supersonic deal; stranded-gas onsite-power model (ticker: private · role: neocloud · layer: datacenter · 1 source)

### 800VDC transition picks-and-shovels (new pages, May 2026)

- [[DG Matrix]] — SST pure-play; **only SST in NVIDIA MGX reference architecture**; ABB-backed; Infineon SiC supply; NC State origin; UL cert target Q2 2026 (ticker: private · role: supplier · layer: power · 1 source)
- [[Heron Power]] — SST pure-play; **40 GW US manufacturing facility** for 4.2 MW Heron Link MV-input units (ticker: private · role: supplier · layer: power · 1 source)
- [[Novos Power]] — SST pure-play; direct MV-to-800VDC; **50% smaller footprint, air-cooled** (ticker: private · role: supplier · layer: power · 1 source)
- [[Amperesand]] — SST pure-play; dual LV/MV strategy; **30 MW commercial deployments target 2026** (ticker: private · role: supplier · layer: power · 1 source)
- [[Eaton]] — diversified power-management; **acquired Resilient Power Systems Aug 2025** for SST expertise; full AC datacenter electrical stack (ticker: ETN · role: supplier · layer: power · 1 source)
- [[ABB]] — Swiss-Swedish power-automation; **NVIDIA Oct 2025 partnership** + SACE Infinitus solid-state breaker; HiPerGuard MV-UPS deployed at Applied Digital 400 MW ND; strategic backer of [[DG Matrix]] (ticker: ABBN.SW / ABBNY · role: supplier · layer: power · 1 source)
- [[Delta Electronics]] — Taiwanese power+thermal; broadest 800VDC product set: 110 kW BBU power shelves + **2.4 MW DC In-Row CDU** + 800VDC air-cooled busway (ticker: 2308.TW · role: supplier · layer: power · 1 source)
- [[Schneider Electric]] — French power-management incumbent; **no named 800VDC product as of May 2026** = laggard signal; large installed base (ticker: SU.PA · role: supplier · layer: power · 1 source)
- [[Wolfspeed]] — US SiC semiconductor pure-play; **10 kV SiC MOSFET commercial bare die March 2026** = the breakthrough enabling MV rectifier + Phase 4 SST (ticker: WOLF · role: supplier · layer: compute · 1 source)
- [[Infineon]] — German power semis; SiC supply to DG Matrix; 650V GaN for Diablo 400 ±400V bipolar; BBU roadmap 4 kW PPC cards → 12 kW per unit at 99.5% peak (ticker: IFX.DE / IFNNY · role: supplier · layer: compute · 1 source)
- [[Aran Industries]] — AI-native EPC startup; PE-stampable 800VDC engineering packages; bridges power electronics + grid dynamics + regulatory — capabilities incumbent EPCs don't combine (ticker: private · role: epc · layer: datacenter · 1 source)
- [[Power Integrations]] — US GaN silicon pure-play (vs Wolfspeed SiC pure-play); **disclosed NVIDIA collaboration on 1250V/1700V PowiGaN for 800VDC**; Q1 2026 $108.3M (+3% YoY) / 53.5% GM; **two Q1 design wins at Taiwan datacenter equipment customers**; mgmt-disclosed **datacenter SAM >$1B by 2030** (ticker: POWI · role: supplier · layer: compute · 3 sources)

### Datacenter cooling picks-and-shovels (new pages, May 2026)

- [[Vertiv Holdings]] — **#1 liquid-cooling market share** (Dell'Oro); broad thermal + power portfolio; exposed to BOTH [[Datacenter cooling]] and [[800VDC transition]] (ticker: VRT · role: supplier · layer: datacenter · 2 sources)
- [[nVent Electric]] — RDHx + liquid distribution; benefits from the "bridge" transition era (ticker: NVT · role: supplier · layer: datacenter · 2 sources)
- [[Aaon]] — rapid datacenter-cooling growth via hyperscaler-customized solutions (ticker: AAON · role: supplier · layer: datacenter · 1 source)
- [[CoolIT Systems]] — pure-play DLC (cold plates + CDUs); private, KKR-backed (ticker: private · role: supplier · layer: datacenter · 2 sources)
- [[Boyd]] — cold plates + thermal; private, Goldman-backed (ticker: private · role: supplier · layer: datacenter · 2 sources)

## Assets

- [[Stargate Texas]] — multi-site TX portfolio (Abilene + Shackelford + Milam) (kind: datacenter · 2 sources)
- [[Stargate Abilene]] — flagship; JPMorgan $2.3B financed May 2025 (kind: datacenter · status: construction · 1 source)
- [[Colossus (xAI)]] — 100K GPUs in 122 days, refurb refrigerator factory (kind: datacenter · 1 source)
- [[Amazon Ohio expansion]] — $23B AWS Ohio capex (kind: datacenter · 1 source)
- [[Cerebras Oklahoma datacenter]] — 6,000-ton chiller plant (kind: datacenter · 1 source)
- [[Susquehanna nuclear plant]] — 2.5 GW PA nuclear; 960 MW Amazon contract (kind: power-plant · 1 source)
- [[TSMC Advanced Backend Fab 6]] — 83K wafers/mo CoWoS at full ramp (kind: fab · 1 source)

## Sources

**Primary (analyst, foundational):**
- [[Can AI scaling continue through 2030 (2024)]] — **Epoch AI.** Four-bottleneck quantitative analysis. Monte Carlo + 80% CIs. Power binds first.
- [[Goldman Sachs - Generational Growth (2024)]] — **Goldman Sachs Research.** 47 GW US incremental generation; 60/40 gas/renewable; 15% DC power CAGR.
- [[McKinsey - The Cost of Compute (2025)]] — **McKinsey TMT.** $5.2T AI / $6.7T total DC capex through 2030; 156 GW AI demand.

**Primary (company / deal):**
- [[NVIDIA Q1 FY27 earnings (2026)]] — DC revenue $75B (+92%); $145B supply commitments; $1T Blackwell+Rubin 2025-27 guidance.
- [[TSMC Q1 2026 earnings]] — $35.9B revenue; FY26 >30%; CoWoS sold out into 2026 with 50+ week leads.
- [[SK Hynix Q3 2025 earnings]] — ₩24.45T revenue; 47% margin; HBM4 mass production Sept 2025; 2026 sold out.
- [[Stargate Project announcement (2025)]] — $500B/10 GW; OpenAI 40%/SoftBank 40%/Oracle/MGX; flagship Abilene; Bloomberg Aug 2025 stalling caveat.
- [[Cerebras — Faster Tokens Please (2026)]] — **SemiAnalysis.** WSE-3 architecture, $24.6B OpenAI MRA, NVIDIA-Groq acquisition.
- [[The EDA Primer From RTL to Silicon (2026)]] — **SemiAnalysis.** Part 1 of 3 on chip design flow + Big Three EDA vendors. Parts 2-3 (market deep-dive + AI disruption) paywalled.
- [[ASML Q1 2026 earnings]] — €8.8B revenue, €38.8B backlog (~4yr forward visibility), 2 High-NA EUV shipped, FY26 €36-40B guide, 2030 €44-60B guide.
- [[Applied Materials Q1 FY26 earnings]] — $7.01B revenue, record DRAM segment (34%), CEO Dickerson: "$1T semi industry 2026, several years early."
- [[NVIDIA Blackwell at Hot Chips 2025]] — primary architecture: GB200 superchip = 2× B200 + Grace, 384 GB HBM3e, 16 TB/s, 900 GB/s NVLink-C2C; NVL72 rack = 1.4 EFLOPS FP4.
- [[ARM Holdings Q4 FY26 earnings]] — Record Q4 $1.49B; data center royalty doubled YoY; CSS adoption with all 4 hyperscalers; FY26 royalty $2.61B (+21%).
- [[Astera Labs Q1 2026 earnings]] — Record $308.4M (+93% YoY) / 76% GM; Scorpio AI fabric switches ramping; Leo CXL win at Microsoft Azure M-Series.
- [[Marvell Q4 FY26 earnings]] — DC record $1.65B; custom ASIC $1.5B run-rate; FY27 optical +50% YoY guide.
- [[Broadcom Q1 FY26 earnings]] — AI revenue $8.4B (+106%); $10.7B Q2 guide; **>$100B AI 2027 line of sight + $73B backlog**.
- [[Lam Research Q3 FY26 earnings]] — $5.84B revenue; memory 39%/DRAM 27% record; WFE forecast raised to $140B.
- [[Coherent Q3 FY26 earnings]] — Record $1.80B; DC +37% YoY; 1.6T ramp ahead of plan; NVIDIA equity-backed.
- [[KLA Q3 FY26 earnings]] — $3.415B revenue; ~58% process control share; advanced packaging $1B FY26 (+70% YoY).
- [[Micron Q2 FY26 earnings]] — Extraordinary: $23.86B (+196% YoY) / 75% GM; HBM4 12-high shipments aligned with NVIDIA Vera Rubin; 2026 HBM shares: SKH 43%/Sam 33%/Mic 24%.
- [[Lumentum Q3 FY26 earnings]] — Record $808M (+90% YoY); 1.6T DR4 OSFP March 2026; **NVIDIA $2B investment** for US fab.
- [[SanDisk Q3 FY26 earnings]] — Pure-play NAND; ~$4.65B Q3 FY26; AI servers >45% of shipments; structural shortage to 2028.
- [[Intel Q1 2026 earnings]] — $13.58B revenue (+7% YoY); AI = 60% of total; DCAI $5.1B; Foundry $5.4B (op loss narrowing $2.51B→$1.8B); Panther Lake on 18A ramping 6-7× QoQ.
- [[Samsung Q1 2026 earnings]] — ~$100B revenue, OP +756% YoY (single quarter > full-year 2025); Memory $33.6B OP; **first HBM4 at scale for Vera Rubin** (vs prior SK Hynix dominance); DRAM +90-95% QoQ, NAND +55-60% QoQ; ~$78B FY26 capex RECORD.
- [[AMD Q1 2026 earnings]] — $10.3B revenue (+38%); DC $5.8B (+57%); **Meta 6 GW Instinct deal with custom MI450**; Helios H2 2026; $120B server CPU income forecast by 2030.
- [[Tokyo Electron FY26 earnings]] — FY26 record 2.44T yen; +20% WFE growth call for 2026 AND 2027; etch +25%+; completes WFE oligopoly coverage.
- [[Kioxia earnings]] — Q1 FY26 ¥342.8B (trough); Q3 FY26 EPS surged ¥34→¥162 = NAND inflection confirmed; BiCS gen 8/10 roadmap; US ADR pending.
- [[Microsoft Q3 FY26 earnings]] — $82.9B revenue; Azure +40%; **AI ARR $37B (+123%)**; Q3 capex $22B (+45%); **FY26 capex $190B (+61%)**; Maia/Cobalt in production.
- [[Alphabet Q1 2026 earnings]] — $109.9B (+22%); **Google Cloud $20B (+63%)**; **$460B cloud backlog**; **FY26 capex $180-190B raised**; **$21B Broadcom TPU 8t/8i deal**; Ironwood TPU GA.
- [[Meta Q1 2026 earnings]] — $56.31B (+33%); **2026 capex $125-145B raised**; MTIA Gen 2 in production; AMD 6 GW Instinct deal first 1 GW custom MI450.
- [[Amazon Q1 2026 earnings]] — $181.5B (+17%); **AWS $37.6B (+28%)**; Q1 capex $43.2B; ~$200B annual AI capex; **$225B Trainium revenue commitments**; 2.1M AI chips delivered.
- [[Oracle Q3 FY26 earnings]] — $17.2B (+22%); Cloud +44% to $8.9B; **$553B RPO (+325% YoY)**; **$300B OpenAI deal across 4.5 GW**; $50B FY26 capex; $45-50B raise planned.
- [[Quanta Services Q1 2026 earnings]] — $7.87B Q1 revenue; **$48.5B record backlog**; $500-700M to double transformer manufacturing capacity; FY26 guide raised.
- [[GE Vernova Q1 2026 earnings]] — $9.34B revenue; orders +71% YoY; **$163B backlog**; **110 GW gas turbine target YE 2026**; $200B target pulled to 2027; $2.4B Q1 DC equipment orders > all of 2025.
- [[Siemens Energy Q2 FY26 earnings]] — €17.7B record orders (+29.5%); €154B backlog; US orders nearly doubled to €6.94B; "US demand largely driven by data centers."
- [[SpaceX 2026 update]] — IPO filed Apr 1 2026 at $1.75T-$2T+ target / $80B raise; Starlink $11.4B 2025 (proj $20B 2026); $930M Q1 2026 Starship spend.
- [[Anthropic 2026 update]] — **$30B run-rate revenue April 2026** (10× in 10 months); Series G $380B valuation Feb 2026; **$900B pending round** would exceed OpenAI.
- [[SemiAnalysis - Onsite Gas Deep Dive (2025)]] — Dec 2025; AI labs bypassing 5yr grid queue via onsite gas turbines; 2.3 GW OpenAI/Oracle Abilene + 1.9 GW xAI Doosan + named deployments; $10-12B/GW/yr AI cloud revenue justifies premium.
- [[SemiAnalysis - The Great AI Silicon Shortage (2026)]] — Mar 2026; N3 utilization >100% H2 2026; AI = 60% of N3 in 2026 → 86% in 2027; HBM uses 3-4× DRAM wafer capacity; CoWoS "easing"; Intel EMIB rising.
- [[SemiAnalysis - Multi-Datacenter Training]] — Google Iowa/Nebraska + Ohio multi-DC clusters; 5 Pbit/s within regions, 1 Pbit/s between; hierarchical SGD; OpenAI racing to catch up via Stargate.
- [[SemiAnalysis - xAI Colossus 2 (2026)]] — first GW-scale datacenter; 1.1 GW target (1.5 GW expansion); 3.7× Colossus 1; cross-state regulatory arbitrage; $40B Saudi PIF rumored raise.
- [[SemiAnalysis - Oracle Winning AI Compute (2025)]] — June 2025; Oracle leased >2 GW capacity Nov 2023-Jan 2025; **ByteDance Oracle's largest GPU customer**; Johor Malaysia = world's 2nd largest AI hub.
- [[SemiAnalysis - AWS Anthropic Trainium Expansion (2025)]] — Sept 2025; 3 AWS campuses >1.3 GW for Anthropic; **1M Trainium2 in single campus**; Trainium TCO competitive on bandwidth-bound workloads.
- [[SemiAnalysis - AI Value Capture (2026)]] — May 2026; **Anthropic ARR $9B→$44B+** with **inference margins 38%→70%+**; SOCAMM $8/GB Q1'26→>$13/GB exit '26; N3 >100%; DRAM >90%; "AI labs capturing all the value."
- [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]] — Mar 24 2026; **NVIDIA Groq $20B IP license + team hire**; Rubin Ultra NVL576 + Feynman NVL1152 with CPO inter-rack (late 2027); LPX (Groq IP); AFD inference architecture.
- [[SemiAnalysis - ISSCC 2026 (2026)]] — Apr 15 2026; HBM4 vendor map (Samsung SF4 / SK Hynix on TSMC N12 / Micron internal CMOS); Samsung HBM4 36GB 12-high / 3.3 TB/s / 13 Gb/s; **TSMC Active LSI = AMD MI450 architectural primary**.
- [[SemiAnalysis - Co-Packaged Optics (2026)]] — Scale-out "limited" near-term; **scale-up = killer app late 2020s**; Rubin Ultra NVL576 + Trainium 4 anchors; Celestial AI $1B+ run-rate end 2028; long-term threat to Coherent/Lumentum pluggable.
- [[SemiAnalysis - Google AI Infrastructure Supremacy]] — Google systems: **+30% throughput / -40% power / -30% capex / 50× less downtime** vs NVIDIA InfiniBand; ICI + OCS + Pathways; TPUv5 16K chip pods.
- [[SemiAnalysis - AI Datacenter Energy Dilemma]] — Global DC IT power **49 GW (2023) → 96 GW (2026)**; AI = ~40 GW; US tariff $0.083/kWh vs Singapore $0.23; Meta "worst DC design"; AWS $650M / 1 GW nuclear DC.
- [[SemiAnalysis - AI Datacenters Electric Bills (2026)]] — Mar 2026; **PJM capacity prices spiked 9.3×** ($29 → $270/MW-day); 67M PJM residents face ~15% bill increase; **ERCOT design advantage** = stable prices despite equivalent DC buildout.
- [[SemiAnalysis - Scaling the Memory Wall HBM (2025)]] — Aug 2025; **Rubin Ultra 1024 GB HBM4E** (5.3× GB200); SK Hynix MR-MUF packaging advantage; hybrid bonding deferred to HBM4E.
- [[SemiAnalysis - Claude Code Is The Inflection Point]] — Claude Code = 4% of GitHub commits → projected 20%+ EOY 2026; Anthropic quarterly ARR adds > OpenAI; Accenture 30K seats.
- [[SemiAnalysis - The Memory Wall (DRAM)]] — Top 3 DRAM suppliers = 95% of market; **HBM = ~50%+ H100 BOM, ~60%+ Blackwell BOM**; HBM 3× premium vs DDR5.
- [[SemiAnalysis - Meta Bizarre AI Infrastructure Choice]] — Largely paywalled; public framing: Meta deploying "billions in servers with silicon that increases costs, power, and latency."
- [[SemiAnalysis - The Coding Assistant Breakdown (2026)]] — Cost-per-task > cost-per-token; GPT-5.5 $5/$30; Opus 4.7 tokenizer +35%; DeepSeek V4-Pro 1.6T/49B + 90% KV cache cut; Codex 80:1 / Claude Code 100:1 input:output; benchmark integrity warnings.
- [[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]] — 8-component TCO framework; **hyperscalers carry 10-61% premium vs gold-tier (Nebius/Fluidstack/Crusoe)** on workload TCO; silver-tier 20.91% goodput hit on pretraining; TorchFT / HyperPod / TorchPass fault-tolerance.
- [[SemiAnalysis - EDA Market Primer (2026)]] — Big-3 85%+ share; **Synopsys $8B / Cadence $5.30B / Siemens $2.2-2.5B CY2025**; **PrimeTime 90%+ signoff, Calibre 85%+ PV, Design Compiler 84-85%**; 95%/99% retention; $11.4B/$7.8B backlogs; AI tool 20% renewal premium.
- [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]] — **H100 1-yr rental: $1.70 (Oct 2025) → $2.35 (Mar 2026) = +40% in 5 mo**; capacity sold out through Sep 2026; Blackwell lead time June-July; named: Lambda/Runpod/CoreWeave/Nebius/IREN.
- [[SemiAnalysis - Dissecting NVIDIA Blackwell (2026)]] — Largely paywalled. Public: **TMEM, CTA-scoped tcgen05, 2SM MMA** = "largest GPU microarch change in a generation"; die distribution + ~300-cycle die-to-die latency. HBM/power/NVLink5 gated.
- [[SemiAnalysis - Inside the 800VDC Revolution (2026)]] — Part 1 of 2; **physics-forced 800VDC transition** as racks approach 600 kW; 4-phase framework (sidecar → 800VDC-native → facility-wide DC → SST endgame); **~39 GW by 2030, sidecar $11B TAM 2028, SST $13B TAM 2030**; 11 new picks-and-shovels names (DG Matrix, Heron Power, Novos Power, Amperesand, Eaton, ABB, Delta, Schneider, Wolfspeed, Infineon, Aran Industries).
- [[Power Integrations Q1 2026 earnings]] — Q1 2026 $108.3M (+3% YoY); industrial +23%; **NVIDIA collaboration on 1250V/1700V GaN for 800VDC confirmed**; "variety of sockets in forthcoming 800VDC architectures"; **datacenter SAM >$1B by 2030** per mgmt; 2 Q1 Taiwan DC equipment design wins.
- [[Power Integrations - 1250V & 1700V PowiGaN for 800VDC AI Datacenters (2025)]] — Oct 13 2025 press release; **first public disclosure of NVIDIA-POWI collaboration on 800VDC**; 1250V HEMTs (industry-first) + 1700V InnoMux2-EP integrated switch; 175M lifetime GaN switches shipped.
- [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]] — **TaaS > IaaS margin thesis**; AWS EBIT +213bp Q/Q driven by Claude/Bedrock; Bedrock ~$5.5B run-rate (80-90%+ Anthropic), ~55% EBIT margin; Trainium >50% of Bedrock tokens; Anthropic +$21B net new ARR Q1 → $30B, inference GM mid-60s, OI-profitable 2Q, >$100B ARR potential EOY; Google "EBTIT" margin caveat.
- [[Finding Miscompiles for Fun Not Profit (2026)]] — Justin Lebar blog; **demand-side/Jevons anecdote**: >$10K of tokens in an afternoon running AI agents over compiler code; "things impossible 5 months ago are now just Very Expensive"; agentic token consumption as the inference-demand driver.
- [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]] — rack-density→cooling thresholds (DLC mandatory >50 kW; GB200 NVL72 = 120 kW DLC-only); PUE/WUE benchmarks (Meta 1.08, Google 1.10); **Quick Disconnect shortage** as the cooling chokepoint; 60-80% of non-IT energy is cooling.
- [[Dell'Oro - Liquid Cooling Market (2026)]] — liquid cooling **$3B→$7B (2025-29), >$15B/5yr**; GPU TDP >4,000W by 2029; Vertiv leads, then CoolIT/nVent/Boyd/Aaon; single-phase DLC dominant.
- [[IEA - Energy and AI (2026)]] — **authoritative global power anchor**: DC electricity **415 TWh (2024) → 945 TWh (2030)**, AI servers +30%/yr; US +130%; 2035 sensitivity 700-1,700 TWh.
- [[EPRI - Powering Intelligence (2026)]] — **US power anchor**: datacenters **9-17% of US electricity by 2030** (from ~4%); EPRI+Epoch joint; live state-level dashboard.
- [[Apollo - AI Capex Risk Outlook (2026)]] — **credible bear**: hyperscaler capex ~$646B 2026 (~2% US GDP), $2.7T cumulative 2025-29, **$90B Q4 2025 bonds**, self-funded→debt-funded shift. Anchors [[Capex bust scenario]].
- [[Ed Zitron - AI Is A Money Trap (2025)]] — **polemical bear steelman**: ~$2T revenue by 2030 or wasted capex; capex-vs-revenue gap; partially rebutted by Anthropic profitability inflection.

**Secondary (retrospective):**
- [[Situational Awareness, Two Years Later (2026)]] — Omer Ansari, Medium, Apr 29 2026. Aggregates McKinsey, JPM, CSIS, METR.
