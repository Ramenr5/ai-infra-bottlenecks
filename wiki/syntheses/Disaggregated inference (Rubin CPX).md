---
type: synthesis
created: 2026-06-01
updated: 2026-06-01
sources: ["[[NVIDIA Computex 2026 Keynote]]", "[[SemiAnalysis - AI Value Capture (2026)]]", "[[SemiAnalysis - The Coding Assistant Breakdown (2026)]]", "[[Cerebras — Faster Tokens Please (2026)]]"]
tags: [synthesis, inference, rubin-cpx, disaggregation, gddr7, jevons, value-capture]
---

# Disaggregated inference (Rubin CPX)

## The view (as of 2026-06-01)

**Inference is splitting into two physically different jobs, and NVIDIA just built a separate chip for each — which structurally cheapens long-context inference and therefore expands inference demand (Jevons), pushing value toward the application layer and toward memory.** At Computex 2026, NVIDIA introduced **Rubin CPX**: a GPU class for the **compute-heavy "context/prefill" phase** of massive-context (1M+ token) inference, using **cheaper, cooler GDDR7** instead of HBM ([[NVIDIA Computex 2026 Keynote]]). Pairing CPX (prefill) with HBM-rich Rubin (decode/generation) is **disaggregated inference** — and it changes the economics of the fastest-growing workload in AI.

## Why this matters (the mechanism)

Modern inference has two phases with opposite hardware needs:

| Phase | Bottleneck | Best silicon |
| --- | --- | --- |
| **Prefill / context** (read the prompt, build KV cache) | **compute-bound** (FLOPS) | dense FP4 compute, **doesn't need HBM** → GDDR7 ([[NVIDIA Computex 2026 Keynote\|Rubin CPX]]) |
| **Decode / generation** (emit tokens) | **memory-bandwidth-bound** | HBM-rich GPU (Rubin/Rubin Ultra) |

Running both on the same HBM GPU wastes expensive HBM bandwidth during prefill. **Splitting them lets the cheap chip do the cheap work** → lower $/token on long-context, agentic, and reasoning workloads — exactly the workloads with **80:1–100:1 input:output ratios** ([[SemiAnalysis - The Coding Assistant Breakdown (2026)]]) that dominate agentic AI.

## Connection chain (what it reads through to)

- **Jevons → more demand, not less.** Cheaper long-context inference → more usage → MORE total compute. Reinforces the demand pillar of [[Capex trajectory thesis]] and the [[NVIDIA Computex 2026 Keynote|$1T purchase orders]]. Cheapening a unit has never reduced aggregate AI spend ([[DeepSeek]]).
- **Value-capture tilt.** Cheaper inference compresses the *inference-provider* margin but **expands the application layer** (more affordable agents) → tailwind for [[CrowdStrike]] / [[ServiceNow]] and the [narrative: CRWD + NOW](../../narratives/2026-06-01 CRWD %2B NOW.md); partially offsets the "[[SemiAnalysis - AI Value Capture (2026)|labs capture all value]]" frame by growing the pie below the labs.
- **Memory bifurcation.** Demand splits across **HBM** (decode — [[HBM allocation]], [[SK Hynix]]/[[Samsung Electronics]]/[[Micron Technology]]) **and GDDR7** (prefill) → broadens the memory bottleneck beyond HBM; GDDR7 suppliers gain a new AI vector. [[SemiAnalysis - The Memory Wall (DRAM)]].
- **Competitive read.** The "fast-token / SRAM-machine" inference thesis ([[Cerebras Systems]], [[Groq]]) now contends with NVIDIA's own disaggregation answer — NVIDIA is attacking the interactivity/cost axis it was vulnerable on.

## What would have to be true / what to watch

- Disaggregated serving frameworks (prefill/decode split) reach production at scale (vLLM/SGLang/TRT-LLM support) — early but moving.
- $/token for 1M-token context drops materially → shows up in [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)|rental/inference pricing]].
- GDDR7 supply scales without becoming its own bottleneck.

## Confidence + honesty

- **The architecture is sourced** (Rubin CPX announced, GDDR7, 1M+ context). **The "expands the pie → app layer wins" read-through is partly inferred** (Jevons applied forward) — high-conviction directionally, but it's a mechanism-level claim, not a measured outcome yet.
- Bear: if long-context demand is smaller than assumed, CPX is a niche; if disaggregation stays hard to operate, the theoretical $/token win doesn't materialize.

## Related
- Anchor: [[NVIDIA Computex 2026 Keynote]] · [[Compute & silicon]] · [[HBM allocation]] · [[Capex trajectory thesis]] · [[AI investment momentum tracker]] · [[AI value capture across the stack]] (this is the mechanism that tilts value to the app layer) · [narrative: CRWD + NOW](../../narratives/2026-06-01 CRWD %2B NOW.md)
