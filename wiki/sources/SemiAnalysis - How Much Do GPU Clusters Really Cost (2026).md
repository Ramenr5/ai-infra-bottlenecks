---
type: source
created: 2026-05-25
updated: 2026-05-25
tags: [primary-source, semianalysis, neoclouds, hyperscalers, tco, unit-economics]
---

# SemiAnalysis — How Much Do GPU Clusters Really Cost?

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/how-much-do-gpu-clusters-really-cost](https://newsletter.semianalysis.com/p/how-much-do-gpu-clusters-really-cost)

## Headline framing

**Comparing GPU clusters on $/GPU-hour alone is misleading.** True TCO differs meaningfully across providers because of reliability, storage performance, networking setup, support quality, and downtime cost. The article builds a framework (eight cost categories) and runs three workload scenarios to show where premiums are justified vs. where lower tiers tie at workload TCO.

## TCO formula — 8 cost categories

1. GPU costs ($/GPU-mo)
2. Storage ($/GiB-mo) — hot/warm/cold tiers
3. Networking ($/mo) — frontend/N-S + E-W
4. Control plane ($/mo)
5. **Support** — 3–10% uplift depending on tier
6. **Goodput expense** — % uplift from downtime/failures
7. Setup expense ($/mo, amortized)
8. Debugging expense ($/mo, ongoing engineering)

## Provider tiering

| Tier | Named providers | Pricing percentile |
| --- | --- | --- |
| **Gold** | **Nebius, Fluidstack, [[Crusoe Energy\|Crusoe]]** | 25th |
| **Hyperscaler** | Oracle, Azure, AWS, GCP | 50–75th |
| **Silver** | Together, Lambda, Vultr, Voltage Park, Cirrascale, Gcore, Firmus, GMO, Tensorwave | 25–50th ("aggressive discounts signal low quality") |
| **New (tested in 2.1)** | Core42, BitDeer, FPT Smart Cloud, Radiant/Ori | — |

## Three-scenario TCO comparison (3-year term, multiplier vs gold baseline)

| Workload | Gold | Hyperscaler | Silver |
| --- | --- | --- | --- |
| **Large LLM pretraining (5,184 GB300)** | 1.00× | **1.10×** | **1.15×** |
| **Multimodal RL (2,048 B200)** | 1.00× | **1.61×** | 1.15× |
| **Inference endpoints (512 H200)** | 1.00× | **1.59×** | <1.00× difference at equal price |

## Goodput expense as % of TCO (pretraining scenario)

| Tier | Goodput cost | MTBF assumed | Detect + repair |
| --- | --- | --- | --- |
| Gold / Hyperscaler | 6.14% / 10.53% | 25,000 GPU-hrs | 15 min + 15 min |
| **Silver** | **20.91%** | 15,000 GPU-hrs (-60%) | 1 hr + 1 hr |

Hyperscaler's 10.53% goodput hit reflects 5% memory overhead from checkpointless training (HyperPod).

## Fault-tolerance strategies modeled

- **G_chkpt-cold** — wait for repair/replacement (hours to days)
- **G_chkpt-hot** — restart on idle nodes; top providers hold 2-6% spare pool
- **G_tolerant** — three named frameworks:
  - **TorchFT** (Meta open-source) — blast radius = FSDP replica group; ~10% perf overhead
  - **AWS HyperPod Checkpointless** — K8s/NeMo only; ~5% memory overhead; ~1m45s recovery
  - **TorchPass** (Clockwork.io commercial) — zero perf impact; relies on spare capacity

## Storage assumptions

- Pretraining: 2TB/GPU ratio; 500TB hot + 10PB cold
- Multimodal RL: 12TB/GPU; 25PB hot
- Hot tier (NVMe/Lustre/Weka): $0.03–0.10/GB-mo
- AWS FSx for Lustre: **4× throughput tier = 3× cost** — hyperscaler storage doesn't have aggressive volume discounts that gold-tiers offer

## Engineering overhead assumed

- **$200k/yr** engineer rate
- AWS EFA tuning: weeks to months
- Hyperscaler pretraining: 1-mo POC + 1 wk/mo ongoing debugging

## Cross-reference

- [[Oracle]] — hyperscaler category; per [[SemiAnalysis - Oracle Winning AI Compute (2025)]] competes by pricing more aggressively than peers
- [[Crusoe Energy]] — named gold-tier; consistent with prior pages on onsite-gas + power cost advantage
- [[Amazon]] / [[Microsoft]] / [[Alphabet]] — hyperscaler tier, premium 10-61% on workload TCO
- [[AI debt financing capacity]] — neocloud project finance economics depend on these TCO numbers holding
- [[NVIDIA]] — GB300/B200/H200 the silicon mix benchmarked

## Implications — pages flagged for human review

- [[AI debt financing capacity]] — the hyperscaler 10-61% premium vs gold-tier neoclouds is the *demand-side* answer to why neoclouds can clear project debt: enterprises pay hyperscaler premiums for support/reliability; neoclouds capture the gap
- [[Capex trajectory thesis]] — the article's quantification of goodput expense (20.91% silver-tier on pretraining) is the cleanest public estimate of the *reliability premium* embedded in capex decisions
- [[Hyperscaler capex sustainability]] — the 1.61× multimodal RL TCO premium is the most concrete reason hyperscalers are losing AI workload share to neoclouds despite hardware parity

## Paywall

Public: full framework, three scenarios, tier comparison. Paywall starts at "Inference Endpoint Margins Sensitivity" section.
