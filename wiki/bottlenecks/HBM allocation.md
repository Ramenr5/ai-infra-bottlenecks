---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]", "[[SK Hynix Q3 2025 earnings]]", "[[NVIDIA Q1 FY27 earnings (2026)]]", "[[Micron Q2 FY26 earnings]]", "[[Lam Research Q3 FY26 earnings]]"]
layer: compute
severity: acute
mechanism: capacity
tags: [hbm, hbm4, sk-hynix, samsung, micron, memory, dram, nvidia]
---

# HBM allocation

**High-Bandwidth Memory** — vertically-stacked DRAM packaged onto AI accelerators via [[CoWoS packaging capacity|CoWoS]] (or equivalent). Provides the memory bandwidth that frontier inference and training require. Co-binding constraint with CoWoS — both must scale together to expand AI chip output.

## Key numbers (now primary-sourced)

- **HBM, DRAM, NAND all sold out for 2026** as of Oct 2025 — per [[SK Hynix Q3 2025 earnings]] official release
- HBM supply expected to **remain tight into 2027** (multiple analyst confirmations)
- HBM volume expected to **2–3× from 2023 to 2024** (Yole) — but much of growth comes from reallocating capacity *from DRAM*
- [[SK Hynix]] projects **~60% annual HBM demand growth** (revenue) medium-to-long term
- Industry analyst estimate: **~45% annual HBM production volume growth** through 2028
- HBM share of DRAM market expected to reach **~20% in 2024**

### HBM4 milestones (per [[SK Hynix Q3 2025 earnings]])

- **Mass production began September 2025**
- Shipments begin Q4 2025; full-scale sales expansion 2026
- **NVIDIA HBM4 allocation: ~70% to SK Hynix** (Samsung targeting earlier delivery for the rest)
- Pricing power evidence: SK Hynix Q3 2025 **operating margin 47%**, with **72% margin** cited for early-2026 quarters

### Demand-side mirror (NVIDIA Q1 FY27)

NVIDIA's **$145B total supply commitments** (per [[NVIDIA Q1 FY27 earnings (2026)]]) is the demand-side anchor: NVIDIA alone is locking up HBM and packaging capacity multi-year forward. Combined with TSMC's [[CoWoS packaging capacity|CoWoS 50+ week lead times]], the supply window for marginal HBM demand is closed.

## Supplier landscape — 2026 HBM share (per [[Micron Q2 FY26 earnings]])

| Supplier | **2026 HBM share** | Notes |
| --- | --- | --- |
| **[[SK Hynix]]** | **~43%** | NVIDIA primary; first to HBM3/HBM3E/HBM4; 47-72% operating margins; ~70% prior NVIDIA HBM4 allocation framing (now contested) |
| **[[Samsung Electronics]]** (memory) | **~33%** | **Claims first to ship HBM4 at scale for NVIDIA Vera Rubin** (per [[Samsung Q1 2026 earnings]]); Memory operating profit ~$33.6B Q1 2026 |
| **[[Micron Technology]]** | **~24%** | US-headquartered (only US HBM supplier at scale); HBM4 12-high volume shipments Q1 CY26 aligned with NVIDIA Vera Rubin; Q2 FY26 revenue +196% YoY, 75% GM |

> [!warning] HBM4 supplier framing in flux (May 2026)
> Prior framing (from [[SK Hynix Q3 2025 earnings]]): SK Hynix had ~70% of NVIDIA HBM4 allocation.
> Updated framing (from [[Samsung Q1 2026 earnings]]): **Samsung claims first to ship HBM4 at scale for Vera Rubin.**
> Either (a) Samsung qualified faster than expected and is taking real HBM4 share, (b) the "first at scale" is competitive marketing positioning, or (c) the three suppliers are racing in parallel on different SKUs. **The exact share split is now uncertain** across SK Hynix / Samsung / Micron for the HBM4 ramp.

### Equipment-side confirmation

Per [[Lam Research Q3 FY26 earnings]]: **Memory 39% of systems revenue, DRAM 27% (RECORD)**. Lam is the global leader in memory etch/deposition — record DRAM revenue means SK Hynix, Samsung, and Micron are buying equipment in lockstep to expand HBM capacity. The supply build-out is underway across all three suppliers simultaneously.

