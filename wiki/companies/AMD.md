---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[AMD Q1 2026 earnings]]"]
ticker: AMD
layer: compute
role: supplier
tags: [amd, instinct, mi350, mi355x, mi400, mi450, epyc, helios, meta-deal, lisa-su]
---

# AMD (Advanced Micro Devices)

**#2 in AI accelerators after [[NVIDIA]]**, with material momentum in this cycle. Q1 2026 Data Center segment $5.8B (+57% YoY) = strongest growth among public AI silicon vendors. **Meta committed up to 6 GW of AMD Instinct GPUs with first 1 GW on custom MI450** — largest publicly disclosed hyperscaler commitment to non-NVIDIA silicon.

## Q1 2026 financials (per [[AMD Q1 2026 earnings]])

| Metric | Value |
| --- | --- |
| **Q1 revenue** | **$10.3B** (+38% YoY — RECORD) |
| **Operating income** | $1.5B (vs $806M YA) |
| **Net income** | **$1.4B** (vs $709M YA — nearly doubled) |
| **Data Center segment** | **$5.8B (+57% YoY)** |

## AI accelerator roadmap

| Generation | Status | Notes |
| --- | --- | --- |
| MI300X | Shipping (volume) | First-gen AI accelerator at scale |
| **MI350 series** | **Volume Q1 2026** | Primary current revenue driver |
| **MI355X** | Shipping | Strong MLPerf results; competitive with NVIDIA H100/H200 |
| **MI400 series** | Helios reference platform | H2 2026 |
| **MI450 custom (Meta)** | Custom design for Meta 1 GW deployment | First custom hyperscaler Instinct |
| MI500-series | Roadmap | 2027+ |

## The Meta deal (major strategic event)

- **Meta plans to deploy up to 6 GW of AMD Instinct GPUs**
- **First 1-GW deployment powered by custom MI450**
- This is the largest publicly disclosed hyperscaler commitment to non-NVIDIA AI silicon
- Comparable in scope to [[Broadcom]]-Google TPU or Broadcom-Meta MTIA partnerships
- AMD now playing the **custom hyperscaler silicon game** alongside catalog Instinct

## Helios (rack-scale AI factory)

- Initial volume Q3 2026; significant ramp Q4 2026 → Q1 2027
- AMD's answer to NVIDIA NVL72 rack-scale architecture
- Open architecture (vs NVLink-locked NVIDIA stack)

## EPYC server CPU position (the underrated story)

- **5th gen EPYC** taking share from [[Intel]] Xeon
- Server CPU revenue is significant component of Data Center segment
- Lisa Su: "demand is increasing not only for accelerators, but also for the high-performance CPUs that power and orchestrate those workloads"
- AMD forecasts **$120B server CPU income by 2030**

## Why it matters for the bottleneck thesis

1. **AMD as a credible #2 AI accelerator vendor** — $5.8B DC revenue +57% YoY is the strongest among public AI silicon vendors. The AI accelerator market is much larger than just NVIDIA suggests.
2. **Meta 6 GW Instinct commitment** = scope comparable to a single-customer [[Stargate]]; validates non-NVIDIA AI silicon at hyperscaler scale
3. **Custom MI450 for Meta** = AMD doing hyperscaler custom silicon. Different model than catalog Instinct sales; richer per-deal economics but volume-limited.
4. **Helios rack-scale architecture** = direct competitor to NVIDIA NVL72; validates rack-scale as the unit of AI deployment regardless of vendor
5. **5th gen EPYC vs Xeon** = secondary picks-and-shovels story; AMD's server CPU share gains drive [[Power & energy]] demand and consume [[TSMC]] capacity that NVIDIA also wants
6. **Material consumer of [[TSMC]] CoWoS + [[HBM allocation]]** — AMD competes with NVIDIA for the same scarce upstream capacity

## Counterparties / competitive frame

- [[NVIDIA]] — primary competitor; AMD = #2; market shares roughly 90/10 in 2024, materially closing
- [[Intel]] — primary competitor on server CPU (EPYC vs Xeon); AMD share gains continue
- [[Broadcom]] / [[Marvell Technology]] — custom ASIC partners for hyperscalers; AMD now competing via custom MI450 for Meta
- [[TSMC]] — anchor foundry partner (MI355X/MI400/MI450 all on TSMC advanced nodes)
- [[SK Hynix]] / [[Samsung Electronics]] / [[Micron Technology]] — HBM suppliers
- [[Cerebras Systems]] / [[Groq]] (now NVIDIA-owned) — niche SRAM-machine alternatives

## Strategic position

- Lisa Su's track record (Xilinx acquisition, server CPU comeback) = strong execution
- Multi-product franchise: Instinct + EPYC + Ryzen client + Xilinx FPGA = diversified
- Open-source ROCm software stack (vs CUDA lock-in) is structural challenge but improving
- Custom silicon (Meta MI450) opens new revenue category

## Open questions

- Custom MI450 economics for AMD vs catalog Instinct
- Meta 6 GW deployment timeline (1 GW first, then?)
- Other hyperscaler custom-silicon engagements rumored
- ROCm software adoption pace vs CUDA dominance
- Helios initial customer wins beyond Meta
- Market share trajectory in AI accelerator (90/10 NVIDIA/AMD → 80/20 by 2027?)

## What to watch

- Quarterly DC segment revenue growth
- Custom hyperscaler silicon disclosures
- Helios platform customer wins
- ROCm ecosystem milestones
- 5th gen EPYC share gain vs Intel Xeon
