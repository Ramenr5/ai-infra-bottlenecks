---
type: synthesis
created: 2026-05-24
updated: 2026-05-27
sources: ["[[Can AI scaling continue through 2030 (2024)]]", "[[Goldman Sachs - Generational Growth (2024)]]", "[[TSMC Q1 2026 earnings]]", "[[SK Hynix Q3 2025 earnings]]", "[[Samsung Q1 2026 earnings]]", "[[ASML Q1 2026 earnings]]", "[[GE Vernova Q1 2026 earnings]]", "[[The EDA Primer From RTL to Silicon (2026)]]", "[[Capex trajectory thesis]]", "[[SemiAnalysis - Datacenter Anatomy Cooling Systems (2026)]]"]
tags: [thesis, bottleneck, ranking, power, hbm, cowos, eda, talent]
---

# Bottleneck ranking — May 2026

What's the **biggest constraint** the AI buildout faces? Different framings yield different answers depending on time horizon. This page ranks the ~10 bottlenecks in the wiki by **structural binding power** rather than by current severity alone.

## The answer in one line

**Power binds the durable case (multi-year);** **HBM + CoWoS bite the near-term (2026-27);** **chip design talent is the under-appreciated long-term constraint.**

## Ranking framework

A bottleneck's "biggest" qualifier depends on:

1. **Severity now** — how acute is the current supply-demand gap?
2. **Time to relieve** — how long does it take to add capacity once committed?
3. **Capex responsiveness** — does throwing money at it work?
4. **Concentration** — how many suppliers / how monopolistic?
5. **Duration of binding** — over what horizon does it remain the constraint?

## Ranked bottlenecks

### Tier 1: Power (the durable binding constraint)

| Dimension | Assessment |
| --- | --- |
| Severity now | High but manageable (Stargate 10 GW provisioning underway) |
| **Time to relieve** | **5+ years for nuclear; 3-5 years for >3 GW gas + transmission** |
| **Capex responsiveness** | **Limited — physical/regulatory lead times** |
| Concentration | Diversified across utilities + IPPs + gas/nuclear/renewables |
| **Binding duration** | **Through 2030+** per Epoch median 2e29 FLOP power ceiling |

**Why it wins the multi-year case:**
- Epoch ([[Can AI scaling continue through 2030 (2024)]]) identifies power as the binding constraint in the 2030 framework — 2e29 FLOP median ceiling
- Goldman ([[Goldman Sachs - Generational Growth (2024)]]) anchors scale: 47 GW US incremental capacity needed; only 60% gas can be added quickly
- **Frontier 2030 training run needs ~6 GW per cluster**; [[Stargate]] alone = 10 GW
- Only **27 US power plants >2.5 GW exist**; recent >3 GW builds took ~5 years
- GE Vernova 110 GW gas turbine backlog target = supply *trying* to catch up; gap is real

### Tier 1 (near-term, 2026-27): HBM + CoWoS

**HBM allocation** ([[HBM allocation]])
- Sold out through 2026 across all three suppliers (SK Hynix, Samsung, Micron) — primary-confirmed
- HBM4 ramp aligned with NVIDIA Vera Rubin; supplier dynamics in flux (Samsung challenging Hynix)
- Capex responsiveness: HIGH (multi-supplier expansion underway; SK Hynix M15X, Samsung 110T won capex, Micron HBM4 ramp)
- **3-year resolution path** — bites hard now but capacity is being added

**CoWoS packaging capacity** ([[CoWoS packaging capacity]])
- TSMC C.C. Wei: "sold out through 2025 and into 2026"
- **Demand exceeds supply by 40-50%; 50+ week lead times**
- Capex responsiveness: HIGH (TSMC announced 60%/yr CoWoS growth + Advanced Backend Fab 6 doubles capacity)
- **2-3 year resolution path**

These two bottlenecks are **the constraints actively biting in 2026** — they're the reason NVIDIA's $145B supply commitments don't translate immediately into shipments. But they're **on a capex-driven resolution path**, so they recede with time.

### Tier 1 (near-term, 2026-27): Datacenter cooling — the physical-side acute constraint

