---
type: bottleneck
created: 2026-05-27
updated: 2026-05-27
sources: ["[[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]]", "[[Dell'Oro - Liquid Cooling Market (2026)]]"]
layer: datacenter
severity: acute
mechanism: capacity
tags: [cooling, liquid-cooling, dlc, cdu, quick-disconnects, thermal]
---

# Datacenter cooling

The thermal-management transition forced by rising chip TDP and rack density. **Acute** near-term: NVIDIA GB200 NVL72 at 120 kW/rack is DLC-only, chip TDP hits >4,000 W by 2029, and there aren't enough liquid-cooling-capable datacenters — forcing inefficient "bridge" solutions.

## The constraint (one line)

Air cooling is physically obsolete above ~50 kW/rack; the installed base and new builds must convert to direct liquid cooling (DLC) faster than the cooling supply chain (CDUs, cold plates, quick disconnects) can ramp.

## Key numbers

| Metric | Value | Source |
| --- | --- | --- |
| **Liquid cooling market 2025 → 2029** | **~$3B → ~$7B** (>$15B over 5 yr) | [[Dell'Oro - Liquid Cooling Market (2026)]] |
| **GPU TDP trajectory** | H100 700W → 1500W (next yr) → **>4,000W by 2029** | Both |
| GB200 NVL72 rack density | **120 kW/rack, DLC-exclusive** | [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]] |
| Air-cooling ceiling | ~50 kW/rack (RDHx with fans) | Same |
| Cooling = share of non-IT energy | **60-80%** | Same |
| Water per 50 MW DC | **657M L/yr** (174M gal) at 1.25 PUE / 2.0 WUE | Same |
| Best-in-class PUE | Meta 1.08 / Google 1.10 | Same |

## Sub-bottlenecks

- **Quick Disconnects (QDs)** — NVIDIA ramp causing shortages on this humble component; the CoWoS-style chokepoint of liquid cooling
- **CDU capacity** — >1 MW units; Dell'Oro flags possible market saturation as everyone enters
- **Liquid-cooling-capable datacenter shells** — Meta H-design shells take ~2 yr (2-3× peers); not enough DLC-ready space → "bridge" solutions
- **Two-phase DLC maturity** — needed as TDP exceeds single-phase limits, still early

## Picks-and-shovels

**Public:**
- [[Vertiv Holdings]] (VRT) — market leader
- [[nVent Electric]] (NVT) — RDHx + liquid cooling
- [[Aaon]] (AAON) — rapid hyperscaler-driven growth
- [[Trane Technologies]] (TT) — via LiquidStack (already in wiki)
- [[Delta Electronics]] (2308.TW) — 2.4 MW In-Row CDU (also an 800VDC name)

**Private:**
- [[CoolIT Systems]] — DLC cold plates + CDUs
- [[Boyd]] — thermal + liquid cooling
- Motivair, Asetek (smaller / niche)

## Severity rationale

- **Acute** (not structural): the transition is happening NOW (2025-2027) with a hard physical forcing function (TDP), and a real near-term component shortage (QDs). Distinct from [[800VDC transition]] which is structural/multi-year.
- Downgrade risk: if DLC-capable shell construction catches up and QD supply normalizes, severity eases to moderate.

## Related

- Sources: [[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]], [[Dell'Oro - Liquid Cooling Market (2026)]]
- Layer: [[Datacenter physical]]
- Parallel: [[800VDC transition]] (both density-forced datacenter-physical capex shifts)
- Contrarian: Uptime Institute — liquid cooling stays a high-density niche

## Open questions

- Does the QD shortage become the next named chokepoint (CoWoS/HBM analog)?
- Single-phase vs two-phase DLC: which wins as TDP passes 2,000W?
- Is the CDU market already saturating (Dell'Oro's question) → margin compression for entrants?
- Water permitting as a hard geographic constraint (links to [[ERCOT]]/Texas siting)
