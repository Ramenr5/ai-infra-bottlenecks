---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, hbm, memory-wall, hbm4, hbm4e, hybrid-bonding, jedec]
---

# SemiAnalysis — Scaling the Memory Wall: The Rise and Roadmap of HBM (Aug 2025)

**Publisher:** [[SemiAnalysis]]
**Published:** 2025-08-12
**URL:** [newsletter.semianalysis.com/p/scaling-the-memory-wall-the-rise-and-roadmap-of-hbm](https://newsletter.semianalysis.com/p/scaling-the-memory-wall-the-rise-and-roadmap-of-hbm)

> [!success] Primary source — HBM technology deep dive
> Foundational HBM technology primer + roadmap. Sets up the architectural detail underlying [[HBM allocation]] and [[SemiAnalysis - ISSCC 2026 (2026)]] data. Notable: **Rubin Ultra targets 1024 GB HBM4E** per system.

## HBM stack height standards

- Current standard: **720-micron height cube (JEDEC)**
- Relaxed: **775 μm stack height** confirmed by JEDEC
- HBM3/HBM3E achieving 12-layer stacks within 720μm limit

## NVIDIA HBM roadmap (capacity/bandwidth)

| Generation | HBM capacity | Bandwidth |
| --- | --- | --- |
| A100 | 80 GB HBM2E | — |
| H100 | — | 3 TB/s |
| **GB200** | **192 GB** | **8 TB/s** |
| **Rubin Ultra** | **1024 GB HBM4E** | (much higher; spec pending) |

GB200 → Rubin Ultra = **5.3× HBM capacity per system**. Anchors [[HBM allocation]] severity through 2027+.

## TSV technology evolution

- SK Hynix: reduced IR drop **up to 75% lower for VPP** through redesigned power TSVs
- Micron: **30% lower power consumption** via TSV optimization
- Power delivery network critical for stack scalability

## Packaging approaches

| Vendor | Approach |
| --- | --- |
| **SK Hynix** | **MR-MUF** — higher thermal dissipation; batch processing |
| Samsung | Non-Conductive Film (NCF) — layer-by-layer thermal compression bonding |
| Micron | (similar NCF approach historically) |

SK Hynix's MR-MUF = key architectural advantage explaining their HBM yield + thermal lead.

## Hybrid bonding status

> "HB adoption for HBM has always been a 'next generation' technology and the goalposts continue to keep shifting."

- Deferred from HBM4 to HBM4E
- Bump-less benefits (more layers in same height) offset by yield/cost challenges at 12+ layers
- Critical technology for HBM5+ density gains

## Vendor positioning

| Vendor | Position |
| --- | --- |
| **SK Hynix** | Market leader; monopoly on bonding tools via Hanmi (until recent comp pressure) |
| **Samsung** | "Aggressive technology implementations" but historically struggles with execution; loudest hybrid-bonding advocate |
| **Micron** | Leapfrogged with HBM3E despite skipping standard HBM3 |

## Why it matters

1. **Rubin Ultra 1024 GB HBM4E** = forward-looking memory consumption per NVIDIA system; 5.3× GB200; directly anchors why HBM4E will be even more constrained than HBM4
2. **SK Hynix MR-MUF advantage** = architectural reason for Hynix's HBM market leadership; not easily copied
3. **Hybrid bonding deferred to HBM4E** = HBM4 era will not benefit from this density unlock; capacity-add must come from layer count + speed
4. **JEDEC 720→775 μm relaxation** = allows more layers per stack; supports HBM4 12-high adoption
5. **Samsung "aggressive but struggles" execution** = framing context for Samsung HBM4 ramp uncertainty

## Cross-reference

- [[SemiAnalysis - ISSCC 2026 (2026)]] = newer architectural detail at the chip layer
- [[HBM allocation]] = bottleneck context
- [[SK Hynix]] = MR-MUF advantage explains margin leadership
- [[Samsung Electronics]] = execution-risk framing
- [[Micron Technology]] = HBM3E leapfrog history

## Implications

- Update [[HBM allocation]] with Rubin Ultra 1024 GB HBM4E ceiling
- Update [[SK Hynix]] with MR-MUF architectural advantage detail
- Update [[NVIDIA]] HBM roadmap with GB200 192GB → Rubin Ultra 1024 GB trajectory
