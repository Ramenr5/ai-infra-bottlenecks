---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, power, onsite-gas, turbines, xai, voltagrid, crusoe]
---

# SemiAnalysis — How AI Labs Are Solving the Power Crisis: The Onsite Gas Deep Dive (Dec 2025)

**Publisher:** [[SemiAnalysis]] (Dylan Patel)
**Published:** 2025-12-30
**URL:** [newsletter.semianalysis.com/p/how-ai-labs-are-solving-the-power](https://newsletter.semianalysis.com/p/how-ai-labs-are-solving-the-power)

> [!success] Primary source — definitive onsite gas deployment map
> AI labs are aggressively bypassing the 5-year grid interconnect queue with truck-mounted gas turbines + behind-the-meter deployments. This is the operational answer to the power bottleneck flagged in [[Power & energy]].

## US AI power demand trajectory

- 2023: ~3 GW
- **2026: >28 GW (forecast)**
- "Roughly a terawatt of load requests" submitted to US utilities

## Texas grid status (the canonical bottleneck case)

> "Tens of gigawatts of datacenter load requests pour in each month. Yet in the past 12 months, barely more than a gigawatt has been approved."

## Major onsite gas commitments

| AI lab / project | Capacity | Vendor |
| --- | --- | --- |
| OpenAI/Oracle Abilene | **2.3 GW** | Multiple |
| xAI Memphis (Doosan Enerbility) | **1.9 GW** | Doosan Enerbility |
| Crusoe Abilene | 360 MW (5× GE Vernova LM2500XPRESS + 5× Solar Titan 350) | GE Vernova + Caterpillar |
| Vantage Shackelford County TX | 1.4 GW IT / **2.3 GW VoltaGrid** | VoltaGrid |
| Meta Socrates South (Ohio) | 306 MW (15× units) | Solar Turbines + Siemens + CAT |
| Boom Supersonic / Crusoe | 1.2 GW | Boom Supersonic turbines |
| Wärtsilä DC contracts | 800 MW | Wärtsilä |

## Lead times: gas vs grid

| Tech | Lead time |
| --- | --- |
| **Grid interconnect** | **~5 years typical** |
| **Aeroderivative gas turbines** | **18-36 months** |
| Industrial gas turbines (IGTs) | 12-36 months |
| RICE engines (medium-speed) | 15-24 months |

## OEM production capacity (the supply side)

- **[[GE Vernova]]:** targeting **24 GW/year** (2007-2016 levels)
- **[[Siemens Energy]]:** ~20 GW current → **>30 GW by 2028-30**
- **Mitsubishi Power:** **+30% increase** planned
- **Caterpillar:** **2.5× turbine production by 2030** (from 600 MW/year baseline)
- **Bloom Energy:** **2 GW/year by end 2026** (fuel cells)

## Specific named deployments — xAI Memphis Colossus 2

- **500+ MW of turbines** deployed near datacenters
- "Entirely bypassed the grid" via truck-mounted turbines/engines
- Partners: **Solaris Energy Infrastructure** (rentals) + **VoltaGrid** (truck-mounted engines)
- Equipment: **Solar Turbines 16 MW units** (CAT subsidiary)

## Economics signal

> "AI cloud generates revenue of **$10-12 billion per gigawatt, annually**"

Getting 400 MW online 6 months early = worth billions. This is why onsite gas wins despite higher per-kW cost.

## Equipment costs

| Technology | Cost/kW |
| --- | --- |
| Aeroderivatives | $1,700-2,000 |
| IGTs | $1,500-1,800 |
| RICE | $1,700-2,000 |
| Bloom fuel cells | $3,000-4,000 |

## Supply chain risk

- **Yttrium** under Chinese export control — critical for turbine blades
- Other critical materials: rhenium, cobalt, tantalum, tungsten
- Blade/vane suppliers: PCC, Howmet Aerospace, CPP, Doncasters

## Why it matters for the wiki

1. **Quantifies the "power bottleneck workaround"** — gas-turbine onsite generation is the de facto solution AI labs are using to bypass the 5-year grid queue
2. **Specific named deployments** for [[Stargate]] (Abilene 2.3 GW), [[Colossus (xAI)]] (1.9 GW Doosan), Crusoe, Meta — anchors prior page references with primary data
3. **OEM production capacity gap analysis** — GEV + Siemens Energy + Mitsubishi + CAT + Bloom combined ~70 GW/yr by 2028-30 vs demand growth that could exceed this
4. **VoltaGrid + Solaris Energy** = new private picks-and-shovels names; not yet covered
5. **Crusoe** = should have its own page; multiple mentions across our wiki

## Implications

- Major update to [[Power & energy]] with primary onsite gas data
- Update [[Colossus (xAI)]] with Colossus 2 + Doosan data
- New [[Crusoe Energy]] company page (private; Abilene)
- Mentions for VoltaGrid, Bloom Energy, Caterpillar — future ingests
