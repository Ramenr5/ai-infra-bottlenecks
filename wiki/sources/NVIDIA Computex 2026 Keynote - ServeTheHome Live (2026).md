---
type: source
created: 2026-06-01
updated: 2026-06-01
sources: []
tags: [primary-source, nvidia, computex, gtc-taipei, eyewitness, slides, vera, dsx, robotics]
---

# NVIDIA Computex 2026 Keynote — ServeTheHome Live (2026)

**Eyewitness slide-by-slide liveblog** of Jensen Huang's GTC Taipei / Computex 2026 keynote (2026-06-01). Author: Ryan Smith, ServeTheHome. Raw clipping at `raw/NVIDIA Computex 2026 Keynote Live Coverage.md`; **slide images processed visually** from `raw/assets/`. This is the **primary-grade record** that verifies the secondary-sourced [[NVIDIA Computex 2026 Keynote]] anchor — figures below are read directly off the keynote slides.

> [!note] Why this matters
> The anchor page was assembled from secondary coverage. These are the actual stage slides — so the numbers here **retire most of the keynote's VERIFY debt** and **correct one figure** (component count framing) and **clarify one** (Vera 1.8× vs 1.5×).

## Vera CPU — the full spec sheet (off the "NVIDIA Vera — CPU for Agents" slide)
![[NVIDIA-Computex-2026-Keynote-Vera-Specs.jpg]]
- **NVIDIA-custom Olympus core** (Armv9.2) · **88 cores / 176 threads**, Spatial Multithreading
- **10-wide instruction fetch/decode**; **2 MB L2/core + 164 MB L3**; **250–450 W TDP**
- **1.2 TB/s LPDDR5X ECC**; **40% lower loaded latency vs x86**; **3.4 TB/s core-to-core**; **1.4 TB/s PCIe Gen6**; **1.8 TB/s NVLink-C2C**
- 3× faster SQL (benchmarks slide)

> [!warning] The "1.8× vs 1.5×" reconciliation
> The **keynote slide headline reads "1.8× Agentic Sandbox Performance vs x86"** (bars: **Compilation 1.7× / Python 1.9×**, vs x86 = 1×). NVIDIA's *developer-blog* gives "**up to 1.5×** agentic sandbox under **full-socket load**." Both are NVIDIA-primary — different conditions (stage = workload-specific compilation/Python; blog = full-socket aggregate). **Cite as "1.8× on stage (compilation/Python) / ~1.5× full-socket per dev blog."** The earlier flat "correct 1.8→1.5" was too strong.

![[NVIDIA-Computex-2026-Keynote-Vera-Perf-Comparison.jpg]]

## Vera early adopters + market (off "NVIDIA Vera Opens Large Market")
![[NVIDIA-Computex-2026-Keynote-Vera-Early-Adopters.jpg]]
- **Early adopters: [[OpenAI]], [[Anthropic]], [[SpaceX]]** — the frontier-AI names are buying Vera CPUs.
- **Cloud:** Nebius, Oracle Cloud, [[CoreWeave]], NSCALE, [[Crusoe Energy|Crusoe]], firmus, Lambda, together.ai.
- "This market will surely be larger than the last" — *more agents than people* → the CPU-for-agents TAM thesis ([[CPU scaling (host-CPU ratio)]]).

## "Compute Is Revenue" — the AI-factory economics framework (off the chart)
![[NVIDIA-Computex-2026-Keynote-Useful-Life-1.jpg]]
NVIDIA's own model: **AI-factory revenue = the area under the curve**, expanded by **four levers** (this is the richer version of "tokens/watt"):
- **Tokens/Watt** → raises the *height* (Extreme co-design)
- **TTFT / TTFI** (time-to-first-token) → widens the *left/onset* (Extreme co-design)
- **MTBI** (mean time between incidents) → fills the *reliability dip* (Scale & Experience)
- **Useful Life** → extends the *right/duration* — **driven by "CUDA Ecosystem & Installed Base"**
- **This is NVIDIA's explicit rebuttal to the depreciation bear:** Jensen — *"You cannot predict how long your system will last. I can."* CUDA lock-in → longer useful life → more revenue area. Feeds directly into [[AI factory economics (tokens per watt)]]'s depreciation section.
- Confirmed on stage: **"Compute is revenue now. Compute is profit." "1 gigawatt means 1 gigawatt." "Throughput per Watt is revenue." "The more you buy, the more you make."** Cost of **1 GW of AI infrastructure → ~$100B**.

## NVIDIA DSX — the AI-factory platform (NEW)
- **DSX = NVIDIA's blueprint for building AI factories** (sim-first: simulate before building). Two named software layers:
  - **DSX MaxLPS** — power management: run *more hardware within a given power budget* (a tokens-per-watt lever).
  - **DSX Flex** — *cooperate with energy providers* to scale data-center power down when grid availability is low (demand-response). Ties the AI factory to [[Power & energy]] / grid constraints.

