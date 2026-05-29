---
type: meta
created: 2026-05-25
updated: 2026-05-25
tags: [tracking, automation, watchlist, leading-indicators]
---

# Watchlist — leading indicators

The 15 signals the daily pulse routine monitors. **Each indicator has at least one polling source.** If the routine finds new data at a polling source, it summarizes and flags in the daily pulse digest.

Originally seeded from the 7 indicators in [[Capex trajectory thesis]], expanded to 15 with adjacent layers (gas turbines, EDA, AI labs, sovereigns, policy).

**Edit this file freely.** The routine reads it on each run, so adding/removing indicators just works — no code change needed.

---

## Format

For each indicator:
- **What:** the signal in one line
- **Why:** what its movement implies
- **Polling sources:** URLs to fetch (the routine WebFetches these)
- **Cadence expectation:** how often a real signal is expected
- **Last known value:** anchor for diff comparison

---

## Tier 1 — from [[Capex trajectory thesis]]

### 1. Hyperscaler AI segment revenue disclosures
- **What:** MSFT Azure AI / GOOGL Cloud AI / META AI ARR breakouts in quarterly earnings
- **Why:** First clean tells on Rubin-era ROI; validates or breaks capex trajectory
- **Polling sources:**
  - https://www.microsoft.com/en-us/Investor/earnings/
  - https://abc.xyz/investor/
  - https://investor.fb.com/financials/
- **Cadence:** quarterly (next prints: Q2 calendar 2026 = July-Aug)
- **Last known:** MSFT AI ARR=$37B (Q3 FY26) | GOOGL Cloud rev=$20B (Q1 2026) | META AI ARR=not disclosed

### 2. Hyperscaler capex guidance changes
- **What:** Any upward/downward revision to MSFT/GOOGL/META/AMZN/ORCL FY26-27 capex guides
- **Why:** Guides move faster than actuals; first-derivative signal on the trajectory
- **Polling sources:** Same as #1 + https://ir.aboutamazon.com/ + https://investor.oracle.com/
- **Cadence:** quarterly (earnings) + ad-hoc IR releases
- **Last known:** MSFT FY26=$190B | GOOGL FY26=$180-190B | META FY26=$125-145B | AMZN FY26=$200B | ORCL FY26=$50B

### 3. Stargate Abilene operational date
- **What:** First operational MW at Stargate's Abilene TX site
- **Why:** Leading indicator on $500B / 10 GW execution; binary proof that the Oracle-OpenAI-MGX capital stack works
- **Polling sources:**
  - https://openai.com/blog
  - https://www.crusoe.ai/news
  - Press search via WebFetch on "Stargate Abilene" site:reuters.com
- **Cadence:** ad-hoc; major construction milestones in 2026
- **Last known:** operational_date=unconfirmed | phase1_capacity=1.2GW | operator=Crusoe

### 4. NVIDIA quarterly supply commitments
- **What:** The $145B inventory + prepaid supply commitments line on NVDA's balance sheet
- **Why:** If it grows, demand still ahead of supply; if it flattens, the curve is bending
- **Polling sources:**
  - https://investor.nvidia.com/financial-info/financial-reports/
  - Motley Fool transcripts (publishes within 24h of call): https://www.fool.com/earnings/call-transcripts/
- **Cadence:** quarterly (NVDA Q2 FY27 expected late August 2026)
- **Last known:** supply_commitments=$145B (Q1 FY27, May 2026)

### 5. TSMC CoWoS lead-time changes
- **What:** Any movement in CoWoS lead times (currently 50+ weeks)
- **Why:** Anything below 30 weeks would signal supply catching up = demand softening
- **Polling sources:**
  - https://newsletter.semianalysis.com/archive
  - https://pr.tsmc.com/english/news
  - Google: "TSMC CoWoS lead time"
- **Cadence:** quarterly TSMC earnings + SemiAnalysis ad-hoc
- **Last known:** cowos_lead_time_weeks=50+ | demand_supply_gap_pct=40-50 (Q1 2026)

### 6. SK Hynix operating margins
- **What:** SK Hynix quarterly operating margin (currently 47-72%)
- **Why:** Sustained 60%+ = pricing power intact on HBM; dropping toward 40s = demand weakening
- **Polling sources:**
  - https://www.skhynix.com/eng/ir/financialInfo.do
  - Reuters Korea desk: site:reuters.com "SK Hynix" earnings
- **Cadence:** quarterly
- **Last known:** skhynix_op_margin_pct=72 (Q1 2026, verified — record; rev ₩52.6T, OP +405%) | HBM demand > supply 3yr out

### 7. Hyperscaler credit spreads (IG BBB)
- **What:** IG BBB-rated corporate bond spread vs Treasuries (FRED: BAMLC0A4CBBB)
- **Why:** Widening 100bps+ = early warning on [[AI debt financing capacity]]
- **Polling sources:**
  - https://fred.stlouisfed.org/series/BAMLC0A4CBBB
  - https://fred.stlouisfed.org/series/BAMLH0A0HYM2 (HY for comparison)
- **Cadence:** daily (continuous market data)
- **Last known:** ig_bbb_oas_bps=96 (May 2026, verified — tight; +100bps crux NOT hit)

---

## Tier 2 — expansion layers

### 8. H100 1-year rental price index (SemiAnalysis)
- **What:** SemiAnalysis published H100 1-year rental price per GPU-hour
- **Why:** Cleanest public quant signal on AI compute demand-supply balance
- **Polling sources:**
  - https://newsletter.semianalysis.com/archive (looks for updates to the rental-capacity post)
  - https://newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity
