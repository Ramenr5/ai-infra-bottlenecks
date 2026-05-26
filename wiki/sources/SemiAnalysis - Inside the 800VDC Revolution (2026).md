---
type: source
created: 2026-05-26
updated: 2026-05-26
tags: [primary-source, semianalysis, 800vdc, power-electronics, sst, datacenter-physical]
---

# SemiAnalysis — Inside the 800VDC Revolution (Part 1)

**Publisher:** [[SemiAnalysis]] · Author: Nicolas Bontigui · Published 2026-05-26
**URL:** [newsletter.semianalysis.com/p/inside-the-800vdc-revolution-part](https://newsletter.semianalysis.com/p/inside-the-800vdc-revolution-part)

## Headline framing

**Physics-forced transition.** At Kyber-class 660 kW racks, 48-54V copper distribution physically breaks down (1 MW rack needs ~200 kg copper busbars at 48V; hundreds of tons at 1 GW). Moving to 800VDC cuts current ~15×, resistive losses ~220×, facility power consumption ~5%. At 1 GW IT load = **50 MW continuous savings** = tens of millions in annual electricity costs OR unlocked compute capacity.

Total incremental capacity powered by 800VDC: **~39 GW by 2030** (SemiAnalysis Industrials Model).

## Four-phase transition

| Phase | Timing | Architecture | Key equipment new | Sidecar TAM |
| --- | --- | --- | --- | --- |
| **1 — White Space Retrofit** | 2026/2027 | HVDC power rack at row level; AC distribution unchanged upstream | Power rack ($400-500k/unit, ~10× standard AC rack); ASP $500k/MW | Building |
| **2 — 800VDC-Native Compute** | 2027/2028 | Kyber rack with 800VDC bus to compute blade; on-blade DC-DC; UPS exits | Same power rack; on-blade power modules; BBU shelves scale to 8-12 kW | **Peak ~$11B 2028** |
| **3 — Facility-wide 800VDC** | Late 2028/2029 | Central rectifier in grey space; DC busway; battery rack replaces power rack ($200k/MW) | MW-scale rectifiers, DC busway, SSCBs (solid-state breakers) | Declining |
| **4 — SST End-state** | >2029 | SST collapses LV transformer + rectifier into single MV-to-800VDC unit | SST $1.0-1.5M/MW | — |

**SST TAM: ~$13B by 2030** (SemiAnalysis Industrials Model).

**Net electrical content per MW**: stays in $3.6-4.8M band across all phases. **Mix shifts, not size** — grey space shrinks, white space grows.

## Efficiency trajectory

| Architecture | Stages | Cumulative efficiency | At 1 GW = savings vs baseline |
| --- | --- | --- | --- |
| Baseline AC | 7 conversion stages | **82.0%** | — |
| Phase 1 | 7 stages | 83.7% | minimal |
| Phase 2 (UPS gone) | 5 stages | **86.5%** | **58 MW** |
| Phase 3 | 5 stages | 86.9% | 63 MW |
| Phase 4 (SST) | 4 stages | **87.4%** | **69 MW** |

NVIDIA cites "up to 5% efficiency improvement" — implies ~50 MW at 1 GW. SemiAnalysis Phase 4 calc matches at +5.4%.

## Equipment / standards detail

### HVDC power rack (Diablo 400 spec, OCP)
- Co-authored Google, Meta, Microsoft; published draft v0.5.2 May 2025, v0.7.0 follow-up
- Power range: 100 kW – 1 MW per IT rack
- Voltage: ±400V bipolar standard, 800V monopolar as design option
- 400V chosen "to leverage EV supply chain" (Google at OCP EMEA 2025)
- **Hyperscaler divergence:** Meta 600-800 kW · Google up to 900 kW · Amazon 800 kW · Microsoft slower · NVIDIA outside Diablo with monopolar 800V at 660 kW

### Solid State Transformers (SSTs)
- Three-stage device: MV-AC → DC → high-freq isolation → 800VDC. SiC MOSFETs at 3,300V+ for MV stage.
- **40× weight reduction, 14× size reduction** vs conventional iron-core transformer (Infineon claim)
- Best public efficiency: **98% at 400 kW** (ETH Zurich, INTELEC 2025 prototype, 13.2kVAC-to-800VDC)
- Datacenter target: 3-6 MW units at 99%+ sustained
- **No vendor has UL-certified datacenter SST as of May 2026**

### BBU / battery rack
- Module wattage rising 5.5 kW → 8-12 kW (Infineon roadmap March 2025: modular 4 kW Partial Power Converter cards paralleling to 12 kW at 99.5% peak efficiency)
- Delta GTC 2026: 110 kW power shelves w/ 80 kW BBU each = 480 kW per rack across 6 shelves

### Other key components
- **Wolfspeed 10 kV SiC MOSFET**: commercially available as bare die March 2026 → opens MV rectifier path
- **ABB SACE Infinitus**: solid-state, 1000V/2500A, datacenter adaptation announced Oct 2025 with NVIDIA partnership
- **LS Electric**: first UL-certified DC molded case circuit breaker at 1500V, listed for datacenter
- **UL 857 Ed. 14** (2025): raised busway ceiling to 1000VDC; Edition 15 targets 1500VDC

## Vendor landscape — picks-and-shovels

**Pure-play SST:**
- [[DG Matrix]] — ABB-backed, Infineon SiC supply deal, pre-certification units, **only SST in NVIDIA MGX reference architecture**; UL cert target end Q2 2026
- [[Amperesand]] — targeting 30 MW commercial deployments 2026; LV + MV variants
- [[Heron Power]] — **building 40 GW US manufacturing facility** for 4.2 MW Heron Link units; MV-input
- [[Novos Power]] — direct MV-to-800VDC SST, 50% smaller footprint, air cooling; >98% peak efficiency

**Incumbents leveraged:**
- [[Eaton]] — acquired **Resilient Power Systems Aug 2025** for SST expertise
- [[ABB]] — NVIDIA Oct 2025 partnership (modular power block); SACE Infinitus; Emax 2 (1500V DC)
- [[Delta Electronics]] — 110 kW BBU power shelves, 2.4 MW In-Row CDU supporting 800VDC at GTC 2026, 800VDC air-cooled busway at OCP 2025
- [[Schneider Electric]] — incumbent switchboard player; no named 800VDC product yet
- [[Vertiv]] — incumbent; no named 800VDC product yet

**Semiconductor enablers:**
- [[Wolfspeed]] — **10 kV SiC MOSFET commercial March 2026**; bare die for MV applications
- [[Infineon]] — BBU module roadmap, 650V GaN FETs, SiC supply for DG Matrix; **40× SST weight reduction claim**
- TE Connectivity (busbars), Advanced Energy (power management)

**Components:**
- LS Electric, Legrand, EAE (busway)
- ON.energy (MV double-conversion UPS patent), DCAirco (800V DC chillers)
- Danfoss (Turbocor compressors already run on 700-813VDC internally)

**AI-native EPC:**
- [[Aran Industries]] — PE-stampable 800VDC engineering packages bridging power electronics + grid dynamics + regulatory

**Manufacturing:**
- Flex (NVIDIA partner, public 800VDC safety advocacy)

## Operator deployments named

- **Applied Digital North Dakota 400 MW AI campus** — ABB HiPerGuard MV-UPS deployed (98% efficiency)
- **Meta** — distributed UPS architecture deployed years ago; bypassing generators at new sites entirely
- **Microsoft** — partial generator coverage at new sites; Mt. Diablo project name origin
- **Google** — distributed UPS; pushing Diablo 400 up to 900 kW with 12 AC whips at 1.1 MW
- **NVIDIA** — air-cooled 660 kW samples mid-2026, liquid-cooled VR Ultra variant late 2026, reference at GTC 2026
- **China XD Electric** — 2.4 MW datacenter SSTs under "East Data West Compute" program

## Challenges (the gap)

1. **Regulation**: NEC 2029 = partial provision; full code maturity NEC 2032-35. Pre-2029 deployments need custom AHJ approvals + per-site UL cert.
2. **Safety**: IEEE 1584 doesn't cover DC; NFPA 70E no PPE table for 600-1000VDC. UL Solutions formed DC Safety Research Consortium to fill gap.
3. **Grounding**: Diablo 400 permits both ±400V bipolar (HRG or solid) and 800V monopolar (floating w/ insulation monitoring, or solid-return). No industry consensus; vendor-ecosystem commitment.
4. **Cooling stays AC**: Chillers, pumps, fans need DC-AC inverters. Delta 2.4 MW CDU is the only DC-native cooling product. Most auxiliary (lighting, fire suppression, security) lacks DC variants.
5. **Grid interconnection**: NERC issued Level 3 Essential Actions Alert May 2026 covering large computational loads; ERCOT NOGRR282 mandates PSCAD electromagnetic transient models. 800VDC moves grid-facing behavior into software-defined power electronics — burden of proof rises.

## Money

- **Datacenter industrial capex >$400B in 2026**; electrical = 30-35% = $120-140B
- **$320M into SST startups** in 12 months ending March 2026
- Eaton/Resilient acquisition (Aug 2025)
- NVIDIA/ABB partnership (Oct 2025)
- Heron Power 40 GW US manufacturing facility commitment

## Cross-reference

- [[Power & energy]] — layer page; 800VDC is the major capex shift inside the datacenter electrical chain
- [[Datacenter physical]] — layer page; 800VDC redefines white space / grey space split
- [[Compute & silicon]] — SiC/GaN downstream effects; Kyber rack density drives the transition
- [[NVIDIA]] — primary architectural forcing function (Kyber Ultra 660 kW)
- [[Capex trajectory thesis]] — the $400B 2026 industrial capex figure is a big anchor to triangulate against Big Five hyperscaler $745-775B
- [[Bottleneck ranking (May 2026)]] — 800VDC transition fits as a structural multi-year transition

## Implications — pages flagged for human review

- [[Power & energy]] — add the four-phase transition framework; sidecar TAM $11B 2028 peak; SST TAM $13B 2030
- [[Datacenter physical]] — needs white-space/grey-space content shift framing
- [[Compute & silicon]] — Wolfspeed 10kV SiC MOSFET commercial availability is a power-supply enabler that touches HBM cluster density math
- [[Capex trajectory thesis]] — the $400B 2026 industrial capex figure; $120-140B electrical component
- [[Bottleneck ranking (May 2026)]] — consider adding [[800VDC transition]] as structural-tier bottleneck with multi-year capex shift
- [[AI infrastructure investment map (May 2026)]] — full picks-and-shovels overlay needs the 11 new vendor pages woven in

## Paywall

Public ~92% (incl. all 4 phases, BoM math, TAM sizing, named vendors, challenges, physics). Paywall begins at "main winners and losers of the 800VDC revolution" — the explicit picks-and-shovels investment framing. Part 2 (power electronics + semiconductor revolution) is forthcoming.
