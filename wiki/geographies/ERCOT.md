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

## Constraints (the other side)

Per [[SemiAnalysis - Onsite Gas Deep Dive (2025)]]: **"Tens of gigawatts of datacenter load requests pour in each month. Yet in the past 12 months, barely more than a gigawatt has been approved."** ERCOT is faster than PJM but still can't approve at the rate requests arrive → drives [[onsite gas]] behind-the-meter deployments (bypassing the interconnect queue).

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
