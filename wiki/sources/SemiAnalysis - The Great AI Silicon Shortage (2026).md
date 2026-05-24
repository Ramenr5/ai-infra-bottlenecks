---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, n3, n2, foundry, cowos, hbm, silicon-shortage]
---

# SemiAnalysis — The Great AI Silicon Shortage (March 2026)

**Publisher:** [[SemiAnalysis]]
**Published:** 2026-03-12
**URL:** [newsletter.semianalysis.com/p/the-great-ai-silicon-shortage](https://newsletter.semianalysis.com/p/the-great-ai-silicon-shortage)

> [!success] Primary source — N3 utilization >100% H2 2026
> Quantifies how AI is consuming TSMC leading-edge capacity. AI = 60% of N3 output in 2026, projected to 86% in 2027. **Effective N3 utilization expected to exceed 100% in H2 2026.**

## TSMC N3/N2 utilization (the headline)

| Year | AI share of N3 output | Other |
| --- | --- | --- |
| **2026** | **~60%** | smartphones + CPUs |
| **2027** | **86%** | |
| **H2 2026** | **>100% "effective" utilization** | demand exceeds supply |

## AI accelerator family node assignments

| Accelerator | Node |
| --- | --- |
| NVIDIA Blackwell | 4NP |
| NVIDIA Rubin | **3NP** |
| AMD MI350X | N3 |
| AMD MI400 (AID/MID tiles) | N3 (XCD on N2) |
| Google TPUv7+ | N3E |
| AWS Trainium3 | N3P |
| Meta MTIA | N3 |

## Smartphone reallocation scenarios

If smartphone makers gave up N3 capacity to AI:
- **5% reallocation:** ~0.1M additional Rubin GPUs OR ~0.3M TPUv7s
- **25% reallocation:** ~0.7M additional Rubin GPUs OR ~1.5M TPUv7s

## HBM wafer intensity

- **HBM uses ~3× more wafer capacity than commodity DRAM**
- Could widen to **~4×** with HBM4/HBM4E transitions
- **NVIDIA Rubin: +50% HBM capacity vs Blackwell**
- **NVIDIA Rubin Ultra: ~4× HBM capacity increase**

## CoWoS status update

- Constraints **"easing"** — described as "tight but improving"
- Alternatives gaining traction: **ASE/SPIL, Amkor** outsourcing
- **Intel EMIB adoption increasing** as CoWoS substitute

## Why it matters for the wiki

1. **N3 utilization >100%** is the cleanest single signal that compute supply is binding at the foundry node level — even with TSMC's 60%/yr CoWoS expansion plans
2. **HBM 3-4× DRAM wafer intensity** quantifies why HBM4E is much harder to scale than HBM3E
3. **Rubin Ultra 4× HBM increase** = direct read on memory demand inflection 2027
4. **CoWoS "easing"** + Intel EMIB adoption = first signs of supply catching demand at packaging layer (counter to TSMC Q1 2026 "sold out into 2026" framing)

## Implications

- Update [[HBM allocation]] with N3 utilization + HBM wafer intensity
- Update [[CoWoS packaging capacity]] with "easing" signal (counter-narrative)
- Update [[TSMC]] with N3 60→86% AI share
- Update [[Compute & silicon]] with accelerator node map

## Cross-reference

- [[TSMC Q1 2026 earnings]]: "CoWoS sold out into 2026" — slight tension with "easing" framing here
- [[Samsung Q1 2026 earnings]]: Samsung Foundry SF2 55-60% yield = capacity-add alternative to TSMC
- [[Intel Q1 2026 earnings]]: Intel Foundry $5.4B; EMIB packaging as CoWoS alternative
