---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, cpo, co-packaged-optics, transceiver-displacement, scale-up, nvidia, broadcom]
---

# SemiAnalysis — Co-Packaged Optics (CPO): Scaling with Light

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling](https://newsletter.semianalysis.com/p/co-packaged-optics-cpo-book-scaling)

> [!success] Primary source — CPO long-term threat to pluggable transceiver thesis
> CPO is the **scale-up networking displacement** of pluggable transceivers. **Scale-out adoption limited near-term** ("benefits not compelling"), but **scale-up CPO is the killer app for late 2020s** — major hyperscalers already committing. Material long-term threat to [[Coherent]] / [[Lumentum]] pluggable business.

## CPO vs pluggable transceiver economics

| Metric | Pluggable (X800-Q3400, 1.6T twin-port) | CPO equivalent |
| --- | --- | --- |
| 72-port system transceiver cost | $72,000 | $35-40k (engine) → $80-90k with 60% margin |
| 800G optical power | 16-17W (DSP) | **4-5W (CPO + laser) = 73% reduction** |
| Meta test: 800G | 15W (2xFR4 pluggable) | **5.4W (Broadcom Bailly CPO) = 65% savings** |

**Total cluster cost impact:**
- 3-layer network: CPO delivers 31% lower networking cost, **only 3% total cluster cost reduction**
- 2-layer network: 86% transceiver cost savings, **7% total cluster cost reduction**

## Named CPO vendors / products

### Hyperscaler/vendor solutions
- **NVIDIA Quantum X800-Q3450 CPO** (scale-out switch)
- **Spectrum 6800** offering 512 ports of 800G
- **Broadcom Bailly 51.2T CPO switch**
- **Broadcom Humboldt switches**

### Specialized CPO companies
- Ayar Labs, Nubis, Celestial AI, Lightmatter, Xscape Photonics, **Ranovus** (already a Cerebras partner per [[Cerebras — Faster Tokens Please (2026)]]), Scintil

### Celestial AI (canonical scale-up CPO bet)
- Estimating **$1B revenue run rate by end of calendar 2028**
- Driver: **CPO scale-up solution shipping with [[Amazon]] Trainium 4**

## Critical timing — when does CPO displace pluggables?

### Scale-out networking
> "Limited adoption near-term despite GTC 2025 announcements"
> "TCO, power, and deployment speed benefits are not compelling enough for customers"

= **Coherent + Lumentum pluggable transceiver business** ([[Coherent]] / [[Lumentum]]) remains intact through 2027+ on scale-out.

### Scale-up networking (the killer app)
> "CPO will be the main driver of bandwidth increases in scale-up networking for the latter part of this decade and beyond"
> "Not a matter of if and why, but when and how"
- Major hyperscalers already committing to scale-up CPO suppliers
- **Rubin Ultra NVL576 launch: targeting 2027 (analysts estimate late 2027)** — per [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]]
- Supply chain: "won't be ready to shoot tens of millions of CPO endpoints" by Rubin timeline

## Bandwidth scaling vectors

| Approach | Scaling pattern |
| --- | --- |
| Copper SerDes | "Slow grind" — doubling per lane bidirectional |
| CPO | Multiple vectors: baud rate + DWDM + additional fiber pairs + modulation |

### NVLink generation roadmap
- Blackwell: 7.2 Tbit/s per GPU
- **Rubin: 14.4 Tbit/s per GPU**

## Packaging standard — TSMC COUPE

**Compact Universal Photonic Engine**:
- EIC on N7 node
- PIC on SOI N65 node
- Bonded via TSMC-SoIC-bond process
- Performance: SoIC-based OEs offer **>23× bandwidth density** vs bump-bonded alternatives

## CPO reliability data (Meta/Broadcom Study)

- **CPO MTBF: 2.6M device hours** vs **0.5-1M for 400G 2xFR4 transceivers**
- Test scale: 15M 400G port-device hours over ~325 days
- Caveat: only 15 CPO switches tested for 11 months in a lab setting

## Why it matters

1. **CPO threat to [[Coherent]] / [[Lumentum]] is real but slow** — scale-out remains pluggable through 2027+; scale-up disruption ramps from 2027/2028 with Rubin Ultra and Trainium 4
2. **NVIDIA Rubin Ultra NVL576 = first big CPO deployment** — happens late 2027
3. **Celestial AI = the canonical CPO startup bet**; Trainium 4 with CPO = $1B+ revenue run-rate by end 2028
4. **Bandwidth scaling vectors** make CPO structurally win vs copper — bandwidth doubles much faster
5. **Power savings 65-73%** = massive operational economics at hyperscale
6. **TSMC COUPE platform** = TSMC controls the CPO packaging supply chain (additional [[TSMC]] revenue stream)

## Implications

- Update [[Coherent]] / [[Lumentum]] with CPO long-term threat caveat (scale-up disruption begins late 2027)
- Update [[Datacenter physical]] with CPO timing + Celestial AI mention
- Cross-reference [[SemiAnalysis - GTC 2026 Inference Kingdom Expands (2026)]] for NVIDIA Rubin Ultra CPO context
- New flagged name: **Celestial AI** (private; CPO startup with Trainium 4 anchor)
