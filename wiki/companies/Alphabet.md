---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Alphabet Q1 2026 earnings]]"]
ticker: GOOGL
layer: capital
role: hyperscaler
tags: [alphabet, google, googl, cloud, tpu, ironwood, hyperscaler, broadcom-partner]
---

# Alphabet (Google)

**Hyperscaler with the fastest cloud growth** (+63% Q1 2026 vs Azure +40%, AWS +28%). FY26 capex guide $180-190B with 2027 expected to "significantly increase." Owns the **TPU custom silicon** franchise — Ironwood (7th gen) GA March 2026; **$21B Broadcom deal for TPU 8t/8i** is the largest disclosed custom-silicon commitment.

## Q1 2026 financials (per [[Alphabet Q1 2026 earnings]])

| Metric | Value |
| --- | --- |
| **Revenue** | **$109.9B (+22% YoY)** — fastest in 2 years |
| **Google Cloud** | **$20B (+63%)** |
| **Cloud backlog** | **~$460B** (nearly doubled) |
| **FY26 capex guide (raised)** | **$180-190B** |
| 2027 capex expectation | "Significantly increase" |
| Gemini Enterprise paid MAU | +40% QoQ |

## TPU custom silicon roadmap

| Generation | Status | Notes |
| --- | --- | --- |
| TPU 7 (Ironwood) | **GA March 2026** | Current production gen |
| TPU 8t | $21B [[Broadcom]] deal | 3× Ironwood processing power |
| TPU 8i | $21B [[Broadcom]] deal | 80% better perf-per-dollar vs prior |

The **$21B Broadcom deal** is the largest disclosed single hyperscaler-custom-silicon commitment in our wiki. Anchors [[Broadcom]]'s custom ASIC business.

## Strategic position

- **Google Cloud's +63% growth** outpacing Azure and AWS = share-shift dynamic in hyperscaler cloud
- TPU vertical integration = highest custom-silicon penetration among hyperscalers (TPUs dominate internal AI workloads)
- Pichai explicitly framed "demand-constrained" — same supply-side bottleneck as peers
- DeepMind = research arm; Gemini = consumer/enterprise product line

### Systems advantage (per [[SemiAnalysis - Google AI Infrastructure Supremacy]])

Quantified Google advantages vs equivalent NVIDIA InfiniBand setups:

| Metric | Advantage |
| --- | --- |
| **Throughput** | **+30%** |
| **Power** | **-40%** |
| **Capex** | **-30%** |
| **Downtime** | **50× less** |

**Switch count:** 4096 TPU pod = 48 optical switches; equivalent NVIDIA = ~568 InfiniBand switches.

**Key components:** ICI custom interconnect, 3D torus topology, OCS (MEMS micro-mirror), **Pathways** distributed runtime, JAX+XLA software stack, **SparseCore** embedding specialization.

### TPU pod scaling

| Gen | Chips per pod |
| --- | --- |
| TPUv2 | 256 |
| TPUv3 | 1,024 |
| TPUv4 | 4,096 |
| **TPUv5** (est) | **16,384** |

### Multi-DC infrastructure (per [[SemiAnalysis - Multi-Datacenter Training]])

- **Iowa/Nebraska cluster:** Council Bluffs (300→500 MW), Omaha, Papillion (>250 MW), Lincoln — approaching GW-scale by 2026
- **Ohio cluster:** Columbus, 3 campuses — 1 GW target end-2025
- Inter-DC bandwidth: 5 Pbit/s within regions; 1 Pbit/s between regions
- "Millions of liquid-cooled TPUs" already deployed

## Counterparties

- [[Broadcom]] = TPU design partner ($21B deal anchor)
- [[NVIDIA]] = supplemental GPU supplier (smaller mix than peers)
- [[TSMC]] = TPU fab partner (advanced nodes)
- [[SK Hynix]] / [[Samsung Electronics]] / [[Micron Technology]] = HBM for TPU
- [[ARM Holdings]] = Arm Neoverse via Axion (Google's Arm-based CPU)
- [[Anthropic]] = customer + investor relationship (Google has invested in Anthropic)

## Why it matters

1. **+63% Cloud growth** is the strongest of any Big Five hyperscaler — Cloud market share dynamics shifting
2. **$460B backlog** = ~4 years forward visibility (comparable in scale to [[ASML]] €38.8B)
3. **TPU dominance** in internal workloads = less NVIDIA dependence than MSFT/AWS for training/inference
4. **$21B Broadcom commitment** = direct primary on custom ASIC market sizing

## What to watch

- Google Cloud growth deceleration (+63% is hard to sustain)
- TPU 8t / 8i deployment milestones
- DeepMind / Gemini model release cadence vs OpenAI / Anthropic
- 2027 capex specifics (currently just "significantly increase")
