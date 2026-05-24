---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, dram, memory-wall, consolidation, hbm-cost-share, density-stagnation]
---

# SemiAnalysis — The Memory Wall: Past, Present, and Future of DRAM

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/the-memory-wall](https://newsletter.semianalysis.com/p/the-memory-wall)

> [!success] Primary source — DRAM industry structure + HBM cost share in accelerators
> **HBM = ~50%+ of H100 manufacturing cost; growing to ~60%+ of Blackwell.** Top 3 DRAM suppliers own >95% of market. Critical context for understanding why HBM/memory pricing pressure flows so directly to NVIDIA/AMD margins.

## DRAM market structure

- **Top 3 suppliers (SK Hynix + Samsung + Micron) own >95% of market**
- Historical contrast: "more than 20 manufacturers in mid 1990s, with 80% market share spread amongst the top 10"
- = decade-long consolidation has produced near-oligopoly pricing dynamics

## DRAM density stagnation

> "In this last decade, scaling has slowed so much that density has increased just 2×"

- DRAM density has stagnated entering 10-nm nodes
- 16Gb DRAM chips first available 8 years ago **are still the most common today**
- Price: introduced ~$3/GB; peaked ~$5/GB; back to $3/GB range in past 12 months (before AI surge)

## HBM cost share in accelerators (the canonical economics)

| Accelerator | HBM as % of manufacturing cost |
| --- | --- |
| **H100** | **~50%+** |
| **Blackwell (B200)** | **~60%+** |

Implication: a $5,000/GB price change in HBM moves a ~$30K accelerator cost by ~$1.5K (3-5% of total). With SOCAMM/HBM pricing up 60%+ across 2026 (per [[SemiAnalysis - AI Value Capture (2026)]]), the cost pass-through is material.

## HBM premium

- **HBM costs 3× or more per GB than standard DDR5**
- HBM's premium is structural — TSV packaging + base die + advanced fab process

## Why it matters

1. **HBM = 60%+ of Blackwell BOM** explains why memory vendor margins (SK Hynix 47-72% op margin) compress NVIDIA margins indirectly. Memory rent capture is the dominant capex flow within accelerator economics.
2. **Top 3 own 95% of DRAM** = oligopoly pricing power; nothing structural changes this in 2026-27 horizon
3. **Density stagnation** = HBM scaling depends increasingly on stack count + speed, not lateral scaling. Validates the JEDEC 720→775μm relaxation thrust.
4. **16Gb DRAM unchanged for 8 years** = supply additions require new fabs (multi-year), not node shrinks (faster)

## Cross-reference

- [[SK Hynix]] / [[Samsung Electronics]] / [[Micron Technology]] = oligopoly winners
- [[HBM allocation]] = bottleneck context
- [[NVIDIA]] = HBM cost flows through accelerator BOM
- [[SemiAnalysis - AI Value Capture (2026)]] = "memory vendors up 6×" framing
- [[SemiAnalysis - ISSCC 2026 (2026)]] = HBM4 architectural detail

## Implications

- Update [[HBM allocation]] with HBM cost share (50%+ H100, 60%+ Blackwell)
- Update [[NVIDIA]] with memory cost share in BOM context
- Reinforces [[Capex trajectory thesis]] memory-vendor rent-capture argument
