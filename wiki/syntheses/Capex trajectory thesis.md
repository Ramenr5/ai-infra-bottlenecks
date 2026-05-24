---
type: synthesis
created: 2026-05-24
updated: 2026-05-24
sources: ["[[NVIDIA Q1 FY27 earnings (2026)]]", "[[TSMC Q1 2026 earnings]]", "[[SK Hynix Q3 2025 earnings]]", "[[McKinsey - The Cost of Compute (2025)]]", "[[Goldman Sachs - Generational Growth (2024)]]", "[[Stargate Project announcement (2025)]]", "[[Cerebras — Faster Tokens Please (2026)]]", "[[Situational Awareness, Two Years Later (2026)]]", "[[The EDA Primer From RTL to Silicon (2026)]]", "[[ASML Q1 2026 earnings]]", "[[Applied Materials Q1 FY26 earnings]]", "[[Broadcom Q1 FY26 earnings]]", "[[Marvell Q4 FY26 earnings]]", "[[ARM Holdings Q4 FY26 earnings]]", "[[Astera Labs Q1 2026 earnings]]", "[[Lam Research Q3 FY26 earnings]]", "[[Coherent Q3 FY26 earnings]]", "[[KLA Q3 FY26 earnings]]", "[[Micron Q2 FY26 earnings]]"]
tags: [thesis, capex, hyperscaler, supply-side, investment, trajectory]
---

# Capex trajectory thesis

## The view (as of 2026-05-24)

**AI infrastructure spending accelerates through at least 2027 with high probability (~90%). 2028+ depends on whether GPT-5/6/Rubin-era unit economics validate the spend.** The core mechanism: the binding constraints have shifted from demand-side to supply-side, so spending is now governed by supply expansion rate, not by demand creation.

## Why acceleration is structurally locked in through 2027

### 1. The supply-side is sold out, and demand has paid for forward capacity

- **[[NVIDIA]] has $145B in inventory + prepaid supply commitments** as of Q1 FY27 ([[NVIDIA Q1 FY27 earnings (2026)]]). That's already-deployed cash locking up multi-year forward capacity at TSMC and SK Hynix.
- **[[CoWoS packaging capacity]]: demand exceeds supply by 40-50%, lead times 50+ weeks** ([[TSMC Q1 2026 earnings]], C.C. Wei direct quote)
- **[[HBM allocation]] sold out through 2026, supply tight into 2027** ([[SK Hynix Q3 2025 earnings]])
- When the constraint is supply, every new wafer and HBM stack is consumed instantly by the queue. Spending = capacity expansion rate.

### 2. Jensen's $1T forward guide is a reputational lock-in

> "full confidence in $1 trillion in Blackwell and Rubin revenue we foresee from 2025 through calendar 2027" — Jensen Huang, [[NVIDIA Q1 FY27 earnings (2026)]]

Largest forward revenue commitment ever given by a US tech company. NVIDIA cannot walk it back without massive reputational and stock-price cost. The number embeds hyperscaler procurement assumptions.

### 3. Hyperscaler commitments are concrete, not aspirational

| Hyperscaler | Commitment | Source |
| --- | --- | --- |
| **AWS** | **>1M Blackwell + Rubin GPUs** in a single year | [[NVIDIA Q1 FY27 earnings (2026)]] |
| **Google** | **Up to 960K Rubin GPUs** across multiple sites | Same |
| Microsoft (Farweave) | "hundreds of thousands of Blackwell GPUs" operational | Same |
| Anthropic | New capacity partnership for expansion | Same |
| OpenAI | GPT 5.5 codesigned/trained/served on Blackwell + Stargate 10 GW + Cerebras 750 MW | Multiple |

Big Five hyperscaler 2026 capex = $602B (+36% YoY), ~75% to AI ([[Situational Awareness, Two Years Later (2026)]]). McKinsey base TAM through 2030 implies ~$870B/yr average ([[McKinsey - The Cost of Compute (2025)]]) — either capex *rises* through 2027-2030 or the TAM is overstated. Multiple primary sources point to rising.

