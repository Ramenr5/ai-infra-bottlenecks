---
type: layer
created: 2026-05-24
updated: 2026-05-27
sources: ["[[Situational Awareness, Two Years Later (2026)]]", "[[Can AI scaling continue through 2030 (2024)]]", "[[Goldman Sachs - Generational Growth (2024)]]", "[[IEA - Energy and AI (2026)]]", "[[EPRI - Powering Intelligence (2026)]]"]
tags: [power, energy, grid, bottleneck-layer]
---

# Power & energy

The most commonly cited binding constraint on the AI buildout. Frontier datacenters now demand hundreds of MW to GW-scale of dispatchable, low-cost, low-carbon power, on construction schedules (12–24 months) that are dramatically faster than utility-scale generation can be permitted and built (5–10+ years for nuclear, 3–7 for transmission).

## Sub-domains

- **Generation** — [[Natural gas combined cycle]], [[Nuclear power|nuclear (SMRs and uprates)]], [[Geothermal]], [[Solar + storage]], [[Hydropower]], on-site behind-the-meter
- **Transmission & grid** — [[Substation interconnect queue]], [[High-voltage transformers]], [[HVDC]], [[Switchgear]]
- **Behind-the-meter** — gas turbines on-site, dedicated PPAs with new builds, co-located generation
- **Markets & policy** — [[FERC]] interconnect rules, state IRP processes, capacity markets ([[PJM]], [[ERCOT]])

## Bottlenecks (to be populated as sources land)

- [[Transformer lead times]] — large-power transformer (LPT) backlog
- [[Substation interconnect queue]] — multi-year wait in most ISOs
- [[Skilled labor (linemen, electricians)]] — IBEW journeyman shortage
- [[Gas turbine lead times]] — GE Vernova / Siemens Energy / Mitsubishi backlog
- [[Permitting timelines]] — NEPA, state siting, water rights

## Headline demand-side data points

| Project / Region | New AI load | Source |
| --- | --- | --- |
| **[[Stargate Texas]]** | **10 GW** (≈ NYC + San Diego combined consumption) | [[Situational Awareness, Two Years Later (2026)]] |
| [[Amazon Ohio expansion]] | $23B; specific MW not in source | Same |
| [[Colossus (xAI)]] | 100K GPUs / 122-day build (MW not specified) | Same |
| [[Susquehanna nuclear plant]] (Amazon PPA) | 960 MW behind-the-meter | [[Can AI scaling continue through 2030 (2024)]] |
| Meta Missouri solar | 350 MW | Same |
| Meta Arizona solar | 300 MW | Same |

Stargate alone implies a step-change in [[ERCOT]] load 2–3× the size of today's [[Northern Virginia]] cluster.

## Authoritative demand anchors (IEA global + EPRI US, 2026)

The institutional anchors complementing the analyst/Epoch numbers below:

**Global ([[IEA - Energy and AI (2026)]]):**

| Metric | Value |
| --- | --- |
| Global DC electricity 2024 → 2030 | **415 TWh → 945 TWh** (~15%/yr; ~1.5% → ~3% of global) |
| AI ("accelerated") servers | **+30%/yr** vs +9%/yr conventional |
| US increase 2024-2030 | **+240 TWh (+130%)**; per-capita 540 → >1,200 kWh |
| China / Europe / Japan | +175 TWh (+170%) / +45 TWh (+70%) / +15 TWh (+80%) |
| **2035 sensitivity** | **700 (Headwinds) / 970 (HighEff) / 1,700 (Lift-Off) TWh** |

**US ([[EPRI - Powering Intelligence (2026)]], with [[Epoch AI]]):**

| Metric | Value |
| --- | --- |
| US datacenter share of electricity by 2030 | **9-17%** (up from ~4% today) |

The IEA 2035 range (700-1,700 TWh) is the cleanest quantified bull/bear bookend — it feeds both [[Capex trajectory thesis]] (Lift-Off) and [[Capex bust scenario]] (Headwinds).

## Aggregate US sizing (Epoch 2024)

| Metric | Today | 2030 projection |
| --- | --- | --- |
| US installed power capacity | ~1,200 GW | — |
| US average generation (2023) | ~477 GW | — |
| All US datacenter average consumption | ~20 GW | ~46 GW (Goldman) |
| All US datacenter capacity | ~40 GW | **~90 GW** (15%/yr) |
| AI datacenter capacity (US) | ~3 GW | **~30 GW** (10× expansion) |
| Largest distributed training-run power | — | ~**8 GW** (26% of AI capacity) |
| Power per frontier training run (2030) | 27 MW (Llama 3.1) | ~**6 GW** (200× more, after 24× efficiency) |

