---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [forecast, primary-source, epoch, scaling, compute, power, bottlenecks, methodology]
---

# Can AI scaling continue through 2030 (2024)

**Authors:** Jaime Sevilla, Tamay Besiroglu, Ben Cottier, Josh You, Edu Roldán, Pablo Villalobos, Ege Erdil — all [[Epoch AI]]
**Published:** 2024
**URL:** [epoch.ai/blog/can-ai-scaling-continue-through-2030](https://epoch.ai/blog/can-ai-scaling-continue-through-2030)
**Raw:** `raw/articles/Can AI scaling continue through 2030.md`

> [!success] Primary source — methodologically rigorous
> Monte Carlo simulation with 80% confidence intervals reported for every estimate. Citations to primary data (TSMC investor materials, utility filings, SemiAnalysis, SK Hynix earnings, public deal announcements). **This is a load-bearing source for our thesis.**

## What it is

A quantitative feasibility study of how large AI training runs can technically scale by 2030, given four supply-side constraints. The question is *can*, not *will*: investment decisions are explicitly scoped out.

## Headline finding

**2e29 FLOP training runs are likely feasible by 2030 (~10,000× GPT-4).** The historical 4×/year training-compute growth trend can continue through the decade.

Per-constraint medians and ranges:

| Constraint | Median 2030 ceiling | × vs GPT-4 | 80% CI |
| --- | --- | --- | --- |
| **Power** ← binds first | 2e29 FLOP | 10,000× | wide |
| **Chip manufacturing** | 9e29 FLOP | 50,000× | 1e29 – 5e30 |
| Data | 2e30 FLOP | 80,000× | 6e28 – 2e32 (widest) |
| Latency wall | 3e31 FLOP | 1,000,000× | 3e30 – 1e32 |

GPT-4 reference: 2e25 FLOP; Llama 3.1 405B reference: 4e25 FLOP / 16K H100s / 27 MW / 72-day run.

## Power layer — key extracted data

- **6 GW per frontier training run by 2030** — 200× Llama 3.1 405B's 27 MW (after 24× efficiency gains from hardware + FP8 + duration extension)
- US installed capacity ≈ **1,200 GW**; 2023 average production = **477 GW**
- All US datacenters today ≈ 20 GW average / ~40 GW capacity (SemiAnalysis)
- Trajectory: 40 GW → **90 GW US DC capacity by 2030** (15%/yr) — implying **30 GW AI** capacity (10× expansion from 3 GW today)
- Single-lab share: 33% × 80% front-loaded = 26% of AI DC capacity → **~8 GW for largest distributed training run**
- Single campus ceilings: **1–5 GW feasible by 2030** → 1e28–3e29 FLOP
- Distributed: 2–45 GW → 2e28–2e30 FLOP
- US has only **27 power plants >2.5 GW** (largest: Grand Coulee 6.8 GW hydro)
- Recent >3 GW power station builds took ~5 years
- [[Northern Virginia]]: 300 DCs, 5 GW → 10 GW expected by 2030 (Dominion guidance)
- Concrete deals: **Amazon 960 MW [[Susquehanna nuclear plant]]** (operator: [[Talen Energy]]); Meta 350 MW MO + 300 MW AZ solar
- Microsoft/OpenAI [[Stargate]] (as framed here, 2024): **$100B, up to 5 GW by 2030** — see "Source-comparison notes" below

## Chip manufacturing layer — key extracted data

- [[NVIDIA]] shipped **3.76M datacenter GPUs in 2023** (vs 2.64M in 2022); 650K H100s to major tech by end-2023
- 2024 projection: **1.5–2M H100 shipments** → ~6e27 FLOP training capacity
- 2030 needs **~100M H100-equivalents** in aggregate (range 20M–400M); ~20M to power a single 2e29 FLOP run
- **Near-term bottleneck = [[CoWoS packaging capacity]]**, not wafers
  - [[TSMC]] CoWoS: 14–15K wafers/mo (Dec 2023) → 33–35K (end-2024); planned 60% annual growth through 2026
  - [[TSMC Advanced Backend Fab 6]] (opened 2023): capacity up to 83K wafers/mo
- **[[HBM allocation]]** is parallel choke: **sold out through 2026**, [[SK Hynix]] dominant
- TSMC 5nm/3nm wafer capacity ≈ **2.2M wafers/year** (early 2024); 2M H100s = only ~5% of that → wafers are NOT the bottleneck
- Precedent for single-customer dominance: **Apple absorbed ~90% of TSMC 3nm in 2023**
- [[Meta]] bought ~25% of H100 shipments to majors in 2023

## Data layer — key extracted data

- Indexed web ≈ **500T tokens** (range 100T–3000T)
- Current frontier training = ~15T tokens
- Pure text "[[Data wall]]" hits in ~5 years at 4×/yr compute scaling
- Multimodal expansion: image ~10T items + video ~10T sec + audio ~500B–1T sec → 400T–20 quadrillion effective tokens → **6e28–2e32 FLOP**
- Synthetic data could dissolve constraint (uncertain — model collapse risk)

## Latency wall — key extracted data

- Sequential layer latency caps training even with perfect everything else
- 60M-token batch (GPT-4-scale) gives 2e30–2e32 FLOP ceiling
- With Erdil/Schneider-Joseph batch scaling: 3e30–1e32 FLOP
- **Beyond 1e32 FLOP requires new network topologies** (mesh vs tree), larger pods, or reducing layer count
- Distant — not the 2030 binding constraint

## Capital framing

- Compute spend growing **2.5×/year** (Epoch's own series)
- 2e29 FLOP cluster ≈ **"hundreds of billions of dollars"** — directly anchors [[Capital flows & deal structures]] sizing
- Frame: $60T/yr global labor compensation is the prize being competed for

## Source-comparison notes

> [!warning] Stargate framing has evolved between sources
> This source (2024): **$100B, up to 5 GW by 2030, single campus, 2028 target**
> [[Situational Awareness, Two Years Later (2026)]] (Apr 2026): **$500B, 20 sites, 10 GW total**
>
> Suggests either (a) Stargate was significantly expanded between 2024 announcement and 2025 formal launch, (b) the original framing was a low-ball anchor, or (c) the figures aggregate differently. Worth pinning down with a primary Stargate announcement source. The [[Stargate]] page now reflects both framings.

## Implications for our wiki

1. **Power-first ordering is now load-bearing.** Epoch's median binds power before chips before data before latency. Our [[Power & energy]] layer is correctly prioritized.
2. **Chip manufacturing chokes are inside the package**, not at the wafer level. CoWoS and HBM are the binding constraints, not 3nm/2nm logic capacity. Refines our [[Compute & silicon]] page.
3. **"Hundreds of billions per cluster"** is now a citable anchor for [[Hyperscaler capex sustainability]], moving it from soft-asserted to grounded.
4. **Distributed training relaxes the local-power ceiling** but not the aggregate national power ceiling. Suggests inter-datacenter bandwidth is NOT the binding constraint (4–20 Pbps achievable).
5. **Several Northern Virginia / Pennsylvania / Taiwan data points** now anchor our geography pages.

## Pages created/updated from this ingest

See [[log.md]] entry of 2026-05-24.
