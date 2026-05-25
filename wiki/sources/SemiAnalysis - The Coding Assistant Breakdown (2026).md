---
type: source
created: 2026-05-25
updated: 2026-05-25
tags: [primary-source, semianalysis, coding-assistants, model-economics, jevons]
---

# SemiAnalysis — The Coding Assistant Breakdown: More Tokens Please

**Publisher:** [[SemiAnalysis]]
**URL:** [newsletter.semianalysis.com/p/the-coding-assistant-breakdown-more](https://newsletter.semianalysis.com/p/the-coding-assistant-breakdown-more)

## Headline framing

**Cost per task — not cost per token — is the metric that determines pricing.** Higher-priced models can be cheaper overall if they emit fewer tokens to complete a task. Coding assistants are the proximate driver of an emerging token-consumption arms race; new coding-purpose checkpoints have been released approximately weekly for 3+ months as of Feb 2026.

## API pricing snapshot (Feb 2026)

| Model | Input ($/M tok) | Output ($/M tok) | Notes |
| --- | --- | --- | --- |
| **GPT-5.5** | **$5** | **$30** | Priority tier 2.5× standard |
| **GPT-5.5 Pro** | $30 | $180 | Same as GPT-5.4 Pro |
| **Opus 4.7** | (slightly cheaper than GPT-5.5) | (slightly cheaper) | New tokenizer "increases up to 35% in token usage" — partially offsetting headline price advantage |

## Throughput data (H200 GPU, FP8)

| Model | Tokens/sec per GPU | Notes |
| --- | --- | --- |
| DeepSeek V3 | 1,300–2,300 | Baseline |
| **DeepSeek V4** | **~150** | Sharper drop reflects much larger active params + longer context |
| GPT-5.5 training cluster | 100k GB200 NVL72 | RL / post-training only, not full pretraining |

## Architecture moves

- **DeepSeek V4-Pro**: 1.6T total / 49B active params; **90% KV cache reduction vs V3**; **27% of single-token inference FLOPs of V3 in 1M-token context**; context window expanded 128k → 1M
- **DeepSeek V4-Flash**: 284B total / 13B active
- **GPT-5.5 reasoning levels**: xhigh / high / medium / low / non-reasoning
- **Opus 4.7**: high-res image support, xhigh reasoning, task budgets (beta), new tokenizer
- New attention mechanisms named: Compressed Sparse Attention (CSA), Heavily Compressed Attention (HCA), Manifold-Constrained Hyper-Connections (mHC)

## Input:output ratio (revealing usage shape)

| Tool | I:O ratio |
| --- | --- |
| Codex | **80:1** |
| Claude Code | **100:1** |

Long-context input-heavy is the operating profile — every prompt drags large repo + history into context.

## Benchmark integrity warnings

- **MMLU saturation**: GPT-4 hit 86.4% in March 2023; **~6.49% of MMLU questions contain errors** — ceiling is partly artifact
- **SWE-bench Verified**: 2,294 problems → 500 after human review; >50% of 138 problems failed by o3 had "unfair evals"
- **HLE (Humanity's Last Exam)**: 2,500 questions from 1,000+ experts; **30% of chemistry/biology questions had answers conflicting with peer-reviewed literature**
- **Google's 2025 HLE budget for STEM questions**: 9-figure

The article's clear takeaway: lab-reported benchmarks are unreliable as proxies for real-world capability. Methodological flaws + contamination + selective reporting all in play.

## Cross-reference

- [[Anthropic]] — Opus 4.7 pricing competitive with GPT-5.5
- [[SemiAnalysis - Claude Code Is The Inflection Point]] — adoption data side of the same story
- [[NVIDIA]] — H200 throughput baseline; Blackwell impact not characterized here
- [[DeepSeek]] — V4 architectural innovations widen the Jevons signal (cheap inference → more usage)
- [[Cerebras Systems]], [[Groq]] — named as alternative inference substrates (alongside NVIDIA, Huawei Ascend)

## Implications — pages flagged for human review

- [[Anthropic]] — tokenizer change "up to 35% more tokens" should be folded into Opus pricing analysis; affects margin math
- [[Capex trajectory thesis]] — input:output ratios (80:1, 100:1) reinforce that coding assistants drive disproportionate inference compute demand
- [[DeepSeek]] — V4-Pro / V4-Flash specs and KV cache reduction worth adding; reinforces China-cheap-inference narrative
- [[Bottleneck ranking (May 2026)]] — coding-assistant token consumption is a near-term inference demand multiplier worth surfacing

## Paywall

Public ~75% — paywall starts at "Who Wins in the Agentic Coding Wars?" Final framing on competitive dynamics is gated.
