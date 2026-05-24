---
type: synthesis
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Capex trajectory thesis]]"]
tags: [thesis, investment-map, state-of-wiki, picks-and-shovels, consolidated]
---

# AI infrastructure investment map (May 2026)

State-of-the-wiki consolidation. Read [[Capex trajectory thesis]] for the central claim; this page is the **investment map** — every tradable name in our wiki organized by where it sits in the stack and what it does. Built from **29 primary sources across 6 layers** (power, compute, chip-design, datacenter, capital, plus connectivity/space adjacency).

## Wiki coverage (snapshot)

| Category | Count | Notes |
| --- | --- | --- |
| **Total wiki pages** | ~109 | Including this one |
| **Sources** | 29 primary + 1 secondary | All major hyperscaler + WFE + memory + EDA + analyst Q1/Q2 2026 |
| **Companies** | 44 | Public + private; tickers in frontmatter |
| **Layers** | 5 | Power, Compute, Chip-design, Datacenter, Capital |
| **Bottlenecks** | 10 | 4 acute, 2 structural, 4 watch |
| **Assets** | 7 | Named datacenters, plants, fabs |
| **Geographies** | 3 | TX, NoVA, OK |
| **Syntheses** | 2 | This + [[Capex trajectory thesis]] |

## The thesis in one paragraph

**AI infrastructure spending accelerates through at least 2027 (~90% probability); 2028+ depends on GPT-5/6 / Rubin-era unit economics.** Supply-side is sold out across every layer (lithography, foundry, HBM, NAND, optical, power, EDA tools, design talent); demand-side has prepaid forward via NVIDIA $145B supply commitments, Big Five hyperscalers committing ~$745-775B FY26 capex, Oracle $300B OpenAI contract, Broadcom $73B AI backlog, ASML €38.8B backlog, Samsung 110 trillion won capex. The buildout is funded and in execution. See [[Capex trajectory thesis]] for full detail and confidence aging.

## The investment map by layer

### Power & energy ([[Power & energy]])

**The binding constraint.** Goldman: 47 GW US incremental generation through 2030, 60% gas / 40% renewable.

| Role | Names |
| --- | --- |
| Gas turbine OEMs | [[GE Vernova]] (GEV, $163B backlog, 110 GW target), [[Siemens Energy]] (ENR.DE, €17.7B record orders), Mitsubishi Heavy Industries (not yet ingested) |
| Power EPC | [[Quanta Services]] (PWR, $48.5B record backlog, doubling transformer mfg) |
| Utility / IPP | [[Talen Energy]] (TLN, 960 MW Amazon PPA) |
| Nuclear adjacent | Constellation Energy, Vistra, NextEra (not yet ingested) |

### Compute & silicon ([[Compute & silicon]])

**Binds second.** TSMC + ASML + SK Hynix dominate; AMD a credible #2 to NVIDIA.

