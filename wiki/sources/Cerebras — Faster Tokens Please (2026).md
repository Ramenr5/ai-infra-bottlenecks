---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [semianalysis, cerebras, wafer-scale, sram, ipo, inference, openai-deal, primary-source]
---

# Cerebras — Faster Tokens Please (2026)

**Author:** Myron Xie at [[SemiAnalysis]]
**Published:** 2026-05-14
**URL:** [newsletter.semianalysis.com/p/cerebras-faster-tokens-please](https://newsletter.semianalysis.com/p/cerebras-faster-tokens-please)
**Raw:** `raw/articles/Cerebras — Faster Tokens Please.md`

> [!success] Primary source — methodologically rigorous
> SemiAnalysis is the gold-standard public-facing semi analyst shop. Peer of [[Epoch AI]] in methodological credibility. Article is the public/free portion of a deeper IPO-timed analysis — paywalled tail covers OAI deal profitability and DC capacity execution risk.

## What it is

Deep-dive on [[Cerebras Systems]] timed to its IPO. Covers (1) the fast-inference market dynamic that's resurrected wafer-scale economics, (2) WSE-3 architecture and BOM, (3) the OpenAI MRA that anchors revenue through 2028, and (4) Cerebras's architectural limits.

## The headline deal — Cerebras × OpenAI MRA (Dec 2025)

| Item | Value |
| --- | --- |
| Capacity commitment | **750 MW** of AI inference compute |
| Deployment window | 2026–2028 in tranches; each 3–4yr term extendable to 5 |
| Option for additional | **+1.25 GW → 2 GW total potential** |
| Remaining performance obligations (S-1, Dec 31 2025) | **$24.6B** |
| Working capital loan from OpenAI | $1B at 6% (waived if repaid in capacity) |
| Warrant to OpenAI | **33,445,026 shares @ ~$0** = up to **~12% of Cerebras** fully diluted |
| Vesting structure | Loan tranche (vested Jan 2026); $40B market-cap or fee threshold; capacity delivery (Committed + Additional sub-tranches) |
| Warrant fair value (Dec 31 2025) | $82.02/share → ~$2.74B theoretical contra-revenue |

**Significance:** OpenAI now has equity exposure in its compute supplier. Template for vertical hyperscaler-vendor integration. The MRA + loan + warrant package is one cohesive control structure — OpenAI controls disposition of loan funds if Cerebras breaches.

## Fast inference as a paid product

- **Anthropic Opus 4.6 fast:** 6× the price for 2.5× interactivity (degraded to ~1.75× recently)
- SemiAnalysis spent **80% of its peak ~$10M AI budget** on Opus 4.6 fast — their own engineers refused to switch to Opus 4.7 because it didn't include fast mode
- Standard Opus 4.6 in Claude Code ≈ 40 tps; Opus 4.6 fast ≈ 70 tps (recently degraded from >100 tps)
- *Implication:* a brand-new pricing axis distinct from throughput — validates SRAM-machine architectures ([[Cerebras Systems]], [[Groq]]) commercially

## Strategic event — NVIDIA acquired Groq (Dec 2025)

- [[NVIDIA]] "license-acqui-hired" [[Groq]] in December 2025
- Implied value: "at least $20B" per Jensen
- Removes a competing SRAM-machine vendor; consolidates inference hardware landscape
- Signals NVIDIA sees fast-inference accelerators as strategically necessary, not just a niche

## WSE-3 architecture (the wafer)

- TSMC N5 node; **12 × 7 grid of 84 dies on one wafer** = ~46,225 mm²
- **44 GB SRAM** (50% of wafer area); **21 PB/s aggregate bandwidth**
- 970K cores total / 900K enabled (yield-redundancy)
- **15.6 PFLOPS dense FP16** (vs 125 PFLOPS marketed sparse — "Feldman's Formula" 8:1 sparsity factor)
- **25 kW power per wafer**; custom liquid cooling (engine block sandwich: cold plate / wafer / compliant connector / PCB)
- **150 GB/s (1.2 Tb/s) off-wafer bandwidth — ~130× less dense than NVIDIA per mm of edge.** Architectural ceiling, not a fixable bug
- BOM: ~$350K (pre-memory-hike) / **~$450K per rack** (post-Q4 2025 memory price hike); TSMC wafer ≈ $20K, Vicor power delivery ≈ comparable share

## Supply chain partners surfaced

| Partner | Role | Public/Private |
| --- | --- | --- |
| [[TSMC]] | N5 wafer fab | Public (TSM) |
| [[Vicor]] | 25 kW custom power delivery (VPD, 50V→12V→1V) | Public (VICR) |
| [[Trane Technologies]] / **LiquidStack** | Custom single-phase L2L CDU, cooling co-design (Trane acquired LiquidStack Mar 2026) | Public (TT) |
| **Ranovus** | Photonic interconnect partner for future WSE photonic-wafer hybrid bonding | Private |
| **AMD** (Xilinx) | 12× 100GbE FPGAs as I/O converters | Public (AMD) |

## Cerebras's architectural limits

- **Only economically viable for small/medium models.** Largest production model is GPT-OSS 120B; preview tops at GLM 4.7 (355B). Llama 70B / 405B deprecated, likely on serving economics.
- **DeepSeek V3 and Kimi K2 (2025's most popular open frontier models) never offered on public Cerebras Cloud**
- Cannot economically serve 1T+ models with long context (Sonnet 1T, Opus 5T per Elon's claims)
- 128K context max on public endpoints, but ~50% of real-world agentic requests exceed 128K (per SemiAnalysis AgentX traces — 432K requests, ~80B tokens)
- **SRAM scaling is dead beyond 5nm** — N3E zero shrink vs N5. CS-4 will stay on N5 with higher power for compute headroom

## Future roadmap

- Hybrid-bonded **photonic interconnect wafer** (with Ranovus) — addresses I/O bandwidth bottleneck (but for HPC, not LLM inference per Cerebras's claim)
- **DRAM-on-wafer bonding** — addresses memory capacity
- CS-4 system on N5 with higher power; flow rates targeting industry-standard 1.5–1.7 LPM/kW (vs CS-3's 4 LPM/kW)

## Implications for our wiki

1. **New compute-layer dimension: inference interactivity tier.** The Epoch 2030 framework is training-side; this source establishes fast-inference as a parallel demand axis.
2. **OpenAI is the demand anchor for a second compute supplier** (beyond NVIDIA/[[Stargate]]). Concentrates risk further — Cerebras's revenue is effectively single-customer.
3. **New picks-and-shovels names** with concrete BOM/contract exposure: [[Vicor]], [[Trane Technologies]] (via LiquidStack), [[TSMC]] (already tracked, now with a second major AI accelerator customer at N5).
4. **NVIDIA's Groq acquisition (Dec 2025)** is a major strategic event we hadn't captured. Updated [[NVIDIA]].
5. **New geography:** [[Oklahoma]] joins [[Texas]] and [[Northern Virginia]] as material AI infra locations via Cerebras's main DC.

## Pages created/updated from this ingest

See [[log.md]] entry of 2026-05-24.
