---
type: bottleneck
created: 2026-05-27
updated: 2026-05-27
sources: ["[[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]]"]
layer: datacenter
severity: watch
mechanism: permit
tags: [water, wue, permitting, cooling, geographic-constraint]
---

# Datacenter water permits

Water access and permitting as a siting constraint on AI datacenters. **Watch** (not yet acute economy-wide) but **locally binding** in arid, high-growth regions (Phoenix, parts of Texas) where evaporative cooling competes with municipal/agricultural demand and draws regulatory + community pushback.

## The constraint (one line)

Evaporative cooling — the cheapest way to reject heat — consumes large volumes of water; at gigawatt-scale DC clusters in water-stressed regions, permits and community opposition can gate siting independent of power availability.

## Key numbers

| Metric | Value | Source |
| --- | --- | --- |
| **Water per 50 MW DC** | **657M liters/yr (174M gallons)** at 1.25 PUE / 2.0 WUE | [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]] |
| Microsoft company-avg WUE | 0.30 | Same |
| Microsoft Phoenix WUE | **>2.0** (arid penalty) | Same |
| Meta WUE | 0.20 (best-in-class) | Same |
| Google WUE | >1.0 | Same |

WUE (Water Usage Effectiveness) = liters per kWh of IT energy. The Phoenix >2.0 figure shows how arid-climate evaporative cooling multiplies water draw — the exact regions where water is most contested.

## The tradeoff

- **Evaporative/water cooling**: cheapest heat rejection, highest water draw → permit/community risk
- **Air-cooled / dry cooling**: ~zero water, but worse PUE (more power) and higher capex → trades the [[Power & energy]] constraint for the water one
- **Closed-loop liquid ([[Datacenter cooling]])**: reduces but doesn't eliminate facility water (chillers/towers still reject heat)

This is why water and power are coupled: minimizing one often worsens the other. Operators in water-stressed regions (Phoenix) accept higher PUE/power to cut water; operators in power-stressed regions accept higher water to cut power.

## Why "watch" not "acute"

- Not yet a system-wide gate; most US siting is still power- and interconnect-limited first
- Operators have a dial (dry cooling, closed-loop, reclaimed water) that trades water for power/capex
- BUT locally acute in specific metros, and a rising source of community/regulatory opposition

Upgrade trigger: water-permit denials begin materially delaying GW-class projects, or a major metro imposes a DC water moratorium (the water analog of Loudoun's power/zoning fights).

## Geographic exposure

- [[Texas]] / [[ERCOT]] — fast DC growth + periodic drought
- Phoenix / Arizona — extreme arid penalty (Microsoft >2.0 WUE)
- [[Northern Virginia]] — water + power + zoning all contested
- Contrast: cool-climate free-cooling sites (Nordics, Finland sea-water) sidestep it

## Related

- Source: [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]]
- Layer: [[Datacenter physical]]
- Coupled bottlenecks: [[Datacenter cooling]] (the cooling-tech choice drives WUE), [[Power & energy]] (water-vs-power tradeoff)
- Geographies: [[Texas]], [[Northern Virginia]]

## Open questions

- Does any major metro impose a DC water moratorium (the water Loudoun) by 2027?
- How fast does reclaimed/recycled water adoption scale to defuse the constraint?
- Does the water-vs-power tradeoff push more builds toward cool-climate / coastal free-cooling sites?
