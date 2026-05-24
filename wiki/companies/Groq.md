---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Cerebras — Faster Tokens Please (2026)]]"]
layer: compute
role: supplier
tags: [groq, sram, ai-accelerator, lpu, nvidia-acquisition, inference]
---

# Groq

Founder-led SRAM-machine AI inference accelerator company. **Acquired ("license-acqui-hired") by [[NVIDIA]] in December 2025** at an implied value of ≥$20B per Jensen. Now operates as part of NVIDIA, with the LP30/LP40 chips integrated into NVIDIA's inference product line.

## What Groq is/was

- **LPU (Language Processing Unit):** SRAM-based inference accelerator architecture, like [[Cerebras Systems]] but at conventional chip scale rather than wafer scale
- **500 MB SRAM** per LPU3 (much less than Cerebras WSE-3's 44 GB, but much more than typical GPUs)
- Optimized for **fast token generation** at the cost of memory capacity and throughput per dollar
- LP30 includes 96 lanes × 112G SerDes = 9.6 Tb/s off-package bandwidth (vs Cerebras's 1.2 Tb/s — much higher I/O density at smaller chip size)

## The NVIDIA acquisition

- **December 2025**, ≥$20B implied value
- Validates that SRAM-machine architectures have real strategic value — Jensen apparently was persuaded after years of HBM-dominant orthodoxy
- **Removes one independent competitor** in the fast-inference accelerator landscape (now only Cerebras at scale)
- LP40 next-gen now an NVIDIA product roadmap item, with **hybrid bonding to add additional SRAM tiles** (z-axis stacking) per the SemiAnalysis source
- Per [[Cerebras — Faster Tokens Please (2026)]]: "Jensen saw at least $20B of value, and he was proven right just a couple months later when we hit the Claude Code Inflection Point"

## Why it matters for the bottleneck thesis

- **Strategic consolidation event.** NVIDIA now controls the two leading fast-inference architectures (its own + Groq's). [[Cerebras Systems]] is the sole independent SRAM-machine player at scale.
- **Validates inference-tier pricing** as a real market — Jensen wouldn't pay $20B for a niche
- **Removes competitive pressure on Cerebras** in the public-cloud fast-inference market, but **intensifies the NVIDIA ecosystem moat** for accelerator buyers

## Open questions

- LP30 / LP40 product cadence as NVIDIA roadmap items
- How NVIDIA integrates Groq's SRAM-machine architecture with its broader GB200/GB300 / Rubin platform
- Whether NVIDIA + Groq combined captures most fast-inference share, or [[Cerebras Systems]] holds its single-customer-anchored corner
