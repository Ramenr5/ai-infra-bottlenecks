---
type: source
created: 2026-05-25
updated: 2026-05-25
tags: [primary-source-paywalled, semianalysis, nvidia, blackwell, microarchitecture, yield]
---

# SemiAnalysis — Dissecting NVIDIA Blackwell: Tensor Cores, PTX, SASS, Floorsweep, Yield

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/dissecting-nvidia-blackwell-tensor](https://newsletter.semianalysis.com/p/dissecting-nvidia-blackwell-tensor)

> [!warning] Paywalled
> Substantial content public, but full technical details (HBM specs, transistor counts, power, NVLink5) are restricted to paid subscribers.

## Headline framing

Microbenchmark-driven characterization of Blackwell (SM100) at the instruction level. The article exists because NVIDIA hasn't published a Blackwell whitepaper at the depth of prior generations — SemiAnalysis is filling the architectural-documentation gap that ML kernel developers actually need.

**Key architectural shift**: SM100 introduces tensor memory (**TMEM**) to hold MMA accumulators. Threads no longer implicitly own MMA results. Instructions issued at CTA scope, not warp/warpgroup scope.

## Verbatim technical data (public sections)

### Tensor Core architecture
- **TMEM (tensor memory)**: holds MMA accumulators; threads no longer implicitly own results
- **tcgen05 scope**: "issued by a single thread on behalf of the entire CTA, rather than at warp or warpgroup scope"
- **2SM MMA**: TPC-scoped TMA + MMA across CTA pairs; exposed as `cta_group::2` (PTX) / `2CTA` (SASS)

### Measured throughput
- **LDGSTS** (global→shared): saturates ~**6.6 TB/s** at 32 KiB in flight
- **DSMEM** (distributed shared memory): ~**12-14 B/clk** via `cp.async.bulk` (UBLKCP)
- **MMA throughput**: M=64 → max 50% theoretical peak; M=128 → near 100%
- **2SM MMA M=256**: near 100% peak across all configurations

### GPC / yield findings
- More than 8 logical GPCs; some TPCs occupy isolated GPCs
- **Die distribution estimate**: Die A [10,10,10,9]; Die B [9,9,9,5+3]
- **Die-to-die latency**: ~**300 cycles**

### Microarchitecture characterization
- "One of the largest GPU microarchitecture change in a generation"
- MMA shapes SMEM-bounded below N=128 in SS mode
- Latency order: **S8 < BF16 = E4M3 = F4 < MXF8 = MXF4**

## What's behind the paywall

Article appears to characterize:
- HBM3e/HBM4 bandwidth and capacity specs
- Transistor counts, die size
- Power consumption
- NVLink5 specs
- FLOPS by precision (FP4/FP8/FP16/BF16)
- Performance vs Hopper

These data points are **not present** in the public version — material technical detail is paywalled.

## Cross-reference

- [[NVIDIA]] — Blackwell is the current product cycle; this provides instruction-level texture not in earnings calls
- [[NVIDIA Blackwell at Hot Chips 2025]] — Hot Chips presentation is the prior public NVIDIA-authored technical source
- [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]] — GTC framing of Blackwell + Rubin roadmap
- [[Compute & silicon]] — layer page
- [[HBM allocation]] — HBM specs were paywalled but would tie here

## Implications — pages flagged for human review

- [[NVIDIA]] — the TMEM + tcgen05 + 2SM MMA architectural moves explain *why* Blackwell isn't a drop-in upgrade for Hopper kernel codebases. Worth a one-line note that kernel rewrites are the actual rate-limit on Blackwell software adoption (separate from hardware availability)
- [[Chip design talent shortage]] — the very existence of this article (NVIDIA's official docs insufficient, third parties microbenchmark to fill gap) is a data point on the architectural-complexity-vs-documentation gap

## Paywall

**Largely paywalled.** Public content is enough to record the architectural shifts (TMEM, CTA-scoped instructions, 2SM MMA, GPC/yield estimates) but specific HBM, power, NVLink5, and full FLOPS comparisons are gated. Worth a paid SemiAnalysis subscription if the user pursues; this is the kind of article that motivates one.
