---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]", "[[Cerebras — Faster Tokens Please (2026)]]", "[[NVIDIA Q1 FY27 earnings (2026)]]", "[[NVIDIA Blackwell at Hot Chips 2025]]"]
ticker: NVDA
layer: compute
role: supplier
tags: [nvidia, gpu, ai-accelerator, h100, blackwell, rubin, cuda, groq-acquisition, nvlink]
---

# NVIDIA

The dominant supplier of AI accelerators. Holds a commanding share of the data-center AI GPU market and captures the bulk of frontier-AI silicon economics — its products gate AI lab compute access for both training and inference.

## Q1 FY27 financials (May 2026, primary)

Per [[NVIDIA Q1 FY27 earnings (2026)]]:

| Metric | Q1 FY27 | YoY |
| --- | --- | --- |
| **Data Center revenue** | **$75B** | **+92%** |
| Data Center Computing | $60B | +77% |
| Data Center Networking | $15B | nearly tripled |
| Hyperscale segment | $38B (~50% of DC) | +12% sequential |
| Sovereign revenue | — | **+80% YoY** |
| GAAP gross margin | 74.9% | — |
| **Q2 FY27 guide** | **$91B ± 2%** | sequential growth driven by DC |

### Supply commitments — the canonical anchor

> CFO Colette Kress: "we increased total supply inclusive of inventory purchase commitments on prepaids to **$145 billion**" (Q1 FY27)

This $145B prepayment figure is the demand-side mirror of [[CoWoS packaging capacity]] and [[HBM allocation]] scarcity. NVIDIA has locked up multi-year forward capacity.

### $1 trillion Blackwell + Rubin guidance

> Jensen Huang: "full confidence in **$1 trillion in Blackwell and Rubin revenue** we foresee from 2025 through calendar 2027"

Excludes standalone Vera CPUs (~$20B), LPX, CPX.

### Hyperscaler GPU commitments (FY27 calls)

| Customer | Commitment |
| --- | --- |
| **AWS** | **>1M Blackwell + Rubin GPUs** over the year |
| **Google** | **Up to 960K Rubin GPUs** via XGS bare-metal across multiple sites |
| Microsoft (Farweave) | "hundreds of thousands of Blackwell GPUs" operational |
| OpenAI | GPT 5.5 codesigned/trained/served on Blackwell |
| Anthropic | New partnership for capacity expansion |

### Sovereign / international

- AI infrastructure deployed across **~40 countries / $50T in GDP**
- Sovereign revenue **+80% YoY** — material segment now, not marketing

### China

US has approved H200 licenses for China customers but **zero revenue recognized to date**; NVIDIA includes **zero China DC compute revenue in outlook**.

## Earlier shipment numbers (Epoch 2024)

| Year | Data-center GPU shipments | Source |
| --- | --- | --- |
| 2022 | 2.64M | [[Can AI scaling continue through 2030 (2024)]] citing HPCwire |
| 2023 | **3.76M** | Same |
| 2024 (projected) | ~5–7M | Various tracker estimates |

H100-specific: **650K shipped to major tech companies by end-2023**.

Customer concentration (2023): [[Meta]] alone absorbed ~**25% of H100 shipments to major customers**.

## Supply-chain position

- **Logic die manufacturing:** outsourced to [[TSMC]] (leading-edge nodes: 5nm Hopper, 4nm Blackwell, future 3nm/2nm)
- **Packaging:** entirely dependent on [[CoWoS packaging capacity]] at TSMC
- **HBM memory:** primary supplier [[SK Hynix]]; secondary [[Samsung]], [[Micron]] — see [[HBM allocation]]
- **Networking:** Mellanox (acquired 2020) for InfiniBand/Spectrum-X; co-packaged optics roadmap
- **Software moat:** CUDA ecosystem, cuDNN, TensorRT — substantial lock-in

## Product cadence

H100 (2022) → H200 → **B100/B200 Blackwell** (2024–25) → **Vera Rubin** (H2 2026 production per Q1 FY27 guide) → Feynman (long-tail).
GB200 NVL72 rack-scale systems are now the unit of frontier-AI deployment.

### Blackwell GB200 architecture (primary, per [[NVIDIA Blackwell at Hot Chips 2025]])

| Component | Spec |
| --- | --- |
| GPUs per superchip | 2× B200 + Grace CPU |
| GPU↔CPU interconnect | **900 GB/s NVLink-C2C** (memory-coherent) |
| HBM3e per superchip | **384 GB** at **16 TB/s** |
| Blackwell SM count | **148 SMs** per GPU (+12% vs Hopper 132) |
| NVL72 rack throughput | **1.4 EFLOPS FP4** (300 chips, 18 compute trays + 9 switch trays) |
| Per-compute-tray FP4 | 80 PFLOPS |

