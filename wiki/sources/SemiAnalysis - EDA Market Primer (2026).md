---
type: source
created: 2026-05-25
updated: 2026-05-25
tags: [primary-source, semianalysis, eda, market-structure, oligopoly, china-eda]
---

# SemiAnalysis — EDA Market Primer: Market Dynamics, Cadence, Synopsys, Siemens, China EDA Rise

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/eda-market-primer](https://newsletter.semianalysis.com/p/eda-market-primer)

## Headline framing

EDA is a **durable Big-3 oligopoly** with 85%+ combined share, growing at **13% CAGR vs 7% semi R&D** through verification intensity, AI tool premiums, and node-transition pricing power. Revenue compounds without net-new seats: contractual escalators (3-7% annual) + AI usage uplift (~20% renewal premium) + customer retention >95% drive structural margin expansion.

Companion to [[The EDA Primer From RTL to Silicon (2026)]] — that one was the **technical** primer (what the tools do); this one is the **market** primer (who wins, who pays, why it's durable).

## Market sizing

| Metric | Value |
| --- | --- |
| Current EDA market (2025) | **$18B** |
| Expanded TAM by 2030 | **$28-31B** ($18B EDA+IP + $10B simulation + $3B systems software) |
| Growth rate | **13% CAGR** EDA vs 7% semi R&D |

## Big-3 revenue (CY2025)

| Vendor | Revenue | Notes |
| --- | --- | --- |
| **[[Synopsys]]** | **$8B** | Including Ansys |
| **[[Cadence Design Systems\|Cadence]]** | **$5.30B** | — |
| **[[Siemens EDA]]** | $2.2-2.5B (est.) | — |
| Combined | **~$16B**, 85%+ share | — |

## Tool-level market share (advanced nodes 7nm+)

| Step | Leader | Share |
| --- | --- | --- |
| Synthesis | **Synopsys Design Compiler** | **84-85%** |
| Place & route | Cadence Innovus | 50-55% (Synopsys ICC2/Fusion 40-45%) |
| **Signoff timing** | **Synopsys PrimeTime** | **90%+** |
| **Physical verification** | **Siemens Calibre** | **85%+** |
| Functional simulation | Synopsys VCS 45-50% / Cadence Xcelium 40-45% | — |
| Emulation | Cadence Palladium 55-60% / Synopsys ZeBu 35-40% | — |

This is exactly the "monopoly per tool, balanced across the flow" structure that drives 99%+ retention on signoff/analog.

## Customer concentration & backlog

| Vendor | Backlog | Backlog as years of revenue |
| --- | --- | --- |
| Synopsys | $11.4B | **1.6 years** |
| Cadence | $7.8B | **1.5 years** |

- Intel was Synopsys's largest customer at **12.6% of FY24 revenue ($772M)**; dropped below 10% in FY25
- Customer retention: **95%+** annually on core tools; **99%+** signoff/analog
- System companies (hyperscalers, Apple, Tesla) now **45% of Cadence EDA demand** — the AI customer shift is happening live

## Spend per engineer (annual)

| Customer type | Spend/engineer |
| --- | --- |
| Fabless (NVIDIA, Qualcomm, AMD) | **$80-150K** |
| IDM (Intel, TI) | $40-80K |
| Turnkey ASIC (Broadcom ASIC) | $200-500M total |

## Margin expansion track record

| Vendor | 2006/2009 op margin | FY24 op margin |
| --- | --- | --- |
| Synopsys | 14% | **37.3%** |
| Cadence | -11% | **42.5%** |

Synopsys target post-Ansys: mid-40s% non-GAAP.

## Recent M&A consolidation

| Deal | Buyer | Price | Date |
| --- | --- | --- | --- |
| **Ansys** | Synopsys | **$35B** | Jul 2025 |
| MSC Software | Cadence | $3.25B | Sept 2025 |
| Altair | Siemens | $5.9B | 2024 |
| BETA CAE | Cadence | $1.24B | Q2 2024 |
| OpenEye | Cadence | $500M | 2022 |
| Mentor Graphics | Siemens | $4.5B | 2017 |
| Software Integrity (divest) | Synopsys → BlackRock/Clearlake | $2.1B | 2024 |

## AI tool premium dynamics

- AI tool renewal: **~20% revenue premium** over baseline
- AI features: **3-5× token consumption** per design project
- Cadence **Cerebrus AI tapeouts**: **180 → 1,000+ in 8 quarters**
- Hyperscaler custom silicon = $15-20B new design activity over past 5 years

## China EDA

The article publicly **names China EDA companies exist** and quantifies Synopsys China exposure (16% FY24 → 12% FY25 revenue) but withholds vendor names, capability gap, and 2019-2025 export control timeline behind paywall.

Synopsys earnings commentary: China vendors "competing at mature nodes."

## Key quotes

- **Sassine Ghazi (Synopsys CEO):** "Fusion Compiler is the embodiment of what happens when you break down the walls between synthesis, place and route, and signoff. That unified data model is what gives us structural advantage."
- **Synopsys 2016Q1:** "100% of the 10nm and 7nm tape-outs completed thus far utilized Synopsys design tools."

## Cross-reference

- [[Synopsys]], [[Cadence Design Systems]], [[Siemens EDA]] — Big-3 pages
- [[Chip design & EDA]] — layer page; numbers here strengthen the oligopoly framing
- [[EDA tool consolidation]] — bottleneck page; the 95%+ retention + 1.5-yr backlog data are direct proof of structural lock-in
- [[Chip design talent shortage]] — $80-150K/engineer fabless spend rate is the cleanest indicator of design complexity scaling
- [[The EDA Primer From RTL to Silicon (2026)]] — technical companion

## Implications — pages flagged for human review

- [[Synopsys]] — add CY2025 $8B revenue (incl. Ansys), $11.4B backlog, FY24 37.3% op margin, Intel customer concentration data
- [[Cadence Design Systems]] — add CY2025 $5.30B, $7.8B backlog, 42.5% op margin, 45% hyperscaler/system-company demand share, Cerebrus tapeout growth (180→1,000+ in 8q)
- [[Siemens EDA]] — confirm $2.2-2.5B revenue estimate
- [[EDA tool consolidation]] — concentrate the bottleneck severity claim with the 95%/99% retention numbers and 1.5-yr backlog as forward visibility
- [[AI infrastructure investment map (May 2026)]] — EDA Big-3 is a higher-conviction "rent-extracting toll" position than currently framed; consider promoting

## Paywall

Public: market sizing, Big-3 shares, tool-level shares, customer concentration, margin history, M&A, AI tool premium. Paywall covers: R-squared lock-in matrix, China vendor financials, export control timeline (2019-2025), capability gap assessment, customer case studies, disruption risk.
