---
title: "How Much Do GPU Clusters Really Cost?"
source: "https://newsletter.semianalysis.com/p/how-much-do-gpu-clusters-really-cost"
publisher: SemiAnalysis
accessed: 2026-05-25
retrieval: "WebFetch with prompt for verbatim TCO data. Article largely public; paywall at 'Inference Endpoint Margins Sensitivity'."
tags: [clippings, semianalysis, neoclouds, tco, unit-economics]
---

# GPU Cluster TCO Analysis - Key Data Points

## Central Thesis
Comparing GPU clusters solely on $/GPU-hour pricing is misleading. Total Cost of Ownership (TCO) varies significantly across providers due to factors like reliability, storage performance, networking setup, support quality, and downtime costs.

## TCO Formula - 8 Cost Categories
1. **GPU costs** ($/GPU-mo)
2. **Storage** ($/GiB-mo) - hot, warm, cold tiers
3. **Networking** ($/mo) - frontend/N-S and E-W
4. **Control Plane** ($/mo) - orchestration
5. **Support** (% uplift) - ranges 10% to 3%
6. **Goodput Expense** (% uplift) - downtime and failure costs
7. **Setup Expense** ($/mo) - amortized over contract term
8. **Debugging Expense** ($/mo) - ongoing engineering

## Pricing Data (August 2025 snapshot)
- Gold-tier neoclouds: 25th percentile of market pricing
- Hyperscalers: 50th-75th percentile
- Silver-tier neoclouds: 25th-50th percentile range; "aggressive discounts signal low quality"
- Large LLM pretraining scenario: "$4 per GPU-hr" held equal across providers
- Multimodal RL: "$2.40" (neoclouds) vs "$3.10" (hyperscaler) for B200

## Scenario 1: Large LLM Pretraining (5,184 GB300)
3-year TCO multipliers:
- Gold: 1.0x
- Hyperscaler: 1.10x
- Silver: 1.15x

Goodput expense:
- Gold: 6.14%
- Hyperscaler: 10.53% (5% memory overhead for checkpointless training)
- Silver: 20.91% (60% worse MTBF)

Storage: 500TB hot, 10PB cold; 2TB/GPU ratio
Engineering: 1-mo POC + ongoing debugging for hyperscaler; setup amortized

## Scenario 2: Multimodal RL (2,048 B200)
3-year TCO multipliers:
- Gold: 1.0x
- Hyperscaler: 1.61x
- Silver: 1.15x

Goodput impact: 0.23-0.96% (smaller jobs ~3% of cluster)
Storage: 12TB/GPU; 25PB hot
Hyperscaler premium driven by: GPU list price (50th vs 25th percentile), orchestration ~10%, storage, setup

## Scenario 3: Inference Endpoints (512 H200)
3-year TCO multipliers:
- Gold vs Silver: <1% difference at equal pricing
- Hyperscaler: 1.59x

Goodput impact: only ~0.5%; fault-tolerant load balancing makes reliability less critical
Workload-dependent; inference tolerates lower-tier providers

## Goodput - Three Fault-Tolerance Approaches

### G_chkpt-cold
Worst case: jobs wait for repair/replacement (hours to days)

### G_chkpt-hot
Medium: jobs restart on idle nodes; 2-6% spare pool

### G_tolerant
- **TorchFT** (Meta open-source): blast radius = FSDP replica group; ~10% perf overhead via GLOO
- **AWS HyperPod Checkpointless**: K8s/NeMo only; ~5% memory overhead; ~1m45s recovery
- **TorchPass** (Clockwork.io licensed): zero perf impact; relies on spare capacity

## Named Providers and Tiers
- **Gold**: Nebius, Fluidstack, Crusoe
- **Hyperscalers**: Oracle, Azure, AWS, GCP
- **Silver**: Together, Lambda, Vultr, Voltage Park, Cirrascale, Gcore, Firmus, GMO, Tensorwave
- **New (2.1 update)**: Core42, BitDeer, FPT Smart Cloud, Radiant/Ori

## Storage Specifics
- Gold-tier offers aggressive volume discounts; hyperscalers do not
- Hot-tier (NVMe/Lustre/Weka): $0.03-0.10/GB-mo
- AWS FSx for Lustre: 4x throughput = 3x cost

## Setup/Debugging
- EFA tuning on AWS: weeks to months
- Engineering rate: $200k USD/year
- Large pretraining: 1-mo POC + 1 wk/mo ongoing (hyperscaler)

## Support
- AWS tiers: 10% down to 3% of monthly bill
- Gold/silver typically included

## Fault Tolerance Metrics
- Gold/Hyperscaler MTBF: 25,000 GPU-hrs
- Silver MTBF: 15,000 GPU-hrs (60% worse)
- Gold/Hyperscaler detect+repair: 15 min + 15 min
- Silver detect+repair: 1 hr each
- Checkpoint frequency: 1-hr intervals typical
- Job init: 10-15 min

## Key Quote
"Cluster quality varies significantly...differences in reliability, networking behavior, storage performance, and support affect the only metric that matters: time-to-research-objective."

## Limitations Noted
- Pricing snapshot Aug 2025; market has increased since
- MTBF data from customer interviews + hands-on testing, not systematic
- Fault-tolerant training adoption low; framework tradeoffs evolving
- Performance benchmarking ongoing via NVIDIA DGXC certification
