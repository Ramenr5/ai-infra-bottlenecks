---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Situational Awareness, Two Years Later (2026)]]"]
layer: compute
role: ai-lab
tags: [china, ai-lab, open-source, efficiency, disruption]
---

# DeepSeek

Chinese AI lab whose January 2025 release of **V3** and **R1** delivered GPT-4-tier performance at a small fraction of the training cost, fundamentally repricing the AI infrastructure curve. The "DeepSeek Shock" is now used industry-wide to describe the disruption.

## Key facts

| Metric | DeepSeek V3/R1 | Meta Llama 3.1 (comparable) |
| --- | --- | --- |
| Training cost (estimated) | **~$5.6M** | far higher |
| GPUs used | 2,048 H800 | 16,000+ H100 |
| GPU-hours | 2.79M | 30.84M |
| Cost vs GPT-4o (McKinsey) | **~18× lower training**, **~36× lower inference** | baseline |

All figures from [[Situational Awareness, Two Years Later (2026)]] Section III. Verify against DeepSeek's own technical reports before using as load-bearing.

## Architectural innovations

- **MoE (Mixture of Experts)** — activates only a subset of parameters per token, lowering inference cost.
- **Multi-Head Latent Attention (MLA)** — reduces KV-cache by ~93%, slashing memory bandwidth requirements.
- **FP8 mixed-precision training** — half the memory of FP16, with stable convergence in DeepSeek's regime.
- **RLVR (Reinforcement Learning with Verifiable Rewards)** — used for R1's reasoning capabilities.

The recurring pattern: **algorithmic innovation under hardware constraint**. US chip export controls forced creative architectural choices that proved superior even absent the constraint.

## Why it matters for the bottleneck thesis

- **Jevons paradox in action:** 18×/36× cost reductions did NOT reduce AI capex — global spend accelerated. Cheaper inference expanded the addressable market faster than per-unit costs fell. Argues *against* the bottleneck-skeptic thesis that "efficiency gains will reduce capacity demand".
- **Disruption of compute demand mix:** shifted spend from training-heavy → inference-heavy. Inference-time scaling (o1, R1, Sonnet thinking, Gemini 2.5 Pro thinking) opened a brand-new compute axis Aschenbrenner did not forecast.
- **Open-weights diffusion:** DeepSeek, Qwen, Mistral are now embedded in US enterprise stacks. Open-source as strategic vector for China's AI position; reframes "who benefits from infrastructure" beyond US hyperscalers.
- **Compute-supply implication:** even with efficiency gains, China remains compute-constrained — supply-side rationing of advanced [[HBM]] and [[CoWoS packaging capacity]] limits how much DeepSeek-class work can scale.

## Open questions

- What is DeepSeek's actual access to advanced compute post-2025 export controls?
- Does the architectural lead persist (i.e., do they keep innovating ahead of frontier US labs) or compress as US labs adopt the same techniques?
- Commercial model: who is paying DeepSeek for what, and how does that interact with CCP funding?
