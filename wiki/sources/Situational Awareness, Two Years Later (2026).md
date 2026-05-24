---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [retrospective, forecast-grading, capex, geopolitics, deepseek, secondary-source]
---

# Situational Awareness, Two Years Later (2026)

**Author:** Omer Ansari (described as a data practitioner; not a primary industry analyst)
**Published:** 2026-04-29 on Medium, *Data Science Collective* publication
**URL:** [medium.com/data-science-collective/situational-awareness-two-years-later-4b941d052ef9](https://medium.com/data-science-collective/situational-awareness-two-years-later-4b941d052ef9)
**Raw:** `raw/articles/Situational Awareness, Two Years Later.md`

## What it is

A two-year retrospective grading [Leopold Aschenbrenner's June 2024 *Situational Awareness: The Decade Ahead*](https://situational-awareness.ai/) essay against actual industry data and events through April 2026. Five major predictions audited (trillion-dollar cluster, AGI by 2027, algorithmic efficiency, geopolitics, "unhobbling"), plus a "what Leopold missed" section.

> [!warning] Secondary source
> Article cites McKinsey (Apr 2025), JP Morgan, CSIS, METR, CFR, Epoch AI, CreditSights, DeepSeek technical reports, company earnings calls — but does not link primaries. **Treat numerical claims as leads, not load-bearing, until primaries are ingested.**

## Verdict scorecard

| Prediction | Verdict |
| --- | --- |
| Trillions into GPU/datacenter/power buildout | **Confirmed and exceeded** — actuals outrun Leopold's projections |
| AGI by 2027 | **Directionally right, 2–3 years early** — most forecasters now at 2029–2032 |
| ~0.5 OOM/yr algorithmic efficiency | **Confirmed and exceeded** — DeepSeek shock + inference-time scaling amplified |
| US–China AI race / national security | **Confirmed; China outperformed expectations** via algorithmic creativity + open-source diffusion |
| Unhobbling: chatbots → drop-in workers | **Confirmed on direction, slower on impact** — trust/safety/integration is the gating constraint |

## Key extracted figures (for our bottleneck thesis)

### Capital scale (Section I)
- **McKinsey (Apr 2025):** $5.2T datacenter capex through 2030; upside scenario $7.9T
- **Big Five hyperscaler capex 2026:** $602B (+36% YoY), ~75% to AI infrastructure
- **Five US AI capex 2026:** >$450B in single year — exceeds inflation-adjusted *annual* Apollo program spend
- **Hyperscaler capex as % US GDP:** ~2.2%
- **Stargate:** $500B announced, 20 datacenters in Texas, 500K sqft each, **10 GW total = NYC + San Diego combined**
- **Amazon Ohio:** $23B expansion
- **xAI Colossus:** 100K GPUs deployed in 122 days inside a shuttered refrigerator factory

### Debt / financeability (Section I, Section VII)
- **JP Morgan:** up to $7T of AI spend will be debt-financed
- **Meta + Oracle:** $75B in bonds in two months of 2025
- **BofA:** "the AI boom is hitting a money wall"
- **94% of operating cash flows** consumed by AI capex at some firms
- **$1.5T projected total AI debt**
- **Sundar Pichai:** noted "elements of irrationality"

### Algorithmic efficiency / DeepSeek shock (Section III)
- DeepSeek V3 + R1 (Jan 2025): GPT-4-parity at ~$5.6M training cost, **2,048 H800 GPUs, 2.79M GPU-hours**
- Compared to Llama 3.1: 16K+ H100 GPUs, 30.84M GPU-hours
- **McKinsey: 18× training cost reduction, 36× inference cost reduction** vs GPT-4o
- Architectural sources: MoE, Multi-Head Latent Attention (~93% KV-cache reduction), FP8 mixed-precision, RLVR
- Inference-time scaling (o1, R1, Claude 3.7 Sonnet thinking, Gemini 2.5 Pro) opened a new compute-demand axis

### Geopolitics (Section IV)
- **Hassabis (Davos 2026):** Chinese frontier AI ~6 months behind Western labs, down from "several years" prior
- **Anthropic (Nov 2025):** disclosed Chinese state-sponsored cyberattack 80–90% autonomously AI-agent-executed
- Trump admin National Security Strategy positions AI/biotech/quantum as strategic priorities
- CSIS: "China's rate of progress is best predicted by market & technological complexities, not by the extent to which export controls were applied"

### Pace check on competing forecasts (Section II)
- [[AI 2027 (2025)|AI 2027 project]] graded its own 2025 predictions at **~65% of expected pace**; median AGI date pushed from 2027 to **~2029–2030**
- Anthropic remains outlier: White House submission March 2025 forecast Nobel-level AI by late 2026 / early 2027
- METR RCT: experienced developers were **19% slower** using early-2025 AI coding tools

## Implications for our wiki

1. **Demand side of the thesis is durable:** Even with timelines slipping 2–3 years, the capex curve is accelerating, not slowing. The bottleneck thesis doesn't depend on AGI-by-2027 — it depends on demand outrunning supply, which it is, regardless of capability arrival date.
2. **Jevons paradox:** DeepSeek's 18× / 36× cost reductions did not reduce aggregate AI spend — they *expanded* the addressable market. Efficiency shocks accelerate the buildout. This is a structural argument against bottleneck-skeptic positions.
3. **Capital is itself becoming a bottleneck.** Distinct from physical-supply bottlenecks (power, transformers, HBM). Tracked on new pages [[Hyperscaler capex sustainability]] and [[AI debt financing capacity]].
4. **Stargate is the single largest concrete data point** for power-layer demand: 10 GW dedicated to one project = order-of-magnitude jump over any prior DC concentration.

## Updated pages from this ingest

- Layer pages: [[Power & energy]] (Stargate scale), [[Compute & silicon]] (DeepSeek shock), [[Capital flows & deal structures]] (placeholder figures replaced)
- New companies/vehicles: [[Stargate]], [[DeepSeek]], [[Anthropic]]
- New assets: [[Stargate Texas]], [[Colossus (xAI)]], [[Amazon Ohio expansion]]
- New bottlenecks: [[Hyperscaler capex sustainability]], [[AI debt financing capacity]]
- New geographies: [[Texas]]