**[[Datacenter cooling]]** (added May 2026)
- Air cooling physically obsolete >50 kW/rack; **GB200 NVL72 = 120 kW DLC-only**; chip TDP **>4,000W by 2029**
- Acute sub-chokepoint: **Quick Disconnect shortage** (NVIDIA ramp) — the CoWoS analog of liquid cooling
- Not enough DLC-capable datacenter shells → "bridge" solutions proliferate
- Capex responsiveness: HIGH (market $3B→$7B; many vendors entering — Dell'Oro even flags CDU saturation)
- **1-2 year resolution path** — bites now, recedes as DLC-ready shells + QD supply ramp

This is the **datacenter-physical** counterpart to HBM/CoWoS: a hard physical forcing function (TDP), a humble-component chokepoint (QDs), but capex-responsive. Its slower-burn cousin is the **structural** [[800VDC transition]] (power-distribution re-architecture, multi-year).

### Tier 2: Structural / IP concentration

**Lithography monopoly** ([[Lithography monopoly]])
- ASML sole EUV supplier globally
- Severity now: high backlog (€38.8B; ~4yr forward visibility)
- Capex responsiveness: LIMITED for buyers (can't second-source); BUT ASML is actively scaling capacity (€44-60B 2030 guide)
- **Structural** but linear-growth resolution

**EDA tool consolidation** ([[EDA tool consolidation]])
- Big Three (Synopsys, Cadence, Siemens EDA) gate every advanced-node tapeout
- Severity now: not capacity-constrained but cost/concentration concern
- Switching costs: multi-year institutional knowledge
- Less directly binding on AI buildout pace; more a rent-extraction story

### Tier 3: Under-appreciated long-term — chip design talent

**Chip design talent shortage** ([[Chip design talent shortage]])
- **Verification = 70% of project effort; fastest-growing unfillable job category**
- **1/3 of US semi workforce >55** = demographic cliff
- **Complexity grows 50%/yr vs design productivity 20%/yr** = **gap compounds ~25%/yr** → ~3× headcount needed over 5 years
- Capex responsiveness: VERY LOW (can't capex a person into existence)
- **Could be the constraint that bites hardest in 2027-2030** if AI-driven EDA productivity doesn't break the curve

This is the **most under-appreciated** constraint in the wiki. AI itself (agentic chip design — covered in paywalled SemiAnalysis Part 3) may break it, but otherwise it's structural and durable.

### Tier 4: Demand-side / financial — could compress all of the above

**Hyperscaler capex sustainability** ([[Hyperscaler capex sustainability]])
- $745-775B Big Five FY26 capex; FCF pressure (AMZN $1.2B TTM)
- Not a supply constraint — a question of whether demand keeps funding the buildout
- If hyperscaler ROI fails to materialize by 2027, **the whole curve compresses** and supply constraints rapidly relax

**AI debt financing capacity** ([[AI debt financing capacity]])
- JPM up to $7T projected debt-financed
- Credit-cycle wild card

### Tier 5: Distant / under-debate

**Data wall** ([[Data wall]]) — text in ~5yr; multimodal extends; synthetic uncertain
**Latency wall** ([[Latency wall]]) — ~1e32 FLOP ceiling at current network topologies; distant

## Time-horizon ranking summary

| Horizon | Binding constraint | Rationale |
| --- | --- | --- |
| **Right now (Q2 2026)** | **HBM + CoWoS + cooling** | HBM/CoWoS sold out + 40-50% gaps; [[Datacenter cooling]] DLC chokepoint (Quick Disconnects) on the physical side |
| **2026-2028** | **Power** (begins to bite) | Stargate 10 GW + hyperscaler new builds outpace generation capacity additions |
| **2027-2030** | **Power + chip design talent** | Power becomes Epoch's median binding constraint; talent gap compounds |
| **2028+** | **Power + capex sustainability** | Either supply catches demand and capex pulls back, OR power forces pace |
| **Long-term (2030+)** | **Latency + Data + EDA scaling** | Distant in current models but eventually structural |

## If forced to pick ONE answer

**Power.** Because:

1. **Epoch's primary multi-year analysis** identifies it as the binding constraint
2. **Physical / regulatory lead times** (5+ years for nuclear, 3-5 for >3 GW gas) are not capex-responsive
3. **Geographic concentration** of acceptable AI infra sites (Northern Virginia, Texas, Oklahoma, Saudi) compounds the constraint
4. **47 GW Goldman incremental capacity** is roughly the scale of adding **one ERCOT-sized grid system**
5. The other acute constraints (HBM, CoWoS) are on capex-driven resolution paths within 2-3 years; power is on 5-10 year resolution

## Tradable read by ranking

| Bottleneck | Direct beneficiaries |
| --- | --- |
| **Power** (Tier 1 durable) | [[GE Vernova]], [[Siemens Energy]], [[Quanta Services]], [[Talen Energy]], Constellation Energy, Vistra, NextEra Energy, Eaton, Hubbell |
| **HBM** (Tier 1 near-term) | [[SK Hynix]], [[Samsung Electronics]], [[Micron Technology]] |
| **CoWoS** (Tier 1 near-term) | [[TSMC]], [[KLA Corporation]] (process control on advanced packaging) |
| **Cooling** (Tier 1 near-term) | [[Vertiv Holdings]], [[nVent Electric]], [[Aaon]], [[CoolIT Systems]], [[Boyd]], [[Trane Technologies]] |
| **800VDC** (structural) | [[DG Matrix]], [[Eaton]], [[ABB]], [[Delta Electronics]], [[Wolfspeed]], [[Infineon]], [[Power Integrations]] |
| **Lithography** (Tier 2 structural) | [[ASML]] |
| **EDA + IP** (Tier 2 structural) | [[Synopsys]], [[Cadence Design Systems]], [[ARM Holdings]] |
| **Talent (Tier 3 under-appreciated)** | EDA vendors (productivity tools), offshore design services |

## Confidence and aging

- Power ranking confidence: HIGH (multiple primary sources triangulate)
- HBM/CoWoS near-term ranking: HIGH (current-quarter primary data)
- Talent ranking: MODERATE (depends on AI-driven productivity unlock from paywalled SemiAnalysis Part 3)
- Re-evaluate when: Q2 2026 earnings cycle; any major capex pullback signal; AI-driven EDA breakthrough disclosures

## Related syntheses

- [[Capex trajectory thesis]] — opinionated view that buildout proceeds (which assumes these bottlenecks don't break the curve)
- [[AI infrastructure investment map (May 2026)]] — catalogs the names by layer
