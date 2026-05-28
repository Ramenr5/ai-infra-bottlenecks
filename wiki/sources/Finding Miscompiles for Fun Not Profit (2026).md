---
type: source
created: 2026-05-27
updated: 2026-05-27
tags: [primary-source, blog, inference-demand, jevons, agentic-tokens, anecdote]
---

# Finding Miscompiles for Fun, Not Profit

**Publisher:** Justin Lebar (personal Substack) · Author: Justin Lebar (ex-Google/Waymo/OpenAI compiler engineer; SemiAnalysis contractor) · Published 2026-05-28
**URL:** [substack post p-199418059](https://substack.com/home/post/p-199418059)

> [!note] Source type: anecdotal primary signal, not analyst research
> This is a first-person practitioner account, not a quantitative report. Its thesis value is as a vivid **demand-side / Jevons** data point on agentic token consumption economics — not as a source of market sizing.

## Headline framing

A veteran ML-compiler engineer spent **>$10,000 in a single afternoon** running AI agents (Claude / Codex) over compiler code, finding **hundreds of plausible LLVM bugs** — including miscompiles and one "Quite Serious" atomic-store corruption bug. The lesson he draws: **"Things that were impossible five months ago are now 'just' Very Expensive."**

## Key data points (demand-side signal)

| Metric | Value |
| --- | --- |
| Spend in one afternoon (subagent code-reading) | **>$10,000** in tokens |
| Fuzzer-writing spend (pay-per-token Opus 4.7) | ~$1,000 for a few days |
| Bug-finding rate (50 Claude subagents, LLVM AMDGPU) | **1 bug every 4 minutes** |
| Bug-finding rate (x86 backend) | **~2 bugs per minute** |
| ptxas miscompiles found | 40 in 3 days → ~80 in a week |
| Tooling | Claude Opus 4.7, ChatGPT 5.5, Codex; `/goal` loop, 50 subagents at a time |

## The thesis-relevant quotes

> "SemiAnalysis spent an order of magnitude more on my tokens than on paying me the day I ran the agents. If the value of something is how much someone is willing to pay for it, then that was the first time in my career that I delivered less value to my employer than my AI did."

> "Things that were impossible five months ago are now 'just' Very Expensive. A corollary is, if you *don't* have the budget, you're operating in a smaller part of the possibility space than those who do. And I expect that gap to grow substantially over the coming months."

> Capability jump attributed to model generation: "the difference between ChatGPT 5.2 and 5.5" — vibe-coded the whole fuzzer, never looking at a line of code.

## Why it matters for the thesis

- **Jevons paradox in the wild**: a single engineer's willingness-to-pay for tokens exceeded his own salary-equivalent for a day. Multiply across every knowledge worker → the inference-demand curve underwriting the entire AI infra buildout. Reinforces [[DeepSeek]] Jevons signal and [[SemiAnalysis - Claude Code Is The Inflection Point]].
- **Agentic token consumption is the demand driver**: 50 subagents reading code is the kind of "parabolic token growth" cited in [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]]. This is what fills the GPUs.
- **"Intelligence is expensive, not free"**: counters the naive "AI gets cheaper so demand falls" view — capability expansion at the frontier is gated by spend, validating high willingness-to-pay (and thus high inference margins per [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]).
- **Capability-per-dollar inflection**: the 5.2→5.5 model-generation jump making the workflow viable is a concrete instance of the capability curve that drives the [[Capex trajectory thesis]] crux (does next-gen compute generate the implied downstream value?).

## Caveats

- Single anecdote, self-reported; n=1
- "Bugs found" by agents are lower-severity on average than fuzzer-found; agent judgment sometimes wrong
- Author is a SemiAnalysis contractor (Dylan Patel paid the token bill) — not independent of the AI-bull ecosystem

## Cross-reference

- [[Anthropic]] — Claude Opus 4.7, Claude Code; the agentic workload consuming tokens
- [[SemiAnalysis - Claude Code Is The Inflection Point]] — adoption side of the same story
- [[SemiAnalysis - The Coding Assistant Breakdown (2026)]] — coding-assistant token consumption (80:1, 100:1 I:O ratios)
- [[Capex trajectory thesis]] — demand-side Jevons validation
- [[DeepSeek]] — original Jevons signal in the wiki

## Implications — pages flagged

- [[Capex trajectory thesis]] — add as a qualitative demand-side anecdote under the Jevons pillar (#5)
- [[Compute & silicon]] — DeepSeek/Jevons section could cite this as a 2026 practitioner data point
