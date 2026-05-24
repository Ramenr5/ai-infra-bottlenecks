---
type: source
created: 2026-05-24
updated: 2026-05-24
tags: [primary-source, semianalysis, isscc, hbm4, cpo, tsmc-active-lsi, lpddr6, samsung, sk-hynix, micron]
---

# SemiAnalysis — ISSCC 2026: NVIDIA & Broadcom CPO, HBM4 & LPDDR6, TSMC Active LSI

**Publisher:** [[SemiAnalysis]]
**Published:** 2026-04-15
**URL:** [newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo](https://newsletter.semianalysis.com/p/isscc-2026-nvidia-and-broadcom-cpo)

> [!success] Primary source — architectural detail on HBM4 + CPO + advanced packaging
> ISSCC = annual academic chip-architecture conference. This summary captures the most architecturally significant disclosures: HBM4 implementations from Samsung/SK Hynix/Micron, NVIDIA + Broadcom CPO specs, TSMC's Active LSI matching AMD MI450 design.

## HBM4 architectural details (THREE-vendor map)

### Samsung HBM4
- **Peak: 13 Gb/s per pin** at higher voltages
- **Operating voltage: 1.1V (HBM3E) → 0.75V (HBM4)** = **32% reduction**
- **4× higher TSV count** enables these speeds
- Per-channel calibration: 7.8 Gb/s → 9.4 Gb/s
- Architecture: **36 GB, 12-high HBM4 stack with 2048 IO pins, 3.3 TB/s**
- Logic process: Samsung SF4 (in-house; higher cost option)

### SK Hynix HBM4
- **Uses TSMC N12 logic process for base die** (outsourced)
- Different strategic choice than Samsung (uses external foundry vs in-house)

### Micron HBM4
- **Internal CMOS base-die technology** (in-house but different from Samsung approach)
- Each of the 3 HBM vendors uses a different base-die strategy

## TSMC Active LSI (matches AMD MI450)

This is the **specific architectural primary** for what's inside AMD MI450:

- **2 base dies connected to each other**
- **12 HBM4 stacks**
- **2 IO dies**
- Each "Active LSI" pairs with 2 HBM4 stacks
- **Power efficiency: 0.36 pJ/b at 0.75V**
- ETT circuits: 0.07 pJ/b

## NVIDIA & Broadcom CPO

### NVIDIA CPO
- **32 Gb/s per lambda, 8 wavelengths multiplexed using DWDM**
- 9th wavelength for clock forwarding at half rate

### Broadcom CPO
- **6.4T optical engine: 64 lanes of ~100G using PAM4**
- Demonstrated in Tomahawk 5 51.2T CPO system

## LPDDR6

Samsung + SK Hynix specs:
- **Maximum 14.4 Gb/s data rate**
- 2 sub-channel per die, 16 banks each
- 12 DQ pins per sub-channel, burst length 24
- Efficiency mode: **27% read power reduction, 22% write power reduction**

## Logic-Based SRAM (MediaTek xBIT)

- **10-transistor cell** with balanced NMOS/PMOS ratios
- 22-63% higher density vs standard 8T cells
- 30% read/write power reduction

## UCIe-S (Intel demonstration)

- **48 Gb/s/lane over 16 lanes on standard organic packaging**
- Up to **30mm distance**

## Why it matters

1. **HBM4 vendor strategy divergence** — three suppliers, three different base-die approaches. **SK Hynix using TSMC N12 = direct revenue line for TSMC tied to HBM4 ramp**; Samsung uses in-house SF4; Micron uses internal CMOS. Different cost/yield/timing implications.
2. **TSMC Active LSI = direct architectural primary on AMD MI450** — confirms 12 HBM4 stacks per accelerator (vs Blackwell's 8); validates the [[HBM allocation]] Rubin Ultra 4× scaling trajectory
3. **Samsung HBM4 13 Gb/s** is the highest pin rate disclosed = supports Samsung's "first to ship HBM4 at scale" claim from Q1 2026 earnings
4. **NVIDIA + Broadcom CPO** = the chip-architecture validation of the CPO scale-up thesis (see [[SemiAnalysis - Co-Packaged Optics (2026)]])
5. **UCIe-S 48 Gb/s** = chiplet-to-chiplet bandwidth standard; supports the broader chiplet/active-interposer trend

## Implications

- Update [[HBM allocation]] with HBM4 vendor-by-vendor architecture details (SKH on TSMC N12 is significant for TSMC revenue)
- Update [[AMD]] with MI450 architectural detail (12 HBM4 stacks + Active LSI)
- Cross-ref [[SemiAnalysis - Co-Packaged Optics (2026)]] for CPO context
- Update [[TSMC]] with HBM4 base-die revenue stream from SK Hynix
