---
type: company
created: 2026-05-24
updated: 2026-05-27
sources: ["[[Situational Awareness, Two Years Later (2026)]]", "[[Cerebras — Faster Tokens Please (2026)]]", "[[NVIDIA Q1 FY27 earnings (2026)]]", "[[Anthropic 2026 update]]", "[[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]"]
layer: compute
role: ai-lab
tags: [ai-lab, frontier-lab, claude, private, fastest-revenue-inflection]
---

# Anthropic

US frontier AI lab. **Revenue grew 10× in ~10 months: ~$3B mid-2025 → $30B annualized April 2026** — fastest enterprise SaaS scale-up in history. **Pending $50B+ round at ~$900B valuation** would exceed OpenAI as most valuable AI private. Most aggressive on AGI timelines among major Western labs.

## Valuation trajectory (per [[Anthropic 2026 update]])

| Date | Round | Valuation |
| --- | --- | --- |
| Jan 2024 | (early) | $18B |
| Mar 2025 | Series E | $61.5B |
| Sep 2025 | Series F | $183B |
| **Feb 2026** | **Series G ($30B raise)** | **$380B post-money** — 2nd largest private financing in tech history |
| **Apr 2026** | Pending ($50B+ rumored) | **~$900B implied** — would exceed OpenAI |

## Revenue trajectory

| Date | ARR |
| --- | --- |
| Mid 2025 | $3B |
| Early 2026 | ~$14B |
| **April 2026** | **$30B run-rate** (Reuters Apr 24) |
| **May 2026** | **$44B+ ARR** (per [[SemiAnalysis - AI Value Capture (2026)]]) |
| Feb 2026 (Claude Code alone) | $2.5B run-rate (materially larger by May 2026) |
| **Inference gross margins** | **38% → 70%+** over the ARR expansion window |

**Anthropic ARR is moving extraordinarily fast** — the wiki had $30B (Apr 2026) just weeks ago; SemiAnalysis (May 2026) puts it at $44B+. The trajectory may continue.

### Q1 2026 detail + profitability inflection (per [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]])

- **Added $21B net new ARR in Q1 2026 → $30B ARR** (API/Enterprise-weighted vs OpenAI's consumer skew)
- **Inference gross margins now mid-60s%** — up from 38% (2025) and **-94% (2024)**
- API revenue **~13× Y/Y** (Claude Code enterprise-driven)
- **WSJ (5/20/26): expected Operating Income profitable in 2Q** (adjusted for SBC) — major milestone for a frontier lab
- SemiAnalysis Tokenomics model: **potential >$100B ARR by year end 2026**

### SpaceX compute deal (May 2026) — the extreme demand signal

Anthropic is **renting all of [[xAI]]'s Colossus 1** compute from [[SpaceX]] (which acquired the capacity): **$1.25B/month through May 2029, up to $40B total**, for **300+ MW / 220,000 NVIDIA GPUs** (announced May 6 2026; CNBC/Bloomberg/Fortune/TheInformation — verify). A frontier lab renting a *competitor-adjacent* cluster because it can't source enough GPUs through normal channels is the single most extreme demand-side signal in the wiki — supply-constraint, not demand-restraint. Anthropic Q2 2026 revenue tracking ~$10.9B (≈ $44B+ ARR). Logged +1 in [[AI investment momentum tracker]].

### Distribution: the Bedrock channel

Anthropic pioneered the **Token-as-a-Service distribution model** with [[Amazon]] (AWS Bedrock) and [[Alphabet|Google]] (Vertex), later followed by OpenAI on AWS. Structure: **Anthropic is seller-of-record (books full token revenue)**; the CSP earns an infra fee + revenue-share. Bedrock alone is ~$5.5B run-rate with 80-90%+ on Claude. This gives Anthropic CSP-customer-base access + compute without expensive multi-year IaaS lock-in (at a higher per-token cost). Note: gross-basis revenue recognition makes Bedrock a slightly dilutive mix on Anthropic's blended low-60s% inference margin.

### Claude Code adoption inflection (per [[SemiAnalysis - Claude Code Is The Inflection Point]])

- **Claude Code = 4% of GitHub public commits currently**
- **Projected 20%+ of daily commits by EOY 2026**
- "Anthropic quarterly ARR additions have overtaken OpenAI's"
- **Accenture training 30,000 professionals on Claude** (largest disclosed enterprise deployment)
- Terminal-native architecture (vs IDE sidebar competitors GitHub Copilot, Cursor)
- ROI math: 10-30× for agents handling workflow fractions
- Implication: 20% AI-authored code by EOY 2026 + 4-month task-horizon doubling = inference demand growth accelerates

## Product line

- **Claude Opus 4.7** — high-complexity reasoning
- **Claude Sonnet 4.5** — fast/cheap code + agent workflows
- API pricing: $5/M input + $25/M output (Opus); $10/$37.50 premium with extended context

## Key facts from this source

- **AGI timeline:** Anthropic's formal March 2025 White House recommendations expected AI systems with capabilities matching/exceeding Nobel Prize winners across most disciplines by **late 2026 / early 2027**. Dario Amodei: "a country of geniuses in a datacenter."
- **Outlier position:** more aggressive than AI 2027 authors (revised to 2029–2030), comparable to Sam Altman's "we know how to build AGI" (Jan 2025) and Demis Hassabis's compressed "3–5 years" timeline.
- **November 2025 cyberattack disclosure:** publicly reported a Chinese state-sponsored cyberattack that was **80–90% autonomously executed by AI agents** — first major public disclosure of large-scale agentic offensive AI activity.

## Agentic product shipping cadence (2024–2026)

- **Claude Code** (late 2024 → evolved through 2026) — terminal-based coding agent. Notorious `--dangerously-skip-permissions` flag enables uninterrupted multi-hour autonomy; produced documented disasters (Wolak incident Oct 2025; Reddit home-directory wipe Dec 2025; PromptArmor prompt-injection demo Jan 2026; CVE-2026-24052 path traversal in Mar 2026).
- **Claude Cowork** (Jan 2026) — agentic interface for non-developers. Built in ~1.5 weeks largely using Claude Code itself (recursive AI-builds-AI signal).
- **Auto Mode** (Mar 2026) — Sonnet 4.6 safety classifier auto-approves low-risk actions, blocks destructive ones. Telling stat: users accept 93% of permission prompts manually anyway.
- **Computer Use / Dispatch** (Mar 23 2026) — Claude controls user desktop from phone, completes multi-step workflows.

## Why it matters for the bottleneck thesis

- **Compute-demand anchor:** Anthropic is a major customer of [[AWS]] (anchor cloud deal) and increasingly co-located capacity. Their aggressive timelines imply aggressive compute procurement.
- **Capability-driving demand:** the cyberattack disclosure and the agentic product cadence both suggest the inference-side compute demand curve is moving up faster than the training-side. Reinforces the [[DeepSeek|Jevons]] signal.
- **Safety-as-product:** Auto Mode's existence reveals that even the most aggressive lab treats fully autonomous agents as commercially untenable without safety scaffolding — has implications for how fast "drop-in worker" demand translates into compute demand.

## Open questions

- What is Anthropic's actual capex / compute commitment profile through 2027–28?
- AWS-exclusive cloud relationship persistence vs. multi-cloud diversification
- How much of their compute is bought via existing hyperscaler offtake vs. dedicated builds
