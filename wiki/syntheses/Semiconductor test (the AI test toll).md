---
type: synthesis
created: 2026-06-03
updated: 2026-06-03
sources: ["[[Teradyne]]", "[[Aehr Test Systems]]", "[[HBM allocation]]", "[[AI value capture across the stack]]"]
tags: [synthesis, semiconductor-test, ate, burn-in, hbm-test, toll, value-capture, oligopoly]
---

# Semiconductor test (the AI test toll)

**The under-watched toll layer: every AI chip, HBM stack, and optical I/O die must be *tested* — and test is a concentrated, indispensable oligopoly.** As AI silicon gets more complex (multi-die, HBM stacks, huge reticle-limit dies, optical I/O), **test intensity per wafer rises** — more test time, more burn-in, more system-level test. The thesis: test is a quiet **picks-and-shovels toll** that scales with AI-chip complexity, not just unit volume.

## The view (as of 2026-06-03)
**Test is a toll because it's concentrated × indispensable × intensity-rising.** You can't ship an AI ASIC or an HBM stack without it, the vendors are an oligopoly, and AI *raises the test content per chip* (reliability matters more, dies are bigger, stacks are taller). It's a smaller, less glamorous toll than [[NVIDIA]] or HBM — but a real one, and lower-consensus.

## Why AI raises test intensity (the mechanism)
- **HBM stacks** need wafer-level + stack test (KGD — known-good-die — is critical; one bad layer kills a $X00 stack). HBM4 → taller stacks → more test. → [[HBM allocation]].
- **Reticle-limit AI dies + multi-die packages** (Rubin, MI-series, custom XPUs) → more system-level test (SLT) and longer test times.
- **Burn-in** (reliability stress test) becomes mandatory for hyperscaler AI ASICs at scale — a *new* demand vector ([[Aehr Test Systems]]).
- **Optical I/O / CPO** dies need their own burn-in/test (a new category as [[Networking & interconnect]] goes optical).

## The map — who captures the test rent
| Layer | Names | Position |
| --- | --- | --- |
| **ATE (automated test equipment)** | **[[Teradyne]]** (TER), **[[Advantest]]** (6857.T) | the **duopoly**; Advantest leads HBM/SoC (~70% AI-test share), TER leads compute/SoC + has robotics |
| **Wafer-level burn-in** | **[[Aehr Test Systems]]** (AEHR) | micro-cap pure-play pivoting EV-SiC → AI-processor + optical-I/O burn-in |
| **System-level / handler / probe** | Cohu, FormFactor, Advantest | adjacent test-chain content |

## Value-capture read
Per [[AI value capture across the stack]] (rent = concentration × indispensability × capacity-constraint):
- **Concentration:** ATE is essentially **Teradyne + Advantest**; burn-in has few players.
- **Indispensable:** no chip ships untested; HBM KGD is non-negotiable.
- **Intensity-rising:** AI *increases* test content per chip → the toll grows faster than unit volume.
- **Robust to the silicon war:** NVIDIA GPU, hyperscaler XPU, or AMD — *all* get tested. Like [[TSMC]]/memory, test wins regardless of who wins compute.

## Tradable read
- **The quality toll:** **[[Advantest]]** (the **purest** test toll — ~70% of AI-chip testing, HBM/SoC leader) and **[[Teradyne]]** (test duopoly + HBM-test share + a free [[Physical AI & robotics|robotics]] option).
- **The speculative end:** **[[Aehr Test Systems]]** — real AI burn-in pivot (3.5× book-to-bill) but micro-cap, lumpy, single-lead-customer concentration. Venture-grade exposure to the same theme.
- **Bear / watch:** test is **cyclical to chip volume** (a capex pause hits it); Advantest vs Teradyne share shifts; burn-in adoption could plateau if reliability proves a non-issue at scale.

## Leading indicators
- TER/Advantest **Semi-Test** revenue + **HBM-test** commentary (intensity rising?).
- AEHR **bookings / book-to-bill** (AI burn-in adoption curve).
- Test **content per AI wafer** trend (more SLT/burn-in = thesis confirm).

## Confidence + aging
| Claim | Confidence | Half-life |
| --- | --- | --- |
| Test is a concentrated, indispensable toll | **High** | ~12 mo |
| AI raises test intensity per chip | **High** | ~12 mo |
| Robust to the silicon war | **High** | ~12 mo |
| Burn-in is a durable new vector | Moderate | ~9 mo |

**Re-evaluate on:** a chip-volume/capex pause (cyclical hit); burn-in adoption stalling; an ATE share shift.

## Related
- [[Teradyne]] · [[Aehr Test Systems]] · [[HBM allocation]] · [[AI value capture across the stack]] · [[Networking & interconnect]] (optical-I/O test) · [[Physical AI & robotics]] (TER robotics) · [[Bottleneck ranking (May 2026)]]
