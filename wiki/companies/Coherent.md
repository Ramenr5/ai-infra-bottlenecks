---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Coherent Q3 FY26 earnings]]"]
ticker: COHR
layer: datacenter
role: supplier
tags: [coherent, cohr, optical-transceivers, 800g, 1.6t, indium-phosphide, nvidia-backed, networking]
---

# Coherent

**Optical transceiver leader** — one of the two major vendors (with [[Lumentum]]) supplying 800G and 1.6T optical pluggables that backbone scale-out AI networking. **NVIDIA holds an equity stake** in Coherent, signaling strategic vendor lock-in for the optical supply chain.

## Q3 FY26 financials (per [[Coherent Q3 FY26 earnings]])

| Metric | Value |
| --- | --- |
| **Q3 revenue** | **$1.80B** (vs $1.41B Q3 FY25 — RECORD) |
| **Gross margin** | **39.6%** (vs 38.5% Q3 FY25) |

## Data center / optical transceiver segment

- **Data Center revenue: +13% QoQ, +37% YoY**
- Drivers: **transceivers + optical circuit switches (OCS)**
- **800G and 1.6T transceivers** key revenue drivers
- **1.6T ramping faster than expected**, better early-lifecycle margins
- 1.6T growth driver **through 2026 into 2027**

## Indium Phosphide capacity ramp (the upstream supply story)

- **6-inch indium phosphide produces >4× devices at <half the cost** vs 3-inch
- First transceivers with 6-inch components **shipped Q3 FY26**
- **Internal indium phosphide capacity to double by end of calendar 2026** (one quarter ahead of plan)
- Material gross margin tailwind from scale + cost-down

## Why it matters for the bottleneck thesis

1. **800G/1.6T transceivers are the bandwidth backbone** of scale-out AI networking. Every NVIDIA NVL72/NVL144 rack-to-rack link uses optical transceivers — Coherent + [[Lumentum]] + Fabrinet supply chain.
2. **NVIDIA equity backing** = strategic vendor lock-in. Coherent's roadmap is co-developed with NVIDIA's networking architecture (Spectrum-X, NVLink Switch).
3. **Indium phosphide capacity doubling** = upstream supply expansion; relieves a narrow part of the optical supply chain
4. **Three-layer picks-and-shovels stack:** optical components (Coherent), DSPs ([[Marvell Technology]], [[Broadcom]]), networking switches (Broadcom Tomahawk, Cisco, Arista) — all exposed to AI scale-out
5. Sits in `layer: datacenter` because product fundamentally serves rack-to-rack networking within the data center footprint

## Counterparties / competitive frame

- **[[Lumentum]] — direct peer in optical transceivers; both supply 800G/1.6T.** NVIDIA dual-source strategy now explicit: Coherent has equity stake from NVIDIA; Lumentum received **$2B NVIDIA investment** for R&D + new US fab (per [[Lumentum Q3 FY26 earnings]]). NVIDIA cannot afford single-vendor optical dependency.
- Fabrinet — optical contract manufacturer (sometimes competitor, sometimes partner)
- [[Marvell Technology]] / [[Broadcom]] — DSP suppliers (chips inside the transceivers)
- Co-packaged optics (CPO) — long-term threat to pluggable transceiver model; NVIDIA + others exploring CPO roadmaps
- NVIDIA = anchor customer + equity holder

## Strategic position

- Broader laser/photonics conglomerate (Coherent acquired II-VI 2022) — not pure-play AI optical
- Industrial laser and instrumentation segments dilute AI exposure but provide stability
- NVIDIA equity backing is the single strongest strategic signal

### CPO long-term threat — quantified

Per [[SemiAnalysis - Co-Packaged Optics (2026)]]:

- **Scale-out adoption: "limited" near-term** (CPO TCO/power benefits "not compelling enough for customers")
- **Scale-up CPO = killer app for late 2020s** — Rubin Ultra NVL576 (late 2027) + Trainium 4 with Celestial AI CPO ($1B+ run-rate by end 2028)
- Pluggable scale-out business intact through 2027+; scale-up disruption ramps from 2027-2028
- Power savings 65-73% for CPO vs pluggable at 800G = structural displacement pressure
- Material long-term margin pressure on the pluggable transceiver TAM

## Open questions

- 1.6T transceiver ASP and unit ramp curves
- Market share vs [[Lumentum]], Fabrinet (specifics not disclosed)
- NVIDIA equity stake size and any change in disclosure
- Co-packaged optics roadmap (could disrupt pluggable transceiver model long-term)
- Industrial / non-AI segment headwinds in 2026

## What to watch

- Data Center segment growth sequencing through FY27
- Indium phosphide capacity milestones
- 1.6T transceiver unit shipment growth
- NVIDIA partnership disclosures