### 4. Sovereign capital is additive, not displacing

- **MGX (UAE)** in [[Stargate]] equity = real sovereign capital, not just announced commitment
- **Saudi PIF (Humain), G42, SoftBank/MGX** — new pools entering, not redistributing
- NVIDIA sovereign revenue **+80% YoY**, deployed across ~40 countries representing $50T GDP ([[NVIDIA Q1 FY27 earnings (2026)]])

### 5. Jevons paradox keeps validating

[[DeepSeek]]'s 18×/36× cost reductions did not reduce aggregate AI spend — they expanded it ([[Situational Awareness, Two Years Later (2026)]]). The same dynamic is now visible in the inference-tier axis: [[Cerebras Systems]] secured a $24.6B/750 MW OpenAI MRA *because* fast inference unlocked a new revenue pool, not because Cerebras displaced existing demand.

### 6. Suppliers are signaling rising, not flattening

- [[SK Hynix]] Q3 2025 operating margin **47%**, with **72% margin** cited for early-2026 quarters — extraordinary rent capture in a non-cyclical pricing window
- [[TSMC]] FY2026 capex raised to **$52-56B** (high end) — investing into the demand
- [[Vicor]] and [[Trane Technologies]] (via LiquidStack) both seeing BOM-share expansion from Cerebras and broader liquid-cooling adoption

### 7. Equipment-side primary confirmation (May 2026)

The supply-side capex absorption is now verified by tier-1 equipment vendors' own earnings:

- **[[ASML]] Q1 2026 (per [[ASML Q1 2026 earnings]]):** €8.8B revenue, **€38.8B backlog (~4 years forward visibility)**, 2 High-NA EUV systems shipped, FY26 guide raised to €36-40B, 2030 guide €44-60B. ASML is the most concentrated supplier in the entire AI silicon stack ([[Lithography monopoly]]) and their backlog is the cleanest forward-revenue anchor in the industry.
- **[[Applied Materials]] Q1 FY26 (per [[Applied Materials Q1 FY26 earnings]], Feb 12 2026):** $7.01B revenue, **record DRAM segment (34%)** confirming HBM-driven memory capex, CEO Gary Dickerson: **"global semiconductor industry revenues could reach $1 trillion in 2026, several years earlier than previously predicted"** — a major upgrade to the industry trajectory framing from a primary tier-1 voice.

**Bottom line:** the demand-side ([[NVIDIA]] $145B supply commitments, hyperscaler GPU orders, [[Stargate]]) and the supply-side ([[TSMC]] capex, [[SK Hynix]] M15X, ASML backlog, AMAT WFE orders) now triangulate cleanly. The buildout is funded and underway across every layer of the supply chain.

**Additional confirmations from May 2026 ingest of 8 picks-and-shovels names:**

- **[[Broadcom]] Q1 FY26:** AI revenue $8.4B (+106% YoY), Q2 guide $10.7B (+140%), **>$100B AI 2027 line of sight**, $73B backlog. Second-largest forward AI commitment in industry after NVIDIA's $1T.
- **[[Marvell Technology]] Q4 FY26:** Custom ASIC $1.5B run-rate; FY27 optical/interconnect +50% guide vs +20% custom ASIC — connectivity is the more constrained segment.
- **[[Astera Labs]] Q1 2026:** Revenue +93% YoY, 76% GM — pure-play AI connectivity validates the bottleneck.
- **[[ARM Holdings]] Q4 FY26:** Data center royalty doubled YoY, CSS adoption across all 4 hyperscalers — IP-licensing exposure tracks chip volumes.
- **[[Lam Research]] Q3 FY26:** Record DRAM segment, WFE forecast raised to $140B — memory capex absorption confirmed at the equipment level.
- **[[KLA Corporation]] Q3 FY26:** Advanced packaging $1B FY26 (up from $635M in 2025, +70% YoY) — direct confirmation of CoWoS expansion.
- **[[Coherent]] Q3 FY26:** Data center +37% YoY, 1.6T transceiver ramp ahead of schedule, NVIDIA-backed strategic alignment.
- **[[Micron Technology]] Q2 FY26:** Revenue +196% YoY, 75% GM, HBM4 12-high shipments aligned with NVIDIA Vera Rubin — HBM scarcity validated by third-source supplier extraordinary growth.

