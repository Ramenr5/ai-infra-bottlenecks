---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[The EDA Primer From RTL to Silicon (2026)]]"]
ticker: CDNS
layer: chip-design
role: supplier
tags: [cadence, eda, innovus, jaspergold, palladium, place-and-route, formal-verification]
---

# Cadence Design Systems

**The narrow #2 of the Big Three EDA vendors.** Formed in 1988 through the merger of SDA Systems and ECAD, quickly becoming the leading provider of IC layout and place-and-route tools. Particularly strong in **formal verification, placement, and emulation** — categories where it leads [[Synopsys]] head-to-head.

## Tool portfolio (per [[The EDA Primer From RTL to Silicon (2026)]])

| Stage | Tool | Position |
| --- | --- | --- |
| Simulation | Xcelium | Competitive on multi-core perf, mixed-signal |
| Formal verification | **JasperGold** | **Market leader** in formal verification |
| Synthesis | Genus | Competes with Synopsys Design Compiler |
| Unified flow | iSpatial | Embeds Innovus placement into Genus |
| Equivalence checking | Conformal LEC | Industry standard alternative to Synopsys Formality |
| Place & route | **Innovus** | **Top-tier**; institutional Cadence-shop standard |
| Physical verification | Pegasus | Competes with Calibre + IC Validator |
| Timing signoff | Tempus | Competes with PrimeTime |
| Power signoff | Voltus | Competes with RedHawk-SC |
| Emulation | **Palladium Z3** | **48B gates capacity, 1.5× Z2** (industry-leading scale) |

## Why it matters for the bottleneck thesis

- **Picks-and-shovels alongside Synopsys** — most large chip design teams license **at least two of the Big Three**, so Synopsys and Cadence are essentially **co-monopolists**, not zero-sum competitors
- **Lead categories matter** — JasperGold for formal verification is hard to replace; design teams running formal-heavy flows are Cadence-anchored
- **Palladium Z3 emulation at 48B gates** is the largest emulation capacity available — critical for hyperscaler-scale AI accelerators (AMD MI455X = 320B transistors), where pre-silicon emulation is mandatory before tapeout
- **Same talent-shortage tailwind as Synopsys** — see [[Chip design talent shortage]]

## Counterparties / competitive frame

- [[Synopsys]] — head-to-head across most stages; usually co-licensed rather than displaced
- [[Siemens EDA]] — strong specifically in Calibre (physical verification)
- ARM, IP vendors — Cadence licenses + integrates IP into its flows
- Customer-Owned Tooling — same hyperscaler internalization risk as Synopsys faces

## Recent strategic moves

- Acquisition of BETA CAE (multi-physics simulation) extends Cadence into Ansys-like simulation territory
- Continued tightening of unified flows (iSpatial brings PnR into synthesis)
- AI-driven design assistance (paywalled SemiAnalysis Part 3 covers this)

## Open questions

- Revenue mix between EDA tools and IP/services
- iSpatial unified-flow adoption pace
- AI-driven design tool roadmap
- Exposure to COT trend at hyperscalers
- Operating margin trajectory

## What to watch

- Quarterly tool licensing growth
- Any updates on Palladium successor / emulation roadmap
- Customer concentration disclosures (most large chipmakers are licensees, but mix matters)
- BETA CAE / multi-physics integration progress