**NVLink-C2C 900 GB/s** is the architectural moat vs scale-up alternatives — [[Cerebras Systems]] WSE-3 is at 150 GB/s off-wafer = ~6× less. This bandwidth differential drives why HBM-based GPUs continue to dominate frontier inference and training despite SRAM-machine speed advantages on specific workloads.

### Vera Rubin (per [[NVIDIA Q1 FY27 earnings (2026)]])

- Production shipments commence Q3 FY27 (second half of calendar 2026)
- Architecture: 7 purpose-built chips across 5 accelerated racks
- 35× higher inference throughput vs Blackwell
- 10× greater AI factory revenue per dollar vs Blackwell
- Vera CPU: 1.5× perf/core, 2× perf/watt, 4× density/rack vs x86

### GTC 2026 product roadmap (per [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]])

**GPU rack-scale systems:**
| System | Notes |
| --- | --- |
| Rubin Ultra NVL72 (Oberon) | Copper only |
| Rubin Ultra NVL144 (Kyber) | Copper only |
| **Rubin Ultra NVL576** | 8 Oberon racks; **CPO inter-rack** (late 2027 launch) |
| **Feynman NVL1152** | 8 Kyber racks; **CPO inter-rack** |

**LPX (Groq-IP under NVIDIA):**
- LP30: 500 MB SRAM + 1.2 PFLOPs FP8
- **LP40 future on TSMC N3P**
- **640 TB/s scale-up bandwidth per LPX rack** (C2C protocol)

**Networking:**
- NVLink 7.0: 28.8 Tbit/s uni-di per switch; 14.4 Tbit/s uni-di per GPU socket
- Spectrum-6 + Quantum X800-Q3450 CPO switch (per [[SemiAnalysis - Co-Packaged Optics (2026)]])

**AFD inference architecture:**
- Attention on GPUs (dynamic KV cache); FFN on LPUs (deterministic, stateless)
- Token routing via All-to-All — **GPUs + LPUs complementary, not substitutes**
- Justifies Groq absorption strategically

**Memory hierarchy:**
- CMX (Tier G3.5 NVMe for KV cache offload via BlueField-4 DPU) + STX (64 SOCAMM modules per rack)
- SOCAMM pricing $8/GB Q1 2026 → potentially >$13/GB exit '26 (per [[SemiAnalysis - AI Value Capture (2026)]])

### Groq absorption mechanics (per same source)

**$20B IP license + team hire** structured to avoid regulatory scrutiny (not full acquisition). Closed in <4 months. LP30/LP40 now NVIDIA product line; **LPX = NVIDIA-branded SRAM-machine.**

## Why it matters for the bottleneck thesis

- **Single point of demand-side pricing power.** NVIDIA can effectively rebid CoWoS and HBM capacity globally — its prepayments to TSMC are the canonical case of locking in scarce upstream capacity.
- **Could outbid Apple for TSMC 3nm if margins justify** (precedent: Apple absorbed ~90% of TSMC 3nm in 2023). NVIDIA's gross margins on AI GPUs are high enough to make this plausible.
- **Single-vendor concentration risk** — every other player in our [[Compute & silicon]] layer's customer base depends on NVIDIA's pricing, allocation choices, and product cadence.

## Counterparties / competitive frame

- Hyperscaler in-house silicon ([[Google TPU]], AWS Trainium, [[Microsoft]] Maia, [[Meta]] MTIA) — partial substitutes, mostly for inference
- [[AMD]] Instinct (MI300/MI350/MI355X/MI400/MI450) — **#2 with material momentum: Q1 2026 DC revenue $5.8B +57% YoY; Meta committed up to 6 GW Instinct with first 1 GW on custom MI450** (per [[AMD Q1 2026 earnings]]) — largest publicly disclosed hyperscaler commitment to non-NVIDIA silicon
- Custom ASIC designers via [[Broadcom]], [[Marvell]] — hyperscaler-captive
- [[Cerebras Systems]] — independent SRAM-machine inference vendor, [[OpenAI]]-anchored
- [[Groq]] — **acquired by NVIDIA December 2025** (~$20B implied), absorbed into NVIDIA's inference product line

## Strategic moves

- **Groq acquisition (Dec 2025)** — "license-acqui-hired" per [[Cerebras — Faster Tokens Please (2026)]] at ≥$20B implied value. Consolidates the SRAM-machine architecture domain under NVIDIA; LP30/LP40 chips become NVIDIA inference roadmap items with hybrid bonding to add SRAM tiles. Removes a competing fast-inference vendor and validates that interactivity-tier pricing has real value.

## Open questions

- Does Blackwell's energy efficiency (~2x H100) reset the 6 GW frontier training number Epoch projects?
- What's NVIDIA's prepayment / capacity reservation profile with TSMC and SK Hynix through 2027?
- Does AMD or hyperscaler-custom silicon take material share, or does NVIDIA hold ~90%?
