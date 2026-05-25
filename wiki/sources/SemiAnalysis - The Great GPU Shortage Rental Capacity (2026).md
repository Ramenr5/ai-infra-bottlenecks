---
type: source
created: 2026-05-25
updated: 2026-05-25
tags: [primary-source, semianalysis, h100, rental-prices, neoclouds, supply-demand]
---

# SemiAnalysis — The Great GPU Shortage: Rental Capacity (H100 1-Year Rental Price Index)

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity](https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity)

## Headline framing

**H100 1-year rental prices up ~40% in 5 months** (Oct 2025 → March 2026) and accelerating. On-demand capacity is sold out across all GPU types; half the providers queried were "completely sold out." All capacity coming online through Aug/Sept 2026 is already booked. Pricing more likely to keep rising than fall — sustained scarcity + inelastic demand from high-ROI AI tool adoption (Claude Code, multi-agent, media generation).

## H100 1-year rental price ($/hr/GPU)

| Date | Price | Notes |
| --- | --- | --- |
| **October 2025** | **$1.70** | — |
| **Late January 2026** | **>$2.00** | First sustained break above $2 |
| Mid-to-late Feb 2026 | +15-20% vs end-Jan | — |
| **March 2026** | **$2.35** | **~40% above Oct 2025 base** |
| End of March (projected) | +15-20% MoM | If sustained, would be ~$2.70 |

This is a 1-year contract index — the most sensitive non-spot signal. Spot/on-demand even more pressured.

## Capacity status

- **On-Demand GPU rental capacity is sold out across all GPU types**
- "Half the providers we asked were completely sold out"
- **All capacity coming online until August to September 2026 has already been booked**
- **Blackwell lead times extending into June-July 2026**

## Demand drivers named

- **[[SemiAnalysis - Claude Code Is The Inflection Point\|Claude Code]] adoption** — projected 20%+ of daily commits by EOY 2026
- Multi-agent workflows → "parabolic growth in token and compute consumption"
- Media generation: Seedance, Nano Banana
- Open-weight model adoption

## Cluster sizing trend

Long-term offtake deals now involve **50 MW or 100 MW or larger** clusters = **~24,000 to 48,000 GB300 NVL72 GPUs**. The unit of "cluster" has scaled up an order of magnitude.

## Market segmentation

| Term | Use case | Most sensitive indicator |
| --- | --- | --- |
| Short (<3 mo) | On-demand, spot | Daily fluctuations |
| **Mid (3 mo to 3 yr)** | Project deployment | **1-year contract = sharpest signal** |
| Long (4-5 yr) | Offtake | Majority of volume by value |

## Named providers

- **Lambda Labs** (on-demand)
- **Runpod** (spot/on-demand)
- **CoreWeave** (public — share price concerns noted)
- **Nebius** (public)
- **IREN** (public)

Hyperscalers mentioned but unnamed specifically in rental context.

## Central thesis

> "GPU rental pricing is more likely to continue rising than falling"

Driven by sustained compute scarcity, expanding ROIC margins, extended equipment useful lives, and inelastic AI tool demand.

## Cross-reference

- [[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]] — TCO companion; explains *why* the silver-tier providers can't just undercut
- [[SemiAnalysis - Claude Code Is The Inflection Point]] — demand-side driver
- [[NVIDIA]] — Blackwell lead times into June-July 2026; reinforces $145B supply commitment thesis
- [[Capex trajectory thesis]] — rising 1-year rental prices = quantified demand-supply gap
- [[Hyperscaler capex sustainability]] — the booked-out-through-Sep-2026 data point supports the "demand pre-pays supply" framing
- [[AI debt financing capacity]] — rising rental rates support neocloud project-finance debt service

## Implications — pages flagged for human review

- [[Capex trajectory thesis]] — add the H100 1-year price index ($1.70 → $2.35, +40% in 5 mo) as a **leading indicator** to watch. This is one of the cleanest public quant signals on AI compute demand-supply
- [[Bottleneck ranking (May 2026)]] — "GPU rental supply sold out through Sep 2026" + "Blackwell lead time June-July" should be added as **acute near-term** data points (currently power is the headline; GPU rental is a parallel acute signal)
- [[NVIDIA]] — the Blackwell lead time data corroborates the $145B supply commitment / $1T Blackwell+Rubin guidance from Q1 FY27 earnings
- New page candidate: **GPU rental price index** as a tracked bottleneck — would track quarterly

## Paywall

Article body is publicly readable. Full institutional pricing dataset is subscriber-restricted.
