---
type: company
created: 2026-05-24
updated: 2026-05-27
sources: ["[[Amazon Q1 2026 earnings]]", "[[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]"]
ticker: AMZN
layer: capital
role: hyperscaler
tags: [amazon, amzn, aws, trainium, hyperscaler, custom-asic, bedrock, taas]
---

# Amazon

**Largest annual AI capex committer at ~$200B.** AWS = $37.6B Q1 revenue (+28%) — largest by absolute scale but slowest growth (vs Azure +40%, Google Cloud +63%). **Trainium revenue commitments >$225B** is the largest single hyperscaler custom-silicon disclosure in our wiki. **2.1M AI chips delivered in past 12 months** (>half Trainium).

## Q1 2026 financials (per [[Amazon Q1 2026 earnings]])

| Metric | Value |
| --- | --- |
| **Revenue** | **$181.5B (+17% YoY)** |
| **AWS revenue** | **$37.6B (+28%)** |
| AWS operating income | **$14.2B (37.7% margin)** |
| **Q1 capex** | **$43.2B** |
| **Annual AI capex** | **~$200B** |
| **FCF pressure** | **$1.2B TTM** — extreme capex/FCF ratio |
| AI chips delivered (past 12 mo) | **2.1M** (>half Trainium) |
| **Expected NVIDIA GPUs 2026** | **>1M** |
| AWS chips business run rate | **$20B annual** |
| **Trainium revenue commitments** | **>$225B (multi-year)** |

## Bedrock & the TaaS margin engine (per [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]])

The differentiated AWS story isn't just scale — it's **business-model mix**. AWS is the only CSP where Token-as-a-Service (TaaS) is the dominant share of AI revenue, vs IaaS-heavy peers.

| Metric | Value |
| --- | --- |
| **AWS EBIT margin** | **+213 bps Q/Q** — only CSP with rising margin trend |
| **Bedrock run-rate** | **~$5.5B**; 80-90%+ customers on [[Anthropic]] models |
| Bedrock growth | +170% Q/Q (1Q26), +60% Q/Q (4Q25) |
| Bedrock as % of AWS AI revenue | 37% (up from 9% 1Q25); 2Q26 proj 53% |
| Bedrock EBIT margin (est.) | **~55%** at ~$26M Anthropic-rev/MW |
| Bedrock share of AWS GP step-up Y/Y | **30%** despite only 4% of AWS revenue |
| **Trainium share of Bedrock tokens** | **>50%** (Matt Garman, AWS CEO, Nov 2025) |

**Why TaaS > IaaS on margin**: In the Bedrock model, Anthropic is seller-of-record (books full token revenue); AWS earns an EC2-like infra fee PLUS a distribution/revenue-share fee. The rev-share is what lifts AWS margins above the IaaS-heavy GCP/Azure. **Trainium vertical integration compounds it** — inference-optimized custom silicon abstracted behind Bedrock tokens = margin-accretive offtake for Trainium.

Capacity enabling the scale: ~2 GW built fast in **Indiana and Mississippi**; multibillion PPAs with [[Talen Energy]], [[Vistra]], NiSource. Amazon adding more capacity than any CSP across 2025-2027.

## Trainium custom silicon

- Trainium = AWS's in-house AI accelerator, designed with [[Marvell Technology]] (per Marvell custom ASIC disclosures)
- AWS explicitly stated Trainium expected to:
  - **Save tens of billions in annual capex** vs NVIDIA-only
  - **Several hundred bps operating margin advantage** for inference
- The economics justify the in-house silicon investment

## Strategic position

- AWS = market leader by absolute scale ($37.6B/qtr ≈ $150B run-rate)
- Growth slowest among hyperscalers (+28%) = sign of saturation, not weakness — AWS already largest baseline
- $1.2B FCF TTM despite $200B capex = approaching cash-funded capex limit (vs MSFT/GOOGL with stronger FCF margins)
- Anthropic anchor customer + investor relationship (Amazon has invested $8B+ in Anthropic)

## Counterparties

- [[NVIDIA]] = primary GPU supplier; AWS commits >1M GPUs in 2026
- [[Marvell Technology]] = Trainium custom ASIC partner
- [[TSMC]] = Trainium + NVIDIA fab partner
- Memory triumvirate ([[SK Hynix]], [[Samsung Electronics]], [[Micron Technology]]) = HBM
- [[ARM Holdings]] = Graviton CPU via CSS
- [[Anthropic]] = anchor enterprise compute customer + portfolio investment

## Why it matters

1. **$225B Trainium commitments** = cleanest disclosure that hyperscaler custom silicon at scale is durable, not experimental
2. **$200B annual AI capex** = largest by hyperscaler; FCF/capex ratio = signal that even AMZN approaching cash-funded limit
3. **>1M NVIDIA GPUs in 2026** cross-confirms [[NVIDIA Q1 FY27 earnings (2026)]] disclosure
4. **2.1M AI chips delivered** (>half Trainium) = AWS rapidly diversifying from NVIDIA dependence

## What to watch

- AWS growth deceleration trajectory (+28% to +25%? to +20%?)
- Trainium 3 / Trainium 4 roadmap
- FCF trajectory (under pressure)
- Anthropic relationship deepening
- AI revenue disclosure (AMZN doesn't break out AI ARR like MSFT does)
