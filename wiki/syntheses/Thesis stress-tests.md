---
type: synthesis
created: 2026-05-28
updated: 2026-05-28
sources: ["[[Capex trajectory thesis]]", "[[Capex bust scenario]]", "[[AI investment momentum tracker]]"]
tags: [thesis, stress-test, adjudication, epistemics, lint, claim-check]
---

# Thesis stress-tests

The wiki's **adjudication engine**. When a new claim, theory, or data point emerges — "X said Y", "new report claims Z", "this earnings line implies W" — run it through this rubric to get a rigorous, repeatable verdict: **is it feasible, what does it contradict, and what does it do to the standing theses?**

Top half = the **rubric** (how to test). Bottom half = the **ledger** (dated record of tests run). Tests compound into a track record — including which claims aged well and which didn't.

---

## When to run

- A market-mover says something thesis-relevant (Jensen, Burry, Aschenbrenner, Karpathy, Altman…)
- A new report / data point claims to support or break the buildout thesis
- The [[AI investment momentum tracker]] surfaces a signal that *asserts a theory* (not just a number)
- You want to pressure-test a new idea of your own before filing it

Run on-demand (human brings the claim → full-power local adjudication with WebFetch + the whole evidence base) OR auto-flagged by the daily Regime Monitor's feasibility-lint step (which drafts a lightweight version for human completion).

---

## The rubric (7 steps)

### 1. Capture
Who/what, date, source + tier (T1 primary / T2 named / T3 specialist / T4 ambient), and the **precise assertion** in one sentence. Note the source's **incentives** (position, book, reputation stake).

### 2. Decompose into load-bearing premises
Break the theory into the 2-5 premises it *requires* to be true. A theory is only as strong as its weakest load-bearing premise. Mark each premise as the test target.

### 3. Confront with the evidence base
For each premise: what does the wiki already say? Tag **supports / contradicts / silent**, citing pages. This is the "lint" — does the new claim collide with confirmed facts already in the wiki?

### 4. Score feasibility (5 dimensions)
| Dimension | Question |
| --- | --- |
| **Source credibility** | Primary/expert vs ambient? Track record? Conflicts/incentives? |
| **Internal consistency** | Does the logic hold together on its own terms? |
| **Evidence fit** | Does it fit confirmed data, or require ignoring established facts? |
| **Plausibility** | Does it violate known physical/economic constraints (lead times, unit economics)? |
| **Falsifiability** | What specific future evidence would confirm or kill it? (No falsifier = low-grade) |

→ **Verdict scale:** `Plausible` · `Contested` · `Unlikely` · `Refuted` — with a confidence (low/mod/high). Steelman AND attempt to refute before scoring; note where the claim is strongest and weakest.

### 5. Thesis impact
Does it **support / challenge / break** which standing pages?
- [[Capex trajectory thesis]] (bull) · [[Capex bust scenario]] (bear) · [[AI investment momentum tracker]] (regime) · specific bottleneck/company pages
- Does it move the regime read? Add/subtract from the momentum net score?

### 6. Verdict + what-would-confirm
Bottom line in 1-2 lines. Then the **specific, watchable evidence** that would move the verdict either way — ideally tied to an existing leading indicator (GPU rental index, hyperscaler capex guides, IG spreads…).

### 7. Disposition
- Append a dated row to the **ledger** below
- If it materially challenges a thesis → add a `> [!warning]` callout to that page linking here
- If confirmed-material → propose page edits (human approves; never auto-edit framing pages)
- Re-test when the named falsifier resolves

---

## Anti-bias guardrails

- **Don't confuse a famous source with a correct one** — score the argument, not the name.
- **A known bear/bull restating their stance ≈ low new information.** A source *changing direction* is the signal.
- **Separate the mechanism from the conclusion** — a claim can have a real mechanism (true) and an overreaching conclusion (false). Score them separately.
- **The wiki's own data is the referee.** Prefer rebutting/confirming with a cited figure over a vibe.

---

# Ledger

Most recent first. Status: `open` (watching falsifier) · `aged-well` · `aged-poorly` · `resolved`.

---

### 2026-05-31 · P3 Institute / Gurley: open weights → Chinese models become global default by 2030
**Status: open** · Verdict: **Plausible (mechanism) / Contested (timeline + "default")** · Confidence: moderate

**1. Capture.** P3 Institute Substack (attr. Bill Gurley, May 2026; influential VC — provocative framing, plausibly long open/infra). Claim: absent a credible **Western open-weight frontier** player, **Chinese open models (DeepSeek/Qwen/Kimi/GLM) become the global default by 2030**, isolating US tech from ~6B users. See [[P3 Institute - Open Source to Open Weights (2026)]].

**2. Load-bearing premises.** (1) open weights structurally commoditize the model layer [CONTESTED — open still lags the frontier ~6-12mo]; (2) China leads open weights + state-committed [TRUE]; (3) West lacks a credible open frontier (Meta withdrew, Mistral subscale at $400M ARR) [PARTLY TRUE]; (4) ∴ Chinese open default by 2030 [follows only if #1 + capability parity].

**3. Confront evidence base.** *Supports:* [[DeepSeek]] cost-shock + Jevons already in wiki; 40% of AI/ML workloads already open. *Contradicts:* [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]] + [[Capex trajectory thesis]] — closed labs are **monetizing hard right now** (Anthropic $44B+ ARR, OI-profitable; frontier capability still closed-led) → premise #1 not yet validated at the frontier. *Silent:* wiki has little on China-open / geopolitics — a real coverage gap.

