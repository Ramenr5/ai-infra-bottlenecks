---
type: bottleneck
created: 2026-05-26
updated: 2026-05-26
sources: ["[[SemiAnalysis - Inside the 800VDC Revolution (2026)]]"]
layer: power
severity: structural
mechanism: capacity
tags: [800vdc, power-electronics, sst, datacenter-electrical, capex-shift]
---

# 800VDC transition

The multi-year shift from AC datacenter distribution to 800V DC, forced by rack densities approaching 600 kW where 48-54V copper breaks down physically. **Structural** because the transition runs 2026 → ~2032+ across four distinct architectural phases, each shifting capex between equipment categories without changing the total ($3.6-4.8M/MW band).

## The constraint (one line)

At Kyber-class 660 kW per rack, 48V distribution requires ~200 kg copper per MW (hundreds of tons at 1 GW scale); 800VDC cuts current ~15×, losses ~220×, and unlocks the rack densities NVIDIA and OCP need for inference workloads on NVLink-bounded scale-up domains.

## Key numbers

| Metric | Value | Source |
| --- | --- | --- |
| **Incremental capacity on 800VDC by 2030** | **~39 GW** | [[SemiAnalysis - Inside the 800VDC Revolution (2026)]] |
| **Sidecar (HVDC power rack) TAM peak** | **~$11B in 2028** | Same |
| **SST TAM by 2030** | **~$13B** | Same |
| HVDC power rack ASP | $400-500k/unit (~10× standard AC rack) | Same |
| Power rack content/MW | $500k/MW | Same |
| SST content/MW | $1.0-1.5M/MW | Same |
| Battery rack content/MW (Phase 3+) | ~$200k/MW | Same |
| Datacenter industrial capex 2026 | **>$400B** (electrical = 30-35% = $120-140B) | Same |
| Total electrical content/MW | $3.6-4.8M band across all phases | Same |
| **SST funding into startups** | **$320M** in 12mo ending Mar 2026 | Same |
| Facility power consumption savings | ~5% (~50 MW per 1 GW IT load) | Same |
| Phase 2 efficiency vs baseline AC | 86.5% vs 82.0% (= 58 MW saved per 1 GW) | Same |
| Phase 4 (SST) efficiency | 87.4% (= 69 MW saved per 1 GW) | Same |

## The four phases

| Phase | Timing | What changes | Equipment delta |
| --- | --- | --- | --- |
| **1 — White Space Retrofit** | 2026/27 | HVDC power rack at row level; AC distribution unchanged upstream | +$400-500k/MW (rack); UPS stays |
| **2 — 800VDC-Native Compute** | 2027/28 | Kyber rack: 800VDC bus to compute blade; on-blade DC-DC; **UPS exits ($1.2M saving)** | Grey space shrinks |
| **3 — Facility-wide 800VDC** | Late 2028/29 | Central rectifier in grey space; DC busway; battery rack replaces power rack | Phase 1/2 power racks → battery rack ($200k/MW) |
| **4 — SST End-state** | >2029 | SST collapses LV transformer + rectifier into single MV-to-800VDC unit | -$0.55M/MW (LV gear) - $0.20M/MW (rectifier) + $1.0-1.5M/MW (SST) = net upfront premium |

## Why "structural" not "acute"

- **Multi-year transition**, not a deal-breaker for current 600 kW rack designs (three-phase AC can still serve 180-220 kW racks in Vera Rubin NVL72)
- **No critical bottleneck** in any single component yet — capex shifts within roughly the same $/MW envelope
- **Regulatory and standards lag is the binding constraint**, not silicon or copper supply

## Sub-bottlenecks within

- **No UL-certified datacenter SST** as of May 2026 — first deployments will be per-site AHJ approvals
- **NEC 2029** = partial provision only; full code maturity probably NEC 2032 or 2035
- **No DC-native cooling ecosystem** — chillers, pumps, fans, lighting still AC; auxiliary AC bus stays
- **Grounding fragmented** — Diablo 400 permits both ±400V bipolar (multiple options) and 800V monopolar; vendor-ecosystem commitment forced before any consensus
- **MV SiC supply** — 3,300V+ SiC MOSFETs gate SST direct MV-input variants; Wolfspeed's 10 kV bare die only commercial March 2026
- **Arc flash safety codes** — IEEE 1584 doesn't cover DC; NFPA 70E has no PPE table for 600-1000VDC (UL DC Safety Research Consortium working on it)

## Picks-and-shovels exposure

**Pure-play SST** (highest beta):
- [[DG Matrix]] — only SST in NVIDIA MGX reference architecture; UL cert target end Q2 2026
- [[Heron Power]] — building 40 GW US manufacturing facility for 4.2 MW Heron Link
- [[Amperesand]] — 30 MW commercial deployments target 2026; LV + MV variants
- [[Novos Power]] — direct MV-to-800VDC, 50% smaller footprint

**Incumbents with disproportionate exposure:**
- [[Eaton]] — acquired Resilient Power Systems Aug 2025 for SST expertise
- [[ABB]] — NVIDIA Oct 2025 partnership; SACE Infinitus solid-state breaker
- [[Delta Electronics]] — 110 kW BBU power shelves, 2.4 MW DC In-Row CDU at GTC 2026
- [[Schneider Electric]], [[Vertiv]] — incumbent positioning, slower

**Semiconductor enablers:**
- [[Wolfspeed]] — 10 kV SiC MOSFET commercial March 2026
- [[Infineon]] — BBU roadmap, 650V GaN FETs, SiC supply

**AI-native EPC:**
- [[Aran Industries]] — PE-stampable 800VDC packages bridging power electronics + grid dynamics

## Demand-side forcing functions

- **NVIDIA Kyber Ultra** approaching 660 kW per rack → physics demands 800VDC
- **Vera Rubin Ultra NVL576** in 2027 → 800VDC-native
- **OCP Diablo 400** (Google/Meta/Microsoft co-authored, May 2025) — multi-vendor spec
- **Google + Meta** distributed UPS architectures already deployed → pre-positioned for 800VDC

## Related

- Source: [[SemiAnalysis - Inside the 800VDC Revolution (2026)]]
- Layers: [[Power & energy]], [[Datacenter physical]], [[Compute & silicon]]
- Bottlenecks: relates to [[Transformer lead times]] (SSTs may displace some LPT demand by 2030+)
- Companies: see picks-and-shovels list above

## Open questions

- Which 4-MW-class SST vendor clears UL certification first?
- Does Phase 3 (centralized MV rectifier) or Phase 4 (SST) prove dominant operationally?
- What share of new gigawatt-class campuses ship 800VDC-native vs sidecar-retrofit through 2028?
- Are auxiliary AC loads ever consolidated onto DC, or is the AC bus permanent?
