---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[ASML Q1 2026 earnings]]"]
layer: compute
severity: structural
mechanism: capacity
tags: [asml, euv, high-na, lithography, monopoly, semiconductor-equipment]
---

# Lithography monopoly

**[[ASML]] is the sole supplier of EUV (extreme ultraviolet) lithography systems globally.** No alternative exists at any price. The most concentrated single-source supplier in the entire AI silicon supply chain — more concentrated than [[TSMC]] (which has Samsung Foundry + Intel Foundry as imperfect alternatives) or [[SK Hynix]] (which has Samsung + Micron).

## Why "structural" not "acute"

- Not a cyclical capacity-vs-demand mismatch — there is **no second supplier developing EUV**. Nikon and Canon stayed at DUV.
- Decades of compounded R&D + the exclusive ASML-Carl Zeiss optics JV make displacement effectively impossible
- Tool throughput improvements come per generation (low-NA → High-NA) on multi-year cycles, not per-quarter capacity scaling

## Key constraints

| Metric | Reality |
| --- | --- |
| **EUV systems shipped per year by ASML** | ~50-60 currently; scaling to ~70+ |
| **Cost per low-NA EUV system** | ~$200M |
| **Cost per High-NA EUV system** | **~$380M** |
| Installation time per machine | months to ~1 year |
| ASML Q1 2026 backlog | **€38.8B** (~4 years forward visibility) |

## Direct effects on the downstream supply chain

- [[TSMC]]'s ability to scale N3 → N2 → A16 throughput is **directly capped by ASML EUV tool delivery**
- [[CoWoS packaging capacity]] uses some EUV-patterned dies; expansion paced indirectly
- Memory makers ([[SK Hynix]], Samsung Memory, Micron) need EUV for advanced DRAM/HBM die patterning — ASML 2030 guide cites "HBM as second cycle leg"

## High-NA EUV ramp (the next-generation lever)

- High-NA enables sub-2nm patterning (TSMC N2/A16, Samsung SF2, Intel 18AP and beyond)
- **2 High-NA systems shipped in Q1 2026** (per [[ASML Q1 2026 earnings]])
- Material ramp expected through 2027-2030
- ASML 2030 revenue guide widens to **€44-60B** reflecting High-NA uncertainty

## What could change it

1. **A second EUV supplier** — basically impossible in the 2026-2030 window; would require multi-decade investment + Carl Zeiss equivalent
2. **Alternative patterning techniques** — multi-patterning DUV (used for some N3/N2 layers) can substitute for some EUV layers but not all
3. **High-NA throughput improvements** — ASML's own technology cadence is the relevant lever
4. **China indigenous EUV effort** — multi-decade away even with massive investment; SMIC has used multi-patterning DUV to reach 7nm, but EUV-class single-patterning is structurally unreachable without ASML

## Geopolitical dimension

- US export controls restrict ASML EUV (and some advanced DUV) sales to China
- The most impactful single export-control regime in semiconductors
- China revenue at ASML has been material historically; restricted portion is the key uncertainty

## Beneficiaries

- **[[ASML]] (ASML)** — sole rent capture; 51-53% gross margins; €38.8B backlog
- Carl Zeiss SMT (private; ASML's optical JV partner) — captured via license fees
- Tier-1 anchor customers ([[TSMC]] gets first allocation; shapes roadmap)

## What to watch

- ASML quarterly bookings (EUV breakout especially)
- High-NA system shipments per quarter
- TSMC vs Samsung vs Intel customer mix
- China export control regime developments
- Any rumors of competitive efforts (would be material if real)