All Epoch figures from [[Can AI scaling continue through 2030 (2024)]]. **Power is the constraint that binds first** in Epoch's median scenario.

## Goldman Sachs primary numbers (April 2024)

Per [[Goldman Sachs - Generational Growth (2024)]]:

| Metric | Value |
| --- | --- |
| **US power demand growth** | **2.4% CAGR through 2030** (vs ~0% over last decade) |
| **DC share of US power** | **3% today → 8% by 2030** |
| **DC power demand growth** | **15% CAGR 2023–2030** = +160% by decade end |
| **US utility capex (generation)** | **$50B through 2030** |
| **Incremental US generation capacity needed** | **47 GW** through 2030 |
| **Generation mix (new capacity)** | **~60% natural gas / ~40% renewables** |

The 60/40 mix is the cleanest forward-looking number for picks-and-shovels exposure on generation OEMs ([[GE Vernova]], [[Siemens Energy]], [[Mitsubishi Heavy Industries]] on the gas side; broader renewables names on the other).

## Gas turbine supercycle confirmation (May 2026 primary data)

Two independent gas turbine OEMs confirm the supercycle:

| Vendor | Q1 2026 metric |
| --- | --- |
| **[[GE Vernova]]** | Orders +71% YoY; backlog $163B; **110 GW gas turbine target YE 2026**; **$200B backlog target pulled forward to 2027**; **Q1 DC equipment orders $2.4B > all of 2025** |
| **[[Siemens Energy]]** | Q2 FY26 orders €17.7B RECORD; **US orders nearly doubled to €6.94B** (data center driven); backlog €154B |
| **[[Quanta Services]]** | $48.5B record backlog ($40.1B Electric); doubling transformer manufacturing capacity at $500-700M investment |

The 110 GW GEV target alone = ~2× the Goldman 47 GW US incremental capacity number. Combined with Siemens Energy's record orders + Quanta's record backlog, the gas turbine + grid equipment + EPC supercycle is now primary-confirmed across three independent vendors.

## Onsite gas — the operational answer to the power bottleneck

Per [[SemiAnalysis - Onsite Gas Deep Dive (2025)]], AI labs are bypassing the **5-year grid interconnect queue** with **truck-mounted gas turbines + behind-the-meter** deployments.

### Named onsite gas commitments

| Project | Capacity | Vendor |
| --- | --- | --- |
| **OpenAI/Oracle Abilene** | **2.3 GW** | Multiple |
| **xAI Memphis Colossus 2** | **1.9 GW** | **Doosan Enerbility** |
| [[Crusoe Energy]] Abilene | 360 MW | GE Vernova + Caterpillar Solar Titan |
| Vantage Shackelford TX | 1.4 GW IT / **2.3 GW VoltaGrid** | VoltaGrid |
| Meta Socrates South Ohio | 306 MW | mixed |
| Boom Supersonic / Crusoe | 1.2 GW | Boom |

### Lead times: gas vs grid

| Tech | Lead time |
| --- | --- |
| **Grid interconnect** | **~5 years typical** |
| Aeroderivative gas turbines | **18-36 months** |
| Industrial gas turbines (IGTs) | 12-36 months |

### OEM production capacity build-out

- **[[GE Vernova]]:** targeting 24 GW/year
- **[[Siemens Energy]]:** ~20 GW → >30 GW by 2028-30
- **Mitsubishi Power:** +30% increase
- **Caterpillar (CAT):** 2.5× production by 2030
- **Bloom Energy (BE):** 2 GW/year by end 2026 (fuel cells)

### The economic justification

> "AI cloud generates revenue of **$10-12 billion per gigawatt, annually**" — per SemiAnalysis

400 MW online 6 months early = worth billions. Justifies onsite gas premium ($1,700-2,000/kW for aeroderivatives) vs cheaper grid-sourced.

### Texas grid bottleneck quantified

> "Tens of gigawatts of datacenter load requests pour in each month. Yet in the past 12 months, **barely more than a gigawatt has been approved**." (per SemiAnalysis)

### New picks-and-shovels names surfaced

- **VoltaGrid** (private, truck-mounted turbines)
- **Solaris Energy Infrastructure** (turbine rentals)
- **Doosan Enerbility** (Korean; 1.9 GW xAI order)
- **Wärtsilä** (WRT1V.HE; 800 MW DC contracts)
- **Bloom Energy** (BE; fuel cells; 2 GW/yr by 2026)
- **Caterpillar** (CAT; Solar Turbines subsidiary)
- **[[Crusoe Energy]]** (operates Stargate Abilene)

