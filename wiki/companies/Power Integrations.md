---
type: company
ticker: POWI
created: 2026-05-26
updated: 2026-05-26
sources: ["[[Power Integrations Q1 2026 earnings]]", "[[Power Integrations - 1250V & 1700V PowiGaN for 800VDC AI Datacenters (2025)]]", "[[SemiAnalysis - Inside the 800VDC Revolution (2026)]]"]
layer: compute
role: supplier
tags: [gan, power-semiconductors, 800vdc-enabler, nvidia-collaboration, integrated-switcher]
---

# Power Integrations

US power semiconductor company (NASDAQ: POWI). Historically a low-power AC-DC integrated switcher leader (chargers, adapters, appliances) — **now positioned as a 1250V / 1700V GaN supplier explicitly co-developing with [[NVIDIA]] for 800VDC AI datacenter architectures**. Owns proprietary "PowiGaN" vertical-integrated GaN platform.

## Key facts (Q1 2026)

| Metric | Value |
| --- | --- |
| Q1 2026 revenue | **$108.3M** (+3% YoY, +5% QoQ) |
| Non-GAAP gross margin | **53.5%** (+20 bps QoQ) |
| Non-GAAP operating margin | **11.7%** (+200 bps QoQ) |
| Non-GAAP diluted EPS | $0.25 (vs $0.31 Q1 2025 — YoY decline) |
| Industrial revenue | **+23% YoY** (renewable energy, battery storage, home automation, automotive) |
| Consumer revenue | Down YoY, +17% QoQ |
| Q2 2026 guide | **$110-120M** (+8.5% sequential midpoint), GM 54-55%, OM 13.5-15.5% |
| FY26 capex | 5-6% of revenue, second-half weighted |
| Cumulative GaN switches shipped | **175M** (as of Oct 2025) |
| **Disclosed datacenter SAM by 2030** | **>$1B** (rack + grid applications, per POWI mgmt) |

CEO: Jennifer Lloyd · CFO: Nancy Erba · New SVP Sales: Mike Balo (ex-onsemi, Infineon, Cypress).

## The 800VDC angle

**This is the key thesis development**, separating POWI from being purely a consumer-power play:

### NVIDIA collaboration (explicit, dated)

> "Power Integrations is collaborating with NVIDIA to accelerate the transition to 800 VDC power."
> — POWI press release, October 13 2025

> "Our ongoing collaboration with NVIDIA includes a variety of sockets utilizing our 1,250- and 1,700-volt GaN technologies in forthcoming 800-volt DC architectures."
> — POWI Q1 2026 earnings call (May 9, 2026)

### Product positioning

- **1250V PowiGaN HEMTs** — "industry-first"; targets >98% efficiency in 800VDC rectifier and DC-DC stages
- **1700V PowiGaN switch** — integrated in InnoMux2-EP; supports 1000VDC input; >90.3% efficiency in 12V-output SR ZVS operation
- **PowiGaN architecture**: vertical integration — GaN switch + controller + drive on single die — differentiator vs discrete GaN HEMTs from competitors

### Design-win evidence (Q1 2026)

- **Two new Q1 design wins at Taiwan customers serving US datacenter equipment manufacturers**
- Engagement "across the whole data center ecosystem — hyperscalers, server OEMs, rack providers, and power-supply providers"

### Where POWI plays in the 800VDC stack

| Stage | POWI fits? | Competition |
| --- | --- | --- |
| MV rectification (Phase 4 SST) | No — too high voltage | [[Wolfspeed]] (10 kV SiC), [[Infineon]] (3.3 kV SiC) |
| LV AC-DC rectification (Phase 1-2 power rack) | Possible at 1250V/1700V GaN | [[Delta Electronics]], [[Infineon]], Advanced Energy |
| **On-blade 800V→50V DC-DC (Phase 2 Kyber)** | **Yes — sweet spot** for 1250V/1700V GaN integrated switcher | [[Delta Electronics]], [[Vicor]], [[Infineon]], Murata, MPS |
| Point-of-load 50V→<1V VRM | No — too low voltage | Monolithic Power, Renesas |

## Why "earlier in cycle" than the SemiAnalysis named winners

The [[SemiAnalysis - Inside the 800VDC Revolution (2026)]] piece named [[Delta Electronics]], [[Vicor]], [[Infineon]] at the on-blade stage but **did not name POWI** despite its disclosed NVIDIA collaboration. Most likely reason: SemiAnalysis tracks deployed/announced **equipment products**; POWI is a silicon enabler **upstream** of those products. Both interpretations:

- **Bull**: POWI is positioned via the silicon, which is the harder long-lead-time competitive moat. Volume design wins follow capability demonstration by 12-24 months.
- **Bear**: Absence from a deeply-researched piece suggests no production design-in volume yet. POWI's "design wins" are pre-revenue; the $1B SAM is a 2030 target, not an order book.

## Why it matters for the thesis

- **Cleanest US-listed pure-play GaN exposure to AI infra** outside of Wolfspeed (which is SiC-only)
- **Disclosed NVIDIA co-development** is the highest-credibility validation signal an integrated-switcher supplier can have in 2026
- Vertical integration on PowiGaN = controlled cost curve vs competitors buying discrete HEMTs
- EV/automotive growth (in production with 17 of top 20 EV makers, ~$100/vehicle content target) provides revenue ballast outside of datacenter — POWI doesn't need datacenter to be the whole story

## Risks

- **EPS declined YoY** despite revenue growth (Q1 2026 $0.25 vs Q1 2025 $0.31) → margin pressure or competitive intensity
- Datacenter contribution **not yet segment-disclosed** = pre-material
- **Competition**: Infineon has the broader semi portfolio + BBU + SiC + GaN; Wolfspeed has the pure-play SiC story for the MV stages; Navitas, Transphorm, Innoscience are direct GaN competitors. PowiGaN's edge is integration; if discrete GaN catches up on cost, POWI's moat shrinks.
- **SemiAnalysis not naming POWI** in the deep dive = pre-volume signal (no operator using POWI silicon at scale yet)
- $1B SAM by 2030 is management's number, not third-party-validated
- Consumer franchise (still the majority of revenue) is exposed to USB-PD competition + slowdown

## Related

- Sources: [[Power Integrations Q1 2026 earnings]], [[Power Integrations - 1250V & 1700V PowiGaN for 800VDC AI Datacenters (2025)]], [[SemiAnalysis - Inside the 800VDC Revolution (2026)]]
- Bottleneck: [[800VDC transition]]
- Layer: [[Compute & silicon]], [[Power & energy]]
- Partner: [[NVIDIA]] (1250V/1700V GaN co-development for 800VDC)
- Competitors: [[Wolfspeed]] (SiC pure-play), [[Infineon]] (broad), [[Delta Electronics]] (downstream PSU integrator)

## Open questions

- Does POWI disclose a datacenter revenue segment in 2026/27?
- When does POWI first appear in a SemiAnalysis or OCP teardown as a deployed silicon — and at which stage (PSU rectifier or on-blade)?
- Does NVIDIA include PowiGaN in a public reference design (MGX or successor), the way [[DG Matrix]] was named?
