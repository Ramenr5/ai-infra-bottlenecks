---
type: synthesis
created: 2026-06-03
updated: 2026-06-03
sources: ["[[Broadcom Q2 FY26 earnings (2026)]]", "[[NVIDIA Computex 2026 Keynote]]", "[[AI value capture across the stack]]", "[[SemiAnalysis - Co-Packaged Optics (2026)]]"]
tags: [synthesis, networking, interconnect, ethernet, nvlink, optics, cpo, value-capture, toll]
---

# Networking & interconnect

**The layer that ties GPUs/XPUs into one machine — and a high-margin toll on the whole AI buildout.** As clusters scale to 100k–1M+ accelerators, the *connections between chips* become as scarce and value-dense as the chips themselves. The investable thesis: **networking is where the durable rent sits**, more so than the compute it connects.

## The view (as of 2026-06-03)
**Own the interconnect toll, not the accelerator volume.** Two independent tells point the same way:
- **NVIDIA: "we are now the largest networking company in the world"** ([[NVIDIA Computex 2026 Keynote]]) — networking (NVLink + Spectrum-X + the $2B Marvell NVLink-Fusion "toll booth") is now a first-class NVIDIA business, not an afterthought.
- **Broadcom: "demand for networking is simply insatiable"; networking ≈ 40% of AI semi revenue and the *rich-margin* part, while custom XPU/TPU margins compress at scale** ([[Broadcom Q2 FY26 earnings (2026)]]).
When the two biggest AI-silicon vendors *both* say the money is in the wires, that's the signal: **interconnect = pricing power; compute volume = thinner margin.**

## Why scarcity migrates to the wires (the mechanism)
- **Scale-up** (inside the rack/domain): NVLink (copper) binds GPUs into one memory domain; bandwidth per GPU (260 TB/s NVL72) is the differentiator. NVIDIA-controlled; merchants pay the NVLink-Fusion tax to interoperate.
- **Scale-out** (across racks/datacenter): Ethernet fabric (Broadcom Tomahawk/Jericho near-monopoly; NVIDIA Spectrum-X challenging) connects >1M accelerators.
- **Optics**: as copper hits reach limits past 1–2 racks, the link goes **optical** (transceivers → **co-packaged optics, CPO**). Every bandwidth step-up multiplies optical content.
- **Disaggregation amplifies it:** [[Disaggregated inference (Rubin CPX)]] + CPU-scaling ([[CPU scaling (host-CPU ratio)]]) split work across more boxes → *more* links per unit of compute. Networking demand grows *faster* than compute.

## The map — who captures the interconnect rent
| Sub-layer | Names | Position |
| --- | --- | --- |
| **Scale-up fabric** | [[NVIDIA]] (NVLink), [[Marvell Technology]] (NVLink Fusion partner) | NVIDIA-controlled toll; Marvell paid $2B to co-own a piece |
| **Scale-out switch ASIC** | [[Broadcom]] (Tomahawk 6 = 102.4 Tbps, Jericho 4), [[NVIDIA]] (Spectrum-X) | Broadcom near-monopoly merchant; rich margins |
| **Connectivity / retimers / SerDes** | [[Astera Labs]] (Scorpio/Leo), [[Marvell Technology]] (custom + optical DSP) | the "glue" — PCIe/CXL/fabric signal integrity |
| **Optical transceivers** | [[Coherent]], [[Lumentum]] (1.6T ramping), [[Marvell Technology]] | content multiplies each bandwidth gen |
| **Co-packaged optics (CPO)** | [[Broadcom]], [[NVIDIA]], [[Coherent]]/[[Lumentum]] supply | the next step-change ([[SemiAnalysis - Co-Packaged Optics (2026)]]) |
| **CPO laser source (deepest chokepoint)** | [[Sivers Semiconductors]] (InP ELS) | CPO needs an *external* laser — micro-cap chokepoint, **architecture bet** |
| **Silicon-photonics substrate** | [[Soitec]] (Photonics-SOI) | the wafer every PIC is built on — "where SiPho begins" |
| **Optical / DCI systems** | [[Nokia]] (Infinera, NVIDIA-backed AI-RAN) | data-center-interconnect + AI-RAN turnaround |
| **Switch / box build (ODM)** | [[Celestica]] (hyperscaler switch programs), [[Foxconn]] et al. | builds the boxes — *thin rent* ([[AI value capture across the stack]]) |

## Why it's a toll (value-capture)
Per [[AI value capture across the stack]], rent = concentration × indispensability × capacity-constraint. Networking scores high on all three:
- **Concentration:** Broadcom near-monopoly in merchant Ethernet ASICs; NVIDIA controls NVLink; optics is an oligopoly.
- **Indispensable:** no large cluster works without the fabric — and it's *architecture-defining*, not a commodity port.
- **Margin-confirmed:** Broadcom explicitly says networking is the rich-margin segment vs commoditizing XPUs. The interconnect is the part of the silicon bill that *holds* price.
**Read-through:** networking is **robust to the merchant-vs-custom-silicon war** — whoever wins compute (NVIDIA GPU or hyperscaler XPU), the boxes still need switches + optics. A "own the tolls" position (like memory/TSMC) rather than a "trade the cycle" one.

## Demand visibility (the order-book extension)
Broadcom's **>$30B AI bookings + visibility to 2028** (and 2028 > 2027) **extends the demand horizon a year beyond NVIDIA's "through-2027" order book** — and networking rides every gigawatt of it. Custom-silicon GW (Meta 1→3 GW, OpenAI 1.3→10 GW) each carry networking content. → strengthens [[Capex trajectory thesis]].

## Tradable read
- **Highest conviction (the toll):** [[Broadcom]] (merchant switch + custom + the margin tell), [[NVIDIA]] (NVLink/Spectrum-X), [[Marvell Technology]] (the "$1T networking" optionality Jensen flagged + NVLink Fusion).
- **Optical content compounders:** [[Coherent]], [[Lumentum]] (1.6T → CPO), [[Astera Labs]] (connectivity glue).
- **The hedge logic:** networking wins under *either* the NVIDIA-merchant or hyperscaler-custom outcome — pair it with the other outcome-robust tolls (memory, TSMC) in [[AI value capture across the stack]].
- **Bear / watch:** hyperscalers internalizing networking ASICs; Spectrum-X vs Broadcom share war compressing merchant margins; CPO transition timing/yield.

## Leading indicators
- Broadcom/Marvell **networking** revenue mix + margin (rich-margin thesis intact?).
- **Optical** 1.6T → CPO ramp (Coherent/Lumentum order books).
- NVLink-Fusion adoption (does the merchant ecosystem pay the toll?).
- Hyperscaler **in-house switch** efforts (the margin threat).

## Confidence + aging
| Claim | Confidence | Half-life |
| --- | --- | --- |
| Networking = high-margin toll | **High** | ~12 mo |
| Demand grows faster than compute (disaggregation) | Moderate-high | ~9 mo |
| Robust to merchant-vs-custom war | **High** | ~12 mo |
| Optics content compounds each gen | High | ~12 mo |

**Re-evaluate on:** a networking-margin roll-over at Broadcom/Marvell; hyperscaler in-house switch traction; CPO delays.

## Related
- [[AI value capture across the stack]] · [[Disaggregated inference (Rubin CPX)]] · [[CPU scaling (host-CPU ratio)]] · [[Capex trajectory thesis]] · [[Broadcom]] · [[Marvell Technology]] · [[Astera Labs]] · [[Coherent]] · [[Lumentum]] · [[NVIDIA Computex 2026 Keynote]]
