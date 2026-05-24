---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]"]
layer: compute
severity: watch
mechanism: capacity
tags: [data, training-data, multimodal, synthetic-data, scaling-laws, chinchilla]
---

# Data wall

The point at which the supply of high-quality training data fails to keep up with the compute being thrown at training. A genuine constraint on pure-text training in ~5 years at current compute growth rates, but probably *not* the 2030 binding constraint once multimodal and synthetic data are accounted for.

## Key numbers

| Quantity | Estimate | Source |
| --- | --- | --- |
| Indexed web (text, deduplicated) | **~500T tokens** (range 100T–3000T) | [[Can AI scaling continue through 2030 (2024)]] |
| Current frontier training dataset | ~15T tokens (Llama 3, etc.) | Same |
| Text-only data wall (Chinchilla-optimal) | **8e28 FLOP** ceiling | Same, citing Villalobos et al. 2024 |
| Multimodal expansion (image + video + audio) | 400T–20 quadrillion effective tokens | Same |
| Multimodal-enabled training ceiling | **6e28–2e32 FLOP** | Same |

## Why "watch" rather than "acute"

- Multimodal additions (image, video, audio) plausibly **extend the ceiling by 1–2 orders of magnitude**
- Synthetic data, if works, dissolves the constraint entirely
- Less binding than [[Power & energy|power]] or [[CoWoS packaging capacity|chips]] in the 2030 window per Epoch's median
- Wide uncertainty (4 orders of magnitude in 80% CI) makes confident position-taking hard

## Synthetic-data hypothesis

Verification is often easier than generation (canonical case: code unit tests). This suggests compute can be spent to generate-and-filter high-quality synthetic data in:
- Math, code (verifiable)
- Multi-step reasoning (chain-of-thought bootstrap)
- Long-context, tool use (where human data is scarce)

Risks: **model collapse** from over-reliance on synthetic data — degeneration or stagnation of capabilities. Mitigations exist but are research-frontier.

## Linkage to other constraints

- If data wall does bind, it shifts spend from training → inference (similar to [[DeepSeek|Jevons]] dynamic)
- Synthetic data generation *consumes compute* — would partially re-route the compute bottleneck back to [[CoWoS packaging capacity|chips]] and [[Power & energy|power]]

## Open questions / what to watch

- Does synthetic data avoid model collapse at frontier-scale training? (Research is mixed)
- What's the equivalence ratio between video-seconds and text tokens at the frontier? Epoch uses 22 tokens/sec/image as central guess; this is uncertain
- How much private data (corporate, scientific, paywalled) gets unlocked vs. stays gated?
- Copyright/licensing regimes — could regulatory action shrink usable data?

## Beneficiaries / counterparties (if data does bind)

- Data brokers, paywalled-content owners (NYT, Reddit, X/Twitter, Stack Exchange) — content licensing rents
- Synthetic-data tooling and verification companies
- Multimodal-first labs ([[Google DeepMind]] with YouTube, [[Meta]] with Instagram/Reels)
