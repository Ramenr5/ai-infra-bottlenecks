---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, anthropic, value-capture, socamm, memory-pricing, inference-margin]
---

# SemiAnalysis — AI Value Capture: The Shift to Model Labs (May 2026)

**Publisher:** [[SemiAnalysis]]
**Published:** May 2026
**URL:** [newsletter.semianalysis.com/p/ai-value-capture-the-shift-to-model](https://newsletter.semianalysis.com/p/ai-value-capture-the-shift-to-model)

> [!success] Primary source — value-capture framework + memory price explosion
> Frames where AI value is accruing across the stack (users / inference providers / neoclouds / hyperscalers / AI labs / memory vendors / GPU vendors). Key finding: **AI labs now capture most of the value**, memory vendors up 6× in pricing, GPU manufacturers underpricing relative to value created.

## Anthropic (the case study)

- **ARR: $9B → $44B+** in the time window referenced
- **Inference gross margins: 38% → 70%+** over same period
- (Wiki note: this conflicts mildly with our prior [[Anthropic 2026 update]] which had $30B run-rate April 2026; this article frames $44B+ as more recent — Anthropic ARR is moving very fast)

## SOCAMM memory pricing (the canonical inflation signal)

| Quarter | NVIDIA SOCAMM cost |
| --- | --- |
| **Q1 2026** | **~$8/GB** |
| Mid 2026 estimate | ~$10/GB |
| **Exit 2026 projection** | **>$13/GB** |

SOCAMM = LPDDR-based socketed memory for NVIDIA Vera Rubin systems. Pricing trajectory implies ~60%+ price increase across the year.

## Vera Rubin VR NVL72 cost characteristics

- SOCAMM provides "significantly more memory into an already constrained supply chain"
- Capex per watt: **GB300 $37.4/W → VR NVL72 $38.1/W** (modest increase despite nearly 2× chip TDP)
- The economics work because compute density is increasing faster than per-system cost

## Supply constraints (updated)

- **N3 utilization expected to exceed 100% in H2 2026**
- **DRAM fabs already running above 90% utilization**
- Memory prices "gone up 6×" in some categories

## Value-capture framework — where the rents accrue

> "AI labs are capturing all the value now"

Per the article's framing, in 2026:
- **End users:** "productivity bonanza" but not capturing economic rents
- **Inference providers:** margins widening rapidly
- **AI labs ([[Anthropic]], OpenAI):** capturing dominant share
- **Memory vendors ([[SK Hynix]], [[Samsung Electronics]], [[Micron Technology]]):** capturing significant rents (6× price increases)
- **GPU manufacturers ([[NVIDIA]]):** notably underpricing relative to value created
- **Foundries ([[TSMC]]):** also underpricing relative to value created
- **Neoclouds + hyperscalers:** capturing some value but margin-squeezed by upstream pricing

## Why it matters

1. **Anthropic $44B+ ARR** is a major revision upward from our prior $30B framing; AI lab revenue inflection continues
2. **70%+ inference margins** at frontier labs = inference is now structurally profitable (validates [[Capex trajectory thesis]] demand sustainability)
3. **SOCAMM 6×+ price increase** = direct memory pricing inflation; should compress NVIDIA margins or pass through to customers
4. **N3 >100% utilization + DRAM >90%** = supply-side bottleneck primary-confirmed
5. **"GPU/TSMC underpricing"** = if true, suggests NVIDIA/TSMC pricing power is greater than current pricing implies — bullish margin signal

## Implications for our wiki

- Update [[Anthropic]] with $44B+ ARR + 70% inference margins
- Update [[HBM allocation]] with DRAM >90% utilization + SOCAMM trajectory
- Update [[Capex trajectory thesis]] with value-capture framework
- Update [[NVIDIA]] / [[TSMC]] with "underpricing" observation
