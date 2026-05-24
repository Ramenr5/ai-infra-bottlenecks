---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, nvidia, blackwell, gb200, gb300, hot-chips, architecture, rack-scale, mgx]
---

# NVIDIA Blackwell at Hot Chips 2025

**Publisher:** NVIDIA presentation at Hot Chips 2025 (annual chip-architecture conference)
**Presenter:** John Norton, NVIDIA (Mechanical Engineer) — "Case Study: NVIDIA GB200/300"
**Presentation date:** August 2025
**URL:** [hotchips.org](https://hotchips.org/) (primary slides); coverage via [edge-ai-vision.com](https://www.edge-ai-vision.com/2025/08/hot-topics-at-hot-chips-inference-networking-ai-innovation-at-every-scale-all-built-on-nvidia/)
**Raw:** `raw/articles/NVIDIA Blackwell at Hot Chips 2025 (extract).md`

> [!success] Primary architectural reference
> Hot Chips is the canonical venue for chip-architecture deep-dives — every major vendor (NVIDIA, AMD, Apple, Google, hyperscaler ASIC teams) presents here. NVIDIA's GB200/GB300 deep dive is the architectural truth-source for the dominant AI accelerator system through 2026.

## GB200 Grace Blackwell Superchip

| Component | Spec |
| --- | --- |
| GPUs | **2× B200 Tensor Core GPUs** |
| CPU | NVIDIA Grace CPU |
| GPU↔CPU interconnect | **900 GB/s NVLink-C2C** (memory-coherent) |
| **Total HBM3e memory per superchip** | **384 GB** |
| HBM bandwidth | **16 TB/s** |
| Blackwell GPU SM count | **148 SMs** per GPU (+12% vs Hopper's 132) |

## NVL72 rack-scale system

| Component | Spec |
| --- | --- |
| Total chips per rack | **300 chips** |
| Compute trays | **18** (10 + 8 around 9 switch trays) |
| FP4 throughput per compute tray | **80 PFLOPS** |
| **Total system FP4 throughput** | **1.4 EFLOPS** (1,400 PFLOPS) |

For scale: 1.4 EFLOPS per rack = an **order-of-magnitude jump over Hopper-era HGX systems**. The GB200 NVL72 is the unit of frontier-AI deployment for 2025-2026.

## MGX open modular platform

NVIDIA presented MGX as an **open, modular reference architecture** for AI factory deployments:
- Multiple workload patterns (inference, training, mixed)
- Standardized mechanical/thermal/electrical interfaces
- Important for the **OCP-compatible open-rack** ecosystem story
- Reduces design risk for hyperscaler-scale custom deployments

## Why it matters for the bottleneck thesis

1. **Architectural primary on the dominant accelerator** — confirms HBM consumption math: 384 GB HBM3e per superchip × scale = the demand driving [[HBM allocation]] sold-out status through 2026
2. **1.4 EFLOPS per rack** sets the unit of new datacenter deployment — implies per-rack power consumption (~130 kW typical for GB200 NVL72) → drives [[Datacenter physical|liquid cooling]] adoption and [[Power & energy|grid demand]]
3. **NVLink-C2C 900 GB/s scale-up bandwidth** is the architectural moat vs alternatives — [[Cerebras Systems]] WSE-3 is at 150 GB/s off-wafer (6× less), highlighting why wafer-scale architectures stay niche
4. **MGX open standard** matters for [[Datacenter physical]] — vendors who align (Vertiv, Schneider, Supermicro) get easier integration; non-aligned vendors lose footprint
5. **Hot Chips itself** becomes a tracked recurring source venue — every August they release primary architecture material on the year's most important chips

## Cross-reference

- [[NVIDIA]] $1T Blackwell+Rubin guide (per [[NVIDIA Q1 FY27 earnings (2026)]]) = revenue translation of this architecture's success
- [[HBM allocation]] — 384 GB HBM3e per superchip × millions of units = direct demand quantification
- [[CoWoS packaging capacity]] — each B200 GPU = one CoWoS package; HBM stack count drives CoWoS reticle area required
- [[Compute & silicon]] — anchor architecture for the layer

## What to watch / future Hot Chips ingests

- **Hot Chips 38 (August 2026)** — likely venue for first detailed Vera Rubin architecture disclosure
- AMD MI455X / MI500-series papers as they appear
- Hyperscaler ASIC reveals (Google TPU, AWS Trainium, Microsoft Maia, Meta MTIA)

## Implications for our wiki

- Update [[NVIDIA]] with primary architecture detail
- New material for [[Compute & silicon]], [[HBM allocation]]
- This is the **first Hot Chips ingest** — set up the pattern for annual conference coverage
