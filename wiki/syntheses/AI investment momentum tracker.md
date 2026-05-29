---
type: synthesis
created: 2026-05-28
updated: 2026-05-28
sources: ["[[Capex trajectory thesis]]", "[[Capex bust scenario]]", "[[NVIDIA Q1 FY27 earnings (2026)]]", "[[CoreWeave Q1 2026 earnings]]", "[[Apollo - AI Capex Risk Outlook (2026)]]", "[[AI infrastructure investment map (May 2026)]]"]
tags: [thesis, regime-monitor, momentum, accelerating-stagnating-slowing, live]
---

# AI investment momentum tracker

**The live regime read.** Sits between the two thesis poles — [[Capex trajectory thesis]] (bull) and [[Capex bust scenario]] (bear) — and answers one question continuously: **is the AI infrastructure buildout accelerating, stagnating, or slowing right now?** Maintained daily by the Market Regime Monitor routine (drafts) + human commit.

---

## CURRENT VERDICT — 2026-05-28

# 🟢 ACCELERATING

**Confidence: High** on the hard-demand channel; **rising caution** on the credit channel.

```
SLOWING  ◄———————————————————————●———►  ACCELERATING
                                   ▲
                            we are here
              (demand parabolic; credit channel flashing first-caution)
```

**One-line read:** Hard demand signals (earnings, backlogs, principal commentary) are at maximum acceleration; the *only* deceleration signal is in the credit/sentiment channel (rising "bubble" concern, surging debt issuance) — which is exactly where [[Capex bust scenario]] says a slowdown would show up *first*. Net: accelerating, but watch the credit channel as the leading edge.

---

## Scoring framework

Each tracked signal scores **+1 (accelerating) / 0 (neutral) / −1 (slowing)** across four channels. Net score maps to the regime verdict:

| Net score | Regime |
| --- | --- |
| ≥ +4 | 🟢 Accelerating |
| +1 to +3 | 🟢 Accelerating (moderating) |
| 0 | 🟡 Stagnating |
| −1 to −3 | 🟠 Slowing |
| ≤ −4 | 🔴 Contracting |

## Evidence ledger — current scored signals

| Date | Channel | Signal | Score |
| --- | --- | --- | --- |
| 2026-05-28 | Earnings | **[[Dell Technologies\|Dell]] Q1 FY27: $24.4B AI orders, $51.3B AI backlog, ~$60B FY27 AI-server guide (+144%)** | **+1** |
| 2026-05-20 | Earnings | **[[NVIDIA]] Q1 FY27: $81.6B rev (+85%), $75.2B DC; Vera Rubin = new $200B TAM** | **+1** |
| 2026-05-28 | Earnings | **[[CoreWeave]] Q1: $99.4B backlog, 3.5 GW contracted, +>$40B new commitments in Q1** | **+1** |
| 2026-05-21 | Principal | **Jensen Huang: "Demand has gone parabolic… agentic AI inflection point has arrived… compute equals revenue"; "$1T won't be enough"** | **+1** |
| 2026-05 | Deals/guide | Hyperscaler FY26 capex guides all *raised* (Big Five ~$745-775B); NVIDIA $1T Blackwell+Rubin guidance intact | **+1** |
| 2026-05 | Macro/credit | **BofA raised hyperscaler IG issuance forecast to $175B; investor survey expects $285B** (debt funds the buildout = accel signal) | **+1** |
| 2026-02→05 | Macro/credit | **"AI bubble" now bond investors' #1 concern (23%, up from 9% in Dec); BIS warns on hyperscaler shadow/off-B/S debt** | **−1** |
| 2026-05 | Macro/credit | IG BBB OAS — **needs verification** (watchlist baseline unseeded); spread *widening* would be the key decel tell | **0 (watch)** |

**Net score: +5 → 🟢 Accelerating.** The lone −1 is concentrated in credit sentiment, not demand.

---

## The four channels — current read

### 1. Supply-chain + hyperscaler earnings → 🟢 strongly accelerating
Dell ($51.3B AI backlog, +144% FY27 guide), NVIDIA ($75.2B DC, +85%), CoreWeave ($99.4B backlog) all printing records *this month*. The hard demand proxies are unambiguous. Dell's backlog *growing faster than it can ship* is the cleanest "demand > supply" tell on the box-maker side.

