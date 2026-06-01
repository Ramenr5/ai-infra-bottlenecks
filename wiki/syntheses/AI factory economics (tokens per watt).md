---
type: synthesis
created: 2026-06-01
updated: 2026-06-01
sources: ["[[AI factory tokenomics (2026)]]", "[[AI datacenter cost stack & token demand (2026)]]", "[[NVIDIA Computex 2026 Keynote]]", "[[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]", "[[Disaggregated inference (Rubin CPX)]]", "[[Capex bust scenario]]"]
tags: [synthesis, ai-factory, tokenomics, tokens-per-watt, inference-economics, power]
---

# AI factory economics (tokens per watt)

**The organizing economic frame of the 2026 buildout** — Jensen's "AI factory" reframes a datacenter from an IT cost center into a **production plant whose product is tokens**, measured by output efficiency, not megawatts. This page makes that framing explicit, stress-tests the unit economics, and ties it to the wiki's bull/bear axis.

## The view (as of 2026-06-01)

**Power is the denominator of AI revenue.** Once you accept **Revenue = (tokens/watt) × (gigawatts)**, two things follow: (1) **power becomes the binding top-line constraint**, not just a cost — which is why [[Power & energy]] "binds first"; and (2) **the entire hardware roadmap is a tokens-per-watt machine** — Blackwell (~35× throughput), Rubin (~10× lower cost/token), [[Disaggregated inference (Rubin CPX)]] all exist to push the same numerator. The framing is *supply-side correct and demand-side unproven* — it tells you how efficiently watts convert to sellable tokens, **not** whether the tokens clear at price. That gap is the whole bull-vs-bear debate.

## The unit economics (the "factory" P&L)

| Lever | Figure (VERIFY — [[AI factory tokenomics (2026)]]) |
| --- | --- |
| Capex / 100 MW | ~**$660M** (DC + power), ~10-yr depreciation |
| Annual TCO / 100 MW | **$330M–$807M** |
| NVIDIA 1-GW example | **$100B capex → ~$150B/yr** token revenue |
| Token price tiers | low ~$1/M · mid $3–6 · engineering ~$45 · premium real-time higher |
| Modeled margin | **>50%** (Morgan Stanley, "NVIDIA *or* Huawei") |
| Hardware return | $5M GB200 NVL72 → ~$75M token revenue ≈ **15×** |

**The flywheel (bull):** better tokens/watt → lower cost/token → (Jevons) more demand → more GW built → repeat. [[Disaggregated inference (Rubin CPX)]] is the current accelerant (prefill/decode split collapses long-context cost).

