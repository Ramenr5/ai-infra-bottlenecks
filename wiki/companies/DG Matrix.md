---
type: company
created: 2026-05-26
updated: 2026-05-26
sources: ["[[SemiAnalysis - Inside the 800VDC Revolution (2026)]]"]
layer: power
role: supplier
tags: [sst, 800vdc, abb-backed, nvidia-mgx-reference, startup]
---

# DG Matrix

US-based Solid State Transformer (SST) startup; **the only SST included in NVIDIA's MGX reference architecture**. ABB-backed, Infineon SiC supply deal, NC State FREEDM Systems Center origin.

## Key facts

- **Product**: Interport Cell Series — LV-input SST as alternative to conventional rectifier+PSU stack
- **Efficiency claim**: up to 98.5%
- **Cooling**: integrated liquid cooling (vs Novos Power air-cooled)
- **UL certification target**: end Q2 2026
- **Backers/partners**: ABB (strategic backer), Infineon (SiC supply deal), NVIDIA (MGX reference inclusion)
- **Origin**: NC State University FREEDM Systems Center — academic foundation that has demonstrated 210 kHz switching at 3.3 kV SiC with 99% efficiency target for modular DC-DC SST variants

## Why it matters for the thesis

- **NVIDIA MGX reference inclusion** = single most important validation for an SST startup; effectively a co-design relationship
- Hub of the 800VDC transition picks-and-shovels list; pure-play exposure to [[800VDC transition]] bottleneck
- LV-input SST sidesteps the 3,300V-class SiC supply constraint that gates MV-input SSTs → earlier-to-market variant
- Targeting both 4.2 MW skids (deployable today alongside AC distribution) and MV-input units as SiC matures

## Risks

- Pre-UL-cert as of May 2026 (every deployment requires per-site AHJ approval)
- Heavy ABB strategic relationship = optionality bounded by ABB's customer reach
- ETH Zurich research (Kolar) found line-frequency transformer + SiC rectifier can match SST efficiency → competitive substitute risk
- Capital-intensive ramp ($320M flowed into SST startups in 12mo to Mar 2026 means competition is also funded)

## Related

- Source: [[SemiAnalysis - Inside the 800VDC Revolution (2026)]]
- Bottleneck: [[800VDC transition]]
- Layer: [[Power & energy]]
- Competitors: [[Amperesand]], [[Heron Power]], [[Novos Power]]
- Partners: [[ABB]], [[Infineon]], [[NVIDIA]]
