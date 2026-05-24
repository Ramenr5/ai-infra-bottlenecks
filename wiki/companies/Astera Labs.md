---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Astera Labs Q1 2026 earnings]]"]
ticker: ALAB
layer: datacenter
role: supplier
tags: [alab, astera-labs, ai-connectivity, pcie, cxl, retimers, fabric-switches, scorpio, aries]
---

# Astera Labs

**Pure-play AI connectivity silicon.** The merchant supplier for the connectivity layer between accelerators and rack-scale AI systems — retimers (signal integrity), smart cable modules, fabric switches, and CXL memory controllers. IPO'd March 2024; one of the cleanest pure-play AI buildout names in public markets.

## Q1 2026 financials (per [[Astera Labs Q1 2026 earnings]])

| Metric | Value |
| --- | --- |
| **Q1 revenue** | **$308.4M** (+93% YoY, +14% QoQ — RECORD) |
| **Non-GAAP gross margin** | **76.4%** |
| **Q2 guide** | **$355-365M** (+15-18% sequential) |
| Q2 GM guide | ~73% (non-cash warrant impact) |

## Product portfolio

| Product line | Function | Status |
| --- | --- | --- |
| **Scorpio** | AI fabric switches (rack-scale, scale-up) | Initial volume of 320-lane X-Series; on track to be largest product line by year-end; full production H2 2026 |
| **Aries** | PCIe Gen 5/Gen 6 retimers + smart cable modules | Early adoption across scale-up + scale-out platforms; PCIe Gen 6 (Aries + Scorpio) >1/3 of total revenue |
| **Taurus** | Ethernet smart cables (Active Electrical Cables) | Broad demand from GPU, XPU, general-purpose systems |
| **Leo** | CXL memory controllers | Early ramp with Microsoft Azure M-Series; **custom KV Cache design secured for 2027 shipment** |

## Why it matters for the bottleneck thesis

1. **Connectivity is a real bottleneck** between accelerator scaling and rack-scale deployment. NVIDIA's NVL72 wires together 72 GPUs at 900 GB/s NVLink — signal integrity over copper at those speeds requires retimers. Aries is the merchant silicon for this; alternatives are either custom-designed (cost-prohibitive at small volumes) or sub-optimal.
2. **+93% YoY revenue + 76% GM** = one of the cleanest AI picks-and-shovels in public markets
3. **Microsoft Azure M-Series Leo win** + **custom KV Cache for 2027** = leading indicator of CXL memory expansion (relevant for [[Data wall|long-context inference workloads]])
4. **Scorpio AI fabric switches** = direct play on scale-out networking, complementing [[Broadcom]] Tomahawk on the merchant-silicon side
5. **NVIDIA reference design exposure** = anchor customer relationship, similar dynamic to [[SK Hynix]] HBM

## Counterparties / competitive frame

- **[[NVIDIA]] reference designs include Aries** for PCIe Gen 6 signal conditioning
- Hyperscaler ASIC programs (Microsoft Maia, Google TPU, AWS Trainium, Meta MTIA) use ALAB connectivity
- [[Broadcom]] competes more on switch ASICs (Tomahawk); ALAB more on retimers + fabric switches at the rack-scale
- [[Marvell Technology]] competes on optical DSPs (different segment of connectivity)
- Hyperscaler internal designs displacing merchant silicon = COT-style risk

## Why it sits in `layer: datacenter` not `layer: compute`

Astera Labs makes silicon, so layer-wise it could plausibly be compute. But its products are fundamentally about rack-scale and inter-rack connectivity within the datacenter — that's the [[Datacenter physical]] layer's natural home for connectivity. We're tagging accordingly.

## Open questions

- Customer concentration disclosures (NVIDIA reference-design exposure as % of revenue)
- 1.6T PCIe roadmap / next-generation product cadence
- COGS curve as Scorpio scales (high-margin SKU but mass-production economics yet to be proven)
- Hyperscaler internal designs displacing merchant silicon (COT risk)
- Co-packaged optics adoption could disrupt some of the connectivity model long-term

## What to watch

- Quarterly Scorpio shipment ramp
- Leo customer wins beyond Microsoft Azure M-Series
- Gross margin sustainability above 73-76%
- Any commentary on NVIDIA reference-design customer mix
