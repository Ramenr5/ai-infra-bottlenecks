---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[The EDA Primer From RTL to Silicon (2026)]]"]
ticker: SNPS
layer: chip-design
role: supplier
tags: [synopsys, eda, design-compiler, designware, ip, verification, tcad]
---

# Synopsys

**The broadest of the Big Three EDA vendors.** Founded 1986 by Aart de Geus and colleagues from GE's research group. Released **Design Compiler** in 1987 — the **first commercial logic synthesis tool** — which fundamentally enabled today's billion-transistor SoCs. Still the industry-standard synthesis tool nearly four decades later.

## Tool portfolio (per [[The EDA Primer From RTL to Silicon (2026)]])

| Stage | Tool | Position |
| --- | --- | --- |
| Linting | VC SpyGlass | Industry standard |
| Simulation | **VCS** | **Market leader** in raw simulation speed |
| Formal verification | VC Formal | Competes with Cadence JasperGold |
| Synthesis | **Design Compiler** (NXT, Ultra, Vision GUI) | **Original and still dominant** (1987-) |
| Unified flow | Fusion Compiler | Synthesis + PnR + timing in one engine |
| Equivalence checking | Formality | Industry standard |
| Place & route | IC Compiler II | Top-tier with Cadence Innovus |
| Physical verification | IC Validator | Competes with Calibre + Pegasus |
| Timing signoff | PrimeTime | Industry standard |
| Power signoff | RedHawk-SC | Top-tier |
| Emulation | **ZeBu-200** | 23B gates capacity, 2× predecessor speed |
| AI-driven exploration | DSO.ai | First-party AI tool for design space optimization |
| Post-silicon test | TestMAX family | ATPG, DFT, yield diagnosis |
| TCAD (foundry) | **Sentaurus / Mystic / QuantumATK** | Industry standard for next-gen transistor design |
| Failure analysis | Avalon | Maps defects to circuit schematics |

## Two distinct businesses

1. **EDA tools** — software licenses for chip designers (recurring SaaS-like revenue with deep lock-in)
2. **DesignWare IP** — pre-verified interface IP (USB, PCIe, DDR memory controllers, hundreds of other blocks). When fabless companies don't want to design a PCIe Gen 6 controller from scratch, they license it from Synopsys. Material revenue contribution.

## Why it matters for the bottleneck thesis

- **Picks-and-shovels on every advanced-node tapeout.** Every NVIDIA GPU, AMD MI-series, hyperscaler ASIC, [[Cerebras Systems]] WSE goes through Synopsys tools at multiple stages.
- **Switching costs deep.** Design teams build institutional knowledge on Synopsys flows over multi-year programs. Moving away is rarely economic.
- **TCAD position is uniquely strategic.** Sentaurus/Mystic build the **foundation PDKs** that [[TSMC]] / [[Samsung Foundry]] / [[Intel Foundry]] ship to customers — Synopsys has visibility into next-gen process technology before anyone outside the foundry-customer JDA loop.
- **AI-driven EDA (DSO.ai)** is the first commercial AI-for-chip-design tool. Part 3 of the SemiAnalysis series (paywalled) covers the broader competitive landscape here.
- **Talent shortage = tailwind.** [[Chip design talent shortage]] forces customers to pay for better tools that make limited engineers more productive.

## Counterparties / competitive frame

- [[Cadence Design Systems]] — head-to-head competitor across most categories
- [[Siemens EDA]] — strong specifically in physical verification (Calibre)
- Customer-Owned Tooling (COT) trend at hyperscalers — internal design teams may reduce some tool dependency over time
- Chinese EDA effort — exists, but trails materially as of 2026 (per paywalled SemiAnalysis Part 2)

## Open questions

- Annual recurring revenue growth vs. license model evolution
- Pace of DSO.ai and broader AI-driven EDA tool adoption
- DesignWare IP segment contribution vs. tool licensing
- Exposure to Customer-Owned Tooling trend at hyperscalers
- Synopsys/Ansys deal status and integration (announced 2024) — extends into multi-physics simulation
- Operating margin trajectory as talent-scarcity tailwind plays out

## What to watch

- Quarterly earnings for tool license vs IP license revenue mix
- DSO.ai adoption by customers
- Any updates on COT trend impact
- China revenue trajectory under export-control regime
