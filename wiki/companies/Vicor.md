---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Cerebras — Faster Tokens Please (2026)]]"]
ticker: VICR
layer: power
role: supplier
tags: [vicor, power-delivery, vpd, cerebras-supplier, vrm]
---

# Vicor

Specialty power-delivery semiconductor company. **Custom power delivery partner for [[Cerebras Systems]]'s WSE-3** — designed the bespoke 25 kW VPD (vertical power delivery) modules that feed each wafer.

## Cerebras content

- Power architecture: **12 × 3.3 kW PSUs → 50V → PDB boards → Vicor power bricks → 12V → Vicor VRM (VPD) → 1V at the wafer**
- 84 Vicor power bricks per CS-3 (one per WSE-3 die row × column)
- Per [[Cerebras — Faster Tokens Please (2026)]]: "VICR's content in each WSE is not too far from TSMC's content" — i.e. Vicor's BOM share per CS-3 is comparable to the **TSMC wafer itself** (~$20K range)
- CS-3 BOM ≈ **$450K/rack** (post Q4 2025 memory hike); Vicor content is a meaningful share

## Why it matters for the bottleneck thesis

- **Concrete picks-and-shovels exposure** to Cerebras's revenue ramp: as [[Cerebras Systems]] scales toward its 750 MW [[OpenAI]] commitment, Vicor's content per system flows through
- Custom 25 kW VPD modules are **bespoke** — not commodity power semis. Hard to second-source.
- Broader vertical power delivery (VPD) trend in AI accelerators (delivering high current at low voltage to the die backside) is structurally favorable for Vicor's architecture vs. traditional motherboard-routed VRMs
- Tradeable name (ticker VICR)

## Open questions

- Vicor revenue concentration to Cerebras specifically (likely meaningful given the BOM share, but exact split not disclosed)
- Whether Vicor's VPD architecture wins beyond Cerebras — into NVIDIA Rubin, AMD MI400, or hyperscaler ASICs
- Pricing power on bespoke 25 kW modules vs. potential commoditization at scale
