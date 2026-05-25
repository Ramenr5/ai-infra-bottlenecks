---
type: meta
created: 2026-05-24
updated: 2026-05-24
tags: [tracking, automation, human-review-queue]
---

# Weekly digest — pending human review

Append-only queue from the automated SemiAnalysis ingest routine. Most recent runs at top.

Each entry lists:
- New source pages drafted (these are LLM-written, may need light editing)
- Existing layer/company/bottleneck/synthesis pages **flagged for human review** based on new data — the routine never edits these autonomously
- Anything skipped, paywalled, or errored

Process: review entries weekly, edit flagged pages by hand, then strike the entry through with `~~...~~` once cleared.

---

## Pending review

### 2026-05-25 — MANUAL session ingest (5 articles, supervised)

Origin: user named gaps in active SemiAnalysis read-set after the scheduled routine auto-disabled on first fire (repo-access auth failure on private repo; resolved by switching repo to public). Hand-ingested in-session rather than wait for fixed routine.

- **Articles ingested (5):**
  - [[SemiAnalysis - The Coding Assistant Breakdown (2026)]] — coding-model pricing/throughput/benchmarks; ~75% public
  - [[SemiAnalysis - How Much Do GPU Clusters Really Cost (2026)]] — TCO framework, 3 workload scenarios, gold/hyperscaler/silver tier comparison
  - [[SemiAnalysis - EDA Market Primer (2026)]] — Big-3 market structure, tool-level shares, 13% CAGR, China EDA flagged
  - [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]] — H100 1-yr rental index $1.70→$2.35 in 5 mo, all capacity booked through Sep 2026
  - [[SemiAnalysis - Dissecting NVIDIA Blackwell (2026)]] — TMEM/2SM MMA/yield findings; **largely paywalled** (HBM, power, NVLink5 specs gated)
- **Paywalled-skipped:** none (all 5 had enough public content)
- **Articles deferred to next week (>3 cap):** N/A — cap bypassed because manual session, user explicitly requested all 5

**Pages flagged for human review:**

- [[Capex trajectory thesis]] — H100 1-yr rental price index ($1.70→$2.35, +40% in 5 mo) is a clean tradable indicator worth adding to "leading indicators to watch"; coding-assistant input:output ratios (80:1, 100:1) reinforce inference-demand acceleration
- [[Bottleneck ranking (May 2026)]] — "GPU rental sold out through Sep 2026" + "Blackwell lead time June-July" are acute near-term signals that parallel the power bottleneck; should be promoted from compute-supply sub-bullet to its own near-term tier
- [[Anthropic]] — Opus 4.7 tokenizer "up to 35% more tokens" impacts effective pricing math vs GPT-5.5; worth a note
- [[NVIDIA]] — Blackwell TMEM + tcgen05 + 2SM MMA architectural shifts mean kernel rewrites are the rate-limit on software adoption (separate from hardware availability)
- [[Synopsys]] — add CY2025 $8B revenue (incl. Ansys), $11.4B backlog (1.6 yr), FY24 37.3% op margin
- [[Cadence Design Systems]] — add CY2025 $5.30B, $7.8B backlog (1.5 yr), 42.5% op margin, 45% hyperscaler/system-co demand, Cerebrus tapeouts 180→1,000+ in 8q
- [[Siemens EDA]] — confirm $2.2-2.5B revenue estimate
- [[EDA tool consolidation]] — strengthen severity claim with 95%/99% retention + 1.5-yr backlog data
- [[AI infrastructure investment map (May 2026)]] — EDA Big-3 may warrant promotion to higher-conviction "rent-extracting toll" position
- [[Oracle]] / [[Amazon]] / [[Microsoft]] / [[Alphabet]] — TCO data shows hyperscalers carry 10-61% workload premium vs gold-tier neoclouds; relevant to enterprise capture story
- [[AI debt financing capacity]] — TCO premium gap (Gold vs Hyperscaler) is the demand-side answer to neocloud debt-service ability
- [[Hyperscaler capex sustainability]] — same TCO data quantifies why hyperscalers are losing AI workload share despite hardware parity
- [[Chip design talent shortage]] — verbatim NVIDIA Blackwell complexity (TMEM, instruction-level rewrites) reinforces talent constraint
- Possible new bottleneck page candidate: **GPU rental price index** (track quarterly)

---

---

## Cleared
