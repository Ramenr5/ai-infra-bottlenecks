---
type: source
created: 2026-05-27
updated: 2026-05-27
tags: [primary-source, semianalysis, anthropic, aws, bedrock, taas, hyperscaler-margins, capital-flows]
---

# SemiAnalysis — Anthropic Growth and Bedrock Mix Drive AWS Margins Higher While Peers Lag

**Publisher:** [[SemiAnalysis]] · Author: Jeremie Eliahou Ontiveros · Created 2026-05-28
**URL:** [newsletter.semianalysis.com/p/anthropic-growth-and-bedrock-mix](https://newsletter.semianalysis.com/p/anthropic-growth-and-bedrock-mix)

## Headline framing

**AWS margins inflected (+213 bps Q/Q) while every other CSP's margins flatten or fall** — driven by Claude spending through Bedrock. The mechanism is a structural one: **Token-as-a-Service (TaaS) carries materially higher margins than IaaS**, and Amazon has the largest TaaS business of any hyperscaler. This is the cleanest articulation yet of *why* the margin gap between the top-3 hyperscalers and everyone else (Oracle, neoclouds) is widening.

## The TaaS vs IaaS margin thesis (the core insight)

| Model | Economics | Margin profile |
| --- | --- | --- |
| **IaaS** (multi-year GPU rental, take-or-pay) | CSP rents compute on 5yr contracts | Lower margin; revenue guaranteed |
| **TaaS** (token-as-a-service, e.g. Bedrock) | CSP gets infra fee + **revenue-share/distribution fee**; AI Lab is seller-of-record (books full token revenue) | **Significantly higher margin**; revenue not guaranteed (higher risk) |

In the Bedrock model: **Anthropic books full token revenue as seller; AWS earns an EC2-like infra fee PLUS a distribution/revenue-share fee** — the latter is what boosts AWS margins.

## Key numbers

| Metric | Value |
| --- | --- |
| **AWS EBIT margin** | **+213 bps Q/Q** (only CSP with rising trend) |
| AWS server depreciation | 5 years (lowest of all CSPs — makes margin gain more remarkable) |
| **Bedrock run-rate** | **~$5.5B** today; 80-90%+ customers on [[Anthropic]] models |
| Bedrock growth | +170% Q/Q (1Q26), +60% Q/Q (4Q25) |
| Bedrock as % of AWS AI revenue | **37%** (up from 9% in 1Q25) |
| AI IaaS as % of AI business | Still 80%+ at Azure and GCP |
| AWS AI as % of total revenue | 10% (up from 2% in 1Q24) |
| GCP / Azure AI mix | 36% / 27% of total cloud revenue |
| TaaS ARR (AMZN/MSFT/GOOGL each) | **$10B+** vs ~nothing at Oracle/neoclouds |
| **Bedrock EBIT margin (est.)** | **~55%** at ~$26M Anthropic-rev-per-MW (1Q26) |
| Bedrock share of AWS Gross Profit step-up Y/Y | **30%** despite being only 4% of AWS revenue |
| 2Q26 projection | Anthropic ARR/MW ~$42M; Bedrock = 53% of AWS AI revenue |
| Trainium share of Bedrock token usage | **>50%** (Matt Garman, AWS CEO, Nov 2025) |

## Anthropic Q1 2026 (the engine)

- **Added $21B net new ARR in Q1 → $30B ARR** (consistent with [[Anthropic]] page)
- API/Enterprise-weighted (vs OpenAI consumer-skew + heavy free-user inference load)
- **Inference gross margins now mid-60s%** — up from 38% (2025) and **-94% (2024)**
- Anthropic API revenue **~13× Y/Y**
- WSJ (5/20/26): Anthropic expected **Operating Income profitable in 2Q** (adjusted for SBC)
- SemiAnalysis Tokenomics model: **potential >$100B ARR by year end**
- Driven by Claude Code enterprise adoption + growing consumer share vs OpenAI

## Frontier-model access = the real CSP moat

The decisive Bedrock/Foundry/Vertex differentiator is **access to frontier LLMs**, not model-library breadth or price:
- **AWS**: Claude + (recently) OpenAI
- **Microsoft**: OpenAI + (recently) Claude
- **Google**: Claude + Gemini
- **No other CSP** can sell OpenAI + Claude + Gemini tokens

## Capacity & power (why Amazon could scale TaaS)

- **Amazon adding more capacity than any CSP 2025-2027** (only Microsoft close in 2024-26, dwarfed by 2027)
- Amazon secured more power than any cloud besides Google; multibillion PPAs with **[[Talen Energy|Talen]], [[Vistra]], NiSource**
- ~2 GW built fast in **Indiana and Mississippi**
- **Microsoft datacenter freeze** (year-long pause) lowered 2027 capacity forecast; slow Wisconsin builds
- Microsoft's OpenAI backlog alone = **2.5× total Azure annual revenue**

## The Google "EBTIT" caveat (contrarian flag)

> [!warning] Google Cloud margins may be an illusion
> GCP's record margins exclude DeepMind/Gemini *training* costs, which sit in "Alphabet-Level Activities" ($5.4B in 1Q26, up from $3.0B 1Q25). All Gemini API revenue flows to GCP at high margin while $10B+ run-rate costs are bucketed elsewhere. SemiAnalysis calls this "EBTIT" — Earnings Before Training, Interest and Taxes. GCP may also have benefited from one-off TPU-to-Anthropic royalty payments (via Broadcom, Google as IP vendor).

## Why it matters for the thesis

- **First clean framework for hyperscaler margin divergence**: TaaS mix (not total AI mix) drives margins. AWS has lower total AI mix (10%) than GCP (36%) or Azure (27%) but higher margins because of TaaS weighting.
- **Demand-side validation**: Anthropic $30B ARR + >$100B potential + mid-60s inference margins confirms the inference market is real and high-margin — underwrites the hyperscaler compute commitments in [[Capex trajectory thesis]]
- **Vertical integration payoff**: Trainium >50% of Bedrock tokens = the clearest evidence custom silicon is margin-accretive at scale ([[Amazon]]/[[AWS]] thesis)
- **Beneficiary ranking**: AMZN > MSFT/GOOGL > ORCL/neoclouds on TaaS margin capture

## Cross-reference

- [[Anthropic]] — the revenue engine; $30B ARR, mid-60s inference GM, OI-profitable 2Q
- [[Amazon]] — Bedrock + Trainium vertical integration; AWS margin inflection
- [[Microsoft]] — datacenter freeze, OpenAI-backlog concentration
- [[Alphabet]] — EBTIT margin caveat
- [[Oracle]] — disappointed cloud margins (TaaS-light)
- [[Capex trajectory thesis]] — demand-side validation
- [[AI debt financing capacity]] — TaaS-vs-IaaS margin gap explains neocloud debt-service pressure
- [[Hyperscaler capex sustainability]] — margin divergence reshapes which hyperscalers can sustain capex

## Implications — pages to update (this is a supervised ingest)

- [[Anthropic]] — updated this session (ARR + margin inflection + OI-profitable)
- [[Amazon]] — updated this session (Bedrock $5.5B, TaaS strategy, +213bp margin)
- [[Microsoft]] — flag: datacenter freeze + OpenAI backlog 2.5× Azure revenue
- [[Alphabet]] — flag: EBTIT margin caveat
- [[Capital flows & deal structures]] — flag: add TaaS-vs-IaaS margin-economics framework
- [[Oracle]] — flag: TaaS-light → margin disappointment

## Paywall

Public ~95% (full TaaS framework, Bedrock numbers, Anthropic Q1, Google caveat, capacity comparison). Paywall begins at "Implications for Hyperscalers and Labs."
