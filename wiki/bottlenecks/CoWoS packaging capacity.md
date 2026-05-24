---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]", "[[TSMC Q1 2026 earnings]]", "[[NVIDIA Q1 FY27 earnings (2026)]]"]
layer: compute
severity: acute
mechanism: capacity
tags: [cowos, tsmc, advanced-packaging, hbm, nvidia, semiconductor]
---

# CoWoS packaging capacity

**Chip-on-Wafer-on-Substrate** — TSMC's advanced packaging process that combines a logic die (GPU/accelerator) with stacks of [[HBM allocation|HBM]] memory into a complete AI chip. **The near-term binding constraint on frontier AI chip output**, more so than 3nm/2nm wafer capacity.

## Key numbers (2024 trajectory)

| Date | CoWoS wafers/month | Source |
| --- | --- | --- |
| Dec 2023 | 14,000–15,000 | [[Can AI scaling continue through 2030 (2024)]] |
| End-2024 (projected) | 33,000–35,000 | Same |
| Through 2026 | +60% annually | [[TSMC]] announcement |

[[TSMC Advanced Backend Fab 6]] (opened 2023) is the primary expansion vehicle — full capacity up to **83,000 wafers/month**, more than doubling TSMC's total advanced packaging volume when fully ramped.

Recent scale-ups have ranged from **30% to 100% annually**, depending on what's reported.

### Q1 2026 update (primary, direct from CEO)

Per [[TSMC Q1 2026 earnings]]:

> CEO C.C. Wei: **"Our CoWoS capacity is very tight and remains sold out through 2025 and into 2026"**

- **Demand exceeds supply by 40–50%**
- **Lead times: 50+ weeks**
- Supply constraints expected to persist **into 2027**
- TSMC FY2026 capex raised to **$52–56B** (high end of range) — primary funding for CoWoS expansion

### Demand-side mirror (NVIDIA Q1 FY27)

Per [[NVIDIA Q1 FY27 earnings (2026)]], NVIDIA's **$145B total supply commitments** (inventory + prepaids) represent the locked-up forward capacity. This is the demand-side anchor for why CoWoS is sold out — NVIDIA alone is consuming the supply curve multi-year forward.

### Forward CoWoS roadmap

- **2028:** 14-reticle CoWoS supporting 20 HBM stacks per chip
- **2029:** Beyond-14-reticle CoWoS supporting 24 HBM stacks
- Current Blackwell B200 uses 8 HBM stacks → 2.5–3× memory expansion in pipeline

## Why it's acute

1. **Packaging is hard to scale fast.** Requires complex specialized equipment from many vendors and trained personnel. Lead times for new facilities are measured in years.
2. **TSMC is essentially the sole supplier** for advanced AI chip packaging at the frontier. [[Samsung]] and [[Intel]] foundries do packaging but not at TSMC's scale or yield for AI chips.
3. **Demand vastly exceeds supply.** Multiple major customers ([[NVIDIA]], [[AMD]], [[Broadcom]], [[Marvell]]) compete for the same line, with NVIDIA absorbing the largest share.
4. **Each frontier GPU consumes multiple CoWoS units** (H100/H200/B100/B200 series), and HBM stack count per accelerator is rising.

## Linkage to other constraints

- Tied to [[HBM allocation]] — CoWoS *integrates* HBM stacks; both must scale in lockstep.
- Decoupled from wafer-fab capacity — TSMC 5nm/3nm wafer output is NOT the choke (2M H100s in 2024 ≈ 5% of 5nm capacity per [[Can AI scaling continue through 2030 (2024)]]).
- Direct input to [[Compute & silicon]] layer overall ceiling.

## Open questions / what to watch

- Does TSMC sustain the 60%/yr CoWoS growth through 2026, or do execution issues compress it?
- When does **Samsung Foundry** or **Intel Foundry** become a credible second source for advanced packaging at frontier nodes?
- Does NVIDIA outbid Apple for TSMC's leading-node capacity (precedent: Apple absorbed 90% of TSMC 3nm in 2023)? Would free more wafers for AI but doesn't help CoWoS directly.
- How much CoWoS capacity does the next packaging generation (SoIC, system-on-wafer) require, and when?

## Beneficiaries

- [[TSMC]] — captures the rent on CoWoS scarcity
- Equipment suppliers (ASMPT, Disco, BESI) on advanced packaging tooling
- Customers who lock in long-term reservations (NVIDIA via prepayment is the canonical example)
