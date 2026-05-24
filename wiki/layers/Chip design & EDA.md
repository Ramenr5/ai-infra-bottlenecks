---
type: layer
created: 2026-05-24
updated: 2026-05-24
sources: ["[[The EDA Primer From RTL to Silicon (2026)]]"]
tags: [chip-design, eda, ip-licensing, verification, semiconductor-tools, bottleneck-layer]
---

# Chip design & EDA

The layer that sits **between architecture (hyperscaler/lab design intent) and silicon (foundry production)**. Every chip in our wiki — NVIDIA Blackwell/Rubin, AMD MI455X, Cerebras WSE, hyperscaler ASICs — passes through this layer. Until now uncovered; surfaced via [[The EDA Primer From RTL to Silicon (2026)]].

## Sub-domains

- **EDA tools** (Electronic Design Automation) — the software that translates RTL code into manufacturable GDSII layout. Big Three duopoly+1: [[Synopsys]], [[Cadence Design Systems]], [[Siemens EDA]].
- **IP licensing** — pre-designed/pre-verified blocks reused across designs. ARM (processor IP), Synopsys DesignWare (interface IP — USB, PCIe, DDR), Broadcom (high-speed I/O), smaller vendors (GPIO, crypto accelerators).
- **PDK access** (Process Design Kit) — tiered foundry-controlled translation between manufacturing process and EDA tools; gates who can design at the leading edge.
- **Verification compute** — increasingly cloud-burst on AWS/Azure during pre-tapeout crunch; PB-scale data per design.
- **Design services** — third-party design houses for fabless companies without in-house teams.

## Bottlenecks

- [[EDA tool consolidation]] — Big Three control essentially every advanced-node tapeout; multi-year switching costs (severity: structural · layer: chip-design)
- [[Chip design talent shortage]] — verification engineers fastest-growing job category; 1/3 of US semi workforce over 55; complexity grows 50%/yr vs productivity 20%/yr (severity: acute · layer: chip-design)

## Where the money flows

- **EDA software licenses** — recurring revenue at the Big Three; gross margins comparable to enterprise software, with deep customer lock-in
- **IP licensing** — ARM (broad CPU/GPU IP), Synopsys DesignWare ($Bs revenue in interface IP), smaller IP vendors
- **Verification compute** — cloud spend at AWS/Azure scales with chip complexity
- **Test equipment** — Teradyne (TER), Advantest (6857.T) on ATE for every chip produced
- **Customer-Owned Tooling (COT)** trend — hyperscalers building internal design capability for custom ASICs, putting pressure on the traditional licensed-tool model. Covered in paywalled Part 2 of the EDA Primer series.

## Key companies (mapped to functions)

| Function | Synopsys | Cadence | Siemens EDA | Other |
| --- | --- | --- | --- | --- |
| Linting | VC SpyGlass | — | — | — |
| Simulation | VCS (market leader) | Xcelium | Questa | — |
| Formal verification | VC Formal | JasperGold (market leader) | — | — |
| Synthesis | Design Compiler (1987 — first) | Genus | — | — |
| Place & route | IC Compiler II | Innovus | — | — |
| Physical verification | IC Validator | Pegasus | Calibre (dominant in DRC/LVS) | — |
| Timing signoff | PrimeTime | Tempus | — | — |
| Power signoff | RedHawk-SC | Voltus | — | — |
| Emulation | ZeBu (23B gates) | Palladium Z3 (48B gates) | — | — |
| TCAD (foundry-side) | Sentaurus / Mystic / QuantumATK | — | — | — |
| ATE | TestMAX | — | — | Teradyne, Advantest |
| Processor IP | — | — | — | ARM (dominant) |
| Interface IP | DesignWare | — | — | Broadcom (custom HPC), smaller vendors |

## Why it matters for the bottleneck thesis

1. **Adds another structural chokepoint** behind the physical-supply bottlenecks ([[CoWoS packaging capacity]], [[HBM allocation]]). Even if TSMC could double CoWoS capacity overnight, chip designs still need to flow through Big Three EDA tools and a shrinking pool of verification engineers.
2. **EDA vendor pricing power is durable.** Switching costs (institutional knowledge, foundry PDK integration, tool-flow integration) compound over time. Aart de Geus's [[Synopsys]] Design Compiler from 1987 is still the industry standard nearly four decades later.
3. **Margin support from talent scarcity.** When customers can't hire engineers, they pay for tools that make existing engineers more productive. Talent shortage = EDA pricing tailwind.
4. **Reinforces [[Capex trajectory thesis]]** — supply-side lock-in extends from the foundry (TSMC) all the way back into the design tooling.

## Open questions

- Pace of **Chinese EDA effort** (covered in paywalled Part 2) — is there a meaningful alternative emerging, and how does it interact with US export controls?
- **AI disrupting EDA** (covered in paywalled Part 3) — agentic chip design from NVIDIA and the Big Three. Could be the biggest design-productivity unlock in decades, but cuts both ways: if AI dramatically lifts design productivity, the talent shortage thesis weakens.
- **Customer-Owned Tooling** trend — hyperscaler in-house design capabilities (Google, Meta, Microsoft, Amazon, OpenAI ASIC teams) shift some demand from licensed Big Three tools to internal pipelines. How material is this dynamic in 2026-2028?
- Will any of the **post-1990 EDA disruptors** (Magma was acquired by Synopsys; others have failed) ever break through, or is the Big Three structurally permanent?

## Related layers

- [[Compute & silicon]] — downstream consumer of EDA output (foundries take the GDSII files)
- [[Datacenter physical]] — where the designed chips ultimately deploy
