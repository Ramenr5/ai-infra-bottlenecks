---
type: company
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Cerebras — Faster Tokens Please (2026)]]"]
ticker: TT
layer: datacenter
role: supplier
tags: [trane, cooling, liquid-cooling, liquidstack, cdu, cerebras-supplier, hvac]
---

# Trane Technologies

HVAC and thermal management company. **Acquired LiquidStack in March 2026** — significant inorganic move into AI datacenter liquid cooling.

## LiquidStack acquisition

- **Closed March 2026** per [[Cerebras — Faster Tokens Please (2026)]]
- LiquidStack was one of [[Cerebras Systems]]'s main cooling partners — jointly developed the single-phase L2L CDUs sized to the CS-3's flow and pressure envelope
- Originally started with two-phase immersion cooling solutions
- Trane gains a foothold in **next-generation single-phase direct-to-chip cooling** — the dominant architecture for >100kW racks (Blackwell GB200 NVL72 and beyond)

## Cerebras-specific exposure

- CS-3 runs at **~100 LPM at 25 kW = ~4 LPM/kW** — roughly **3× the OCP/NVIDIA reference of 1.5 LPM/kW** for GB200 NVL72
- This requires oversized pumps, pipes, CDUs, and quick-disconnects — direct exposure for cooling-system vendors
- Cerebras's Oklahoma facility runs a **6,000-ton chiller plant** (5°C output, warmed to 21°C via heat exchanger before reaching engine block) — substantial scale facility-side cooling, see [[Cerebras Oklahoma datacenter]]

## Why it matters for the bottleneck thesis

- **Trane = tradable proxy for AI liquid cooling ramp.** Pre-existing HVAC scale + LiquidStack's AI-cooling IP/relationships = positioned for the broader DC liquid-cooling wave (not just Cerebras)
- Liquid cooling becoming mandatory as rack density climbs past air-cooling limits (~30-50 kW/rack); CS-3 sits at the extreme (25 kW per wafer × multiple per rack)
- Related cooling-equipment competitors with AI exposure: **Vertiv Holdings (VRT)**, **Schneider Electric (SU.PA)**, **nVent (NVT)**, **Johnson Controls (JCI)**

## Open questions

- LiquidStack revenue contribution to Trane (private pre-deal; not disclosed at acquisition)
- How fast Trane scales LiquidStack's CDU production beyond Cerebras-specific designs
- Trane's win rate vs Vertiv/Schneider on hyperscaler liquid-cooling contracts
