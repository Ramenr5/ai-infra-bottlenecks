---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Cerebras — Faster Tokens Please (2026)]]"]
ticker: CBRS
layer: compute
role: supplier
tags: [cerebras, wafer-scale, sram, ai-accelerator, ipo, openai-anchored, neocloud-trajectory]
---

# Cerebras Systems

Wafer-scale AI accelerator company, on the verge of IPO as of May 2026. **Architecturally unique** — fabricates an entire TSMC wafer as a single chip (the WSE-3) — and **revenue is effectively single-customer**: [[OpenAI]] anchors essentially all of the $24.6B remaining performance obligations disclosed in the S-1.

## Headline business facts (per S-1, Dec 31 2025)

| Metric | Value |
| --- | --- |
| Remaining performance obligations | **$24.6B** |
| Source of obligations | Essentially all from OpenAI MRA |
| OpenAI capacity commitment | 750 MW deployed 2026–2028 |
| OpenAI option for additional | +1.25 GW (total potential 2 GW) |
| OpenAI working capital loan | $1B at 6% (waived if repaid in capacity) |
| OpenAI warrant | Up to **~12% of Cerebras fully diluted**, near-zero strike, delivery-milestone vesting |
| 2028 buildout target | **750 MW of operational DC capacity** |

## Product: WSE-3 / CS-3 system

- **Wafer Scale Engine 3 (WSE-3):** entire TSMC N5 wafer as single chip; 84 dies in 12×7 grid; 970K cores (900K enabled); 44GB SRAM; 21 PB/s bandwidth; 15.6 PFLOPS dense FP16; 25 kW per wafer
- **CS-3 system BOM ≈ $450K/rack** (post Q4 2025 memory price hike, up from ~$350K)
- Distribution of cost: TSMC wafer ~$20K, Vicor power delivery comparable, custom cooling (LiquidStack/Trane), I/O FPGAs (Xilinx/AMD), in-house assembly

## Strengths

- **Speed at low batch size.** SRAM bandwidth (21 PB/s) means decode kernels with low arithmetic intensity hit dramatically higher realized FLOPs than HBM-based GPUs starving on memory bandwidth.
- **Speeds in thousands of tokens/sec** — literally off the chart vs HBM accelerators in SemiAnalysis InferenceX benchmarks.
- **Proprietary architecture moat:** cross-die scribe-line wiring, batch-specific mask sets for yield routing, custom 25 kW power delivery (with [[Vicor]]), custom liquid cooling (with [[Trane Technologies]]/LiquidStack).

## Weaknesses / architectural limits

- **Off-wafer bandwidth: only 150 GB/s** (1.2 Tb/s). ~130× less dense than NVIDIA per mm of edge. Inherent to wafer-scale + reticle-stepping requirements (every reticle must be identical → can't dedicate perimeter reticles to SerDes).
- **Limited memory capacity per wafer (44 GB SRAM).** Forces pipeline parallelism for large models; pipeline bubbles + KV cache footprint make 1T+ models with long context economically unviable.
- **SRAM scaling is dead beyond 5nm** (N3E zero shrink vs N5). CS-4 stays on N5 with higher power instead.
- **Production model ceiling ~120B params** (GPT-OSS); preview ~355B (GLM 4.7). DeepSeek V3, Kimi K2, Llama 405B all never/no-longer on public Cerebras Cloud.

## Future roadmap

- **Hybrid-bonded photonic interconnect wafer** (with Ranovus) — addresses bandwidth via z-axis optical I/O. Cerebras claims this is for HPC customers, not LLM inference.
- **DRAM-on-wafer bonding** — additional SRAM/DRAM capacity stacked via wafer-on-wafer bond.
- **CS-4 system** — same N5 WSE-3, higher power, target rack flow rates 1.5–1.7 LPM/kW (vs CS-3's 4 LPM/kW) for standardized infra compatibility.

## Why it matters for the bottleneck thesis

- **Demonstrates new revenue dimension** — fast-inference / interactivity-tier pricing — distinct from training scaling per [[Can AI scaling continue through 2030 (2024)|Epoch]]
- **Single-customer concentration risk.** Practically all revenue from [[OpenAI]]. If OpenAI's model strategy shifts away from distilled 120B-class architectures, Cerebras's economics break.
- **Neocloud trajectory:** Cerebras isn't just a chip vendor — they're building/leasing their own datacenters to host the WSE fleet (see [[Cerebras Oklahoma datacenter]]). Competes for the same power/permits as hyperscalers.
- **Picks-and-shovels exposure surfaces:** [[Vicor]], [[Trane Technologies]] (via LiquidStack acquisition), [[TSMC]] (additional N5 demand).

## Open questions

- Does OpenAI exercise the 1.25 GW option, or stop at 750 MW?
- Can Cerebras hit the 750 MW DC capacity by 2028? (Execution risk — paywalled SemiAnalysis section addresses this)
- Profitability of the OAI deal at the unit-economics level (also paywalled)
- Does Cerebras win additional customers post-IPO, or stay single-anchor?
- Photonic-interconnect wafer feasibility and timeline
