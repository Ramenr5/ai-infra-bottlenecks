---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[ARM Holdings Q4 FY26 earnings]]", "[[The EDA Primer From RTL to Silicon (2026)]]"]
ticker: ARM
layer: chip-design
role: supplier
tags: [arm, ip-licensing, royalty, neoverse, css, processor-ip, softbank]
---

# ARM Holdings

The dominant **processor IP licensing** business. Every smartphone CPU, increasingly every server CPU (NVIDIA Grace, AWS Graviton, Microsoft Cobalt, Ampere), and the embedded CPUs inside most AI ASICs license ARM cores. **Royalty-based model captures every chip shipped** — distinct from EDA tool subscriptions ([[Synopsys]], [[Cadence Design Systems]]).

Listed on NASDAQ (ticker: ARM) since September 2023 IPO. SoftBank Group remains majority owner (~90% post-IPO).

## Q4 FY26 financials (per [[ARM Holdings Q4 FY26 earnings]])

| Metric | Value |
| --- | --- |
| **Q4 revenue** | **$1.49B** (RECORD) |
| **Royalty revenue** | **$671M** (+11% YoY) |
| FY26 royalty revenue | $2.61B (+21%) |
| FY26 licensing revenue | $2.31B (+25%) |

## Data center / Neoverse — the AI story

- **Data center royalty more than doubled YoY** (Q4 FY26)
- **Neoverse royalties doubled YoY**; expected to **double again** in FY27 per CEO Rene Haas
- **CSS (Compute Subsystem) program** in adoption with **AWS, Google, NVIDIA, Microsoft** — all four major hyperscalers using pre-validated subsystems

## Product/IP portfolio

- **Cortex** — mobile CPU cores (Cortex-A series), dominates smartphone
- **Neoverse** — server CPU cores (V-series performance, N-series scale-out, E-series edge)
- **Mali** — GPU IP
- **Ethos** — NPU IP for AI inference
- **CSS** — pre-validated Compute Subsystems (full reference designs); newer initiative compressing time-to-tapeout for customers
- **Project Panther** — AI-specific IP roadmap (mentioned in recent communications)

## Business model

- **Licensing revenue** (upfront): paid by customers to access IP
- **Royalty revenue** (per-unit): paid per shipped chip; rates higher on newer architectures (ARMv9 > v8)
- **Royalty is the high-margin recurring stream**; royalty growth tracks chip volume + ARMv9 mix shift

## Why it matters for the bottleneck thesis

1. **Per-unit exposure to every chip shipped.** Royalty captures rents across the entire AI compute pipeline — host CPUs in every NVIDIA system (Grace), every hyperscaler ASIC (Cobalt, Graviton, Maia, MTIA, TPU all use Arm), even the embedded controllers in storage/networking gear.
2. **Data center royalty doubling YoY** = direct confirmation of hyperscaler ASIC + Arm-CPU adoption pace.
3. **CSS adoption with 4 hyperscalers** = strategic moat — Arm sells time-to-market acceleration, not just core IP. Higher ASP per shipment.
4. **Distinct from EDA tool model** ([[Synopsys]]/[[Cadence Design Systems]]) — royalty per unit shipped rather than tool subscription. Volume-driven rather than design-house count.
5. **No structural competitor in mobile**; RISC-V is the long-term threat in custom silicon but not material 2026.

## Counterparties / competitive frame

- [[NVIDIA]] (Grace CPU = Neoverse), AWS (Graviton), Microsoft (Cobalt), Google (Axion) — all Arm CSS customers
- Apple — long-term Arm architectural licensee (different from CSS)
- Qualcomm — Snapdragon X for PCs uses custom Arm cores
- Long-term: RISC-V open-source ISA as alternative — material in 2030+ window per most observers
- SoftBank — majority owner, periodic secondary offerings are the major float-related risk

## Open questions

- ARMv9 royalty rate adoption curve
- China royalty trajectory under export controls
- SoftBank secondary offering schedule (impacts float and stock dynamics)
- RISC-V displacement risk in hyperscaler custom ASIC programs (currently negligible)
- Project Panther AI-IP roadmap and customer pickup

## What to watch

- Quarterly royalty growth by segment (smartphone, data center, automotive)
- Number of CSS deals signed per quarter
- ARMv9 share of total royalty mix
- Any RISC-V customer wins at scale