### 2. Principal statements → 🟢 accelerating
Jensen Huang (May 2026): demand "parabolic," "compute equals revenue," "$1T won't be enough." No major principal is signaling a pullback. (Watch for the *first* hedge — Pichai's "elements of irrationality" was the closest, months ago.)

**Principals tracked** (statements scored directionally — a bull voice turning cautious is a stronger signal than a known bear staying bearish):
- **Lab leaders:** Sam Altman (OpenAI), Dario Amodei ([[Anthropic]]), Demis Hassabis (Google DeepMind), **Elon Musk** ([[xAI]]/Tesla), Ilya Sutskever (SSI), Mustafa Suleyman (Microsoft AI)
- **Hardware/infra:** Jensen Huang ([[NVIDIA]]), Lisa Su ([[AMD]]), C.C. Wei ([[TSMC]])
- **Hyperscaler/capital:** Satya Nadella ([[Microsoft]]), Sundar Pichai ([[Alphabet]]), Mark Zuckerberg ([[Meta]]), Andy Jassy ([[Amazon]]), Larry Ellison/Safra Catz ([[Oracle]]), Masayoshi Son ([[SoftBank]]/[[Stargate]])
- **Independent researchers / market-movers:** **Andrej Karpathy** (capability/timeline realism — tends to temper hype; a notable *bull-to-cautious* tell if he sours), **Leopold Aschenbrenner** (Situational Awareness; aggressive-scaling bull, now runs an AI-focused fund — see [[Situational Awareness, Two Years Later (2026)]])
- **Analysts / allocators:** Dylan Patel ([[SemiAnalysis]]), Torsten Slok ([[Apollo - AI Capex Risk Outlook (2026)|Apollo]]), David Cahn (Sequoia, "$600B question"), Ed Zitron ([[Ed Zitron - AI Is A Money Trap (2025)|bear]]), Michael Burry / Stanley Druckenmiller (positioning shifts)

**Scoring nuance:** weight *direction change* over level. Aschenbrenner staying bullish ≈ 0 (priced in); **Aschenbrenner turning cautious = strong −1**. Karpathy or Burry flagging over-build = meaningful −1. A known bear (Zitron) staying bearish ≈ 0.

### 3. Deals + capex guidance → 🟢 accelerating
All Big Five raised FY26 capex guides; NVIDIA's $1T 2025-27 guidance is a reputational lock-in. Guide *revisions* are the first-derivative tell — still pointing up. No cuts yet.

### 4. Macro / credit → 🟡 mixed (the leading edge of risk)
Two-sided: surging IG issuance ($175-285B) *funds* the buildout (accel), but it's also the **debt-funded shift** [[AI debt financing capacity]] + [[Apollo - AI Capex Risk Outlook (2026)]] flagged — and "AI bubble" is now bond investors' top worry. **This channel will flip to slowing before the others** if the regime turns. It's the canary.

---

## What would flip the verdict (the crux signals)

The regime moves to 🟡 **Stagnating** or 🟠 **Slowing** when:

1. **A hyperscaler cuts capex *guidance*** (not actuals) at a quarterly print — the single highest-value tell
2. **Dell / Super Micro AI backlog *shrinks* QoQ** — box-maker backlog is the most sensitive demand proxy
3. **IG BBB OAS widens 100bps+** — credit channel confirms (currently the watch item)
4. **A principal hedges materially** — Jensen/Altman/Zuck signaling "digesting" capacity rather than "parabolic"
5. **NVIDIA DC revenue growth decelerates sharply** or the $1T guidance is walked back
6. **GPU rental price index rolls over** ([[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]] — currently +40% in 5mo)

These are the *inverse* of the accelerating signals — same dials, watched for the opposite move. They mirror the leading indicators in [[Capex bust scenario]].

## How this page is maintained

- **Daily**: the Market Regime Monitor routine WebSearch-scans the four channels (WebFetch is blocked in the cloud env), scores new signals, and **drops a Gmail draft only when the net score shifts a tier or a notable item lands** (no draft on quiet days — avoids daily noise).
- **Human (local)**: review the draft, verify figures (search-sourced → verify), update the verdict + evidence ledger here, commit.
- The verdict line + evidence ledger are the living state; old signals age out of the ledger (keep ~last 10-15, archive the rest in [[log.md]]).

## Relationship to other syntheses

- [[Capex trajectory thesis]] — the **bull** pole. When this tracker reads 🟢, that thesis is playing out.
- [[Capex bust scenario]] — the **bear** pole. When this tracker reads 🟠/🔴, that scenario is materializing.
- [[AI infrastructure investment map (May 2026)]] — the **what to own**. This tracker is the *when/whether* overlay on that map.
- [[Bottleneck ranking (May 2026)]] — supply-side constraints; this tracker is demand-side momentum.

## Confidence and aging

| Element | Confidence | Half-life |
| --- | --- | --- |
| Current 🟢 Accelerating verdict | High | ~2-4 weeks (re-read each earnings wave) |
| Credit channel as the leading risk edge | Moderate-High | ~6 weeks |
| Scoring framework calibration | Moderate (new; will tune thresholds) | ~3 months |

**Re-evaluate on:** any hyperscaler capex guide change · Dell/SMCI backlog prints · NVIDIA quarterly · IG spread moves · first principal hedge.

> [!note] Verdict provenance
> Seeded 2026-05-28 with live WebSearch data (Dell Q1 FY27 reported same day; NVIDIA Q1 FY27; Jensen May 2026 commentary; BofA/CNBC credit-market coverage). Figures are search-sourced — verify against primary filings before trading on them.
