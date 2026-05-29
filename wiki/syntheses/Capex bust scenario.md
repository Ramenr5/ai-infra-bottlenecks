---
type: synthesis
created: 2026-05-27
updated: 2026-05-27
sources: ["[[Apollo - AI Capex Risk Outlook (2026)]]", "[[Ed Zitron - AI Is A Money Trap (2025)]]", "[[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]]", "[[IEA - Energy and AI (2026)]]"]
tags: [thesis, bear-case, capex, risk, counter-thesis, epistemics]
---

# Capex bust scenario

The deliberate counterweight to [[Capex trajectory thesis]]. This page steelmans the bear case so the wiki holds both sides (per CLAUDE.md). **It is not the wiki's base case** — it's the risk scenario the bull thesis must survive.

## The view (as of 2026-05-27)

**There is a credible path (~20-30% probability through 2027, rising thereafter) where AI capex proves to have outrun monetizable demand, triggering a capex slowdown that reprices the entire picks-and-shovels complex.** The mechanism is not "AI is useless" — it's that **spending is front-loaded and debt-financed while revenue is back-loaded and concentrated**, so a timing mismatch can force rationalization before the revenue arrives.

## The bear evidence

### 1. The capex-vs-revenue gap (the core argument)
- ~$300-520B annual AI capex (2025) vs ~$20B 2025 GenAI revenue ([[Ed Zitron - AI Is A Money Trap (2025)]])
- Big tech needs **~$2T AI revenue by 2030** to justify cumulative capex — a >10× revenue ramp from here
- Hyperscaler capex **~$646B in 2026 ≈ 2% of US GDP**; **$2.7T cumulative 2025-29** ([[Apollo - AI Capex Risk Outlook (2026)]])

### 2. Self-funded → debt-funded shift
- **$90B hyperscaler bond issuance in Q4 2025 alone** (Oracle, Meta, Google, Amazon)
- Big-4 net income +73% YoY but **FCF −30%** — the capex burden is now exceeding internal cash generation
- Transmits AI-demand disappointment directly into IG credit spreads ([[AI debt financing capacity]])

### 3. Circular financing
- Datacenters booked as long-term revenue even when subsidized by the hyperscaler or VC-funded → capex stimulates capex without proven end-demand
- Oracle/Crusoe/OpenAI: OpenAI to pay ~$30B/yr from 2028 vs ~$12.7B 2025 revenue

### 4. Demand-disappointment bookend
- IEA **Headwinds case = ~700 TWh by 2035** (vs Lift-Off 1,700 TWh) — a 1,000 TWh forecast spread that quantifies how wide the demand uncertainty is ([[IEA - Energy and AI (2026)]])

### 5. Earnings-quality: the depreciation argument (Michael Burry, Nov 2025)
Hyperscalers extended chip useful-life assumptions (~3yr → 5-6yr), which Burry argues understates depreciation by **~$176B (2026-28)** and overstates profits (~Oracle +27%, Meta +21% by 2028). Consistent with the FCF −30% / NI +73% divergence. **But stress-tested as Contested** — see [[Thesis stress-tests#2026-05-28 · Michael Burry: hyperscaler depreciation understatement → earnings inflated|the full adjudication]]: the load-bearing premise (true chip life = 2-3yr) is rebutted by rising H100 rental prices (2-3yr-old chips stay scarce/productive). Mechanism = real watch item; "fraud" conclusion = overreach.

> [!warning] Adjudicated in [[Thesis stress-tests]]
> The Burry depreciation claim is logged as **Contested / open** — the accounting mechanism is valid but its core premise is contradicted by the wiki's own GPU-rental data. Watch the GPU rental index as the falsifier.

## The arguments against the bust (why it's NOT the base case)

| Bear claim | Rebuttal | Source |
| --- | --- | --- |
| "No profitable GenAI company" | Anthropic OI-profitable 2Q26, inference GM mid-60s, $30B ARR | [[SemiAnalysis - Anthropic Bedrock AWS Margins (2026)]] |
| "Capex is value-destructive" | TaaS margins real (AWS EBIT +213bp on Bedrock); Trainium >50% of Bedrock tokens | Same |
| "Demand isn't there" | Anthropic +$21B net new ARR in one quarter; API rev ~13× YoY | Same |
| "Supply is speculative" | Supply is SOLD OUT (CoWoS, HBM, GPU rental booked through Sep 2026) | [[Capex trajectory thesis]] |
| "It's a bubble" | Even IEA Headwinds (700 TWh) implies massive real buildout, not zero | [[IEA - Energy and AI (2026)]] |

The single strongest bull rebuttal: **the supply side is sold out and prepaid.** A bubble usually shows up as oversupply and falling prices — instead we see [[CoWoS packaging capacity|CoWoS]] at 50+ week leads, [[HBM allocation|HBM]] sold out, and the [[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)|H100 rental index +40% in 5 months]]. That is the opposite of a demand air-pocket.

## The crux — what flips this from risk to base case

1. **A hyperscaler cuts capex guidance** (not actuals) at a quarterly print — the first-derivative tell
2. **Microsoft-style lease pullback** spreads to AWS/Google (Zitron flagged MSFT signing "basically no leases")
3. **IG BBB spreads widen 100bps+** as bond issuance meets demand doubt ([[AI debt financing capacity]])
4. **Frontier-lab ARR growth stalls** — if Anthropic/OpenAI ARR plateaus, the "$2T by 2030" math fails

## Leading indicators to watch (bear-tilted)

1. Hyperscaler capex **guidance** revisions (down = thesis confirming)
2. Hyperscaler **lease signings** / committed DC construction trend
3. **IG BBB OAS** (FRED BAMLC0A4CBBB) — 100bps+ widening = early warning
4. Frontier-lab **ARR growth deceleration** (Anthropic/OpenAI)
5. **CoWoS / HBM lead times shortening** — supply catching demand = demand softening (mirror of [[Capex trajectory thesis]] indicator #5/#6)
6. GPU **rental price rollover** ([[SemiAnalysis - The Great GPU Shortage Rental Capacity (2026)]] index turning down)

These are deliberately the *inverse* of the bull indicators — the same dials, watched for the opposite move.

## Tradable read

If the bust signals fire (capex guide cuts + spread widening), the **most-exposed longs to de-risk** are the highest-beta, debt-dependent, single-bottleneck names: neoclouds, pure-play SST/cooling startups, and the equipment names priced for permanent shortage. The **most-defensible** are diversified incumbents with non-AI ballast ([[Eaton]], [[ABB]], [[Vertiv Holdings]] to a degree) and the rent-extractors with pricing power even in a slowdown ([[TSMC]], [[ASML]], [[Synopsys]]/[[Cadence Design Systems]]).

## Confidence and aging

| Element | Confidence | Half-life |
| --- | --- | --- |
| Bust is a real tail risk | High | ~12 months |
| Bust probability ~20-30% through 2027 | Moderate | ~6 months |
| Bust becomes base case 2028+ if ROI disappoints | Speculative | ~3 months |

**Re-evaluate when:** any hyperscaler cuts capex guidance · IG spreads move 50bps+ · frontier-lab ARR growth decelerates · supply lead-times shorten materially.

## Related

- Counter-thesis: [[Capex trajectory thesis]] (the base case)
- Bottlenecks: [[AI debt financing capacity]], [[Hyperscaler capex sustainability]]
- Sources: [[Apollo - AI Capex Risk Outlook (2026)]], [[Ed Zitron - AI Is A Money Trap (2025)]]
