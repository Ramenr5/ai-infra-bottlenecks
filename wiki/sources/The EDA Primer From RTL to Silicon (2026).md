---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, eda, chip-design, synopsys, cadence, siemens-eda, verification]
---

# The EDA Primer: From RTL to Silicon (2026)

**Author:** Dylan Patel at [[SemiAnalysis]]
**Published:** 2026-05-12
**URL:** [newsletter.semianalysis.com/p/the-eda-primer-from-rtl-to-silicon](https://newsletter.semianalysis.com/p/the-eda-primer-from-rtl-to-silicon)
**Raw:** `raw/articles/The EDA Primer From RTL to Silicon.md`

> [!success] Primary source — Part 1 of 3
> Part 2 (**EDA Market Primer** — business models, Chinese EDA effort, IP licensing, Customer Owned Tooling/COT for hyperscaler ASICs) and Part 3 (**AI disrupting EDA** — agentic chip design from NVIDIA and the Big Three) are both **paywalled**. The free Part 1 is the technical/structural primer; the deeper market and AI-disruption analysis would substantially extend this ingest.

## What it is

A 13-step walkthrough of the chip design flow from RTL (Register Transfer Level) code to manufactured silicon, naming every major tool and its vendor at every stage. **The missing piece** in our wiki: the tooling layer that gates every advanced-node tapeout.

## The 13-step chip design waterfall

1. Planning (PPACt metrics)
2. Architecture Layout (Design Space Exploration, increasingly AI-driven via [[Synopsys]] DSO.ai)
3. RTL Design (SystemVerilog dominant)
4. RTL Verification (simulation + formal proof; UVM testbenches)
5. RTL Freeze
6. FW/SW Development (parallel; emulators)
7. Physical Design (logic synthesis → placement → routing → CTS → DFT)
8. Signoff (DRC, LVS, ERC, STA, Power)
9. Tapeout (GDSII export to foundry, OPC, mask making)
10. Fabrication & Packaging (8–12 weeks; advanced packaging for chiplets)
11. Post-Silicon Validation & Bringup (ATE, probe cards, JTAG)
12. System Integration (SLT, reference boards)
13. Production (FA, yield optimization, Continuous Improvement)

## The Big Three EDA vendors

| Vendor | Founded | Key tools |
| --- | --- | --- |
| **[[Synopsys]]** (SNPS) | 1986 | Design Compiler (synthesis, est. 1987 — first commercial), VCS (sim), VC Formal, IC Compiler II (PnR), PrimeTime (timing), RedHawk-SC (power), DesignWare (IP), DSO.ai (AI), ZeBu (emulation, 23B gates), Sentaurus/Mystic/QuantumATK (TCAD) |
| **[[Cadence Design Systems]]** (CDNS) | 1988 (SDA + ECAD merger) | Xcelium (sim), JasperGold (formal — market leader), Genus (synthesis), Innovus (PnR), Tempus (timing), Voltus (power), Palladium Z3 (emulation, 48B gates, 1.5× Z2), iSpatial (unified flow) |
| **[[Siemens EDA]]** (Mentor Graphics, acquired 2017 for $4.5B) | 1981 (DMV trio) | Questa (sim), Calibre (DRC/LVS — dominant in physical verification) |

Most large chip companies **license at least two of the three** — switching costs are measured in years of institutional knowledge.

## Key data points (load-bearing for the bottleneck thesis)

| Data point | Value |
| --- | --- |
| AMD MI455X scale | **320B transistors, 12 logic dies, 2nm + 3nm, HBM4, 224G SerDes** |
| Verification share of project effort | **up to 70%** |
| Chip complexity growth | **50%/year** |
| Design productivity growth | **20%/year** (the design productivity gap) |
| % US semi workforce over 55 | **1/3** |
| Mason cost (advanced node) | **tens of millions of dollars** per mask set, multiple steppings typical |
| A0 silicon success rate | **rarely production-ready** — multiple steppings standard |
| Synopsys ZeBu-200 emulation capacity | 23B gates, 2× predecessor runtime |
| Cadence Palladium Z3 emulation capacity | **48B gates**, 1.5× Z2 |
| Standard cell library size (TSMC N2) | **tens of thousands of cells** |
| TSMC N2 / 3nm Vt options | **6 threshold voltages** (vs Intel 18A initial **4**) |
| DRM (Design Rule Manual) length, advanced node | **exceeds 1,000 pages** |

## PDK access tiers (competitive moat structure)

- **Tier 1 (Anchor JDA customers):** Apple (mobile), AMD/NVIDIA (HPC) — PDK access **3+ years before production**; co-develop process rules; first-mover advantage
- **Tier 2 (EDA + IP partners):** Synopsys, Cadence, Siemens EDA, ARM — early PDK access for tool validation
- **Tier 3 (Standard foundry customers):** accept process as-is at PDK 1.0
- **Tier 4 (Academic):** heavily restricted, years later

This structure **reinforces [[TSMC]]'s concentration of bargaining power** — anchor customers shape the process; everyone else queues for capacity at terms set by Tier 1.

## DTCO and STCO — process/design co-optimization

- **DTCO (Design Technology Co-Optimization):** TCAD physics → PDK → cell characterization → chip-level PPA → back to process engineers. Apple/NVIDIA/AMD have dedicated foundry departments collaborating with TSMC to engineer **custom standard cell libraries pushing PPA by ~15% over standard libraries**.
- **STCO (System Technology Co-Optimization):** extends to package/chiplet level. Intel Ponte Vecchio = 47 active dies across 5 process nodes via EMIB + Foveros (delayed and underperformed). AMD MI455X scheduled later 2026 as the next test case.

## Why it matters for our thesis

1. **Missing layer surfaced** — chip design & EDA is the previously-uncovered chokepoint. New [[Chip design & EDA]] layer page.
2. **EDA tool concentration is structural.** Switching costs + foundry PDK integration = effectively a duopoly+1. Reinforces [[Capex trajectory thesis|the supply-side lock-in argument]] — adds another bottleneck behind [[CoWoS packaging capacity]] / [[HBM allocation]].
3. **Verification compute demand** drives cloud bursting on AWS/Azure during pre-tapeout crunch — incremental demand-side support for [[Compute & silicon]] layer
4. **Tradable insights:** Synopsys (SNPS) and Cadence (CDNS) are pure-play picks-and-shovels names on every advanced-node tapeout. Siemens EDA is captive within Siemens AG conglomerate.
5. **Talent shortage** = persistent margin support for EDA vendors (when you can't hire engineers, you pay more for tools that make existing engineers more productive). The [[Chip design talent shortage]] page tracks this.

## Pages created/updated from this ingest

See [[log.md]] entry of 2026-05-24.