The triangulation is now multi-layered: NVIDIA + Broadcom = $1.1T+ combined forward AI chip revenue commitments; ASML + AMAT + LRCX + KLA = $20B+/quarter in equipment running; SK Hynix + Samsung + Micron = full memory supplier triumvirate at extraordinary margins; ALAB + Coherent + Marvell = connectivity layer also in lockstep with demand.

### 9. Hyperscaler aggregate capex MATERIALLY higher than prior framing (May 2026 primary)

Big Five FY26 capex now triangulates to ~$745-775B (vs prior $602B Ansari secondary). All five hyperscalers raised guidance in Q1 2026 earnings:

- [[Microsoft]] $190B (+61% from 2025)
- [[Alphabet]] $180-190B (raised; 2027 to "significantly increase")
- [[Meta]] $125-145B (raised)
- [[Amazon]] ~$200B annual AI capex
- [[Oracle]] $50B (up from $21B FY25)

Direct primary sources from all five hyperscalers means the [[Capex trajectory thesis]] confidence in the supply-side lock-in argument is now even higher. The buildout is funded — confirmation from both demand-side anchors AND supply-side vendors.

### 10. Frontier AI lab revenue inflection validates inference market sizing

[[Anthropic]] grew from ~$3B mid-2025 to $30B run-rate April 2026 = 10× in 10 months. Combined with OpenAI revenue trajectory (similar profile per third-party reporting), the inference-tier market is real — not just speculative TAM. The AI labs themselves are revenue-positive (or close), justifying the hyperscaler compute-supply commitments to them.

### 8. EDA + chip design = additional supply-side lock-in

Per [[The EDA Primer From RTL to Silicon (2026)]], the [[Chip design & EDA]] layer adds *two more* structural bottlenecks behind the physical-supply ones already in the thesis:

- **[[EDA tool consolidation]]** — Big Three duopoly+1 with multi-year switching costs; [[Synopsys]], [[Cadence Design Systems]], [[Siemens EDA]]
- **[[Chip design talent shortage]]** — verification engineers (70% of project effort) fastest-growing unfillable job; 1/3 of US semi workforce >55; complexity grows 50%/yr vs productivity 20%/yr

Even if [[TSMC]] doubled CoWoS overnight and [[SK Hynix]] doubled HBM, the rate at which new accelerator architectures can be designed is gated by EDA tools + verification engineer headcount. This **reinforces the supply-side lock-in argument** — the bottleneck framework extends from foundry capacity all the way back to the design tooling itself.

## The arguments against (real, but second-order through 2027)

| Concern | Magnitude | Likely binding by 2027? |
| --- | --- | --- |
| [[Stargate]] stalling per Bloomberg Aug 2025 | Material at project level | Possible but doesn't move the broader curve |
| 94% OCF-to-capex at some hyperscalers ([[Hyperscaler capex sustainability]]) | Real stress signal | No — equity multiples still expanding |
| JPM up to $7T debt-financed; BofA "money wall" ([[AI debt financing capacity]]) | Real | Tail risk, not base case |
| METR 19% slower productivity finding | Capability vs revenue lag | Not material to capex itself |
| Pichai "elements of irrationality" | Even principals hedging | Verbal, not action |

None of these break the supply-side-constrained acceleration mechanism through 2027.

## The crux — what would change this view

The pivot question is **GPT-5/6 / Rubin-era unit economics for hyperscalers in 2H 2026 / 2027**.

