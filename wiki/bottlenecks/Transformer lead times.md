---
type: bottleneck
created: 2026-05-28
updated: 2026-05-28
sources: ["[[Power & energy]]", "[[Quanta Services Q1 2026 earnings]]", "[[Goldman Sachs - Generational Growth (2024)]]"]
layer: power
severity: acute
mechanism: lead-time
tags: [transformers, lpt, grid, supply-chain, lead-time]
---

# Transformer lead times

Large-power-transformer (LPT) and grid-transformer lead times as a hard constraint on connecting AI datacenter load to the grid. **Acute**: lead times stretched to ~2 years, capacity is slow to add (specialized manufacturing, grain-oriented electrical steel, skilled labor), and every grid-tied datacenter needs them.

## The constraint (one line)

You can't energize a datacenter without transformers (grid-tie + step-down); LPT lead times of ~110 weeks (Q3 2025) mean transformer supply, not just generation, gates how fast grid-connected AI load comes online.

## Key numbers

| Metric | Value | Source |
| --- | --- | --- |
| **US LPT lead time** | **~128 weeks avg (2026)** — up from ~110 (2024); range 80-210 wks | Wood Mackenzie 2026 (verify) |
| **GSU / large custom transformers** | **up to ~208 weeks (4 years)** for the biggest units | [pv-magazine USA May 2026](https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints-as-lead-times-extend-to-four-years/) |
| Quanta transformer capacity | doubling at **$500-700M** investment | [[Quanta Services Q1 2026 earnings]] |
| New US transformer manufacturing announced | ~$2B (Hitachi Energy, Siemens Energy) — not online until ~2028 | WoodMac 2026 (verify) |
| US incremental generation needed | 47 GW through 2030 (all needs transformers) | [[Goldman Sachs - Generational Growth (2024)]] |

> Lead times rose from ~50 wks (2021) → ~120 (2024) → **~128 avg (2026)**; the very latest WoodMac quarter ticked *down* ~10 wks off a higher peak, but GSU/large-custom units still run to 4 years. New domestic capacity (~$2B announced) doesn't come online until ~2028 — so projects permitted now face 2028-29 grid delivery. Reinforces behind-the-meter gas ([[SemiAnalysis - Onsite Gas Deep Dive (2025)]]) as the bypass.

## Why it binds

- **Specialized manufacturing**: LPTs are bespoke, built-to-order; few global manufacturers
- **Grain-oriented electrical steel (GOES)**: a constrained input material
- **Skilled labor + long build cycles**: capacity can't ramp on a datacenter timeline
- **Universal need**: gas, nuclear, solar — every generation source AND every datacenter grid-tie needs transformers, so demand stacks

## Picks-and-shovels

- [[Quanta Services]] (PWR) — doubling transformer manufacturing capacity
- [[Hammond Power Solutions]] — dry-type + specialty transformers (orphan; candidate page)
- [[Eaton]], [[ABB]], Siemens Energy, Hitachi Energy — grid transformers
- [[Hubbell]] — grid components (orphan; candidate page)

## Severity rationale

- **Acute**: ~2-yr lead times biting now; not capex-responsive on a datacenter timeline; SSTs (per [[800VDC transition]]) may eventually displace some LPT demand but not before 2030+
- Forward-looking relief: capacity expansions (Quanta, others) + potential SST substitution long-term

## Related

- Layer: [[Power & energy]]
- Related bottlenecks: [[Substation interconnect queue]], [[800VDC transition]] (SSTs may displace some LPT demand 2030+)
- Companies: [[Quanta Services]], [[Eaton]], [[ABB]]

## Open questions

- Is this a 2-year story or a 10-year story? (depends on GOES + manufacturing capacity adds)
- Do SSTs ([[800VDC transition]]) materially reduce LPT demand by 2030+?
- GOES supply chain concentration risk
