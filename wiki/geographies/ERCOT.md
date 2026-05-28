---
type: geography
created: 2026-05-28
updated: 2026-05-28
sources: ["[[SemiAnalysis - AI Datacenters Electric Bills (2026)]]", "[[SemiAnalysis - Onsite Gas Deep Dive (2025)]]", "[[Power & energy]]", "[[Situational Awareness, Two Years Later (2026)]]"]
kind: grid-region
tags: [grid, texas, ercot, energy-only-market, power]
---

# ERCOT

The Texas grid operator (Electric Reliability Council of Texas) — the **structurally advantaged US grid region for AI datacenter siting**. An energy-only market (no capacity market), largely isolated from the other US interconnections, with faster interconnection and stable prices despite heavy datacenter load growth. The single biggest reason Texas is winning AI infra share over [[Northern Virginia]].

## Why ERCOT wins AI infra share (per [[SemiAnalysis - AI Datacenters Electric Bills (2026)]])

| Dimension | ERCOT | [[PJM]] (contrast) |
| --- | --- | --- |
| Capacity prices | "roughly stable for last three years" | **spiked 9.3×** ($29 → $270/MW-day) |
| Forward prices | +11-17% | 9.3× spike |
| Market design | **Energy-only** (no capacity market) | Capacity market (RPM auctions) |
| Interconnection | Faster (less FERC-layered) | Multi-year queue |

The contrast is **regulatory design, not just power cost** — ERCOT's energy-only market and Texas's lighter permitting let load connect faster and shields residential bills from the DC-driven spikes hitting PJM's 67M residents (~15% bill increase there).

## Load forecast (ERCOT preliminary long-term, Apr 2026)

| Metric | Value |
| --- | --- |
| Summer 2026 peak | **90.5-98 GW** |
| 2032 total demand forecast | **~368 GW** (large-load-queue basis) |
| Peak 2032 (firmer) | 111+ GW |
| **Large-load interconnection queue** | **~226 GW** (Nov 2025) — nearly **4×** the 63 GW at end-2024 |
| DC share of large-load queue | **~77%** |

> [!warning] Queue ≠ built capacity
> ERCOT explicitly cautions the ~368 GW / 226 GW queue figures are **likely inflated** — historical realization rates run far below queue filings, and EIA cut its 2026 ERCOT growth forecast (15.7% → 9.6%). Treat the queue as a demand *ceiling/scenario*, not a base case. Sources: [ERCOT Apr 2026 release](https://www.ercot.com/news/release/04152026-ercot-releases-preliminary), [Utility Dive](https://www.utilitydive.com/news/texas-demand-to-quadruple-by-2032-ercot-says-maybe-but-dont-bet-on-it/817698/), [Latitude Media](https://www.latitudemedia.com/news/ercots-large-load-queue-has-nearly-quadrupled-in-a-single-year/).

## Constraints (the other side)

Per [[SemiAnalysis - Onsite Gas Deep Dive (2025)]]: **"Tens of gigawatts of datacenter load requests pour in each month. Yet in the past 12 months, barely more than a gigawatt has been approved."** ERCOT is faster than PJM but still can't approve at the rate requests arrive → drives [[onsite gas]] behind-the-meter deployments (bypassing the interconnect queue). The ~226 GW queue (77% datacenters) vs ~1 GW/yr approval rate IS this gap, quantified.

## AI infra hosted

- [[Stargate Texas]] / [[Stargate Abilene]] — 10 GW flagship ([[Crusoe Energy]]-operated)
- [[Colossus (xAI)]] — though Memphis is TVA, not ERCOT; xAI Texas expansion is ERCOT
- Vantage Shackelford TX (1.4 GW IT / 2.3 GW VoltaGrid)
- Major onsite-gas deployments (Abilene 2.3 GW, etc.)

## Why it matters

- The **canonical "regulatory arbitrage" geography** — ERCOT vs PJM is the cleanest natural experiment on how market design shapes where AI infra lands
- Coupled to [[Texas]] (state) and the [[Datacenter water permits]] constraint (Texas drought risk)
- Energy-only design means generators bear price risk → attractive for behind-the-meter gas + BESS

## Related

- Sources: [[SemiAnalysis - AI Datacenters Electric Bills (2026)]], [[SemiAnalysis - Onsite Gas Deep Dive (2025)]]
- Geographies: [[Texas]], [[Northern Virginia]], [[PJM]]
- Layer: [[Power & energy]]

## Open questions

- Does ERCOT's price stability survive the next 10+ GW of approved load, or does it converge toward PJM-style spikes?
- Winter reliability (post-Uri) vs AI baseload demand
- How much load shifts to behind-the-meter gas to bypass the ~1 GW/yr approval ceiling?
