---
type: synthesis
created: 2026-06-01
updated: 2026-06-01
sources: ["[[Menlo - State of Enterprise AI (2025)]]", "[[SemiAnalysis - AI Value Capture (2026)]]", "[[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]", "[[NVIDIA Computex 2026 Keynote]]", "[[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]]", "[[P3 Institute - Open Source to Open Weights (2026)]]"]
tags: [synthesis, value-capture, rents, chokepoints, stack, investment-thesis]
---

# AI value capture across the stack

## The view (as of 2026-06-01)

**AI value accrues to chokepoints, not to whoever is closest to the user.** Rent capture across the stack is a function of **concentration × indispensability × capacity-constraint** — not revenue size. The layers that are *concentrated, indispensable, and sold-out* keep the rents (memory, NVIDIA allocation, foundry/packaging, EUV, EDA, frontier labs); the layers that are *fragmented and competitive* get commoditized regardless of how much revenue flows through them (ODM production, neoclouds, inference resale, much of application SaaS). **Own the tolls; be selective on everything else.**

The single biggest swing factor: **is the model-lab layer a durable toll or does it get commoditized?** Today labs capture concentrated value; open weights threaten to commoditize it.

## The map — where rents land

| Layer | Concentration | Rent capture | Evidence |
| --- | --- | --- | --- |
| **Frontier labs** | High (closed) | **HIGH (for now)** | Anthropic **40% of enterprise LLM spend**, inference GM 38%→70% ([[Menlo - State of Enterprise AI (2025)]], [[SemiAnalysis - AI Value Capture (2026)]]) |
| **Memory / HBM** | Oligopoly (3) | **HIGH** | SK Hynix **72% op margin**; memory pricing **6×**; sold out 3yr; NVIDIA exclusive HBM4 ([[HBM allocation]], [[NVIDIA Computex 2026 Keynote]]) |
| **GPU (NVIDIA)** | Dominant + allocation power | **HIGH but "underpricing"** | $1T order book; yet AI Value Capture says NVIDIA/TSMC *underprice relative to value created* → pricing power > current pricing |
| **Foundry / packaging** | TSMC monopoly-ish (leading edge + CoWoS) | **HIGH** | CoWoS sold out; NVIDIA books majority; A16 roadmap ([[CoWoS packaging capacity]], [[TSMC]]) |
| **Networking / interconnect** | Broadcom near-mono + NVLink + optics oligopoly | **HIGH (toll)** | Broadcom: networking = the **rich-margin** ~40% of AI semi; custom XPU compresses ([[Broadcom Q2 FY26 earnings (2026)]]); "largest networking co" (NVIDIA). Robust to merchant-vs-custom war → [[Networking & interconnect]] |
| **Lithography / EDA** | ASML EUV monopoly; EDA Big-3 | **HIGH (toll)** | €38.8B ASML backlog; 95-99% EDA retention ([[Lithography monopoly]], [[EDA tool consolidation]]) |
| **Hyperscalers** | Oligopoly | **MIXED** | TaaS (Bedrock) margin-accretive (+213bp); IaaS thinner ([[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]) |
| **Application SaaS** | Fragmented | **CONTESTED** | captured ~**half** of $37B enterprise spend (Menlo) BUT fragmented + threatened (AI-eats-SaaS, MSFT bundling) → [[CrowdStrike]]/[[ServiceNow]] |
| **ODM production** | Fragmented, thin EMS | **LOW** | [[Foxconn]] ~$83B/qtr revenue but thin margins; volume ≠ rent ([[NVIDIA Computex 2026 Keynote]]) |
| **Neoclouds** | Fragmented, debt-financed | **LOW** | wholesale IaaS; hyperscalers carry 10-61% premium over them ([[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]], [[CoreWeave]]) |
| **Inference resale** | Competitive | **COMPRESSING** | [[Disaggregated inference (Rubin CPX)]] cheapens inference → provider margin compresses, volume expands |

## The framework (one line)

**Rent = concentration × indispensability × capacity-constraint.** High on all three = toll (keep the rent). Fragmented on any = commodity (rent competed away). Revenue scale is a *distraction* — Foxconn's $83B/qtr captures less rent than SK Hynix's memory or ASML's lithography.

## The contested crux — does value migrate UP to the labs?

- **"Migrates up" ([[SemiAnalysis - AI Value Capture (2026)]]):** labs capture most value; everything below underprices.
- **"Stays distributed" ([[Menlo - State of Enterprise AI (2025)]]):** the application layer captured ~half of enterprise spend; the pie below the labs is real and growing.
- **"Labs get commoditized" ([[P3 Institute - Open Source to Open Weights (2026)]]):** open weights (China-led) commoditize the model layer → value migrates *down/out* to infra + application + whoever owns cheap compute.
- **[[Disaggregated inference (Rubin CPX)]]:** cheaper inference grows the pie *below* the labs (Jevons) → tilts toward application + memory.

**My read:** the *infrastructure* tolls (memory, NVIDIA, TSMC/CoWoS, ASML, EDA) are the most durable rents — concentrated, capacity-constrained, indispensable regardless of who wins the model war. The *lab* layer is high-rent but the **least durable** (open-weights + competition). The *application* layer is a **stock-picker's layer** — winners keep rents, losers get commoditized.

## The cleanest tolls — robust to BOTH forks
Not all tolls are equal. The buildout has **two big forks**: (1) the **silicon war** (NVIDIA GPU vs hyperscaler XPU vs AMD) and (2) the **architecture-within-optics/power** fork (pluggable vs CPO; ±400V vs 800V; copper vs optical). The **cleanest** tolls sit *upstream of both* — they get paid regardless of who wins compute *and* which architecture wins. That's the highest-quality rent.

| Tier | Robustness | Names |
| --- | --- | --- |
| **Tier 1 — upstream of both forks (cleanest)** | wins under any compute vendor *and* any architecture | **[[TSMC]]** (foundry; everyone prints there) · **HBM** ([[SK Hynix]]/[[Micron Technology]]/[[Samsung Electronics]]) · **advanced packaging / [[CoWoS packaging capacity|CoWoS]]** (+[[KLA Corporation]]) · **[[Semiconductor test (the AI test toll)|test]]** ([[Advantest]]/[[Teradyne]]) · **EDA** ([[Synopsys]]/[[Cadence Design Systems]]) · **[[Lithography monopoly|ASML]]** |
| **Tier 2 — robust to silicon war, architecture-exposed** | wins regardless of compute vendor, but bets on an architecture | networking switch silicon ([[Broadcom]] — Ethernet wins either way, but Spectrum-X share war) · optical DSP ([[Marvell Technology]] — needed, but CPO shifts content) |
| **Tier 3 — architecture bets (high upside, NOT "clean")** | only wins if a *specific* sub-architecture wins | **CPO lasers** ([[Sivers Semiconductors]] — only if CPO beats pluggables) · **SOI substrates** ([[Soitec]] — silicon-photonics-dependent) · voltage-class power semis (±400V vs 800V) |

**Why it matters:** [[NVIDIA]] is a *great* business but **fails fork 1** (loses share if XPUs win), so it's not a "cleanest" toll despite being the headline. The deepest-upstream **Tier 1 — TSMC, memory, packaging, test, EDA, litho — are the foundational supply-chain tolls that win no matter how the war or the architecture resolves.** The exciting micro-cap "chokepoints" (Sivers/Soitec) are **Tier 3** — high-upside *architecture bets*, not clean tolls; size accordingly.

## Tradable read

- **Own the tolls (highest-conviction rent capture):** [[NVIDIA]], [[TSMC]], [[ASML]], [[SK Hynix]]/[[Samsung Electronics]]/[[Micron Technology]] (HBM), [[Synopsys]]/[[Cadence Design Systems]] (EDA), advanced-packaging exposure ([[KLA Corporation]]), **[[Semiconductor test (the AI test toll)|test]]** ([[Advantest]]/[[Teradyne]]).
- **Selective / cyclical (volume not rent):** ODMs ([[Foxconn]], [[Quanta Cloud Technology]]), neoclouds ([[CoreWeave]]) — trade the cycle, don't mistake revenue for margin.
- **Stock-picker's layer (application):** [[CrowdStrike]] (sourced agentic-security toll forming) vs [[ServiceNow]] (control-plane contested by MSFT Agent 365) — see [narrative](../../narratives/2026-06-01 CRWD %2B NOW.md).
- **The hedge / swing factor:** if open weights commoditize the labs, value flows to infra + application + cheap-compute owners — *underweight pure lab-rent bets, overweight the indispensable infra tolls.*

## Confidence + aging

| Element | Confidence | Half-life |
| --- | --- | --- |
| Infra tolls keep the rents | **High** | ~12 mo |
| Labs = highest-rent-but-least-durable | Moderate | ~6 mo (open-weights dependent) |
| Application = stock-picker's layer | Moderate | ~6 mo |
| ODM/neocloud = low rent despite revenue | High | ~12 mo |

**Re-evaluate on:** open-weight frontier parity (commoditizes labs); NVIDIA/TSMC raising prices (capturing the "underpricing" gap); any HBM/CoWoS capacity catching demand (erodes the memory/packaging toll).

## Related
- [[Future progression of AI (2026 view)]] (the *time-axis* companion — this page is the *layer-axis*) · [[Open-weight commoditization (the swing factor)]] (the variable that decides the crux) · [[Application & software]] + [[Physical AI & robotics]] (the contested top + the new front) · [[Capex trajectory thesis]] · [[Capex bust scenario]] · [[AI investment momentum tracker]] · [[Bottleneck ranking (May 2026)]] · [[AI infrastructure investment map (May 2026)]] · [narrative: CRWD + NOW](../../narratives/2026-06-01 CRWD %2B NOW.md)
