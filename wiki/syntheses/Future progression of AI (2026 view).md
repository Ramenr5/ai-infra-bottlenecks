---
type: synthesis
created: 2026-06-01
updated: 2026-06-01
sources: ["[[NVIDIA Computex 2026 Keynote]]", "[[Disaggregated inference (Rubin CPX)]]", "[[AI value capture across the stack]]", "[[Capex trajectory thesis]]", "[[SemiAnalysis - Claude Code Is The Inflection Point]]", "[[SemiAnalysis - AI Value Capture (2026)]]", "[[Menlo - State of Enterprise AI (2025)]]", "[[P3 Institute - Open Source to Open Weights (2026)]]", "[[Capex bust scenario]]"]
tags: [synthesis, forward-thesis, scaling, inference, agentic, physical-ai, roadmap, regime]
---

# Future progression of AI (2026 view)

The opinionated forward map: **where AI compute goes from here, what bends the curve, and where the money lands** — anchored on the [[NVIDIA Computex 2026 Keynote]] and stress-tested against the wiki's bear pages. This is the *time-axis* companion to [[AI value capture across the stack]] (the *layer-axis* map).

## The one-line view (as of 2026-06-01)

**The bottleneck of AI is migrating from "can the model do it?" to "can we afford to run it, and can we build the power/memory/silicon to serve it?"** Capability is now *deployment-gated, not research-gated*. The next 3 years are an **industrialization phase** — the science of 2020-2025 turning into an industrial supply chain — and the binding constraints are physical (power, HBM, packaging, increasingly CPUs) and economic (cost-per-token), not algorithmic. **Compute has become the production function of the economy** ([[NVIDIA Computex 2026 Keynote]]); that is the regime to invest into until a falsifier below fires.

## The four phases (where we are on the S-curve)

| Phase | Era | Binding question | Status |
| --- | --- | --- | --- |
| 1. **Scaling** | 2020-2023 | Does more compute → more capability? | ✅ answered yes (pretraining scaling laws) |
| 2. **Reasoning / test-time** | 2024-2025 | Can we buy capability with *inference* compute? | ✅ answered yes — reasoning models, RL, test-time compute |
| 3. **Agentic / industrialization** | **2026-2028 (now)** | Can we run agents *continuously, cheaply, at scale*? | 🔄 **in progress — the current battle** |
| 4. **Physical AI** | 2027-2030+ | Can intelligence move into robots/vehicles/factories? | 🌱 early; next demand driver |

**My read:** we are decisively in **Phase 3**. The Phase-1 "is bigger better" debate is settled; the live debate is **unit economics of always-on agents**. Phase 4 (physical AI) is the option value — real but further out, and the thing that turns a "data-center demand story" into a "GDP story."

## What bends the curve — the forces

