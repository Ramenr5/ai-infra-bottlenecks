---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]"]
layer: multi
role: analyst
tags: [epoch, analyst, forecasting, ai-scaling, primary-source, methodology]
---

# Epoch AI

Independent research organization focused on **quantitative forecasting of AI capabilities, compute scaling, and economic implications.** Probably the most-cited rigorous analyst shop for AI infrastructure projections — methodologically careful, Monte Carlo-driven, with stated confidence intervals.

## Why it's tracked here as a "company"

Epoch is not a commercial vendor — but for this wiki it functions as a **primary analyst source** in the way that Bloomberg, McKinsey, or SemiAnalysis do for adjacent topics. We expect to re-ingest Epoch reports repeatedly, so they get a canonical page.

## Key personnel (from the AI 2030 report byline)

- Jaime Sevilla — Director
- Tamay Besiroglu — Associate Director
- Ben Cottier, Josh You, Edu Roldán, Pablo Villalobos, Ege Erdil — research staff

## Notable outputs cited in our wiki

- [[Can AI scaling continue through 2030 (2024)]] — the four-bottleneck flagship report
- Their **training compute trends database** (4×/yr historical scaling)
- The **chips topic overview** (epoch.ai/blog/chips-topic-overview)
- The **algorithmic progress in language models** series
- Cost-of-training tracker (~2.5×/yr training spend growth)
- Data scarcity / Villalobos et al. on text data limits

## Methodology

- **Monte Carlo simulation** with explicit prior distributions for each input variable
- **80% confidence intervals** reported alongside medians for every estimate
- **Public Colab notebooks** with the underlying models — reproducible
- Citations weighted toward primary data (utility filings, foundry investor materials, semi industry trackers)

## Why it matters for us

- **Bias toward conservatism.** Epoch's numbers are typically more conservative than industry-side sources (hyperscalers, NVIDIA) and more aggressive than skeptic-side sources (LeCun-style critics).
- **Methodological anchor.** When other sources disagree, Epoch's framework is usually the right place to triangulate.
- **Forward-cited by everyone.** Aschenbrenner, McKinsey, CSIS, the AI 2027 project, and most informed retrospectives reference Epoch's data series.

## What to watch

- Their forthcoming work on power constraints and chip manufacturing (Epoch flagged these as their next deep dives at the end of the 2030 report)
- Updates to their training-compute trend database
- Any revisions to the 4×/yr scaling assumption