### DSX AI Factory Ecosystem — the partner map (off the ecosystem slide)
![[NVIDIA-Computex-2026-Keynote-DSX-Factory-Ecosystem.jpg]]
NVIDIA named its AI-factory partners **by layer** — confirms wiki coverage and surfaces new names:
- **Energy & Cooling:** [[ABB]], Caterpillar, [[Delta Electronics]], [[Eaton]], ENGIE, [[GE Vernova]], Hitachi, Mitsubishi Electric, National Grid, [[Schneider Electric]], [[Trane Technologies]], [[Vertiv Holdings]]
- **Design & Construction:** AVEVA, Bechtel, [[Cadence Design Systems]], Dassault Systèmes, etap, Jacobs, Procore, PTC, Siemens
- **Compute Systems:** [[Asus]], [[Dell Technologies]], [[Foxconn]], GIGABYTE, HPE, Lenovo, Pegatron, [[Quanta Cloud Technology|QCT]], [[Supermicro]], [[Wistron]], [[Wiwynn]]
- **AI Clouds:** [[CoreWeave]], Lambda, Nebius, NSCALE, [[GMI Cloud|GMI]], Mistral AI, NAVER Cloud, YTL, Yotta, firmus, Indosat, ResetData, Visionbay.ai
- **AI Factory Software:** DDN, Emerald AI, Mirantis, Netris, OpenNebula, Phaidra, Rafay, Red Hat, Spectro Cloud, VAST, WEKA
- **Infrastructure & Facilities:** AirTrunk, BDx, CtrlS, DayOne, Digital Edge, [[Digital Realty]], Equinix, NEXTDC, NTT, Princeton Digital Group, Sify, ST Telemedia

## Software / agents
- **NVIDIA Agent Toolkit for Enterprise AI** — models + harnesses + tools/skills + runtime; **open models + OpenShell** (privacy/security).
- **Cadence Super Agent** — agentic chip design ("weeks → minutes"); NVIDIA uses agents for its own silicon → [[EDA tool consolidation]] / [[Cadence Design Systems]].
- **Nemotron 3 Ultra** (open) — 5× faster, 30% lower cost (FLOPS + inference time); Nemotron 4 in development.

## Robotics / physical AI
- **Cosmos 3** — open robotics world model (**open model + open data**); "compute is data" (teleoperation → sim → synthetic data → world model).
- **Drive Hyperion + Alpamayo** — "the world's first reasoning autonomous vehicle"; robotaxis.
- **Isaac GROOT Reference Humanoid** — Jetson Thor brain + NVIDIA stack + **[[Unitree Robotics|Unitree]] body/hands**.
- **NVIDIA Cosmos Coalition** (new ecosystem) — AI leaders joining: **Agile Robots, Black Forest Labs, Generalist, LTX, Runway, SKILD AI** → [[Physical AI & robotics]].
![[NVIDIA-Computex-2026-Keynote-Cosmos-Coalition.jpg]]

## PC / RTX Spark (N1X)
- **RTX Spark** = N1X: TSMC 3nm, **70B transistors, 20 CPU cores, 6,144 CUDA cores**, [[MediaTek]] partnership; runs full Windows-on-Arm ecosystem. Laptops + desktops (MSI) + **DGX Station for Windows** in the fall; Adobe Premiere/Photoshop 2× faster.
- Roadmap: **Vera Rubin Spark (2028) → Rosa Feynman Spark (2030)**.

## Data center — confirmed on stage
- **Vera Rubin in full production**; a **Grace Blackwell rack assembles in 5 minutes**; no cables in the compute tray.
- Rack lineup shown: **NVL72** (Rubin) · **LPX** (Groq inference) · **Vera CPU racks** · networking racks. "**NVIDIA's token cost is the lowest in the world.**"
- **"NVIDIA is now the largest networking company in the world."**

## Implications — verifies/updates the anchor
- [[NVIDIA Computex 2026 Keynote]] — fold in Vera full spec, the 1.8×/1.5× reconciliation, DSX (MaxLPS/Flex), the Compute-is-Revenue 4-lever framework, ecosystem partners, Vera adopters, Cosmos Coalition, Cadence Super Agent.
- [[AI factory economics (tokens per watt)]] — add the 4-lever revenue framework + NVIDIA's useful-life/depreciation rebuttal + DSX power software.
- [[CPU scaling (host-CPU ratio)]] — full Vera spec + the 1.8×/1.5× nuance + adopters (OpenAI/Anthropic/SpaceX).
- [[Physical AI & robotics]] — Cosmos Coalition partners.
