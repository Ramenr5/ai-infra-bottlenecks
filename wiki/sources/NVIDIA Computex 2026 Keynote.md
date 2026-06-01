---
type: source
created: 2026-06-01
updated: 2026-06-01
tags: [primary-source, nvidia, computex, gtc-taipei, vera-rubin, roadmap, demand, anchor-source]
---

# NVIDIA Computex 2026 Keynote (GTC Taipei)

**Speaker:** Jensen Huang (NVIDIA CEO) · **Date:** 2026-06-01 Taiwan (May 31, 8pm PT) · Taipei Music Center; GTC Taipei June 1-5
**Coverage URLs:** [NVIDIA blog live](https://blogs.nvidia.com/blog/nvidia-gtc-taipei-computex-2026-news/) · [Tom's Hardware — Vera Rubin in depth](https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date) · [DCD — Blackwell successor / roadmap](https://www.datacenterdynamics.com/en/news/nvidia-unveils-blackwell-successor-updates-product-roadmap-and-makes-ai-factories-and-accelerated-computing-announcements/) · [CNBC](https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html)

> [!warning] Provenance + coverage limits
> Assembled from credible secondary coverage (Tom's Hardware, CNBC, TrendForce, Fortune, DCD) — **search-sourced, verify against NVIDIA primary before acting.** The raw video + full slide deck were not directly captured (NVIDIA blog / DCD 403'd the fetcher). Some Vera Rubin specs were first disclosed at **GTC 2026 (Mar)** / **CES 2026 (Jan)** and reaffirmed/extended here — provenance noted where it matters. This is the wiki's **anchor source on where NVIDIA (and the buildout) is heading** — cross-link liberally.

## THE headline — demand

- **Jensen: "at least $1 trillion in high-confidence demand and purchase orders for Blackwell and Rubin systems through 2027"** — framed as *purchase orders*, not just TAM (up from $500B a year ago). The single most important number for [[Capex trajectory thesis]] / [[AI investment momentum tracker]].
- 2026 framed as the **"inflection point for inference"** — agentic AI driving a fundamental shift in compute needs.
- "The second half of this year is going to be very, very busy with Grace Blackwell, Vera Rubin, and we have a **surprise new product we haven't told anyone about yet.**"

## Vera Rubin platform (the core)

**System-level:** Vera Rubin = **1.3 million components**, **~10× performance-per-watt vs Grace Blackwell**. "Six new chips, one AI supercomputer."

| Component | Spec |
| --- | --- |
| **Vera CPU** | **88-core** custom Arm |
| **Rubin GPU** | 2 near-reticle compute tiles on **TSMC 3nm-class** + 2 I/O dies; **288 GB HBM4** (8 stacks, 6.4 GT/s) ≈ **13 TB/s** bandwidth |
| **Rubin NVL144 rack** | 144 Rubin GPUs (in 72 packages) + 36 Vera CPUs; **3.6 NVFP4 EFLOPS inference / 1.2 FP8 EFLOPS training** |
| vs Blackwell | B300 NVL72 = 1.1 EFLOPS dense FP4 → **Rubin NVL144 = 3.6 EFLOPS dense FP4** (~3.3×) |
| **Rubin CPX** | new GPU class for **massive-context (1M+ token) inference**, uses cheaper/cooler **GDDR7** (not HBM) — disaggregated inference economics |
| Status | **mass production confirmed (CES 2026)**; first customer samples shipped; production ramp **Q2 2026**; launch **late 2026** |

## Roadmap (the cadence)

| Platform | Timing | Key step |
| --- | --- | --- |
| **Grace Blackwell** (GB300) | shipping | current |
| **Vera Rubin** (NVL144) | **late 2026** | 288 GB HBM4; 3.6 EFLOPS FP4 |
| **Rubin Ultra** (NVL576, Kyber racks) | **2027** | 4 compute chiplets, **~100 PFLOPS FP4/GPU**; **1 TB HBM4E (~32 TB/s)** — world's first 1TB-HBM AI GPU; rack **15 EFLOPS FP4 / 5 EFLOPS FP8**, up to 576 GPUs |
| **Feynman** | **2028** | reportedly on **TSMC A16** (1.6nm-class) |

## Networking

- **X1600** — converged **InfiniBand + Ethernet** switch (part of the Rubin system)
- **Spectrum-X Ethernet** — "world's first Ethernet fabric for AI"; **widespread adoption** announced
- (NVLink scale-up + Spectrum-X scale-out; CPO/co-packaged optics on the Rubin Ultra/Feynman horizon per prior [[SemiAnalysis - Co-Packaged Optics (2026)]])

## AI factories — named ODM/OEM partners

Building AI factories (cloud / on-prem / embedded / edge) with: **[[Asus]], [[Ingrasys]], [[Inventec]], [[Quanta Cloud Technology|QCT]], [[Supermicro]], [[Wiwynn]]** — the Taiwan ODM ecosystem that physically builds the racks. *(All currently orphan links — candidate pages.)*

## Supply chain → production (the picks-and-shovels read)

- **Foundry:** [[TSMC]] — Rubin on 3nm-class; Feynman on **A16 (1.6nm)**; NVIDIA also uses [[Samsung Electronics|Samsung]] for some wafers
- **Advanced packaging:** [[CoWoS packaging capacity|CoWoS]] — **NVIDIA books the vast majority of TSMC CoWoS capacity**
- **HBM4 memory:** **[[SK Hynix]] + [[Samsung Electronics|Samsung]]** the key HBM4 suppliers for Vera Rubin (+ [[Micron Technology|Micron]]); **NVIDIA is the sole/exclusive early client of HBM4** ("stands to reap the benefits… being the sole client for HBM4 for the time being") → [[HBM allocation]]
- **HBM packaging onshore:** [[SK Hynix]] building first **US HBM 2.5D packaging plant ($3.9B)** — supply-chain reshaping
- **Server capacity:** NVIDIA reportedly **booked entire server-plant capacity through 2026** (Blackwell + Rubin), pushing out other customers
- **Memory crunch:** Jensen — memory shortage *won't* hit NVIDIA (exclusive HBM4 early access), even as broader DRAM/HBM is sold out → corroborates [[HBM allocation]] / [[SemiAnalysis - The Memory Wall (DRAM)]]

## Consumer / "new era of PC" (per N1X coverage, The Verge 2026-05-30)

- **RTX Spark** AI-PC platform; **DLSS 4.5** Ray Reconstruction; 1,000+ RTX games/apps
- **"New era of PC"** — coordinated [[Microsoft]] + NVIDIA + Arm teaser; NVIDIA **N1 / N1X Arm laptop chips** (NVIDIA GPU IP + **[[MediaTek]]** SoC), OEMs **Lenovo + Dell**; **breaks Qualcomm's Windows-on-Arm exclusivity** — NVIDIA enters the client CPU/PC market

## Taiwan ecosystem (GTC Taipei pregame — the named supply chain)

NVIDIA framed the event around its Taiwan ecosystem (pregame chapters + guests):
- **AI Server Boom:** [[TSMC]] (YJ Mii), [[Quanta Cloud Technology|Quanta]] (Barry Lam), [[Wistron]] (Simon Lin)
- **PCs → Embedded AI:** Techman Robot, [[Asus]] (Jonney Shih), [[MediaTek]] (Rick Tsai)
- **Agentic AI + Robotics:** [[Delta Electronics]] (Simon Chang), Pegatron (T.H. Tung), [[Foxconn]] (Kathy Yang)
- **Building AI Infra for Taiwan:** NTU, Visionbay.ai, [[GMI Cloud]] (Alex Yeh) — sovereign/regional AI cloud
*(Server ODM cohort now ingested: [[Foxconn]], [[Quanta Cloud Technology]], [[Wistron]], [[Wiwynn]], [[Inventec]], [[Supermicro]], [[Ingrasys]], [[Asus]], [[MediaTek]], [[GMI Cloud]].)*

## Why it matters — connection map (this is the anchor)

- **Demand → [[Capex trajectory thesis]] / [[AI investment momentum tracker]]:** $1T *purchase orders* (not TAM) through 2027 is the strongest demand-lock signal in the wiki — a clear accelerating-regime input.
- **Supply → [[CoWoS packaging capacity]], [[HBM allocation]], [[TSMC]], [[SK Hynix]], [[Samsung Electronics]], [[Micron Technology]]:** Rubin's 288GB→1TB HBM trajectory + CoWoS booking + exclusive HBM4 = the memory/packaging bottleneck intensifies, and NVIDIA insulates itself.
- **Power → [[Power & energy]], [[800VDC transition]], [[Datacenter cooling]]:** Rubin Ultra Kyber racks (the 600 kW-class density driving [[800VDC transition]] and DLC [[Datacenter cooling]]) are now roadmap-confirmed.
- **Networking → [[Broadcom]], [[Coherent]], [[Lumentum]], [[Astera Labs]]:** Spectrum-X + X1600 + CPO horizon shape the connectivity layer.
- **Inference economics → [[SemiAnalysis - AI Value Capture (2026)]], [[ServiceNow]], [[CrowdStrike]]:** Rubin CPX (GDDR7, massive-context) cheapens inference → feeds the agentic-application demand the [CRWD+NOW narrative](../../narratives/2026-06-01 CRWD %2B NOW.md) rides.

## Implications — pages flagged for review/update
- [[NVIDIA]] — add Computex 2026: $1T POs reaffirmed, Vera Rubin 1.3M components / 10× perf/watt, X1600, Spectrum-X, Rubin CPX, RTX Spark / N1X
- [[AI investment momentum tracker]] — log $1T-PO reaffirmation + "inflection point for inference" as a strong accelerating signal
- [[CoWoS packaging capacity]] / [[HBM allocation]] — Rubin HBM4-exclusivity + CoWoS booking
- [[Capex trajectory thesis]] — purchase-orders (not TAM) framing strengthens the demand-lock pillar
- New page candidates (ODM AI-factory builders): [[Supermicro]], [[Wiwynn]], [[Ingrasys]], [[Quanta Cloud Technology]], [[Inventec]], [[Asus]]
- New concept candidate: **Rubin CPX / disaggregated inference** (GDDR7 inference economics)