- If Rubin-class compute generates the implied downstream revenue, 2028+ accelerates further (and McKinsey's accelerated $7.9T scenario becomes plausible)
- If it disappoints, multiple compression triggers a hyperscaler capex pullback, [[AI debt financing capacity]] tightens, neoclouds and equipment names get repriced

## Leading indicators to watch

1. **MSFT/GOOGL/META AI segment revenue disclosures** in Q3-Q4 2026 earnings — first clean tells on Rubin-era ROI
2. **Hyperscaler capex *guidance* changes** (not actuals) at year-end 2026 prints — guides move faster than spend
3. **[[Stargate Abilene]] operational date** — leading indicator on $500B/10GW execution
4. **NVIDIA quarterly supply commitments** — if $145B grows, demand still ahead of supply; if it flattens, the curve is bending
5. **TSMC CoWoS lead-time changes** — anything below 30 weeks would signal supply catching up (i.e. demand softening)
6. **SK Hynix operating margins** — sustained 60%+ = pricing power intact; dropping toward 40s = demand weakening
7. **Hyperscaler credit spreads** ([[AI debt financing capacity]]) — IG BBB widening 100bps+ would be early warning

## Tradable read

Through 2027, structural longs in the supply-side rent-capturers:
- **[[TSMC]]** (CoWoS rent + 14/24 HBM stack roadmap)
- **[[SK Hynix]]** (47-72% operating margins on HBM)
- **[[NVIDIA]]** (allocation power, $1T guidance backstop)
- **[[Vicor]]** (Cerebras BOM share comparable to TSMC content)
- **[[Trane Technologies]]** (LiquidStack acquisition → broader cooling exposure)
- **[[GE Vernova]], [[Siemens Energy]], [[Mitsubishi Heavy Industries]]** (60/40 Goldman gas/renewable mix favors gas turbines)
- Nuclear-DC pairing names: [[Talen Energy]], [[Constellation Energy]], [[Vistra]]
- **EDA: [[Synopsys]] (SNPS), [[Cadence Design Systems]] (CDNS)** — picks-and-shovels on every advanced-node tapeout; talent-shortage tailwind compounds the lock-in
- **Semiconductor Equipment: [[ASML]] (ASML, EUV monopoly with €38.8B backlog), [[Applied Materials]] (AMAT, record DRAM segment), [[Lam Research]] (LRCX, memory etch leader), [[KLA Corporation]] (KLAC, ~58% process-control share + $1B advanced packaging)** — the cleanest forward-revenue picks-and-shovels in the industry, with primary tier-1 industry $1T 2026 call
- **Hyperscaler custom ASIC + AI networking: [[Broadcom]] (AVGO, $100B AI 2027 line of sight, $73B backlog, Tomahawk monopoly), [[Marvell Technology]] (MRVL, $1.5B custom ASIC ARR + 50%+ optical guide)**
- **Connectivity silicon: [[Astera Labs]] (ALAB, +93% YoY / 76% GM)** — pure-play AI connectivity
- **Optical transceivers: [[Coherent]] (COHR, NVIDIA-backed, 1.6T ramp)**
- **IP licensing: [[ARM Holdings]] (ARM, data center royalty doubling YoY, CSS adoption with all 4 major hyperscalers)** — per-unit royalty captures every chip shipped
- **Memory third-source: [[Micron Technology]] (MU, ~24% HBM share, +196% YoY revenue, US-headquartered)** — completes the SK Hynix / Samsung / Micron triumvirate
- **Optical second-source: [[Lumentum]] (LITE, +90% YoY / 32% op margin, NVIDIA $2B investment for US fab)** — dual-source with Coherent
- **NAND pure-play: [[SanDisk]] (SNDK, post-WD spin, +1,350% in 12mo) + [[Kioxia]] (285A.T, JV partner)** — surfaces [[NAND flash supply]] as a parallel constraint to HBM, expected shortage to 2028
- **Power-EPC & equipment: [[GE Vernova]] (GEV, $163B backlog +71% orders, 110 GW gas turbine target 2026, $200B target pulled forward to 2027), [[Siemens Energy]] (ENR.DE, €17.7B record orders, US data center driven), [[Quanta Services]] (PWR, $48.5B record backlog, doubling transformer mfg)** — gas turbine + grid + EPC supercycle confirmed across three independent vendors
- **Hyperscaler demand anchors: [[Microsoft]] ($190B FY26 capex), [[Alphabet]] ($180-190B + $460B cloud backlog + $21B Broadcom TPU 8t/8i), [[Meta]] ($125-145B + 6 GW AMD), [[Amazon]] (~$200B + $225B Trainium commits + >1M NVDA GPUs 2026), [[Oracle]] ($50B capex + $300B OpenAI/4.5 GW + $553B RPO)** — Big Five FY26 capex aggregate **~$745-775B**, materially higher than prior $602B framing
- **Frontier AI lab demand: [[Anthropic]] ($30B run-rate Apr 2026, $900B valuation pending)** — fastest enterprise SaaS scale-up in history; validates inference-tier market sizing
- **Adjacent capital allocator: [[SpaceX]] ($1.75T-$2T IPO filed Apr 2026)** — Starlink connectivity backbone, xAI sister relationship, $80B raise unlock
- **US foundry optionality: [[Intel]] (INTC, 60% revenue AI-driven, Foundry $5.4B narrowing op loss, Panther Lake on 18A ramping 6-7×)** — optionality on TSMC concentration, US IDM positioning
- **Vertically integrated conglomerate: [[Samsung Electronics]] (005930.KS, Q1 2026 OP +756% YoY = $39B, $33.6B memory OP alone, HBM4 first-at-scale for Vera Rubin claim, ~$78B FY26 capex RECORD)** — only fully integrated AI infra player (Memory + Foundry + LSI)
- **#2 AI accelerator with material momentum: [[AMD]] (AMD, Q1 2026 DC revenue $5.8B +57% YoY, Meta 6 GW Instinct deal with custom MI450, Helios rack-scale H2 2026)** — credible alternative to NVIDIA at hyperscaler scale
- **Japanese WFE: [[Tokyo Electron]] (8035.T, FY26 record 2.44T yen, +20% WFE growth call for 2026 AND 2027)** — completes WFE oligopoly coverage; coater/developer + wafer prober dominance
- **NAND second pure-play: [[Kioxia]] (285A.T, Q1→Q3 FY26 EPS ¥34→¥162 inflection, JV fabs with SanDisk)** — Japanese-listed; ADR pending

**Watch starting Q3 2026** for the inflection signal. **Do not be early on the short side** — the supply-side lock-in carries through at least mid-2027 in the base case.

## Confidence and aging

| Element | Confidence | Half-life |
| --- | --- | --- |
| Supply-side bottleneck thesis | Very high | ~12 months |
| Acceleration through 2027 | High (~90%) | ~6 months |
| 2028+ trajectory | Moderate; depends on ROI tells | ~3 months |
| Specific company exposures | Source-quality dependent | varies |

**Re-evaluate this page on:**
- New hyperscaler quarterly capex guides
- New TSMC/SK Hynix earnings (CoWoS / HBM commentary)
- Any [[Stargate]] execution update
- Hyperscaler AI segment revenue disclosures
- Credit spread moves on [[AI debt financing capacity]]

## Related wiki content

- Layers: [[Capital flows & deal structures]], [[Compute & silicon]], [[Power & energy]]
- Bottlenecks: [[Hyperscaler capex sustainability]], [[AI debt financing capacity]], [[CoWoS packaging capacity]], [[HBM allocation]]
- Companies: every major [[NVIDIA]] [[TSMC]] [[SK Hynix]] [[Stargate]] [[Cerebras Systems]] entry feeds this thesis
