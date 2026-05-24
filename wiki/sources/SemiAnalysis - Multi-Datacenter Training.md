---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, multi-datacenter, training, google, openai, stargate]
---

# SemiAnalysis — Multi-Datacenter Training: OpenAI's Ambitious Plan to Beat Google's Infrastructure

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/multi-datacenter-training-openais](https://newsletter.semianalysis.com/p/multi-datacenter-training-openais)

> [!success] Primary source — multi-DC training architecture
> Detailed look at how Google's existing multi-DC TPU training works + what OpenAI/Microsoft are building to match. Validates the [[Stargate]] multi-site strategy. **Key insight:** Google already has the multi-DC capability; OpenAI is racing to catch up.

## Google's multi-DC infrastructure (the benchmark)

**Geographic deployments:**
- **Iowa/Nebraska cluster:** Council Bluffs, Omaha, Papillion (~15 miles apart) + Lincoln (~50 miles)
- **Ohio cluster:** Columbus region with three campuses
- **Target:** 1 GW by end 2025 (Ohio); Iowa/Nebraska approaching GW-scale by 2026

**Power & capacity:**
- Council Bluffs: ~300MW, ramping to 500MW
- Papillion: >250MW
- **TPU deployment: "millions of liquid cooled TPUs accounting for more than one Gigawatt"**
- PUE: 1.1 (2023)

## Inter-DC bandwidth requirements

| Scope | Bandwidth |
| --- | --- |
| Within regions (between campus sites) | **~5 Pbit/s** |
| Between regions | **~1 Pbit/s** |
| Cross-continental latency | 43.2 ms round-trip (E-W coast) |

**Weight exchange:** "exchanging 400 TB (4 bytes = param) of weights, only taking 0.64 seconds at line rate"

## Training architecture approaches

**Hierarchical SGD (near-term):**
- Synchronous training with graduated sync frequency
- Highest within campuses (<1km)
- Moderate within regions (<100km)
- Lower across regions/continents

**Asynchronous Parameter Servers (longer-term):**
- Local model replicas exchange with closest parameter servers
- Tier-based architecture
- "Parameter servers will probably need to hold the master weights in FP32"

## Microsoft / OpenAI plans

Article notes Microsoft/OpenAI "incredibly ambitious infrastructure outbuild" and that they "will be first to a multi-GW computing system" — but **detailed locations, cluster sizes, deployment timeline are paywalled**.

## Why it matters for the wiki

1. **Google has the multi-DC training capability today** — Iowa/Nebraska + Ohio = ~1+ GW operational. OpenAI is racing to catch up via [[Stargate]].
2. **Inter-DC bandwidth ~1-5 Pbit/s** = within Epoch's projected 4-20 Pbps range; not the binding constraint per [[Can AI scaling continue through 2030 (2024)]]
3. **Multi-DC training validates [[Stargate Texas]] multi-site strategy** — Abilene + Shackelford + Milam can be trained as a single virtual cluster
4. **Hierarchical SGD architecture** is the design pattern being deployed; explains why physical proximity (15 mi, 50 mi) matters

## Implications

- Update [[Datacenter physical]] with multi-DC bandwidth + topology data
- Update [[Stargate Texas]] / [[Stargate]] with multi-DC training context
- Update [[Alphabet]] with Google's specific multi-DC deployments (Iowa/Nebraska, Ohio)
- New geography: **Iowa/Nebraska + Ohio** as Google multi-DC concentration (could split into geography pages later)