### Critical materials supply chain risk

- **Yttrium** under Chinese export control — critical for turbine blades
- Blade/vane suppliers: PCC, Howmet Aerospace, CPP, Doncasters

## Global power demand context (per [[SemiAnalysis - AI Datacenter Energy Dilemma]])

| Metric | Value |
| --- | --- |
| **Global DC Critical IT Power 2023** | **49 GW** |
| **Global DC Critical IT Power 2026** | **96 GW** (~doubling in 3 years) |
| **AI share of 96 GW** | **~40 GW** |
| Growth rate | 12-15% CAGR → **25% CAGR acceleration** |
| **DC % of global energy by 2030** | **4.5%** |

### Electricity tariff comparison (USD/kWh industrial)

| Region | Rate |
| --- | --- |
| **US (structural advantage)** | **$0.083** |
| China | $0.092 |
| Taiwan/Korea | $0.10-0.12 |
| Japan | $0.152 |
| EU average | $0.18 |
| **Singapore** | **$0.23** |

US ~50% cheaper than EU = structural reason US dominates AI infra concentration.

### Regional capacity constraints

- **Singapore**: 900 MW DC IT power = >10% of national power generation; 4-yr moratorium (lifted Jul 2023) approved only 80 MW
- **[[Johor Malaysia]]**: 1,000 MW pipeline (capacity displacement from Singapore)
- **Europe**: <4% of global AI Accelerator FLOPs; **no GW-class clusters planned**
- **UAE**: 115 → 330 MW (2022 → 2026)
- **Saudi Arabia**: 530 MW planned

## Regulatory backlash (per [[SemiAnalysis - AI Datacenters Electric Bills (2026)]])

PJM capacity prices spiked **9.3× (2024/25 → 2025/26)**:
- 2024/25: $29/MW-day
- 2025/26: $270/MW-day
- 2026/27 & 2027/28: $329/MW-day (price-capped)

**Residential impact:** PJM removing all DCs would save $9.33B (-64%) in capacity payments. 67M PJM residents face **~15% bill increase** ($29.90/month) attributable to AI DC buildout.

**ERCOT design advantage:** prices "roughly stable for last three years" despite equivalent DC buildout. Forward prices +11-17% vs PJM's 9.3× spike. **This is a major reason Texas is winning AI infra share over Northern Virginia** — regulatory dynamics, not just power cost.

## What the numbers mean

- Single AI campus ceilings: **1–5 GW** feasible by 2030 → up to 3e29 FLOP training capacity
- Distributed multi-DC: **2–45 GW** feasible → up to 2e30 FLOP
- Only **27 US power plants** above 2.5 GW exist; recent >3 GW builds took ~5 years — supply addition is slow
- [[Northern Virginia]]: 5 GW → 10 GW by 2030 per Dominion guidance
- Inter-DC bandwidth (4–20 Pbps achievable) is NOT the binding constraint for distributed training

## Where the money flows

- **Hyperscalers** signing 10-20 year PPAs and equity-investing in new generation
- **Sovereign capital** funding new nuclear and gas builds (Gulf, Asia)
- **Utility capex cycles** at multi-decade highs; rate-base growth funding grid upgrades
- **Private equity** acquiring power assets / developers for hyperscaler offtake

## Key companies (expected pages)

- Suppliers: [[GE Vernova]], [[Siemens Energy]], [[Mitsubishi Heavy Industries]], [[Eaton]], [[Hubbell]], [[Hammond Power Solutions]], [[Quanta Services]], [[MYR Group]]
- Utilities: [[NextEra Energy]], [[Vistra]], [[Constellation Energy]], [[Talen Energy]], [[Dominion Energy]], [[Southern Company]], [[Public Service Enterprise Group]]
- IPPs/Developers: [[Crusoe Energy]], [[Oklo]], [[NuScale]], [[X-Energy]]

## Key geographies

- [[ERCOT]] (Texas), [[PJM]] (mid-Atlantic), [[Northern Virginia]], [[Wyoming]], [[Saudi Arabia]], [[UAE]]

## Open questions

- Will gas turbine OEMs (GE Vernova / Siemens Energy / Mitsubishi) be able to absorb the order book or stay rationed?
- How much hyperscaler demand can SMRs realistically serve in the 2028-2032 window?
- Is the transformer bottleneck a 2-year or a 10-year story?
