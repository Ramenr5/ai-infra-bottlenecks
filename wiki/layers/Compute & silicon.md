---
type: layer
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Situational Awareness, Two Years Later (2026)]]", "[[Can AI scaling continue through 2030 (2024)]]", "[[Cerebras — Faster Tokens Please (2026)]]", "[[ASML Q1 2026 earnings]]", "[[Applied Materials Q1 FY26 earnings]]", "[[NVIDIA Blackwell at Hot Chips 2025]]"]
tags: [compute, silicon, semiconductors, bottleneck-layer]
---

# Compute & silicon

The compute layer of the AI buildout: GPUs, AI accelerators, memory, advanced packaging, foundries, and the lithography that feeds them. Multiple stacked bottlenecks — capacity at each node compounds. The chokepoints rotate quickly (CoWoS yesterday, HBM today, EUV throughput tomorrow), but the macro pattern is durable: TSMC and a small set of suppliers gate the rest of the industry.

## Sub-domains

- **Frontier accelerators** — [[NVIDIA]] data-center GPUs, [[AMD]] Instinct, [[Google TPU]], [[AWS Trainium]], [[Microsoft Maia]], [[Meta MTIA]], [[Cerebras]], [[Groq]], [[Tenstorrent]]
- **Memory** — [[HBM]] (high-bandwidth memory) from [[SK Hynix]], [[Samsung]], [[Micron]]
- **Advanced packaging** — [[CoWoS]] (TSMC), [[SoIC]], [[InFO]]; key chokepoint linking logic and HBM
- **Foundries** — [[TSMC]] (Taiwan + Arizona), [[Samsung Foundry]], [[Intel Foundry]]; nodes 5nm → 3nm → 2nm
- **Lithography** — [[ASML]] EUV and high-NA EUV; sole supplier
- **Substrates & materials** — ABF substrates, photoresists, silicon wafers

## Bottlenecks (to be populated as sources land)

- [[CoWoS packaging capacity]] — TSMC's advanced packaging gates frontier-chip output
- [[HBM allocation]] — Hynix/Samsung capacity sold out years in advance
- [[EUV throughput]] — ASML lithography tool throughput at advanced nodes
- [[Foundry capacity at 3nm and 2nm]] — node ramp pace
- [[Networking silicon]] — Broadcom/Marvell switch ASIC supply

## Where the money flows

- [[CHIPS Act]] and equivalents (EU, Japan, Korea) — $50B+ of US subsidy + matching capex
- TSMC Arizona ~$65B+, Samsung Texas ~$45B+, Intel Ohio ~$28B+ (announced; subject to revision)
- NVIDIA's prepayments to TSMC for capacity reservation
- Sovereign AI: [[Humain (Saudi PIF)]], [[G42]] (UAE), [[Stargate]] (US/Japan)

## Key companies (expected pages)

- Logic: [[NVIDIA]], [[AMD]], [[Intel]], [[Broadcom]], [[Marvell]]
- Foundries: [[TSMC]], [[Samsung Foundry]], [[Intel Foundry]]
- Memory: [[SK Hynix]], [[Samsung]] (memory), [[Micron]]
- Litho/equipment: [[ASML]], [[Applied Materials]], [[Lam Research]], [[KLA]], [[Tokyo Electron]]
- Custom silicon designers: [[Marvell]], [[Broadcom]] (for hyperscaler ASICs)

## Key geographies & assets

- [[Taiwan]] (Hsinchu cluster), [[South Korea]], [[Arizona]] (TSMC + Intel), [[Ohio]] (Intel), [[Texas]] (Samsung)
- Assets: [[TSMC Fab 18]] (N3/N2 in Tainan), [[TSMC Arizona Fab 21]], [[Samsung Taylor]]

## Quantified supply trajectory (Epoch 2024)

| Metric | 2023 | 2024 (est.) | 2030 projection |
| --- | --- | --- | --- |
| [[NVIDIA]] datacenter GPU shipments | 3.76M | ~5–6M | — |
| H100 units to major tech | 650K (cumul.) | 1.5–2M shipped | — |
| Aggregate H100-equivalents needed for 2e29 FLOP run | — | — | ~20M direct (~**100M total**, 80% CI 20M–400M) |
| [[TSMC]] CoWoS wafers/month | 14–15K | 33–35K | 60%/yr growth through 2026 |
| TSMC 5nm/3nm wafer capacity | ~2.2M/yr | — | grows ~5–20%/yr |

**Wafers are NOT the binding constraint** (2M H100s ≈ 5% of 5nm capacity). The binding constraints are [[CoWoS packaging capacity]] and [[HBM allocation]] — both at TSMC + SK Hynix and both essentially sold out through 2026.

## The two stacked chokepoints

1. [[CoWoS packaging capacity]] (TSMC) — fastest-scaling but capacity-rationed; [[TSMC Advanced Backend Fab 6]] is the main near-term lever
2. [[HBM allocation]] (SK Hynix dominant) — sold out through 2026; capacity reallocated from DRAM with second-order effects

Both must scale in lockstep — neither can grow ahead of the other meaningfully.

## Upstream of the silicon: Semiconductor Equipment (WFE + lithography)

The fab capacity that produces every chip in this layer is enabled by a small set of equipment vendors. WFE order books are leading indicators of foundry capex deployment 6-12 months out.

