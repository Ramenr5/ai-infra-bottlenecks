---
title: "The Coding Assistant Breakdown: More Tokens Please"
source: "https://newsletter.semianalysis.com/p/the-coding-assistant-breakdown-more"
publisher: SemiAnalysis
accessed: 2026-05-25
retrieval: "WebFetch with prompt for verbatim data extraction. Article ~75% public; paywall at 'Who Wins in the Agentic Coding Wars?'"
tags: [clippings, semianalysis, coding-assistants, model-economics]
---

# Key Data Points from "The Coding Assistant Breakdown: More Tokens Please"

## Pricing & Revenue Figures
- **GPT-5.5 API pricing**: $5/million input tokens, $30/million output tokens
- **GPT-5.5 priority tier**: 2.5x the standard rate
- **GPT-5.5 Pro pricing**: $30/180 (same as GPT-5.4 Pro)
- **Opus 4.7 pricing**: Slightly less expensive than GPT-5.5

## Product Specifications & Performance Metrics
- **GPT-5.5**: Trained on "100k GB200 NVL72 cluster" (post-training/RL only, not full training)
- **DeepSeek-V4-Pro**: 1.6T total parameters / 49B active
- **DeepSeek-V4-Flash**: 284B total / 13B active
- **DeepSeek-V3**: 671B total / 37B active
- **DeepSeek V4 context window**: Expanded from 128k to 1M tokens
- **DeepSeek V4 KV cache reduction**: "90% reduction in KV Cache" vs V3
- **DeepSeek V4 inference FLOPs**: "27% of single-token inference FLOPs" of V3 in 1M-token context
- **Opus 4.7 tokenizer impact**: "increases up to 35% in token usage"

## Throughput Metrics
- **DeepSeek-V4 on H200**: ~150 tokens/second throughput per GPU at FP8 precision
- **DeepSeek-V3 on H200**: ~1.3k to 2.3k tokens/second throughput per GPU
- **Input/output ratio comparison**: Codex 80:1 vs Claude Code 100:1

## Companies & Products Named
- OpenAI (GPT-5.5, GPT-5.5 Pro, GPT-5.3-Codex-Spark, o1/strawberry)
- Anthropic (Claude Opus 4.7, Claude Opus 4.6, Claude Code)
- DeepSeek (V4-Pro, V4-Flash, V3)
- Google (Gemini 3.1 Pro, Gemini 3 Flash)
- Anthropic's competitors: GLM-5.1, Qwen3.6-Plus, Kimi K2.6, Composer 2
- NVIDIA, Cerebras, Huawei Ascend
- Tools/platforms: Cursor, vLLM, SGLang, TRT-LLM, Playwright
- Data vendors: Mercor, Surge, Handshake

## Benchmark Data
- **MMLU saturation**: GPT-4 scored 86.4% (March 2023)
- **MMLU error rate**: ~6.49% of questions contain errors
- **SWE-bench verified**: 2,294 original problems reduced to 500 after human review
- **SWE-bench verified issues**: "over half" of 138 problems failed by o3 had unfair evals
- **Mythos on SWE-bench Pro**: 77.8%
- **GPT-5.5 on SWE-bench Pro**: Significantly lower than Opus 4.7
- **HLE chemistry/biology issues**: "30% of HLE chemistry/biology questions had answers that directly conflicted with peer-reviewed literature"
- **Google 2025 HLE budget**: "9 figure budget" for STEM questions
- **Humanity's Last Exam**: 2,500 questions from 1,000+ experts (80% exact-match, 20% multiple choice)

## Architectural Details
- DeepSeek V4 innovations: Compressed Sparse Attention (CSA), Heavily Compressed Attention (HCA), Manifold-Constrained Hyper-Connections (mHC)
- GPT-5.5 reasoning levels: "xhigh, high, medium, low, and non-reasoning"
- Opus 4.7 new features: High-resolution image support, "xhigh" reasoning option, task budgets (beta), updated tokenizer

## Market Context
- "There's been at least one major lab releasing a new checkpoint purpose-built for coding every week for the past 3 months"
- February 2026 described as "particularly busy month" for releases
- DeepSeek R1 impact: "crashed the market so hard that CEOs were scrambling to explain Jevons paradox"

## Central Thesis
Cost per task—not cost per token—is the true metric determining pricing. Models with higher per-token costs can be cheaper overall if more token-efficient. Additionally, benchmarks are fundamentally unreliable as proxies for real-world capability due to methodological flaws, contamination, and selective reporting by labs.