| Role | Names |
| --- | --- |
| AI accelerator | [[NVIDIA]] (NVDA, $1T Blackwell+Rubin guide), [[AMD]] (AMD, Meta 6 GW deal + MI450), [[Intel]] (INTC, Gaudi 4 ~6% share) |
| Wafer-scale alt | [[Cerebras Systems]] (CBRS pre-IPO, OpenAI 750 MW MRA), [[Groq]] (NVIDIA-owned post-acquisition) |
| Custom ASIC partners | [[Broadcom]] (AVGO, $100B AI 2027 line of sight + $21B Alphabet TPU 8t/8i), [[Marvell Technology]] (MRVL, Microsoft Maia custom ASIC) |
| Foundry | [[TSMC]] (TSM, 44% market share + CoWoS 50+ week leads), [[Samsung Electronics]] (005930.KS, SF2 at 55-60% yield), [[Intel]] Foundry ($5.4B Q1; op loss narrowing) |
| Lithography | [[ASML]] (ASML, sole EUV; €38.8B backlog; €44-60B 2030 guide) |
| WFE oligopoly | [[Applied Materials]] (AMAT), [[Lam Research]] (LRCX), [[KLA Corporation]] (KLAC), [[Tokyo Electron]] (8035.T) |
| HBM/DRAM | [[SK Hynix]] (000660.KS, 43% HBM), [[Samsung Electronics]] (33%), [[Micron Technology]] (MU, 24% + US-only HBM) |
| NAND | [[Samsung Electronics]] (#1), [[SanDisk]] (SNDK, +1,350% post-spin), [[Kioxia]] (285A.T, JV with SanDisk) |
| Power delivery | [[Vicor]] (VICR, Cerebras VPD content) |

### Chip design & EDA ([[Chip design & EDA]])

**Structural lock-in.** Three vendors gate every advanced-node tapeout.

| Role | Names |
| --- | --- |
| EDA Big Three | [[Synopsys]] (SNPS), [[Cadence Design Systems]] (CDNS), [[Siemens EDA]] (parent SIE.DE) |
| IP licensing | [[ARM Holdings]] (ARM, Neoverse + CSS adoption across all 4 hyperscalers) |

### Datacenter physical ([[Datacenter physical]])

| Role | Names |
| --- | --- |
| Liquid cooling | [[Trane Technologies]] (TT, acquired LiquidStack), Vertiv (VRT, not yet ingested) |
| Optical transceivers | [[Coherent]] (COHR, NVIDIA equity-backed), [[Lumentum]] (LITE, NVIDIA $2B investment for US fab) |
| Connectivity silicon | [[Astera Labs]] (ALAB, +93% YoY / 76% GM) |

### Capital flows & deal structures ([[Capital flows & deal structures]])

**Big Five FY26 capex aggregate ~$745-775B** (vs prior Ansari $602B framing).

| Role | Names |
| --- | --- |
| US hyperscalers | [[Microsoft]] (MSFT, $190B), [[Alphabet]] (GOOGL, $180-190B), [[Meta]] (META, $125-145B), [[Amazon]] (AMZN, ~$200B), [[Oracle]] (ORCL, $50B) |
| JV megaproject | [[Stargate]] ($500B/10GW; OpenAI 40%/SoftBank 40%/Oracle/MGX) |
| Frontier AI labs (demand) | [[Anthropic]] ($30B run-rate Apr 2026 → $900B valuation pending), OpenAI (not yet ingested) |
| Connectivity / capital adjacency | [[SpaceX]] ($1.75T-$2T IPO filed Apr 2026, Starlink, sister to xAI) |
| Sovereign | MGX (UAE; via Stargate), Humain (Saudi PIF; not yet ingested), G42 (UAE; not yet ingested), SoftBank (not yet ingested) |
| Analyst shops | [[Goldman Sachs]], [[McKinsey & Company]], [[Epoch AI]], [[SemiAnalysis]] |

## Bottleneck severity matrix

| Severity | Bottleneck | Layer |
| --- | --- | --- |
| **Acute** | [[CoWoS packaging capacity]] | compute (TSMC; 40-50% demand gap; 50+ week leads) |
| **Acute** | [[HBM allocation]] | compute (sold out through 2026 across all 3 suppliers) |
| **Acute** | [[NAND flash supply]] | compute (Samsung +55-60% QoQ pricing; shortage to 2028) |
| **Acute** | [[Chip design talent shortage]] | chip-design (verification engineers fastest-growing unfillable; 1/3 US semi workforce >55) |
| **Structural** | [[Lithography monopoly]] | compute (ASML sole EUV; €38.8B backlog) |
| **Structural** | [[EDA tool consolidation]] | chip-design (Big Three; multi-year switching costs) |
| Watch | [[Hyperscaler capex sustainability]] | capital ($745-775B aggregate FY26; FCF pressure) |
| Watch | [[AI debt financing capacity]] | capital (JPM $7T projected debt-financed) |
| Watch | [[Data wall]] | compute (text wall in ~5yr; multimodal extends; synthetic uncertain) |
| Watch | [[Latency wall]] | compute (~1e32 FLOP ceiling; distant) |

## Top 10 most consequential primary data points (May 2026)

1. **NVIDIA $145B supply commitments** + $1T Blackwell+Rubin guide ([[NVIDIA Q1 FY27 earnings (2026)]])
2. **Big Five FY26 capex ~$745-775B** (across 5 primary hyperscaler earnings)
3. **Oracle $300B / 4.5 GW OpenAI deal** ([[Oracle Q3 FY26 earnings]]) — anchors [[Stargate]] execution
4. **Anthropic $30B run-rate revenue April 2026** (10× in 10 months) ([[Anthropic 2026 update]])
5. **Samsung Q1 2026 OP +756% YoY** ($39B single quarter > full-year 2025); HBM4 first-at-scale claim
6. **TSMC CoWoS demand exceeds supply by 40-50% with 50+ week lead times** ([[TSMC Q1 2026 earnings]])
7. **GE Vernova 110 GW gas turbine backlog target YE 2026**; $200B target pulled to 2027 ([[GE Vernova Q1 2026 earnings]])
8. **ASML €38.8B backlog with 2030 guide €44-60B** ([[ASML Q1 2026 earnings]])
9. **Broadcom >$100B AI 2027 line of sight + $73B backlog** ([[Broadcom Q1 FY26 earnings]])
10. **AMAT CEO Dickerson: "$1T semi industry in 2026, several years early"** ([[Applied Materials Q1 FY26 earnings]])

## Material contradictions flagged

> [!warning] HBM4 supplier dynamics in flux
> [[SK Hynix Q3 2025 earnings]] framing: ~70% NVIDIA HBM4 allocation.
> [[Samsung Q1 2026 earnings]] claim: "first to ship HBM4 at scale for Vera Rubin."
> Either Samsung qualified faster than expected, or "first at scale" is competitive marketing. Tracked on [[HBM allocation]].

> [!warning] Stargate framing evolution
> [[Can AI scaling continue through 2030 (2024)]] (2024): $100B / 5 GW / single campus.
> [[Stargate Project announcement (2025)]] (Jan 2025): $500B / 10 GW / 4-year deployment.
> Resolved — the $500B/10GW is canonical. Bloomberg Aug 2025 stalling caveat partially resolved by Oracle's $300B / 4.5 GW Q3 FY26 disclosure.

## Confidence and aging

This map reflects state as of **2026-05-24** based on Q1 2026 earnings cycle data + primary analyst reports. Re-evaluate on:

- **Quarterly hyperscaler capex guides** (next: Q2 2026 earnings late July - August 2026)
- **Quarterly chip vendor earnings** (NVDA, TSMC, SK Hynix, Samsung, Micron — same window)
- **Stargate execution status** updates (Abilene operational date critical leading indicator)
- **NVIDIA supply commitment growth** ($145B → moves)
- **Credit spread moves** on [[AI debt financing capacity]]

## Major coverage gaps (highest priority next ingests)

Per lint pass: red wikilinks accumulating that warrant dedicated pages.

| Name | Wikilink count | Why it matters |
| --- | --- | --- |
| **OpenAI** | 22 occurrences across 15 files | Demand-side anchor for Stargate, Cerebras, Oracle, Anthropic competition |
| **xAI** | (multiple) | Colossus operator; Musk-controlled; Grok model line |
| **MGX (UAE sovereign)** | (multiple) | Stargate equity; sovereign capital pattern |
| **SoftBank** | (multiple) | Stargate financial lead; Vision Fund AI exposure |
| **Mitsubishi Heavy Industries** | (multiple) | Third gas turbine OEM |
| **NextEra / Vistra / Constellation Energy** | (multiple) | Utility/IPP nuclear-DC pairing |
| **Vertiv (VRT)** | (multiple) | Cooling/datacenter physical proxy |

## Related syntheses

- [[Capex trajectory thesis]] — the opinionated view + confidence/leading indicators
