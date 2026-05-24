---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[The EDA Primer From RTL to Silicon (2026)]]"]
ticker: SIE.DE (parent — Siemens AG)
layer: chip-design
role: supplier
tags: [siemens, mentor-graphics, eda, calibre, questa, conglomerate]
---

# Siemens EDA

**The #3 of the Big Three EDA vendors**, formerly **Mentor Graphics** — one of the original 1981 "DMV" trio (Daisy, Mentor, Valid) that launched the EDA industry. Acquired by **Siemens AG in 2017 for $4.5 billion** and rebranded as Siemens EDA in 2021, part of the Siemens Digital Industries portfolio.

## Tool portfolio (per [[The EDA Primer From RTL to Silicon (2026)]])

| Stage | Tool | Position |
| --- | --- | --- |
| Simulation | Questa | **Strong in advanced debug and coverage analysis**; deep UVM support |
| Physical verification | **Calibre** | **Dominant in DRC/LVS** — essentially mandatory for foundry signoff |

## Distinct positioning

Unlike [[Synopsys]] and [[Cadence Design Systems]] (pure-play EDA companies), Siemens EDA is one division of a vast industrial conglomerate ([[Siemens AG]], ~€78B revenue). Three implications:

1. **Less concentrated investor exposure to EDA** — buying SIE.DE doesn't give you a pure EDA play; the dilution is significant
2. **Cross-subsidization possible** within Siemens — EDA can invest aggressively even during chip-cycle downturns
3. **Tight integration with Siemens' broader industrial software stack** (digital twin, PLM, simulation) — strategic moat in markets where EDA + multi-physics + factory automation matter together (automotive chips, industrial controllers)

## Why it matters for the bottleneck thesis

- **Calibre is irreplaceable in physical verification.** Every advanced-node tapeout typically runs Calibre for sign-off (alongside or instead of Synopsys IC Validator / Cadence Pegasus). Foundry DRC decks ship with Calibre support assumed.
- **Smaller market footprint than SNPS/CDNS** in totality, but **dominant in specific categories** — particularly the foundry-handoff stage where Calibre's deep foundry partnerships are hard to dislodge
- **Same talent-shortage tailwind** as the rest of the Big Three (see [[Chip design talent shortage]])

## Counterparties / competitive frame

- [[Synopsys]] (IC Validator) and [[Cadence Design Systems]] (Pegasus) compete in physical verification but rarely displace Calibre at the actual signoff step
- ARM, IP vendors integrate with Questa for verification

## Open questions

- Siemens EDA segment revenue/operating income (not always broken out separately in Siemens AG reporting)
- Adoption pace of Calibre alternatives at hyperscaler ASIC programs
- Integration with broader Siemens Digital Industries stack — what's the cross-sell opportunity?
- AI-driven verification roadmap

## What to watch

- Siemens segment-level disclosures (Digital Industries)
- Any major Calibre roadmap updates from Siemens
- Foundry-partnership announcements (Calibre support for new process nodes)
