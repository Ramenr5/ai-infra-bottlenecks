---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, google, tpu, ocs, jupiter, pathways, systems-design]
---

# SemiAnalysis — Google AI Infrastructure Supremacy: Systems Matter More Than Microarchitecture

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/google-ai-infrastructure-supremacy](https://newsletter.semianalysis.com/p/google-ai-infrastructure-supremacy)

> [!success] Primary source — Google's structural systems advantage vs NVIDIA
> Argues Google's holistic systems design (TPU + ICI + OCS + Pathways) gives it a structural advantage over NVIDIA's chip-only focus. Specific quantification: **30% throughput improvement, 40% less power, 30% less capex, 50× less downtime** vs equivalent NVIDIA InfiniBand setups.

## Google's system-level advantages

| Component | Detail |
| --- | --- |
| **ICI (Inter-Chip Interconnect)** | Custom low-latency networking; outperforms Ethernet/InfiniBand |
| **3D torus topology** | vs NVIDIA's Clos networks |
| **Optical Circuit Switch (OCS)** | MEMS micro-mirror array based |
| **Pathways software** | Distributed runtime; manages multi-DC training |
| **JAX + XLA** | TPU-optimized compilation stack |

## TPU scaling progression

| Generation | Chip count per pod |
| --- | --- |
| TPUv2 | 256 |
| TPUv3 | 1,024 |
| TPUv4 | **4,096** |
| TPUv5 (estimated) | 16,384 |

## Deployment unit

- **64 TPU chips + 16 CPUs per "slice"** connected via ICI in 4³ cube topology
- Beyond 64 chips, communications shift to optical domain

## OCS economics (the canonical numbers)

vs equivalent NVIDIA InfiniBand setup:
- **30% throughput improvement**
- **40% less power**
- **30% less capex**
- **50× less downtime**

### Switch count comparison
- Google 4096 TPU deployment: **48 optical switches**
- Equivalent NVIDIA setup: **~568 InfiniBand switches**

Networking represents **<5% of total TPU v4 supercomputer capital costs and <3% of total power**.

## DLRM specialization — SparseCore

- 1 SparseCore per TPU v4 chip (4 total)
- 2.5 MB Sparse Vector Memory per core
- **7× speedup vs CPU embeddings on Skylake-SP**
- Occupies ~5% of die area and power

### Why this matters
Meta's 2-year-old DLRM exceeded 12 trillion parameters; current production models consume **>30 TB of memory just for embeddings**. Specialized embedding hardware is increasingly necessary.

## TPU v4 microarchitecture

| Spec | Value |
| --- | --- |
| SRAM scratchpad | 160 MB |
| TensorCores | 2 per chip |
| BF16 throughput | 275 TFLOPS |
| Memory bandwidth | 1,200 GB/s |
| ICI | 300 GB/s (6× 50 GB/s links) |
| Matrix Multiply Units | 128×128 (vs 256×256 in v1) |

## Infrastructure flexibility

- November 2022 snapshot: **>30 different configurations** despite same chip counts
- Performance from topology selection: **1.2× to 2.3× higher performance**

## The thesis

> "Holistic system optimization from microarchitecture through deployment"

Google wins on systems; NVIDIA wins on chip ecosystem breadth + external customer support.

## Why it matters for the wiki

1. **Validates [[Alphabet]] $460B cloud backlog growth** — Google has structural systems advantages that justify the booking pace
2. **30%/40%/30%/50× metrics** make the systems argument concrete, not hand-wavy
3. **TPUv5 16,384 chip pod** = much bigger than typical NVIDIA NVL72 — explains why Google can train Gemini at scale
4. **Pathways software** = the multi-DC training orchestrator that Google has and NVIDIA-customers lack
5. Strengthens the argument that **Google + Broadcom TPU 8t/8i deal ($21B) is investment in a structurally winning architecture**, not just diversification
6. **Implies a Google-specific moat** that NVIDIA cannot easily neutralize even with Rubin Ultra advances

## Implications

- Major update to [[Alphabet]] with TPU + OCS + Pathways detail
- Update [[Broadcom]] context for $21B TPU 8t/8i deal value
- Cross-reference [[SemiAnalysis - Multi-Datacenter Training]] for Pathways multi-DC architecture
- Counter-narrative to [[NVIDIA]]-as-dominant framing
