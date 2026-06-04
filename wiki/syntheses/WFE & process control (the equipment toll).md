---
type: synthesis
created: 2026-06-03
updated: 2026-06-03
sources: ["[[Lithography monopoly]]", "[[AI value capture across the stack]]", "[[Capex trajectory thesis]]"]
tags: [synthesis, wfe, process-control, metrology, materials, equipment, toll, value-capture]
---

# WFE & process control (the equipment toll)

**The shovels that make the shovels.** Every AI chip — NVIDIA GPU, hyperscaler XPU, HBM, optical PIC — is made on **wafer-fab equipment (WFE)** and verified by **process control (metrology/inspection)**. These are concentrated oligopolies that get paid regardless of who wins compute *or* which architecture wins — the deepest, most outcome-robust toll, with one catch: **cyclicality.**

## The view
**The WFE + process-control + materials stack is a Tier-1 toll** (robust to both forks — see [[AI value capture across the stack]]) — but it's **cyclical to total chip capex**, not pure AI. So it's a *high-quality but cyclical* toll: own it, but mind the cycle.

## The map
| Sub-layer | Names | Position |
| --- | --- | --- |
| **Lithography** | [[Lithography monopoly\|ASML]] (EUV monopoly) | the hardest chokepoint; €38.8B backlog |
| **EUV mask inspection** | [[Lasertec]] (~100% share, actinic) | a *second* near-monopoly *inside* the EUV chain |
| **Deposition / etch** | [[Applied Materials]], [[Lam Research]], [[Tokyo Electron]] | the WFE-5 oligopoly; memory/DRAM capex levered |
| **Process control (metrology/inspection)** | [[KLA Corporation]] (~58% share), [[Onto Innovation]], [[Camtek]], Nova | inspect every wafer/package — recurring toll |
| **Materials / consumables** | [[Entegris]] (filtration, CMP, microcontamination), Shin-Etsu/SUMCO (wafers), JSR/TOK (photoresist) | the *recurring-revenue* layer — sells with every wafer run |

## Value-capture read
- **Cleanest:** [[Lithography monopoly|ASML]] + [[Lasertec]] (monopoly/near-monopoly chokepoints) and **process control** [[KLA Corporation]] (recurring, ~58% share). These are the **outcome-robust** tolls.
- **Oligopoly, cyclical:** the WFE-5 ([[Applied Materials]]/[[Lam Research]]/[[Tokyo Electron]]) — toll-grade but swings with the broader semi cycle (a capex pause hits them first).
- **Materials ([[Entegris]])** = the under-loved **recurring-consumables** toll; AI nodes (HBM, advanced packaging) raise consumable intensity per wafer.
- The whole layer is the supply-side confirmation of [[Capex trajectory thesis]] (equipment vendors' order books = forward demand).

## The catch — cyclicality
Unlike memory/networking/test (AI-demand-driven), WFE/materials track **total wafer capex**. Bullish now (TSMC $52-56B, memory capex surging), but the *first* thing cut in a [[Capex bust scenario]]. **Own the monopolies (ASML/Lasertec/KLA) through the cycle; trade the WFE-5 around it.**

## Leading indicators
- WFE forecast ($140B+ per [[Lam Research]]) + tier-1 vendor order books.
- ASML EUV + Lasertec inspection backlog (leading-edge intensity).
- KLA process-control share (advanced-packaging inspection ramp).

## Related
- [[Lithography monopoly]] · [[Advanced packaging & OSAT (the AI packaging toll)]] · [[AI value capture across the stack]] · [[Capex trajectory thesis]] · [[Capex bust scenario]] · [[Compute & silicon]]