| Vendor | Function | Q1 2026 signal |
| --- | --- | --- |
| **[[ASML]]** (ASML) | **EUV lithography monopoly** | €8.8B Q1 sales, €38.8B backlog, 2 High-NA shipped |
| **[[Applied Materials]]** (AMAT) | Deposition, etch, CMP, inspection | $7.01B Q1 revenue; **record DRAM segment 34%**; CEO: "$1T industry 2026" |
| **[[Lam Research]]** (LRCX) | Deposition, etch (memory-heavy) | $5.84B Q3 revenue; **memory 39% / DRAM 27% record**; WFE forecast raised to $140B |
| **[[KLA Corporation]]** (KLAC) | Metrology / inspection (~58% share) | $3.415B Q3 revenue; **$1B advanced packaging FY26** (up from $635M in 2025); +14pp share gain in adv packaging |
| **[[Tokyo Electron]]** (8035.T) | Deposition, etch, coater, **wafer probers (38% dominant)** | **FY26 2.44T yen RECORD**; +20% WFE forecast both 2026 + 2027; +25%+ etch growth |

[[Lithography monopoly]] is a structural bottleneck at this layer (single-source EUV). WFE oligopoly (the four above + Tokyo Electron) is a less acute version of the same dynamic.

## Upstream of the silicon: [[Chip design & EDA]]

Per [[The EDA Primer From RTL to Silicon (2026)]], every chip in this layer passes through the [[Chip design & EDA]] tooling layer first. EDA tool consolidation and chip design talent shortage are structural bottlenecks sitting upstream — even if foundry/memory supply expanded, the rate at which new accelerator architectures can be designed is constrained by:

- **Big Three EDA vendors** ([[Synopsys]], [[Cadence Design Systems]], [[Siemens EDA]]) with multi-year switching costs — see [[EDA tool consolidation]]
- **Verification engineer shortage** — 70% of project effort, fastest-growing unfillable job category — see [[Chip design talent shortage]]
- **PDK access tiers** — anchor JDA customers (Apple, AMD, NVIDIA) get 3+ years lead over standard foundry customers, concentrating the design pipeline further

## DeepSeek shock & Jevons (Jan 2025)

[[DeepSeek]]'s V3/R1 release in January 2025 demonstrated GPT-4-tier capability at ~18× lower training cost and ~36× lower inference cost vs GPT-4o (McKinsey, via [[Situational Awareness, Two Years Later (2026)]]). Architectural sources: MoE, Multi-Head Latent Attention (~93% KV-cache reduction), FP8 training, RLVR.

**Implication for this layer:** efficiency shocks have NOT reduced compute demand. Aggregate AI spend accelerated post-DeepSeek. The Jevons paradox holds — cheaper unit economics expanded the addressable market faster than per-unit costs fell. Also opened **inference-time compute scaling** as a new demand axis (o1, R1, Claude 3.7 thinking, Gemini 2.5 Pro thinking).

For the bottleneck thesis: efficiency gains shift demand mix (more inference, less training), but don't reduce aggregate pressure on HBM, packaging, foundry capacity.

## Alternative accelerators & the fast-inference axis

[[Can AI scaling continue through 2030 (2024)|Epoch's 2030 framework]] is training-side; demand for **inference interactivity** has emerged as a parallel axis with its own pricing dynamics ([[Cerebras — Faster Tokens Please (2026)]]).

| Architecture | Approach | Example | Strength | Weakness |
| --- | --- | --- | --- | --- |
| HBM-based GPU (mainstream) | Logic + HBM via CoWoS | [[NVIDIA]] H100/B200/Rubin, [[AMD]] MI300/MI350 | Memory capacity, throughput, scale-up bandwidth | Slower per-user tokens at low batch sizes |
| SRAM-machine (wafer-scale) | Whole wafer as single chip | [[Cerebras Systems]] WSE-3 | Speed at low batch size (thousands of tok/s) | Tiny memory capacity, near-zero off-wafer I/O |
| SRAM-machine (chip-scale) | Conventional chip, SRAM-dominant | [[Groq]] LPU (now NVIDIA-owned) | Fast tokens, better I/O density than wafer | Memory capacity limits |
| Hyperscaler ASIC | Custom logic for inference | Google TPU, AWS Trainium, Microsoft Maia | Cost per token at hyperscale | Hyperscaler-captive; not market-priced |

**Key market evidence for the inference-tier axis:**
- Anthropic Opus 4.6 *fast* mode charges **6× for 2.5× interactivity** — and customers (including [[SemiAnalysis]] internally) pay it
- [[NVIDIA]] acquired [[Groq]] in Dec 2025 at ≥$20B implied — strategic confirmation
- [[OpenAI]] committed **$24.6B / 750 MW** to Cerebras over 2026–2028 specifically for inference capacity

This dimension was under-weighted in Epoch's 2030 analysis but materially shifts the compute-demand mix toward inference-optimized hardware.

## Open questions

- How fast can CoWoS double, triple? (TSMC's published 2x/yr is the live data point)
- Does Intel Foundry land hyperscaler logic by 2027, or remain captive?
- Is HBM4 supply already locked through 2027 by Nvidia + AMD + Google?
- Geopolitical: Taiwan concentration risk vs. Arizona/Korea/Japan diversification pace
