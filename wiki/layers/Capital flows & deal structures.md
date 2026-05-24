---
type: layer
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Situational Awareness, Two Years Later (2026)]]", "[[Can AI scaling continue through 2030 (2024)]]", "[[Cerebras — Faster Tokens Please (2026)]]", "[[McKinsey - The Cost of Compute (2025)]]", "[[Stargate Project announcement (2025)]]", "[[NVIDIA Q1 FY27 earnings (2026)]]"]
tags: [capital, capex, finance, deal-structures, bottleneck-layer]
---

# Capital flows & deal structures

The "where is the money" layer. Tracks the spend curves, the financing vehicles, the JV structures, and the counterparties moving capital into AI infrastructure. Even a perfect supply-side thesis is incomplete without knowing whose balance sheet pays — and on what terms.

## Sub-domains

- **Hyperscaler capex** — [[Microsoft]], [[Alphabet]], [[Meta]], [[Amazon]] guided AI/cloud capex trajectories
- **AI-lab capex** — [[OpenAI]], [[Anthropic]], [[xAI]] compute spend, increasingly via dedicated build-outs
- **Sovereign capital** — [[Humain (Saudi PIF)]], [[G42]] (UAE Mubadala), [[Japan METI]] / [[SoftBank]], Korea / Singapore initiatives
- **Joint ventures & megaprojects** — [[Stargate]] (OpenAI / Oracle / SoftBank / MGX), Microsoft-OpenAI compute deal restructurings
- **Project finance** — non-recourse debt against hyperscaler-contracted offtake; key for neoclouds
- **Private credit & PE** — [[Apollo]], [[Blackstone]], [[KKR]], [[Brookfield]] funding datacenter and power assets
- **Public markets** — equity offerings, infrastructure REITs, AI-themed ETFs

## Bottlenecks (to be populated as sources land)

- [[AI debt capacity]] — how much non-recourse debt can the system absorb before credit spreads blow out
- [[Sovereign capital deployment pace]] — Gulf and Asia commit vs. actual outlay
- [[Hyperscaler capex sustainability]] — at what FCF / margin profile does spend get cut

## Where the money flows (Apr 2026)

| Source | Outlay | Period | Citation |
| --- | --- | --- | --- |
| **Big Five hyperscalers** (MSFT/GOOGL/META/AMZN/ORCL) | **$602B capex, ~75% to AI infra** | 2026 (+36% YoY) | McKinsey via [[Situational Awareness, Two Years Later (2026)]] |
| Five US AI capex leaders combined | **>$450B** | 2026 single year | exceeds inflation-adj. annual Apollo cost |
| McKinsey total DC capex forecast | **$5.2T (upside $7.9T)** | through 2030 | McKinsey Apr 2025 |
| [[Stargate]] | **$500B** | Multi-year | Announcement; see [[Stargate Texas]] |
| Amazon Ohio expansion | $23B | Single project | [[Amazon Ohio expansion]] |
| Hyperscaler capex as % US GDP | **~2.2%** | 2026 | McKinsey via source |

All figures cited from [[Situational Awareness, Two Years Later (2026)]] — a *secondary* aggregation. Now corroborated by primaries below.

### TAM anchor — McKinsey primary

Per [[McKinsey - The Cost of Compute (2025)]]:

| Scenario | DC capex through 2030 | AI capacity incremental (2025-2030) |
| --- | --- | --- |
| **Base ("rising")** | **$5.2T AI + $1.5T traditional = $6.7T total** | 125 GW |
| **Accelerated** | **$7.9T** | 205 GW |
| Total AI capacity demand 2030 | — | **156 GW** |

Implied build cost: **~$42M per MW** of new AI DC capacity (all-in). [[Stargate]] at $500B / 10 GW = $50M/MW — consistent with the high end of McKinsey's range.

### NVIDIA $145B supply commitment

Per [[NVIDIA Q1 FY27 earnings (2026)]], NVIDIA has locked up **$145B in supply commitments** (inventory + prepaids to TSMC/SK Hynix) as of Q1 FY27 — concrete evidence of capital being deployed to secure forward chip supply.

## Debt financing pressure

Layered on top of cash-funded capex, AI infrastructure is increasingly debt-financed:

- **JP Morgan:** up to **$7T of AI spend will be debt-financed**
- **Meta + Oracle:** $75B in bonds in two months of 2025
- **Projected total AI debt:** ~$1.5T
- **94% of OCF consumed by AI capex** at some firms
- **Sundar Pichai** flagged "elements of irrationality"
- **BofA:** "the AI boom is hitting a money wall"

These signals are tracked as their own bottleneck pages: [[Hyperscaler capex sustainability]], [[AI debt financing capacity]].

## Cluster-cost anchors (Epoch 2024)

- Training compute spend has grown **~2.5×/year** historically ([[Epoch AI]] series)
- A 2e29 FLOP training cluster (the 2030 ceiling per [[Can AI scaling continue through 2030 (2024)]]) carries a price tag of **"hundreds of billions of dollars"**
- This anchors why hyperscalers individually are now committing $50–200B/yr to AI infrastructure — single-cluster economics now match the cap-ex profile of historical mega-projects
- Frame: global labor compensation = ~**$60T/yr** — the prize being competed for; even fractional substitution justifies $T-scale investment

## Case study: vendor-equity vertical integration ([[Cerebras Systems]] × OpenAI MRA, Dec 2025)

A new template for hyperscaler-vendor structural integration. Per [[Cerebras — Faster Tokens Please (2026)]]:

| Component | Mechanism |
| --- | --- |
| **Capacity commitment** | 750 MW over 2026–2028 (option +1.25 GW → 2 GW total); $24.6B remaining performance obligations |
| **Working capital loan** | $1B from OpenAI at 6% — *interest waived if Cerebras repays in compute capacity*. OpenAI can also direct disposition of funds if Cerebras breaches. |
| **Equity warrant** | 33.4M shares at near-zero strike = up to **~12% of Cerebras** fully diluted; vests on capacity delivery + market-cap thresholds |
| **Accounting impact** | Warrant value (~$82/share grant-date FV) flows through as **contra-revenue** (ASC 505-50), not separate equity expense |

**Why this matters:** OpenAI now has direct equity exposure in its compute supplier. This is structurally distinct from a hyperscaler PPA or chip purchase contract — it's closer to project finance with equity kicker + customer-as-lender. Likely template for future [[Stargate]]-adjacent or sovereign-anchored deals. Trade-off: deep alignment vs. concentration risk for Cerebras (effectively single-customer revenue).

## Key entities (expected pages)

- US hyperscalers: [[Microsoft]], [[Alphabet]], [[Meta]], [[Amazon]], [[Oracle]]
- AI labs: [[OpenAI]], [[Anthropic]], [[xAI]]
- Neoclouds: [[CoreWeave]], [[Crusoe Energy]], [[Lambda]], [[Nebius]]
- Sovereign / state-backed: [[Humain (Saudi PIF)]], [[G42]], [[Mubadala]], [[SoftBank]], [[MGX]]
- PE / credit: [[Apollo]], [[Blackstone]], [[KKR]], [[Brookfield Asset Management]]
- Megaproject vehicles: [[Stargate]]

## Open questions

- Are hyperscaler capex curves leveling off in 2026–27 or accelerating?
- How much of "sovereign AI" capital actually deploys vs. stays announced?
- Where does non-recourse debt sit in the cap stack of neocloud builds — and what does a 50bps spread move do to viability?
- Does Stargate hit its 4-year cadence or slip 2+ years?
