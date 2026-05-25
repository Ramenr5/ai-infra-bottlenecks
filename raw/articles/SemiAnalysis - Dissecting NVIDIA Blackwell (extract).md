---
title: "Dissecting Nvidia Blackwell - Tensor Cores, PTX Instructions, SASS, Floorsweep, Yield"
source: "https://newsletter.semianalysis.com/p/dissecting-nvidia-blackwell-tensor"
publisher: SemiAnalysis
accessed: 2026-05-25
retrieval: "WebFetch with prompt for verbatim technical data. Article PAYWALLED — substantial public excerpts but full HBM/power/NVLink5/FLOPS gated."
tags: [clippings, semianalysis, nvidia, blackwell, microarchitecture, paywalled]
---

# SemiAnalysis Blackwell Deep-Dive: Technical Extraction

## Status
Article is paywalled - substantial content available publicly, but full technical details restricted to paid subscribers.

## Key Technical Data (Verbatim from Public Sections)

### Tensor Core Architecture Changes
- TMEM introduction: "The introduction of tensor memory (TMEM) to hold MMA accumulators. Threads no longer implicitly own the results of MMA operations"
- tcgen05 scope change: Instructions now "issued by a single thread on behalf of the entire CTA, rather than at warp or warpgroup scope"
- 2SM MMA: "TPC-scoped TMA and MMA across pairs of coordinating CTAs, exposed as `cta_group::2` in PTX and `2CTA` in SASS"

### Performance Data (Measured)
- LDGSTS memory throughput: "saturating at around 6.6 TB/s at 32 KiB in flight"
- DSMEM throughput: Achieved approximately 12-14 B/clk via `cp.async.bulk` (UBLKCP)
- MMA throughput: M=64 achieves "max 50% theoretical peak"; M=128 reaches "near 100%"
- 2SM MMA M=256: "sustains near 100% peak throughput across all configurations"

### GPC/Yield Findings
- Logical GPC configuration: More than 8 GPCs exist; some TPCs occupy isolated logical GPCs
- Die distribution estimate: Die A [10,10,10,9]; Die B [9,9,9,5+3]
- Die-to-die latency: "roughly 300 cycles"

### Microarchitecture Details
- SM100 represents "one of the largest GPU microarchitecture change in a generation"
- MMA shapes show SMEM-boundedness below N=128 in SS mode
- Latency order: "S8 < BF16 = E4M3 = F4 < MXF8 = MXF4"

### Central Thesis
Comprehensive low-level characterization of Blackwell instruction-level performance through microbenchmarking to establish "hard practical performance upper bounds" for ML kernel development, filling the gap left by absent official whitepapers.

## Notable Omissions (Behind Paywall)
HBM specifications, transistor counts, power consumption, NVLink5 details, FLOPS by precision, performance vs Hopper — not present in publicly accessible content.