## Why it's acute

1. **Multi-year sold-out window.** Suppliers don't have spare capacity — additions require new fab investment with 2–3 year lead times.
2. **Capacity comes from cannibalizing DRAM.** Means HBM growth indirectly tightens commodity DRAM supply, with second-order effects on PC/mobile/server memory pricing.
3. **HBM stack count per accelerator is rising** — H100 uses 5 stacks, B200 uses 8 stacks, future generations will use more. Per-GPU HBM consumption grows faster than GPU unit count.
4. **Geographic concentration:** Korean (Hynix + Samsung) and US (Micron) production only; no Chinese frontier HBM as of source date.

### HBM4 architectural detail (per [[SemiAnalysis - ISSCC 2026 (2026)]])

Three vendors, three base-die strategies:

| Vendor | HBM4 base die | Architecture notes |
| --- | --- | --- |
| **Samsung** | **In-house SF4** | **13 Gb/s peak; 36 GB 12-high; 2048 IO pins; 3.3 TB/s; voltage 1.1V→0.75V (-32%); 4× TSV count** |
| **SK Hynix** | **TSMC N12** | Direct revenue stream for [[TSMC]] tied to HBM4 ramp |
| **Micron** | Internal CMOS | Different in-house approach than Samsung |

### TSMC Active LSI (AMD MI450 primary)

Per [[SemiAnalysis - ISSCC 2026 (2026)]]: AMD MI450 = **2 base dies + 12 HBM4 stacks + 2 IO dies**. Each Active LSI pairs with 2 HBM4 stacks. **0.36 pJ/b at 0.75V.** **12 HBM4 stacks per accelerator** validates per-GPU memory scaling trajectory.

### SOCAMM memory pricing (inflation signal)

Per [[SemiAnalysis - AI Value Capture (2026)]]:

| Quarter | NVIDIA SOCAMM cost |
| --- | --- |
| Q1 2026 | **~$8/GB** |
| Mid 2026 | ~$10/GB |
| **Exit 2026 projected** | **>$13/GB (+60%+)** |

Memory pricing up 6× in some categories. **DRAM fabs already >90% utilization.**

## Linkage to other constraints

- Tied to [[CoWoS packaging capacity]] — HBM goes through CoWoS; can't run ahead of packaging
- Drives [[Compute & silicon]] layer scaling overall
- Cross-effect on regular DRAM markets when HBM eats capacity

## Open questions / what to watch

- When does SK Hynix HBM4 ramp, and at what volume?
- Does Samsung's HBM qualification with NVIDIA stabilize, easing the bottleneck?
- Does HBM cannibalization of DRAM raise memory prices broadly?
- China HBM efforts (CXMT) — material in 2026–2028 window?

## HBM cost share in accelerator BOM (per [[SemiAnalysis - The Memory Wall (DRAM)]])

| Accelerator | HBM share of mfg cost |
| --- | --- |
| **H100** | **~50%+** |
| **Blackwell (B200)** | **~60%+** |

Memory rent capture flows directly through accelerator BOM. SOCAMM/HBM pricing +60% across 2026 = material cost pressure on NVIDIA margins. HBM premium: 3×+ per GB vs DDR5 (structural).

## Forward HBM roadmap (per [[SemiAnalysis - Scaling the Memory Wall HBM (2025)]])

NVIDIA per-system HBM trajectory:

| Generation | HBM per system |
| --- | --- |
| A100 | 80 GB HBM2E |
| GB200 | 192 GB at 8 TB/s |
| **Rubin Ultra** | **1024 GB HBM4E (5.3× GB200)** |

Rubin Ultra 1024 GB = forward driver of HBM allocation severity through 2027+.

**Hybrid bonding deferred from HBM4 → HBM4E** = HBM4 era capacity adds depend on stack count + speed, not density jumps.

**SK Hynix architectural advantage:** **MR-MUF packaging** (vs Samsung/Micron NCF) = higher thermal dissipation + batch processing = explains Hynix's HBM yield + margin lead.

## Beneficiaries

- [[SK Hynix]] — dominant rent-capture; HBM is now Hynix's most profitable segment
- [[Samsung]] (memory) — secondary, partial
- [[Micron]] — capacity additions, less locked-in than Hynix
