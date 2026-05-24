---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]", "[[TSMC Q1 2026 earnings]]"]
ticker: TSM
layer: compute
role: foundry
tags: [tsmc, foundry, semiconductor, taiwan, cowos, leading-edge]
---

# TSMC

**Taiwan Semiconductor Manufacturing Company** — sole leading-edge logic foundry for the AI buildout. Produces virtually all frontier AI logic (NVIDIA, AMD, Broadcom, Apple). The single most concentrated supplier in the entire AI infrastructure stack.

## Q1 2026 financials (primary)

Per [[TSMC Q1 2026 earnings]]:

| Metric | Q1 2026 |
| --- | --- |
| **Revenue** | **$35.9B** (+6.4% sequential) |
| HPC revenue | +20% sequential; now **61% of total revenue** |
| **FY2026 guide** | **>30% YoY growth** (raised) |
| **FY2026 capex** | **$52–56B** (raised to high end) |

> CEO C.C. Wei: **"Our CoWoS capacity is very tight and remains sold out through 2025 and into 2026"**

- CoWoS **demand exceeds supply by 40–50%**
- CoWoS **lead times: 50+ weeks** (per Silicon Analysts foundry-allocation tracker)
- N3 fully booked; supply constraints expected to persist into 2027
- **AI wafer demand 11× growth 2022–2026** per TSMC own forecast

### Forward CoWoS roadmap

- **2028:** 14-reticle CoWoS supporting **20 HBM stacks**
- **2029:** Beyond-14-reticle CoWoS supporting **24 HBM stacks**

(Blackwell B200 today uses 8 stacks; this path implies 2.5–3× memory per accelerator.)

## Key capacity numbers (2024, per Epoch)

| Metric | Value | Notes |
| --- | --- | --- |
| 5nm + 3nm wafer capacity | **~2.2M wafers/year** | Early 2024 estimate |
| AI accelerator share of leading-edge | ~5% (2024) | 2M H100s ≈ 5% of 5nm capacity |
| [[CoWoS packaging capacity]] (Dec 2023) | 14–15K wafers/mo | |
| CoWoS capacity (end-2024 projected) | 33–35K wafers/mo | |
| CoWoS growth (announced) | **60% annually through 2026** | |
| Historical capex growth | ~15%/yr | 2014–2023 |
| Historical wafer capacity growth | ~8%/yr | 2014–2023 |
| AI server demand forecast (TSMC) | **50% annual growth** over 5 years | 1Q24 earnings transcript |

## Why TSMC is central

- **Leading-edge logic dominance** (no longer monopoly). **[[Samsung Electronics]] Foundry SF2 yields hit 55-60% early 2026** (per [[Samsung Q1 2026 earnings]]) — credible alternative; AI customer wins include NVIDIA Groq 3 LPU, Tesla $16.5B, Preferred Networks, Ambarella. **[[Intel]] Foundry becoming credible on 18A** but at 1/7 TSMC's quarterly revenue scale (Q1 2026 $5.4B vs TSMC $35.9B). TSMC still dominant at ~44% foundry market share in 2026; Apple, NVIDIA, AMD, Broadcom continue to depend on TSMC for top-of-line — but the three-foundry world is now emerging.
- **Advanced packaging chokepoint.** [[CoWoS packaging capacity]] is the single most-cited near-term bottleneck for AI chip output industry-wide.
- **Capacity allocation = market structure.** In 2023 **Apple absorbed ~90% of TSMC's 3nm capacity**, demonstrating that single customers can corner leading nodes — relevant precedent if NVIDIA chooses to outbid for capacity.

## Capacity expansion assets

- [[TSMC Advanced Backend Fab 6]] (Taiwan, opened 2023) — up to 83K wafers/mo full ramp, more-than-doubles CoWoS volume
- TSMC Arizona Fab 21 (US) — 4nm production ramping, 3nm planned; first US leading-edge fab
- TSMC Kumamoto (Japan), Dresden (Germany) — diversification + government subsidy capture
- Capex run-rate at multi-decade highs

## Why it matters for the bottleneck thesis

- **Tightest single-supplier chokepoint** in the entire AI infra stack. If TSMC's CoWoS expansion stumbles, AI chip output stalls regardless of upstream demand.
- **Geopolitical risk concentrated here.** Taiwan reunification scenarios are tail risks with catastrophic AI-buildout impact — drives the entire US/EU/Japan subsidy regime for fab diversification.
- **Pricing power.** TSMC has been raising prices ~5pp on operating margin annually; Epoch uses this to discount nominal capacity-growth numbers into real GPU volume.

## Open questions

- Does CoWoS sustain 60%/yr through 2026, or do equipment supply / labor / yield issues compress it?
- TSMC Arizona Fab 21 leading-edge volume by 2027 — material or symbolic?
- TSMC capex acceleration toward the 50% AI server demand growth implies wafer capacity growth up to 27%/yr — does the board approve?
- If Apple migrates to TSMC 2nm in 2026 absorbing leading capacity, what happens to NVIDIA's allocation?
