---
type: asset
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Situational Awareness, Two Years Later (2026)]]", "[[SemiAnalysis - xAI Colossus 2 (2026)]]", "[[SemiAnalysis - Onsite Gas Deep Dive (2025)]]"]
kind: datacenter
location: Memphis, TN (Colossus 1) + Southaven, MS (Colossus 2 turbine ops)
operator: "[[xAI]]"
status: operating (Colossus 1) + construction (Colossus 2)
tags: [datacenter, xai, gpu-cluster, speed-of-build, colossus-2, gigawatt-datacenter, voltagrid, doosan]
---

# Colossus (xAI)

xAI's GPU supercomputer, notable primarily for the **speed of its buildout**: 100,000 GPUs deployed inside a shuttered refrigerator factory in **122 days** (per [[Situational Awareness, Two Years Later (2026)]]).

## Key facts — updated May 2026 (per SemiAnalysis primary)

### Colossus 1 (Memphis, TN — operating)

- **~200,000 H100/H200 + ~30,000 GB200 NVL72** (per [[SemiAnalysis - xAI Colossus 2 (2026)]])
- Originally 100K GPU build in 122 days; subsequently scaled materially
- Power: ~300 MW
- Industrial shell reuse (former Electrolux refrigerator factory)
- Backed by Tesla Megapacks for load smoothing

### Colossus 2 (Southaven, MS — construction)

- **Target: 1.1 GW** (potential expansion to 1.5 GW) = first gigawatt-scale datacenter operational
- **3.7× larger than Colossus 1**
- Currently ~460 MW installed/under construction
- 7× 35 MW turbines operating in Southaven, MS
- **Doosan Enerbility 1.9 GW** turbine order (per [[SemiAnalysis - Onsite Gas Deep Dive (2025)]])
- Solaris Energy Infrastructure (turbine rentals) + VoltaGrid (truck-mounted engines)
- Cooling deployed by Aug 22 2025 (six months from March 7 2025 start)
- ~110,000 GB200 NVL72 capacity (based on 200MW cooling)
- Solaris turbine completion: Q2 2027
- **$40B Saudi PIF rumored raise** at ~$200B xAI valuation

## Why it matters for the bottleneck thesis

- **Existence proof on construction speed:** demonstrates that with an existing industrial shell + sufficient power + workforce concentration, a hyperscale GPU cluster can stand up in months rather than the multi-year average. Suggests the binding constraint for *some* builds is power + grid interconnect, not shell construction.
- **Shell reuse pattern:** Industrial brownfields (factories, paper mills, aluminum smelters) with existing power infrastructure may become a meaningful supply-side answer to the permitting / interconnect bottleneck. Worth tracking as a recurring pattern.
- **Counter-data to "datacenters take 2+ years"** narratives — but a single data point; the source doesn't address how Colossus's power was secured or whether the model generalizes.

## Open questions

- Power source and provisioning details (the source doesn't address)
- Post-initial expansion plans — has Colossus grown beyond 100K GPUs?
- How replicable is the brownfield-shell-reuse playbook outside this specific case?
- Cost vs. greenfield equivalent

> [!note]
> The 122-day claim is widely cited but verification against xAI's own communications or independent reporting would harden it before use as a load-bearing data point.
