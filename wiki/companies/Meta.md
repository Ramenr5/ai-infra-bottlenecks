---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Meta Q1 2026 earnings]]", "[[AMD Q1 2026 earnings]]"]
ticker: META
layer: capital
role: hyperscaler
tags: [meta, capex, mtia, llama, ai-research, amd-deal, broadcom-partner]
---

# Meta Platforms

**Hyperscaler with the most aggressive capex acceleration.** 2026 capex guide raised to $125-145B = roughly 2× 2025 levels. Ad business (+33% YoY) funds the AI buildout. **Committed up to 6 GW of AMD Instinct GPUs with first 1 GW on custom MI450** — largest publicly disclosed non-NVIDIA hyperscaler commitment.

## Q1 2026 financials (per [[Meta Q1 2026 earnings]])

| Metric | Value |
| --- | --- |
| **Revenue** | **$56.31B (+33% YoY)** |
| **Net income** | **$26.77B (+61%)** |
| **2026 capex guide (raised)** | **$125-145B** (from $115-135B) |
| 2026 expense guide | $162-169B |
| Family DAP | +4% |
| Ad impressions | +19% |
| Price per ad | +12% |

## Custom silicon

- **MTIA Gen 2 in production** across recommendation-model inference (per Q1 2026)
- Designed with [[Broadcom]] (Broadcom's "M" in TPU + MTIA partnerships)
- Reduces NVIDIA dependence for inference workloads

## The AMD 6 GW deal (major)

Per [[AMD Q1 2026 earnings]]:
- **Up to 6 GW of AMD Instinct GPUs**
- **First 1 GW deployment on custom MI450**
- Largest publicly disclosed hyperscaler commitment to non-NVIDIA silicon
- Comparable in scope to [[Broadcom]]-Google TPU partnership from a single-customer perspective

## Strategic position

- Multiple compute strategies in parallel: MTIA (custom for inference) + AMD Instinct (custom for training/inference) + NVIDIA (primary training)
- Llama model family = open-weights AI research platform; open-source positioning
- Ad business = the cash cow funding the AI buildout (no enterprise cloud business to monetize)
- Different from MSFT/GOOGL/AMZN — Meta doesn't sell compute externally; it consumes for internal use

## Counterparties

- [[Broadcom]] = MTIA custom design partner
- [[AMD]] = Instinct MI450 custom + catalog deal anchor
- [[NVIDIA]] = primary GPU supplier
- [[TSMC]] = MTIA + Instinct fab partner
- Memory triumvirate ([[SK Hynix]], [[Samsung Electronics]], [[Micron Technology]]) = HBM

## Why it matters

1. **2× 2025 capex** = fastest hyperscaler acceleration
2. **AMD 6 GW deal** = real diversification away from NVIDIA-only; validates [[AMD]] as credible #2
3. **MTIA Gen 2 production** = custom silicon at scale for recommendation workloads
4. **No external cloud business** = capex must monetize through ad revenue improvement (different ROI model than MSFT/GOOGL/AMZN)
5. **Llama open-weights** = different ecosystem strategy; supports AI tooling sales by competitors but builds Meta's developer mindshare

## SemiAnalysis criticism (per [[SemiAnalysis - AI Datacenter Energy Dilemma]] + [[SemiAnalysis - Meta Bizarre AI Infrastructure Choice]])

- **650,000 H100-equivalent installed base** (end-of-year framing)
- Characterized as having **"worst datacenter design in terms of power density"** among hyperscalers
- Historical missteps: overreliance on CPUs for recommendation models (when GPUs offered superior TCO); failed 7nm internal AI silicon program
- More recent paywalled SemiAnalysis piece frames Meta as "deploying billions in servers with silicon that increases costs, power consumption, and reduces performance through increased latency" — specifics not public

The AMD MI450 6 GW deal could be partly a course-correction on these historical infrastructure choices.

## What to watch

- Ad revenue trajectory (must keep funding the capex)
- AMD MI450 deployment progression
- MTIA Gen 3 roadmap
- Llama 5 release timing
- Reality Labs spend (separate AI/AR investment)
