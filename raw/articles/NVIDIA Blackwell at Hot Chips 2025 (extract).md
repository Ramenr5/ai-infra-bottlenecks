---
title: "NVIDIA Blackwell GB200/GB300 — Hot Chips 2025 presentation"
source: "https://www.edge-ai-vision.com/2025/08/hot-topics-at-hot-chips-inference-networking-ai-innovation-at-every-scale-all-built-on-nvidia/"
publisher: NVIDIA (presentation) — extracted via Edge AI Vision Alliance + WCCFTech + ServeTheHome coverage
published: 2025-08 (Hot Chips 2025)
accessed: 2026-05-24
retrieval: "Conference presentation extract; NVIDIA's slides are at the Hot Chips proceedings (free at hotchips.org)"
tags: [clippings, nvidia, blackwell, gb200, gb300, hot-chips, architecture, rack-scale, mgx]
---

# NVIDIA Blackwell GB200/GB300 at Hot Chips 2025 — extracted

## Presentation reference

- **Title:** "Case Study: NVIDIA GB200/300"
- **Presenter:** John Norton, NVIDIA (Mechanical Engineer)
- **Conference:** Hot Chips 2025 (August 2025)
- **Open primary materials:** Hot Chips proceedings available at hotchips.org (free)

## GB200 Grace Blackwell Superchip — architecture

| Component | Spec |
| --- | --- |
| GPUs per superchip | **2× B200 Tensor Core GPUs** |
| CPU | **NVIDIA Grace CPU** |
| GPU↔CPU interconnect | **900 GB/s NVLink-C2C** (memory-coherent unified architecture) |
| Total HBM3e memory | **384 GB** |
| HBM bandwidth | **16 TB/s** |
| Blackwell GPU SM count | **148 SMs per GPU** (+12% vs Hopper's 132 SMs) |

## NVL72 rack-scale system

| Component | Spec |
| --- | --- |
| Total chips per rack | **300 chips** |
| Compute trays | 10 + 8 = **18 compute trays** |
| Switch trays | **9 switch trays** (between the two compute clusters) |
| FP4 throughput per compute tray | **80 PFLOPS** |
| **Total system FP4 throughput** | **1.4 EFLOPS (1400 PFLOPS)** |

## MGX — open modular platform

- NVIDIA presented MGX as an open and modular reference architecture for AI factory deployments
- Supports multiple workload patterns (inference, training, mixed)
- Important for the open-rack ecosystem story alongside OCP standards

## GB300 Ultra (referenced)

- Successor / mid-cycle refresh of GB200 with incremental architecture improvements
- Full specs at Hot Chips presentation; Vera Rubin succeeds in H2 2026 per [[NVIDIA Q1 FY27 earnings (2026)]]

## Why it matters

- **Primary architecture reference** for the dominant AI accelerator system in production through 2026
- 1.4 EFLOPS per NVL72 rack = an order-of-magnitude jump over Hopper-era HGX systems
- 384 GB HBM3e per GB200 superchip = **8 HBM stacks per superchip** (16 HBM stacks per dual-superchip tray); validates the [[HBM allocation]] consumption story
- 900 GB/s NVLink-C2C demonstrates the scale-up bandwidth advantage vs. wafer-scale alternatives (e.g. [[Cerebras Systems]] WSE-3 at 150 GB/s off-wafer = ~6× less)
- MGX open-rack pattern matters for [[Datacenter physical]] — standardized cooling/power interfaces reduce design risk for hyperscaler deployments

## Notes

- Hot Chips conference papers are typically released free at hotchips.org within weeks of presentation
- Multiple secondary sources covered the presentation in depth (Edge AI Vision Alliance, WCCFTech, ServeTheHome)
- Original NVIDIA slides include extensive mechanical/thermal detail (presenter is a mechanical engineer)
