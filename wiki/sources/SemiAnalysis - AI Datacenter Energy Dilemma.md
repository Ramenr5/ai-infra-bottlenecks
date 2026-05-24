---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, power, datacenter-energy, geographic-concentration, electricity-tariffs]
---

# SemiAnalysis — AI Datacenter Energy Dilemma: Race for AI Datacenter Space

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/ai-datacenter-energy-dilemma-race](https://newsletter.semianalysis.com/p/ai-datacenter-energy-dilemma-race)

> [!success] Primary source — global DC power demand mapped
> Global DC critical IT power: **49 GW (2023) → 96 GW (2026)** ≈ doubling in 3 years. **AI = ~40 GW of the 96 GW**. Comprehensive geographic concentration analysis + electricity tariff comparison + per-region capacity constraints. Critical for understanding global rather than just US-focused [[Power & energy]] dynamics.

## Global power demand trajectory

| Metric | Value |
| --- | --- |
| **Global DC Critical IT Power 2023** | **49 GW** |
| **Global DC Critical IT Power 2026** | **96 GW** (~doubling) |
| AI share of 96 GW | **~40 GW** |
| Datacenter capacity growth | **12-15% CAGR → 25% CAGR acceleration** |
| Projected DC % global energy (2030) | 4.5% |

## Geographic concentration

### United States (dominant)
- "DC Critical IT Capacity in the US will need to **triple from 2023 to 2027**"
- Hosts majority of planned AI clusters

### Asia-Pacific (constrained)
- **Singapore**: 900 MW of Critical IT Power = **>10% of Singapore's national power generation**; 4-year moratorium (lifted July 2023); only 80 MW approved
- **Malaysia (Johor Bahru)**: up to 1,000 MW pipeline (confirms [[Johor Malaysia]] geography)
- **Taiwan, Korea, Japan**: >90% import dependency for natural gas/coal

### Europe (limited)
- "Less than 4% of globally deployed AI Accelerator FLOPs"
- **No gigawatt-class clusters planned**
- Germany nuclear: -75% from 2007 to 2021
- >90% gas import dependency (LNG)

### Middle East (emerging)
- **UAE: 115 MW (2022) → 330 MW (2026)**
- **Saudi Arabia: 530 MW planned**

## Electricity tariff comparison (USD/kWh)

| Region | Industrial rate |
| --- | --- |
| **US** | **$0.083** |
| China | $0.092 |
| Taiwan/Korea | $0.10-0.12 |
| Japan | $0.152 |
| EU average | $0.18 |
| Ireland | $0.211 |
| **Singapore** | **$0.23** |
| UK | $0.235 |

**US power cost advantage is structural** = key reason US dominates AI infra concentration.

## Power source mix

| Region | Gas | Coal | Renewables | Notes |
| --- | --- | --- | --- | --- |
| **US** | 40% | declining 37%→8% by 2030 | growing | structural advantage |
| China | minor | **61%** | 13.5% | import-vulnerable via Strait of Malacca |
| Europe | 35-45% | declining | growing nuclear gap | >90% LNG import dependency |

## Hyperscaler footprint snapshot

| Hyperscaler | Notable detail |
| --- | --- |
| **OpenAI** | Plans hundreds of thousands GPUs in largest multi-site cluster |
| **Meta** | **650,000 H100-equivalent installed base** (end-of-year framing); shifted CPU→GPU recommendation models; characterized as "worst datacenter design in terms of power density" |
| Microsoft | Largest pipeline of datacenter buildouts |
| **AWS** | **Purchased 1,000 MW nuclear-powered DC campus for $650M** (= [[Susquehanna nuclear plant]] context); "last hyperscaler to wake up to AI" |
| Google | Planning >1 GW training clusters; PUE <1.10 |
| **CoreWeave** | $1.6B in Plano TX facility; 50 MW Critical IT + 30-40K GPUs; pathway to 250 MW |

## GPU power specifications

- DGX H100 server: ~10,200 W average
- Per GPU (with interconnect): 1,275 W
- System-level (incl. storage/networking): 1,389 W per H100
- Roadmap: 1,000 W → 1,200 W → 1,500 W GPUs

## Notable cluster design constraints

- H100 cluster networking: max switch-to-switch cable = **20 meters**
- Rack spacing: same-cluster racks must be ≤30 meters from network core
- Colocation rack power: 12 kW typical vs hyperscale 30-40 kW+

## Why it matters

1. **Global power demand doubled in 3 years** (49→96 GW); AI = 40 GW of that = scale of multiple ERCOT-sized systems
2. **US structural power cost advantage** ($0.083/kWh vs $0.15-$0.23 elsewhere) = why US dominates AI infra
3. **Singapore 10%+ of national power for DCs** = canonical case of hyperscaler-induced national power consumption
4. **Meta 650K H100-equivalent + "worst datacenter design"** = specific company criticism worth flagging
5. **AWS $650M 1 GW nuclear DC purchase** = primary on the [[Susquehanna nuclear plant]] / Talen deal economics

## Implications

- Major update to [[Power & energy]] with global doubling + tariff comparison
- Update [[Meta]] with 650K H100 baseline + SemiAnalysis design criticism
- Update [[Northern Virginia]] / introduce **Singapore** geography
- Cross-ref [[Johor Malaysia]] (1,000 MW pipeline number)
- Update [[Talen Energy]] / [[Susquehanna nuclear plant]] with $650M / 1 GW transaction value
