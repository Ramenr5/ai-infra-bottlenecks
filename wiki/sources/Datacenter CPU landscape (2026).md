---
type: source
created: 2026-06-01
updated: 2026-06-01
tags: [source, cpu, arm, x86, datacenter, tam, search-sourced]
---

# Datacenter CPU landscape (2026)

**Type:** consolidated search-sourced note on the server-CPU market — TAM, Arm vs x86 share, hyperscaler custom silicon — built to deepen [[CPU scaling (host-CPU ratio)]]. **Tag figures VERIFY** (secondary coverage + vendor guidance + SemiAnalysis "CPUs are Back").

## The TAM is re-rating (agentic AI is the driver)
- **AMD:** server-CPU TAM growing **>35%/yr to >$120B by 2030** — AMD *doubled* its forecast; CEO says EPYC **Verano is "built purely for AI"** ([wccftech](https://wccftech.com/amd-doubles-server-cpu-forecast-to-120-billion-as-agentic-ai-rewrites-demand-ceo-says-epyc-verano-built-purely-for-ai/), [DCD](https://www.datacenterdynamics.com/en/news/amd-posts-q1-2026-data-center-revenue-of-58bn-forecasts-120bn-server-cpu-income-by-2030/)).
- **Arm CEO Rene Haas:** TAM **$60–70B (2026) → $100B by 2030**; some analysts model **$30B (2025) → $170B (2030)**.
- **The mechanism number:** demand quantified as **>4× current CPU capacity per gigawatt** as agentic AI scales ([Futurum](https://futurumgroup.com/insights/arms-15-billion-cpu-opportunity-hinges-on-agentic-data-center-design/)). This is the hard version of the "CPU:GPU ratio → 1:1–1:2" claim.
- Reference deep-dive: SemiAnalysis **"CPUs are Back: The Datacenter CPU Landscape in 2026"** ([link](https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu)).

## Arm is taking the socket
- **Arm ≈ 50% of CPU compute among top hyperscalers** (Amazon/Google/NVIDIA) — [24/7 Wall St](https://247wallst.com/investing/2026/05/08/arm-is-quietly-becoming-the-cpu-backbone-of-ai/).
- **Arm's own silicon ("AGI CPU"):** Arm moved from IP-licensing into selling chips; **AGI revenue forecast doubled to >$2B by FY2028**, modeled at **~$15B in 2031 (~15% of a $100B TAM)**; OpenAI + Cerebras among early buyers ([wccftech](https://wccftech.com/arm-doubles-agi-cpu-revenue-forecast-to-2-billion-by-2028-massive-agentic-ai-orders/), [Moor Insights](https://moorinsightsstrategy.com/research-notes/arm-enters-the-silicon-business-with-the-agi-cpu/)).
- **Hyperscaler custom Arm CPUs:**
  - **AWS Graviton** — *majority of new AWS compute added in 2025 ran on Graviton.*
  - **Google Axion** — up to **65% better price-performance, 60% better energy efficiency** vs x86.
  - **Microsoft Cobalt** — Cobalt 100 paired with **Maia** AI accelerators (Arm embedded in the AI stack from the outset).
  - **ByteDance** building its own Arm + RISC-V CPUs for AI infra.
- Shift expected to **accelerate from H2 2026**.

## x86 is ceding the AI-rack host socket (but not dying)
- **Intel** datacenter share modeled **52.0% → 43.9%** ([Benzinga](https://www.benzinga.com/markets/tech/26/04/51619236/every-major-hyperscaler-is-moving-o-arm-heres-why-it-matters)); Intel is the clear loser.
- **AMD** comparatively stable AND a beneficiary — $120B TAM call, EPYC Verano AI-tuned. The nuance: **AMD holds, Intel slips, Arm gains** — and because total CPU TAM is *expanding*, x86 units can still grow even while losing AI-rack share.
- **NVIDIA Vera** ("CPU for agents") takes the host socket inside its own racks (see [[CPU scaling (host-CPU ratio)]]).

## Why it matters
- Confirms [[CPU scaling (host-CPU ratio)]] is a **real, sized** bottleneck (>4× CPU/GW, TAM doubling) — not a one-line keynote aside.
- Routes the new CPU rent to **[[ARM Holdings]] + [[NVIDIA]] + [[TSMC]]**, away from merchant x86 ([[Intel]] most exposed, [[AMD]] mixed).

## Implications
- [[CPU scaling (host-CPU ratio)]] · [[ARM Holdings]] · [[Intel]] · [[AMD]] · [[NVIDIA]] · [[Bottleneck ranking (May 2026)]]
