---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[SanDisk Q3 FY26 earnings]]"]
layer: compute
severity: acute
mechanism: capacity
tags: [nand, flash, storage, ssd, kv-cache, inference, sandisk, micron, samsung, sk-hynix, kioxia]
---

# NAND flash supply

**Structural NAND flash shortage** driven by AI inference and training workloads. Distinct from the HBM/DRAM bottleneck — NAND is for **storage**, model checkpoints, training data caching, and KV cache offload. Per [[SanDisk Q3 FY26 earnings]], the shortage is expected to persist until 2028.

## Why NAND matters for AI infrastructure

1. **Training data storage** — frontier models train on hundreds of TB to PB of data; that data lives on NAND-based SSDs
2. **Model checkpoints** — frontier models are stored as multi-TB files; checkpointing during training writes terabytes per checkpoint
3. **KV cache offload** — long-context inference (1M+ tokens) generates KV caches too large for HBM; spilling to SSD is the workaround. [[Astera Labs]] Leo CXL controllers address some of this; SSD-tiered architectures address more.
4. **Inference serving** — model weights load from NAND-based storage at deployment time; high-throughput SSDs critical for cold-start scenarios

## Key data points (per [[SanDisk Q3 FY26 earnings]])

- **AI servers account for >45% of SanDisk shipments**
- **SanDisk DC revenue: +64% QoQ to $440M**
- **Shortage expected to persist until 2028**

## Supplier landscape

| NAND supplier | Position | In our wiki |
| --- | --- | --- |
| **[[Samsung Electronics]]** | **#1 NAND globally; ~30%+ share; NAND prices +55-60% QoQ Q1 2026** | Yes (Q1 2026) |
| **SK Hynix NAND** | Second; SK Hynix now HBM-dominant overall | See [[SK Hynix]] |
| **[[Kioxia]]** | **#3-4; ~15%; Japanese-listed; JV fabs with SanDisk** | Yes |
| **[[SanDisk]]** | Pure-play; post-spin US-listed; +1,350% in 12 months; JV with Kioxia | Yes |
| **[[Micron Technology]]** | Mixed DRAM/HBM/NAND — NAND is smaller segment | Yes |
| YMTC | Chinese; constrained by US export controls | Not yet ingested |

**Note:** Kioxia + SanDisk operate **joint NAND fabs in Yokkaichi, Japan** — consolidated production base; less independent capacity addition than headline supplier-count suggests. Kioxia Q1 FY26 → Q3 FY26 EPS surge ¥34 → ¥162 = independent primary confirmation of NAND inflection timing.

### NAND pricing primary (per [[Samsung Q1 2026 earnings]])

- **NAND flash contract prices: +55-60% QoQ in Q1 2026** (Samsung disclosure)
- DRAM contract prices for comparison: +90-95% QoQ
- Both validate severe memory shortage; NAND less severe than DRAM/HBM but still extreme

## Severity / persistence

- **Severity: acute** — extreme price increases through 2025-2026; spot NAND prices up materially
- **Expected duration: through 2028** — supply additions take multi-year capex cycles
- Distinct cyclical dynamics from HBM (NAND has longer prior down-cycle; coming off near-zero margins)

## Why distinct from [[HBM allocation]]

- **HBM:** integrated onto AI accelerator via CoWoS; memory bandwidth for active computation
- **NAND:** separate storage tier; bulk persistent storage; lower bandwidth, higher density, much cheaper per bit
- Both constrained by AI but in **different supply curves**

## Adjacent bottlenecks / second-order effects

- **DRAM cannibalization** by HBM (per [[HBM allocation]]) reduces DRAM supply, which puts more pressure on memory broadly
- NAND wafer fab + packaging draws on similar equipment ([[Lam Research]] etch + deposition)
- Long-context inference (1M+ context windows) increases NAND demand per query

## Beneficiaries

- [[SanDisk]] (SNDK) — purest play; +1,350% stock move post-spin
- [[Micron Technology]] (MU) — partial exposure; DRAM/HBM dominates
- Samsung Electronics (005930.KS) — largest NAND supplier; broad exposure
- SK Hynix (via NAND segment) — partial exposure
- Kioxia (recently IPO'd) — pure NAND; less covered

## What could change it

1. **Aggressive capex additions** — but multi-year lead times; supply additions slow
2. **Demand-side substitution** — better KV cache compression, smaller models, more aggressive HBM scaling could reduce NAND demand growth marginally but not change the trajectory
3. **YMTC ramp** under relaxed export controls — geopolitical wildcard
4. **Hyperscaler internal storage architectures** — could shift demand mix but not absolute volumes

## What to watch

- NAND spot prices monthly
- NAND supplier quarterly earnings (esp Samsung Memory disclosures)
- SanDisk + Micron quarterly capex guidance for NAND-dedicated capacity
- KV cache offload adoption (CXL, SSD-tiered architectures)
- Kioxia trajectory post-IPO