## The cost stack — where the $100B/GW goes
The revenue side is one input; the **cost stack** is the other (all VERIFY, [[AI datacenter cost stack & token demand (2026)]]):
- **Total capex per 1 GW is a *range*, not a point:** ~$35B (Bernstein) · **$38B (Epoch — primary)** · **$50–60B (NVIDIA)** · $60–80B (Jensen's stage math). The dispersion itself matters — the "$100B/GW" headline sits *above* every independent estimate.
- **Capex mix:** **GPU/compute ~39%**, networking ~13%, facility/power/cooling the balance; a GB200 NVL72 rack ≈ **$5.9M** ($3.4M compute + $2.5M infra); facility ~$9–15M/MW.
- **Annual TCO ≈ $8.5B/yr per GW** (Epoch — **primary**) — of which **servers/IT ~60% (~$5B/yr)**; total opex ~$0.9B/yr, **energy ~$0.6B/yr** the largest opex line (Epoch; *corrects an earlier "$1.3B" secondary figure*). Useful-life assumptions: **5 yr IT / 14 yr facility**.
- Read-through: the **$150B/yr revenue vs ~$8.5B/yr TCO** gap is where the ">50% margin / 15× hardware return" claims come from — *if* utilization and token prices hold. The cost stack is knowable; the revenue is the assumption.

## The depreciation question — does the reported margin hold?
The accounting bridge between *advertised* tokens/watt and *realized* margin (extends [[Thesis stress-tests]], Burry row):
- **Front-loaded ROI:** an H100 returned ~**+137% in year 2** but **−34% by year 4** — the economics are early-life. So tokens/watt math only works at **high *early* utilization**.
- **The Burry charge:** hyperscalers depreciate over 5–6 yr while real economic life may be ~2–3 yr → **~$176B of understated depreciation / overstated profit 2026–28**. Nadella: *"I didn't want to get stuck with four or five years of depreciation on one generation."*
- **The split is live:** Amazon shortened 6→5 yr; Meta extended to 5.5 yr (a $2.9B depreciation *reduction*). Same assets, opposite calls — so reported AI-factory margins are partly an accounting *choice*.
- **"Bend, don't break":** older GPUs cascade to inference/cheaper tiers, lengthening useful life — but that **assumes a deep secondary-demand tier exists** (which [[Disaggregated inference (Rubin CPX)]]'s cheap-inference tier helps create).

## Why it matters to the thesis

- **Converts the power bottleneck into a revenue function.** Every watt of [[Power & energy]] / [[800VDC transition]] / [[Datacenter cooling]] capacity is now a *revenue input*, not overhead → reframes the entire power buildout as growth capex. Strengthens the demand-lock pillar of [[Capex trajectory thesis]].
- **Reframes capex as factory capex.** $100B/GW reads as reckless as "IT spend"; as "a factory with >50% modeled margins and 15× hardware payback," it reads as rational industrial investment — *if* the output sells.
- **Tokens-per-watt is the new comp metric.** Across operators, the winner is whoever converts watts→sellable-tokens most efficiently — favoring the [[NVIDIA]] full-stack + the most power-efficient designs.

## The crux — supply-side metric, demand-side question

The formula's elegance hides its load-bearing assumption: **someone must buy $150B of tokens per gigawatt, every year, at tiered prices.**

- **Bull:** agentic + reasoning + physical-AI demand is parabolic (Jensen's "compute is revenue"); Anthropic GM 38%→**70%** and H100 rentals **+40%** off the bottom say the tokens *are* clearing at healthy margins ([[AI factory tokenomics (2026)]]).
- **Bear:** it's a **supply-side tautology** — tokens/watt says nothing about demand elasticity or price competition. Three specific holes:
  1. **Price erosion** — the same efficiency gains that lift tokens/watt also *push token prices down* (open-weight/competition, [[Open-weight commoditization (the swing factor)]]); margin per token compresses as volume rises.
  2. **"Dark output"** — reasoning models bill large hidden "thinking" token volumes; tokens-per-watt can flatter revenue if much output is low-value ([[AI factory tokenomics (2026)]]).
  3. **Demand must materialize** — this is exactly the [[Capex bust scenario]] gap (revenue-vs-capex). The factory frame *assumes* the order book converts to token sales.

> [!warning] The honest read
> Tokens-per-watt is the right **engineering** metric and a seductive **investment** metric — but it measures the *supply* of monetizable compute, not the *demand* for it. Treat a high tokens/watt as necessary, not sufficient.

## The demand side — who actually buys the tokens
The formula needs **$150B of token demand per GW, per year**. The 2026 evidence cuts both ways ([[AI datacenter cost stack & token demand (2026)]]):
- **Bull — the spend is real and parabolic:** Gartner sees **AI-agent software spend ≈ $207B in 2026, +139%** YoY; enterprise AI budgets **$1.2M (2024) → $7M (2026)**; [[Anthropic]] moved to **usage-based per-token** pricing (always-on agents bill per token). The agentic curve ([[Future progression of AI (2026 view)]]) *is* the demand engine.
- **Bear — sticker shock + ROI doubt:** **73% of enterprises** say AI costs **exceeded projections** (FinOps 2026); **Uber burned its entire 2026 AI-coding budget in 4 months** and its COO openly questioned the ROI. If the buyers balk, the GW gets built but the tokens don't clear at price.
- **The synthesis:** demand is **growing fast enough to be plausible** but **not yet proven to clear at the tiered prices** the model assumes — which is precisely the [[Capex bust scenario]] gap. Watch *realized enterprise AI ROI*, not just spend growth: rising spend with rising regret is the bear setup.

## Tradable read

- **Reinforces the toll thesis** ([[AI value capture across the stack]]): the names that *set* tokens-per-watt — [[NVIDIA]] (compute), HBM ([[SK Hynix]] et al.), power-efficiency enablers ([[Vertiv Holdings]], [[Eaton]], [[800VDC transition]] names) — capture value regardless of whose factory wins.
- **Power-efficiency is now alpha:** within operators/neoclouds, the most power-efficient designs win the margin; the inefficient ones get competed away (thin-rent end of the curve).
- **Watch the demand side, not the formula:** the metric to *trust* is realized token revenue + margin (Anthropic-style disclosures), not advertised tokens/watt.

## Leading indicators

| Indicator | Bull | Bear |
| --- | --- | --- |
| Realized inference **margin** (Anthropic-style) | holds/rises | compresses despite volume |
| **Token price** trend | premium tiers hold | commodity-tier race to zero |
| GPU **rental** price | rising (+40% off bottom = bull) | rolls over (demand soft) |
| **Utilization** of new GW | ≥70% (model assumption) | underutilized → TCO unrecovered |

## Confidence + aging

| Claim | Confidence | Half-life |
| --- | --- | --- |
| Tokens/watt is the right supply-side frame | **High** | ~12 mo |
| Modeled >50% margins at current prices | Moderate | ~6 mo (price-erosion risk) |
| Demand clears the $150B/GW at scale | **Open** (the crux) | ~6 mo |

**Re-evaluate on:** realized inference-margin disclosures; token-price erosion; new-GW utilization data; any rental-price rollover. Maintained alongside [[Capex trajectory thesis]] ↔ [[Capex bust scenario]].

## Related
- [[AI value capture across the stack]] · [[Future progression of AI (2026 view)]] · [[Disaggregated inference (Rubin CPX)]] · [[CPU scaling (host-CPU ratio)]] · [[Power & energy]] · [[Capex trajectory thesis]] · [[Capex bust scenario]] · [[NVIDIA Computex 2026 Keynote]]
