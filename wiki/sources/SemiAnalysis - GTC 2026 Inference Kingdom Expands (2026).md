---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, nvidia, gtc-2026, rubin-ultra, feynman, groq, cpo, afd]
---

# SemiAnalysis — NVIDIA GTC 2026: The Inference Kingdom Expands (March 2026)

**Publisher:** [[SemiAnalysis]]
**Published:** 2026-03-24
**URL:** [newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands](https://newsletter.semianalysis.com/p/nvidia-the-inference-kingdom-expands)

> [!success] Primary source — NVIDIA GTC 2026 roadmap detail
> Most detailed primary source on NVIDIA's post-Blackwell roadmap. Confirms Groq acquisition structure ($20B IP license + team hire). Reveals **Rubin Ultra NVL576 + Feynman NVL1152** rack-scale designs with CPO inter-rack. Spectrum-6 + NVLink 7.0 networking.

## Groq deal structure (the canonical detail)

- **$20B transaction structure**: "NVIDIA paid Groq $20B to license their IP and hire most the team"
- Structured as **IP licensing + hiring rather than full acquisition** to avoid regulatory scrutiny
- Deal closed in less than 4 months before system integration

## GPU rack-scale systems roadmap

| System | Form factor | Notes |
| --- | --- | --- |
| Rubin Ultra NVL72 | Oberon | Copper scale-up only |
| Rubin Ultra NVL144 | Kyber | Copper scale-up only |
| **Rubin Ultra NVL576** | **8 Oberon racks** | **CPO inter-rack** |
| **Feynman NVL1152** | **8 Kyber racks** | **CPO inter-rack** |

The progression: copper for intra-rack, CPO begins at inter-rack scale-up (576+ GPUs).

## Networking infrastructure

### Spectrum-6 + NVLink 7.0
- NVLink 7.0 switches: **28.8 Tbit/s uni-di aggregate bandwidth**
- Kyber rack: **72 switches total**
- GPU per-socket bandwidth: **14.4 Tbit/s uni-di**

### LPX (Groq under NVIDIA)
- **LP30**: 500MB on-chip SRAM + **1.2 PFLOPs of FP8 compute**
- LP35 minor refresh (SF4 node)
- **LP40 future on TSMC N3P**
- **640 TB/s scale-up bandwidth per LPX rack** (C2C protocol)

## Inference architecture — Attention FFN Disaggregation (AFD)

NVIDIA's new inference architecture for serving frontier models:
- **Attention operations on GPUs** (handle dynamic KV cache)
- **FFN operations on LPUs** (deterministic, stateless workloads)
- Token routing via All-to-All collectives with "ping pong pipeline parallelism"
- Implication: GPUs + LPUs work together, not as substitutes

## Vera ETL256 (CPU rack)

- **256 CPUs per rack** (32 compute trays with 8 Vera CPUs each)
- Liquid cooling required for density
- Spectrum-6 based switching with 4 MGX ETL switch trays
- 32 front-facing OSFP cages for optical connectivity

## Storage/memory tier — CMX Platform

- **Tier G3.5 NVMe storage** for KV cache offload
- **BlueField-4 DPU** based implementation
- Intermediate tier between HBM and shared storage

## STX Storage Reference Architecture

- 16 storage boxes per rack
- 32 Vera CPUs, 64 CX-9 NICs, **64 SOCAMM modules per STX rack**

## Why it matters

1. **Groq deal confirmed at $20B** ("license-acqui-hire") — clean structural answer to how SRAM-machine architecture is being absorbed under NVIDIA
2. **Rubin Ultra NVL576 with CPO** = first major NVIDIA CPO deployment; validates SemiAnalysis CPO scale-up thesis (see [[SemiAnalysis - Co-Packaged Optics (2026)]])
3. **AFD inference architecture** = GPUs + LPUs are complementary, not substitutes — validates Groq acquisition strategically
4. **Vera Rubin NVL576 = 576 GPUs in 8 racks** — massive scale-up domain expansion vs Blackwell NVL72
5. **LP30/LP40 roadmap** = Groq IP now part of NVIDIA product line; "LPX" is the NVIDIA-branded SRAM-machine
6. **CMX + STX = NVIDIA building full memory hierarchy** including NVMe KV cache tier (relevant for [[NAND flash supply]])

## Cross-reference

- [[Cerebras — Faster Tokens Please (2026)]] = parallel SRAM-machine company; now competes with NVIDIA-owned LPX
- [[Groq]] = absorbed into NVIDIA product line via this $20B deal
- [[NVIDIA Q1 FY27 earnings (2026)]] = financial mirror of this product roadmap

## Implications

- Major update to [[NVIDIA]] with Rubin Ultra + Feynman + LPX + AFD details
- Update [[Groq]] with NVIDIA absorption mechanics
- Cross-reference [[SemiAnalysis - Co-Packaged Optics (2026)]] for CPO timing
- Add [[NAND flash supply]] cross-ref for CMX KV cache tier
