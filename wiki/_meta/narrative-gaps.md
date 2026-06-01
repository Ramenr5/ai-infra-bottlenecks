---
type: meta
created: 2026-06-01
updated: 2026-06-01
tags: [meta, gaps, coverage, narrative-tracker]
---

# Narrative gaps tracker

**Living dashboard of coverage across the wiki's narratives** — which threads are built out, which are thin, what to build next. Keep this updated when pages are added. Companion to [[Wiki maintenance model]]; the [[Keynote Narrative Scout]] (Telegram feed) surfaces material for the open threads.

**Legend:** 🟢 strong · 🟡 thin (exists but under-built) · 🔴 missing/near-zero

## Keynote narrative threads (the 9 sub-stories)

| # | Thread | Status | Anchor pages | Remaining gap |
| --- | --- | --- | --- | --- |
| 1 | Demand / order book | 🟢 | [[Capex trajectory thesis]], [[AI investment momentum tracker]], [[NVIDIA Computex 2026 Keynote]] | — |
| 2 | Memory / HBM | 🟢 | [[HBM allocation]], [[SK Hynix]]/[[Micron Technology]]/[[Samsung Electronics]] | GDDR7 (Rubin CPX) not its own page |
| 3 | Inference economics | 🟢 | [[Disaggregated inference (Rubin CPX)]], [[AI factory economics (tokens per watt)]] | **test-time-compute / reasoning-scaling** page missing; serving providers (Together/Fireworks/Baseten) absent |
| 4 | CPU scaling / Vera | 🟢 *(filled 2026-06-01)* | [[CPU scaling (host-CPU ratio)]], [[Datacenter CPU landscape (2026)]] | deepened — monitor only |
| 5 | **Networking / interconnect** | 🟡 | companies: [[Broadcom]], [[Marvell Technology]], [[Astera Labs]], [[Coherent]], [[Lumentum]] | **no synthesis** tying it together ("NVDA largest networking co", Spectrum-X vs merchant, CPO, scale-up vs scale-out) |
| 6 | Power / AI-factory economics | 🟢 *(filled 2026-06-01)* | [[AI factory economics (tokens per watt)]], [[Power & energy]], [[800VDC transition]] | — |
| 7 | **Taiwan supply chain** | 🔴 | TSMC/CoWoS/ODM company pages exist, but… | **no [[Taiwan]] geography page** — the "epicentre"; concentration + geopolitical-tail un-synthesized |
| 8 | Software / application | 🟢 *(filled 2026-06-01)* | [[Application & software]], [[CrowdStrike]]/[[ServiceNow]]/[[Salesforce]]/[[Palantir]] | more agentic-app comparables (Zscaler/Okta/Datadog) optional |
| 9 | Physical AI / robotics | 🟢 *(filled 2026-06-01)* | [[Physical AI & robotics]], [[Tesla]]/[[Figure AI]]/[[Unitree Robotics]] | actuator/sensor/motion-control supplier pages; robot-data/world-model bottleneck |
| ★ | Open-weights (swing factor) | 🟢 *(filled 2026-06-01)* | [[Open-weight commoditization (the swing factor)]], [[Open-weight frontier parity (H1 2026)]] | — |

## Cross-cutting theses — all 🟢
[[AI value capture across the stack]] · [[Future progression of AI (2026 view)]] · [[Capex trajectory thesis]] ↔ [[Capex bust scenario]] · [[AI investment momentum tracker]] · [[Bottleneck ranking (May 2026)]] · [[AI infrastructure investment map (May 2026)]] · [[Thesis stress-tests]]

## Next to build (ranked)
1. 🔴 **[[Taiwan]]** geography page — the #1 structural hole. Ties TSMC/CoWoS/ODMs/$150B + the concentration & geopolitical-tail risk that underwrites *both* the bull (the toll) and the bear. Touches every infra thread.
2. 🟡 **Networking / interconnect synthesis** — companies exist, no tying page. "NVIDIA = largest networking company", Spectrum-X vs Broadcom merchant, scale-up (NVLink/copper) vs scale-out (Ethernet) vs CPO.
3. 🟡 **Test-time compute / reasoning scaling** — a core demand driver (reasoning models burn inference) with no concept page; referenced in [[Future progression of AI (2026 view)]] but not built.
4. 🟡 **Physical AI depth** — actuator/sensor/motion-control supplier pages (the non-NVIDIA picks-and-shovels) + a robot-data/world-model bottleneck page.
5. 🟢-minor — GDDR7 memory treatment; inference-serving providers; more app-layer comparables.

## Quality / freshness gaps (not missing pages)
- **Primary-verification pass done 2026-06-01 (highest-stakes batch):**
  - ✅ **Verified to primary:** NVIDIA Rubin (full production, 10× inference cost, 4× MoE-train GPU reduction, 50 PFLOPS/GPU, NVL72 260 TB/s — *newsroom*); Vera CPU (88 Olympus, 1.2 TB/s, 1.5 TB SOCAMM, 2× perf/watt, >22.5K sandboxes, H2'26 OEMs — *dev blog*); Epoch 1-GW ($38B capex, $8.5B/yr TCO, 5yr/14yr life); Salesforce ($800M Agentforce / $2.9B combined / $11.2B rev — *press release*); Palantir ($1.6B rev +85%, US +104%, RPO $4.45B, NDR 150%).
  - ✅ **Keynote image-verified (2026-06-01):** processed the ServeTheHome live-blog **slide photos** → [[NVIDIA Computex 2026 Keynote - ServeTheHome Live (2026)]]. Confirmed full Vera CPU spec sheet (88c/176t, 1.2 TB/s LPDDR5X, 250–450W, 3.4 TB/s C2C, 1.8 TB/s NVLink-C2C), the "Compute is Revenue" 4-lever framework, DSX (MaxLPS/Flex), the named DSX ecosystem partners, Vera adopters (OpenAI/Anthropic/SpaceX), Cosmos Coalition.
  - ⚠️ **Corrected / clarified:** Vera agentic perf is **1.8× on the keynote slide** (compilation 1.7× / Python 1.9×) vs **~1.5× full-socket** on the dev blog — *both NVIDIA, different conditions* (my earlier flat "→1.5×" was over-corrected). Epoch energy **$1.3B → $0.6B/yr**; Salesforce combined ARR **$1.8B → $2.9B** (dropped the wrong "$2.1B Data Cloud / +114%").
- **Still secondary (VERIFY) — not yet pulled:** NVIDIA 288GB HBM4 / 10× perf-watt / 1.3M-2M components / Rubin-Ultra-Feynman roadmap (CES/secondary); CPU TAM (AMD $120B, Arm $100B/50%/AGI CPU, Intel 52→43.9%); AI-factory MS 100-MW model + token tiers + $40T humanoid TAM + Gartner $207B; physical-AI valuations (Figure $39B, Unitree units, NVDA >$9B physical-AI rev).
- **Single-source watch:** open-weights de-single-sourced ✅; keep widening Taiwan-risk and networking sources before they anchor a thesis.

## Changelog
- **2026-06-01** — filled CPU scaling, AI-factory economics, Physical AI, Application layer, Open-weights (5 of the audit's thin/missing threads). Remaining: Taiwan (🔴), Networking synthesis (🟡), test-time compute (🟡).
