---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, amazon, aws, anthropic, trainium, multi-gigawatt]
---

# SemiAnalysis — Amazon's AI Resurgence: AWS & Anthropic's Multi-Gigawatt Trainium Expansion (Sept 2025)

**Publisher:** [[SemiAnalysis]]
**Published:** 2025-09-03
**URL:** [newsletter.semianalysis.com/p/amazons-ai-resurgence-aws-anthropics-multi-gigawatt-trainium-expansion](https://newsletter.semianalysis.com/p/amazons-ai-resurgence-aws-anthropics-multi-gigawatt-trainium-expansion)

> [!success] Primary source — Anthropic's AWS Trainium commitment quantified
> Three AWS campuses delivering **>1.3 GW IT capacity** for Anthropic's training. Largest single campus: **~1 million Trainium2 chips.** Anthropic raised **$13B at $183B valuation** (Series F). Sets the operational anchor for AWS' [[Amazon Q1 2026 earnings|$225B Trainium revenue commitments]] disclosed 6 months later.

## Capacity & deployment

- **Three AWS campuses: >1.3 GW IT capacity** for Anthropic training
- **Largest single campus: just under 1M Trainium2 chips**
- Additional gigawatt-scale datacenters "already breaking ground"

## Anthropic commitment context

- Anthropic raised **$13B at $183B valuation** (Sept 2025 = Series F per [[Anthropic 2026 update]])
- Investment history:
  - Sept 2023: $1.25B expandable to $4B
  - Nov 2024: $4B additional
  - Sept 2025: $13B raise → $183B
  - (Subsequently) Feb 2026: $30B Series G → $380B (per [[Anthropic 2026 update]])

## Trainium roadmap

- **Trainium2** (current, 3rd-gen) — primary Anthropic deployment
- **Trainium3** (upcoming) — favorable TCO comparison to NVIDIA Rubin/VR200
- **Teton PDS + Teton Max** systems launching next year (= 2026)

## Trainium vs NVIDIA economics

| Metric | Trainium2 advantage | NVIDIA advantage |
| --- | --- | --- |
| TCO per TB/s memory bandwidth | **Favors Trainium2** | — |
| TCO per million tokens | **Competitive** | — |
| TCO per effective training PFLOP | — | **NVIDIA leads materially** |
| FLOPs (GB200 vs Trainium2) | — | **3.85× NVIDIA advantage** |
| Memory bandwidth gap | — | **2.75× NVIDIA advantage** |

So: Trainium wins on **bandwidth-bound workloads** (inference, certain training); NVIDIA wins on **compute-bound workloads** (large model training).

## Why it matters for the wiki

1. **>1.3 GW Anthropic-dedicated AWS capacity** = primary operational anchor for the $225B Trainium revenue commitments AMZN disclosed in Q1 2026 (6 months later)
2. **1M Trainium2 chips in single campus** = scale comparable to NVIDIA-deployment clusters
3. **Trainium economics:** wins on bandwidth-bound (= inference, memory-heavy training); NVIDIA still wins on raw compute = explains why hyperscalers run BOTH NVIDIA and Trainium (not either-or)
4. **Anthropic capital raise sequence** = perfectly aligned with AWS infrastructure buildout = strategic capital alignment between cloud + AI lab
5. **3.85× NVIDIA FLOP advantage** vs **TCO competitiveness** = exact technical framing on why custom silicon makes economic sense despite headline-spec disadvantage

## Implications

- Update [[Amazon]] with primary 1.3 GW + 1M Trainium2 deployment data
- Update [[Anthropic]] with Sept 2025 AWS capacity context
- Update [[NVIDIA]] competitive frame — Trainium genuinely competitive on bandwidth-bound workloads
- Cross-confirms [[Amazon Q1 2026 earnings]] $225B Trainium commitments
