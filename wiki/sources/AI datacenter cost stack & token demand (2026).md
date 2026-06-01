---
type: source
created: 2026-06-01
updated: 2026-06-01
tags: [source, ai-factory, capex, depreciation, roic, token-demand, search-sourced]
---

# AI datacenter cost stack & token demand (2026)

**Type:** consolidated search-sourced note — the 1-GW cost stack (Epoch et al.), the GPU-depreciation debate, and the demand side (who buys the tokens). Built to deepen [[AI factory economics (tokens per watt)]]. **Tag figures VERIFY.**

## The 1-GW cost stack (where the money goes)
- **Total capex per 1 GW — wide dispersion:** ~**$35B** (Bernstein) · **$38B** (**Epoch — primary**) · **$50–60B** (NVIDIA) · **$60–80B** (Jensen's on-stage math). Every independent estimate sits *below* the "$100B/GW" headline ([Epoch AI](https://epoch.ai/data-insights/ai-datacenter-cost-breakdown), [Investing.com](https://www.investing.com/news/stock-market-news/how-much-does-a-gw-of-data-center-capacity-actually-cost-4314046)).
- **Capex mix (secondary — Epoch shows it only as charts):** GPU/compute ~39%, networking ~13%, facility/power/cooling the balance. GB200 NVL72 rack ≈ **$5.9M** ($3.4M compute + $2.5M physical infra). Facility ~**$9–15M/MW**.
- **TCO (Epoch — primary):** **annualized ≈ $8.5B/yr** for 1 GW; **servers/IT ~60% (~$5B/yr)**; total opex ~$0.9B/yr with **energy ~$0.6B/yr** the largest opex line *(corrects the earlier "$1.3B" secondary figure)*. Useful life: **5 yr IT / 14 yr facility** — directly relevant to the depreciation debate below.

## The depreciation question (does the reported P&L hold?)
The single biggest accounting swing factor — extends [[Thesis stress-tests]] (Burry row):
- **Burry:** hyperscalers depreciate GPUs over **5–6 yr** but real economic life is **~2–3 yr** (NVIDIA ships annually) → **~$176B understated depreciation / overstated profit, 2026–28**.
- **Nadella:** *"I didn't want to get stuck with four or five years of depreciation on one generation."*
- **Divergence is real:** Amazon **shortened** a subset 6→5 yr (citing AI pace); Meta **extended** to 5.5 yr (a **$2.9B** depreciation reduction). Same assets, opposite calls.
- **H100 ROI curve:** ~$36k annual profit / **+137% ROI in year 2**, but **−34% ROI by year 4** — economics are front-loaded; useful-life assumptions decide the reported margin ([CNBC](https://www.cnbc.com/2025/11/14/ai-gpu-depreciation-coreweave-nvidia-michael-burry.html), [SiliconANGLE](https://siliconangle.com/2025/11/22/resetting-gpu-depreciation-ai-factories-bend-dont-break-useful-life-assumptions/)).
- Read: "bend but don't break" — older GPUs cascade to inference/cheaper tiers, but the **front-loaded ROI means tokens-per-watt economics depend on high *early* utilization.**

## The demand side — who actually buys the tokens
The other half of [[AI factory economics (tokens per watt)]]'s crux (supply-side metric needs demand to clear):
- **Gartner: AI-agent software spend ≈ $207B in 2026, +139%** from $86.4B in 2025 — the demand is real and parabolic.
- **Anthropic** moved to **usage-based per-token** pricing (agents billed per token) — monetization mechanism for always-on agents.
- **But sticker shock is real:** avg enterprise AI budget **$1.2M (2024) → $7M (2026)**; **73% of enterprises say AI costs exceeded projections** (FinOps 2026); **Uber burned its entire 2026 AI-coding budget in 4 months** and its COO questioned the ROI ([Fortune](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/), [Axios](https://www.axios.com/2026/05/28/ai-spending-roi-enterprise-costs)).
- The tension: **spend is exploding (bull) AND ROI is being questioned (bear)** — exactly the demand-clears-at-price question tokens-per-watt can't answer.

## Why it matters
- Gives [[AI factory economics (tokens per watt)]] its **cost stack** (supply) and its **demand test** (does $207B+ of token spend absorb the GW being built?).
- The depreciation debate is the **accounting bridge** between "advertised tokens/watt" and "realized margin."

## Implications
- [[AI factory economics (tokens per watt)]] · [[Capex bust scenario]] · [[Capex trajectory thesis]] · [[Thesis stress-tests]] (Burry row) · [[Power & energy]]
