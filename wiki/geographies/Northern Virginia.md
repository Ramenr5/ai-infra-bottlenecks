---
type: geography
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]"]
kind: metro
tags: [northern-virginia, datacenter-cluster, pjm, dominion, loudoun]
---

# Northern Virginia

The largest US datacenter cluster as of 2024 — anchored in Loudoun and Prince William counties, served by Dominion Energy on the PJM grid. Currently the benchmark against which new AI-load destinations like [[Texas]] are measured.

## Key numbers (per Epoch, 2024)

| Metric | Value | Source |
| --- | --- | --- |
| Number of data centers | **~300** | [[Can AI scaling continue through 2030 (2024)]] citing Governing |
| Current peak DC capacity | **5 GW** | Same |
| Projected DC capacity by 2030 | **10 GW** (4× over 15yr per Dominion guidance, ~10%/yr) | Same |
| 2017–2023 actual DC demand growth | 24%/yr | Goldman Sachs cited via Epoch |
| Dominion forward growth plan | 10–15%/yr near term | Same |
| NOVEC (smaller utility) | ~17%/yr forecast | Same |

## Why it's the center of gravity

- **Network topology:** majority of US east-coast internet traffic transits Loudoun "Data Center Alley" — co-location economics
- **PJM grid access:** mature transmission infrastructure, though increasingly congested
- **Existing footprint:** ~70% of global cloud / internet traffic estimated to touch NoVA
- **Dominion as anchor utility:** willing partner historically, though now flagging capacity constraints

## Why it may be displaced (or co-exist with) [[Texas]]

- **Transmission saturation:** Dominion has signaled it cannot add load at historical pace; data center moratorium debates in Loudoun
- **Power-cost differential:** [[ERCOT]] (Texas) offers lower power costs and faster interconnect than PJM
- **Permitting blowback:** local pushback on data center sprawl, water use, traffic — Loudoun Board has flirted with restrictions
- **Geographic alternatives:** Columbus (Ohio), Atlanta, Phoenix have emerged as overflow

## Implications for the bottleneck thesis

- **Single largest projected 2030 demand cluster on PJM** — Dominion's 10 GW number is a key input to Epoch's 90 GW US DC capacity projection
- **PJM transmission queue depth** is a leading-indicator bottleneck — if NoVA can't grow faster than 5 → 10 GW by 2030, marginal AI demand spills to other regions
- **Permitting precedent:** how Loudoun handles data center moratorium debates sets a template for other US metros

## PJM capacity market spike (regulatory risk)

Per [[SemiAnalysis - AI Datacenters Electric Bills (2026)]]:

| Auction year | Price/MW-day |
| --- | --- |
| 2024/25 | $29 |
| **2025/26** | **$270 (9.3× spike)** |
| **2026/27 & 2027/28** | **$329 (price-capped)** |

**Residential households in PJM (67M people) face ~15% bill increase** ($29.90/month average) attributable to AI DC buildout. PJM removing all DCs would save $9.33B (-64%) in capacity payments.

**Beneficiaries of the spike:** [[Talen Energy]], Constellation Energy, Vistra (own existing PJM generation now worth 10× more in capacity payments).

**Risk:** regulatory cost-shifting reforms could force DCs to pay full capacity costs — affects [[Hyperscaler capex sustainability]] and incentivizes accelerated NoVA → Texas migration.

## Open questions

- Does Dominion's 4× / 15yr guidance hold, or get revised down as transmission and generation constraints bind?
- Loudoun and Prince William zoning outcomes through 2026–27
- Does Dominion bring on substantial new gas / SMR / behind-the-meter to serve the projected load?
- Migration pace of marginal AI capacity to [[Texas]] vs. NoVA expansion

## Related geographies

- [[Texas]] — primary alternative US AI infra geography
- Other PJM growth nodes: Columbus (Ohio), Pittsburgh
- Ohio ([[Amazon Ohio expansion]]) is on the same broader grid family
