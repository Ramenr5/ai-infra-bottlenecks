---
type: source
created: 2026-05-27
updated: 2026-05-27
tags: [primary-source, semianalysis, cooling, liquid-cooling, dlc, datacenter-physical]
---

# SemiAnalysis — Datacenter Anatomy Part 2: Cooling Systems

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/datacenter-anatomy-part-2-cooling-systems](https://newsletter.semianalysis.com/p/datacenter-anatomy-part-2-cooling-systems)

> [!note] Partially paywalled
> Free portion covers cooling fundamentals + hyperscaler air-cooling designs (Microsoft/Meta/Google/AWS). Liquid-cooling vendor deep-dive, Rubin architecture, and supply-chain analysis are gated.

## Headline framing

Rack density is forcing the cooling transition the same way it's forcing the [[800VDC transition]]. NVIDIA's GB200 NVL72 at **120 kW/rack is exclusively Direct-to-Chip Liquid Cooling (DLC)** — air cooling is physically obsolete above ~50 kW/rack. "Demand for Liquid Cooling is underestimated and will lead to an increase in inefficient 'bridge' solutions as there won't be enough liquid-cooling-capable datacenters."

## Rack-density → cooling-type thresholds

| Era / system | Density | Cooling |
| --- | --- | --- |
| 2010s baseline | 5-10 kW/rack | Air |
| Modern cloud | 15-20 kW/rack | Air |
| RDHx (rear-door heat exchanger) | 30-40 kW (>50 kW with fans) | "In-rack CRAH" — not true liquid cooling |
| **NVIDIA GB200 NVL72** | **120 kW/rack** | **DLC exclusively** |
| Chip TDP trajectory | H100 700W → **1500W next year → >4000W by 2029** | DLC mandatory |

## Efficiency benchmarks (named operators)

| Operator | PUE | WUE |
| --- | --- | --- |
| Industry avg (Uptime) | ~1.6 | — |
| **Google** | **1.10** (best-in-class) | >1.0 |
| **Meta** | **1.08** | **0.20** |
| Microsoft | ~1.15 | 0.30 avg (>2.0 in Phoenix) |
| AWS | ~1.15 | — |

- A 50 MW DC at 1.25 PUE / 2.0 WUE consumes **657M liters (174M gallons) water/year** — surfaces water as an under-covered bottleneck
- Non-IT energy split: **60-80% cooling** (chillers, fans, pumps) / 15-30% electrical / 5-20% lighting

## Equipment specs (free portion)

- **CDU** (Coolant Distribution Unit): typically >1 MW; liquid-to-liquid heat exchanger + pumps + controls
- Air-cooled chiller (Schneider): 18 fans, cools 2 MW, needs 500 kW (4× EER)
- Water-cooled chiller: 15-20 MW per unit; centrifugal COP ~7×
- Cooling tower: ~7-8 MW/unit (~5,000 GPM); Tesla Giga Austin custom towers >10 MW
- Fan wall: 500-600 kW

## Named vendors

- **In free portion**: nVent (RDHx), Schneider Electric (chillers)
- **Gated section titles reference**: [[Vertiv Holdings|Vertiv]], [[Boyd]], [[CoolIT Systems|CoolIT]], Asetek, [[Delta Electronics]], Motivair, [[Trane Technologies]]/LiquidStack

## Supply-chain bottleneck (flagged)

> "Nvidia's massive ramp is causing shortages on components that on first glance look simple such as **Quick Disconnects**."

Quick disconnects (QDs) = the liquid-cooling equivalent of the CoWoS chokepoint — a humble component gating GPU-rack deployment.

## Cross-reference

- [[Datacenter cooling]] — bottleneck page this source anchors
- [[Datacenter physical]] — layer
- [[800VDC transition]] — parallel density-forced transition
- [[NVIDIA]] — GB200 NVL72 DLC mandate is the forcing function
- [[Dell'Oro - Liquid Cooling Market (2026)]] — market-sizing companion
- [[Trane Technologies]] — already in wiki via LiquidStack

## Implications — pages flagged

- [[Datacenter physical]] — needs the rack-density→cooling-type threshold table + PUE/WUE benchmarks
- [[Capex trajectory thesis]] — cooling is a parallel physical bottleneck; QD shortage is a leading-indicator candidate
- Water as a bottleneck (657M L/yr per 50 MW) — candidate for its own page