**4. Feasibility.** Credible-but-agenda source; logic sound *conditional on* capability parity; evidence fit mixed (commoditization real for trailing edge, not frontier); falsifiability high.

**5. Thesis impact.** Challenges the **lab-rent** half of the bull case; does **not** break the **infra picks-and-shovels** half (open + cheap → Jevons → *more* compute demand). Surfaces a China/open-weights coverage gap. Doesn't move the 🟢 regime.

**6. Verdict + falsifier.** Mechanism (open commoditizes trailing capability) = real watch; the "Chinese default by 2030" conclusion overreaches given closed-lab monetization + persistent frontier gap + US export/regulatory countermoves. **Confirms:** an open model hits frontier parity AND majority enterprise/sovereign adoption of Chinese open models. **Refutes:** a Western open-frontier player emerges, or capability gap persists + US restrictions fragment the market.

**7. Disposition.** Logged. Flagged [[AI infrastructure investment map (May 2026)]]. Candidate new synthesis: "Open weights vs closed cathedral." Re-test on any frontier-parity open release or major sovereign open-model adoption.

---

### 2026-05-28 · Michael Burry: hyperscaler depreciation understatement → earnings inflated
**Status: open** · Verdict: **Contested (mechanism valid, core premise rebutted by wiki data)** · Confidence: high

**1. Capture.** Michael Burry (Nov 2025, via [CNBC](https://www.cnbc.com/2025/11/25/michael-burrys-next-big-short-an-inside-look-at-his-analysis-showing-ai-is-a-bubble.html) / [Bloomberg](https://www.bloomberg.com/opinion/articles/2025-11-11/ai-bubble-is-ignoring-big-short-michael-burry-chip-depreciation-fears)). T2 analyst, **known perma-bear with a disclosed short** (Nvidia, Palantir) → strong publicity incentive. Assertion: hyperscalers understate depreciation by extending chip useful-lives beyond the true 2-3yr product cycle, **inflating earnings ~$176B (2026-28); Oracle profits overstated ~27%, Meta ~21% by 2028** — "one of the more common frauds of the modern era."

**2. Load-bearing premises.**
1. Hyperscalers extended server useful-life assumptions (≈3yr → 5-6yr). **[TRUE — publicly disclosed 2020-22]**
2. The *true* economic life of AI accelerators is ~2-3yr (= Nvidia product cycle). **[CONTESTED — this is the weak link]**
3. ∴ depreciation understated, earnings inflated by the cited magnitudes. **[follows IF #2 holds]**
4. ∴ it's fraud / a bubble tell. **[rhetorical overreach beyond #1-3]**

**3. Confront with evidence base.**
- *Supports:* [[Hyperscaler capex sustainability]] — Big-4 **FCF −30% while NI +73%**; if D&A is understated, NI is flattered while FCF isn't — Burry's mechanism would partly explain the divergence. [[Capex bust scenario]] already carries a softer version (Zitron).
- *Contradicts (the kill shot on premise #2):* [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]] — **H100 1-yr rental price UP ~40% in 5 months**, capacity sold out through Sep 2026. 2-3-year-old chips commanding *rising* rents is the opposite of rapid obsolescence — they remain scarce and revenue-productive well past the product cycle. Also [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]: AWS depreciation is **5yr, "the lowest of all CSPs"** (i.e., AWS is the most conservative, undercutting the across-the-board "fraud" framing). [[DeepSeek|Jevons]] + inference demand keep older GPUs working.

**4. Feasibility (5-dim).** Source: credible but conflicted (short position; one legendary call, mixed since). Internal consistency: sound on #1+#3. Evidence fit: **premise #2 fails the wiki's own rental-price data.** Plausibility: directional concern legitimate; magnitudes + "fraud" aggressive (Big-Four-audited). Falsifiability: **high** — testable via GPU resale/rental prices.

**5. Thesis impact.** Strengthens [[Capex bust scenario]] modestly (adds a quantified earnings-quality flag). Does **not** break [[Capex trajectory thesis]] — the demand side (rising rental prices, sold-out supply) is the direct rebuttal to the useful-life premise. [[AI investment momentum tracker]]: logs as a credit/sentiment −1 (credible bear, specific mechanism) but the hard-demand channel rebuts the core premise → **does not move the 🟢 regime.**

**6. Verdict + what-would-confirm.** The *mechanism* is real and worth a **watch** (D&A assumptions flatter reported NI); the *conclusion* (true life = 2-3yr → fraud) is **rebutted by the wiki's own evidence** that 2-3yr-old GPUs command rising rents. → **Confirms Burry:** H100/A100 rental + resale prices roll over before 3yr AND hyperscalers quietly shorten useful-life assumptions AND a writedown wave appears. → **Refutes Burry (current state):** rental prices stay firm/rising past 3yr. Tied to the **GPU rental price index** leading indicator.

**7. Disposition.** Logged. Flag added to [[Capex bust scenario]] + [[Hyperscaler capex sustainability]]. Re-test when the GPU rental index turns or hyperscalers next disclose useful-life assumptions.

---

## Related

- [[Capex trajectory thesis]] · [[Capex bust scenario]] · [[AI investment momentum tracker]] — the theses being tested
- [[Wiki maintenance model]] — why framing-page edits stay human-approved (this engine *proposes*, humans *commit*)