1. **Inference cost is collapsing by design.** Rubin = up to **10× lower cost per token / ~1/7 for MoE at same latency** vs Blackwell ([[NVIDIA Computex 2026 Keynote]]); **[[Disaggregated inference (Rubin CPX)]]** (prefill GDDR7 / decode HBM, + Attention-FFN Disaggregation) makes long-context agents affordable. **This is Jevons fuel** — each cost-down *expands* total compute demand, it doesn't shrink it. The cheaper inference gets, the more agents run.
2. **Demand is an order book, not a forecast.** **$1T high-confidence demand + purchase orders through 2027** ([[NVIDIA Computex 2026 Keynote]]) — the strongest demand-lock in the wiki ([[Capex trajectory thesis]]). Compute is "revenue" / "GDP": **Revenue = (tokens/watt) × (gigawatts)**.
3. **Agents are the new compute consumer.** Software is shifting from humans-at-keyboards to **always-on agents** (GitHub commits ~tripling in 2026; Claude Code 4%→20% of commits, [[SemiAnalysis - Claude Code Is The Inflection Point]]). Agents consume tokens continuously → demand scales with *deployment count*, not headcount.
4. **The bottleneck stack is broadening.** Power → HBM → CoWoS were the 2025 constraints. 2026 adds **CPU scaling** (GPUs outscale CPUs → CPU clusters become the limiter, [[NVIDIA Computex 2026 Keynote]] / SemiAnalysis) and keeps **memory** acute (288GB→1TB HBM/GPU). See [[Bottleneck ranking (May 2026)]].
5. **Physical AI opens a second demand front.** Jetson Thor, Isaac GROOT humanoid, Cosmos 3 world model, Alpamayo reasoning-AV ([[NVIDIA Computex 2026 Keynote]]) — robotics/AV extend compute demand *beyond* the data center, with simulation/synthetic-data/world-models as a new compute sink. See [[Physical AI & robotics]] (Jensen's $40T TAM; NVDA physical-AI rev >$9B TTM).

## Where the money lands (forward) — see [[AI value capture across the stack]]

- **Durable tolls (highest conviction):** memory/HBM, [[NVIDIA]] allocation, [[TSMC]]/[[CoWoS packaging capacity]], [[ASML]], EDA — concentrated + capacity-constrained + indispensable regardless of who wins the model war.
- **The widening front:** physical-AI silicon (Jetson/Thor), edge/client ([[MediaTek]] N1X), interconnect ([[Broadcom]], CPO names) as networking becomes a first-class layer ("NVIDIA = largest networking company").
- **Stock-picker's layer:** application/agentic SaaS ([[CrowdStrike]], [[ServiceNow]]) — Rubin CPX *grows their pie* (cheaper agents → bigger surface) but the layer is fragmented + contested. See the [CRWD+NOW narrative](../../narratives/2026-06-01 CRWD %2B NOW.md).

## The crux — what decides Phase 4 vs. a stall

The whole forward thesis pivots on **one question: does cheaper-per-token inference create enough *new* valuable work to absorb the compute the order book is building?**

- **Bull (Jevons holds):** every cost-down unlocks new always-on agentic + physical-AI workloads faster than efficiency frees capacity → demand compounds → the $1T order book is a floor, not a ceiling.
- **Bear (demand is pulled-forward):** the order book is *cancellable POs* on a single-vendor, increasingly levered base; if agent ROI disappoints or financing tightens, 2028+ is an air-pocket. This is the live risk — see [[Capex bust scenario]].

**My read:** Jevons is winning *today* (inference demand is the thing that's parabolic, not training), so the bull case holds **through 2027** with high confidence. **2028+ is genuinely open** and hinges on agent unit economics proving out in enterprise P&Ls — not on model capability, which I expect to keep improving.

## The swing factor — open weights

See [[Open-weight commoditization (the swing factor)]] (the dedicated page): open-weight is now **~5% off the closed frontier** on code/reasoning ([[Open-weight frontier parity (H1 2026)]]). If parity holds and generalizes, the **model layer commoditizes** → value migrates *down* to infrastructure (the tolls) and *out* to applications + whoever owns cheap compute. This **doesn't slow the buildout — it changes who captures the rent** (away from closed labs, toward infra + cheap-inference operators). A reason the *infrastructure* tolls are the more durable bet than any single lab.

## Leading indicators (what I'm watching)

| Indicator | Bull signal | Bear signal |
| --- | --- | --- |
| **Inference $/token** | keeps falling, volume rises faster (Jevons) | falls but volume flat (demand saturating) |
| **Agent ROI in enterprise P&Ls** | metered agent revenue compounds (NOW Now Assist, CRWD agentic ARR) | seat-erosion without offsetting agent rev → multiple reset |
| **PO → revenue conversion** | $1T order book converts on schedule | cancellations / push-outs appear |
| **CPU-cluster / power as new limiter** | resolved (Vera ETL256, 800VDC) | becomes the binding constraint, caps deployment |
| **Physical-AI traction** | humanoid/AV pilots scale to fleets | stays demo-ware |
| **Open-weight parity** | commoditizes labs → infra tolls win | closed labs hold the rent (different winners, same buildout) |

## Tradable read

- **Core (own the toll on the whole curve):** [[NVIDIA]], [[TSMC]], HBM ([[SK Hynix]]/[[Samsung Electronics]]/[[Micron Technology]]), [[ASML]], EDA, [[CoWoS packaging capacity]] exposure — these get paid in *every* phase and under *either* the closed- or open-weight outcome.
- **Phase-3 leverage (agentic):** application stock-pickers ([[CrowdStrike]] > [[ServiceNow]] on contestation risk) + power/cooling buildout ([[800VDC transition]], [[Datacenter cooling]]).
- **Phase-4 option value (physical AI):** robotics/edge silicon, [[MediaTek]], interconnect/CPO — smaller now, the asymmetric upside if Phase 4 arrives on schedule.
- **The hedge:** the bull is a *2026-2027* high-confidence call; size 2028+ to survive [[Capex bust scenario]]. Own the tolls, rent the cycle.

## Confidence + aging

| Claim | Confidence | Half-life |
| --- | --- | --- |
| We're in the agentic/industrialization phase; capability is deployment-gated | **High** | ~12 mo |
| Jevons holds → demand compounds through 2027 | **High** | ~9 mo |
| 2028+ depends on agent unit economics (open question) | Moderate (deliberately) | ~6 mo |
| Physical AI is the next demand front (timing uncertain) | Low-moderate | ~12 mo |
| Infra tolls capture rent under either model-layer outcome | **High** | ~12 mo |

**Re-evaluate on:** any sustained fall in inference *volume* growth (Jevons breaking); a wave of PO cancellations (order-book softening); open-weight frontier parity (rent migration); a humanoid/AV deployment inflection (Phase 4 pulling forward). Maintained alongside [[AI investment momentum tracker]].

## Related
- [[AI value capture across the stack]] (layer-axis companion) · [[Disaggregated inference (Rubin CPX)]] · [[Capex trajectory thesis]] · [[Capex bust scenario]] · [[Bottleneck ranking (May 2026)]] · [[AI infrastructure investment map (May 2026)]] · [[NVIDIA Computex 2026 Keynote]] (anchor)