- **Cadence:** SemiAnalysis updates roughly monthly when material moves
- **Last known:** h100_1yr_rental_per_gpu_hr=$2.35 (Mar 2026)

### 9. Gas turbine OEM backlogs
- **What:** GE Vernova, Siemens Energy, Mitsubishi Heavy Industries quarterly backlog + order intake
- **Why:** Gas turbines = the operational answer to the power bottleneck; backlog growth = sustained AI power demand
- **Polling sources:**
  - https://www.gevernova.com/investors
  - https://www.siemens-energy.com/global/en/home/investor-relations.html
  - https://www.mhi.com/finance/library/financial/
- **Cadence:** quarterly + ad-hoc deal PRs
- **Last known:** GEV_backlog=$163B | GEV_gas_backlog_GW=100 (Q1 2026, from 83; 21GW signed) | GEV_gas_target_GW_YE26=110 | GEV_$200B_target=pulled to 2027 | SE_backlog=€154B

### 10. PJM capacity market prices
- **What:** Next PJM Base Residual Auction (BRA) clearing prices per region
- **Why:** AI DC buildout drove 9.3× spike (2024/25 → 2025/26); next auction tests whether the spike sustains or breaks
- **Polling sources:**
  - https://www.pjm.com/markets-and-operations/rpm
  - https://www.pjm.com/-/media/markets-ops/rpm/rpm-auction-info/
- **Cadence:** annual auction (next: mid-2026 for 2027/28 delivery year)
- **Last known:** pjm_2027_28_clearing_per_MW_day=$333.44 (cleared Dec 2025, at cap; uncapped ~$530; fell 6,623 MW short of reliability req) | 2025_26=$270 | 2024_25=$29

### 11. EDA Big-3 backlogs
- **What:** Synopsys + Cadence quarterly RPO/backlog
- **Why:** Forward revenue visibility on chip design demand; 1.5-1.6 yr backlogs = structural durability
- **Polling sources:**
  - https://investor.synopsys.com/financials/quarterly-results/
  - https://www.cadence.com/en_US/home/company/investor-relations.html
- **Cadence:** quarterly
- **Last known:** synopsys_backlog=~$11.0B (Q2 2026, Apr 30; EDA rev +8%) | cadence_backlog=$8.0B (Q1 2026 record; FY26 guide +17%)

### 12. Transformer / substation lead times
- **What:** US large-power-transformer (LPT) lead times + substation interconnect queue length
- **Why:** Hard bottleneck on grid-tied DC capacity; lead-time deterioration = more onsite-gas adoption
- **Polling sources:**
  - https://www.energy.gov/oe/electric-grid (DOE)
  - Quanta Services IR: https://investors.quantaservices.com/
  - Google: "transformer lead time 2026"
- **Cadence:** quarterly Quanta earnings + ad-hoc industry reports
- **Last known:** lpt_lead_time_weeks=~128 avg (2026, WoodMac; GSU up to ~208/4yr) | quanta_transformer_capex=$500-700M (doubling) | new US mfg ~$2B not online until ~2028

### 13. AI lab ARR / revenue updates
- **What:** Anthropic, OpenAI, xAI revenue/ARR disclosures and valuation rounds
- **Why:** Lab ARR validates the inference market sizing that underwrites hyperscaler compute commitments
- **Polling sources:**
  - https://www.anthropic.com/news
  - https://openai.com/news
  - Reuters tech: site:reuters.com Anthropic OR OpenAI revenue
- **Cadence:** ad-hoc; major drops every few months
- **Last known:** anthropic_arr=$44B+ (May 2026) | anthropic_round_pending=$50B+ at $900B val | openai_arr=unknown

### 14. Sovereign capital announcements
- **What:** MGX (UAE), Saudi PIF/Humain, Singapore Temasek/GIC, Saudi G42 major commitments to AI infra
- **Why:** New pools entering, additive not displacing per [[Capex trajectory thesis]]; expansion = supply-side underwriting
- **Polling sources:**
  - https://www.reuters.com/business/sovereign-wealth-funds/
  - Google: "MGX" OR "PIF" OR "Humain" AI investment 2026
  - https://www.bloomberg.com/news/audio/2024-08-23/big-take-uae-s-mgx-fund-and-the-future-of-ai (Bloomberg gated)
- **Cadence:** ad-hoc
- **Last known:** mgx_stargate=equity_in | pif_xai_rumored=$40B | last_announcement_date=2026-Q1

### 15. Policy / regulatory drops
- **What:** FERC interconnect rule changes, US chip export controls, EU AI Act enforcement actions, state IRP processes affecting AI DCs
- **Why:** Policy is the hardest-to-predict tail risk; export controls and grid rules can reprice large parts of the wiki overnight
- **Polling sources:**
  - https://www.ferc.gov/news-events
  - https://www.bis.doc.gov/index.php/all-articles (BIS)
  - https://digital-strategy.ec.europa.eu/en/news (EU)
- **Cadence:** ad-hoc; major events every 1-3 months
- **Last known:** last_check=2026-05-25 | last_material_event=baseline (no anchor yet)

---

## Sources also worth ad-hoc checks (not formal indicators)

- [[Epoch AI]] publications
- [[McKinsey & Company]] AI compute reports
- [[Goldman Sachs]] research notes (when public)
- DeepSeek release announcements
- New gigawatt-class DC announcements (any company, any geography)

These get a "supplementary scan" by the routine but don't have explicit indicators attached.
