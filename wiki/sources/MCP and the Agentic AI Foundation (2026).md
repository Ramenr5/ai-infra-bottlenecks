---
type: source
created: 2026-06-01
updated: 2026-06-01
tags: [primary-source, mcp, agent-orchestration, anthropic, standards, control-plane]
---

# MCP and the Agentic AI Foundation (2026)

**Publisher:** [[Anthropic]] (MCP), Linux Foundation (Agentic AI Foundation), a16z (analysis)
**URLs:** [Anthropic MCP](https://www.anthropic.com/news/model-context-protocol) · [Donating MCP / AAIF](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) · [a16z MCP deep dive](https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/)

## Headline — the agent-to-tool layer is becoming an OPEN standard

**Model Context Protocol (MCP)** — launched by Anthropic Nov 2024 — is now the **de-facto standard** for connecting agents to tools/data, and has been **donated to a neutral Linux Foundation body (the Agentic AI Foundation)** co-founded by Anthropic, Block, OpenAI, with Google/Microsoft/AWS/Cloudflare/Bloomberg. This directly bears on [[ServiceNow]]'s "agent control plane" bet.

## Key facts

- MCP = de-facto standard since Nov 2024; thousands of MCP servers; **97M+ monthly SDK downloads** (Python + TS)
- **Agentic AI Foundation (AAIF)** under Linux Foundation — neutral governance, broad hyperscaler + lab backing
- Claude: 75+ connectors; Tool Search + Programmatic Tool Calling for production-scale (thousands of tools)
- Nov 2025 spec: async ops, statelessness, server identity, official registry

## Why it matters for the thesis (the L5 stress-test)

The "agent control plane" splits into **two layers**, and the open-standard news is **double-edged** for [[ServiceNow]]:
- **Bear:** if agent↔tool connectivity is a **commoditized open protocol** (MCP, donated to a neutral foundation), the *plumbing* layer of orchestration has no moat → undercuts a naive "we own orchestration" thesis.
- **Bull:** NOW's claimed moat isn't the protocol — it's the **governance + business-context + which-agent/LLM-to-run + workflow-execution** layer *above* MCP (McDermott's "quarterback"). MCP standardizes the pipes; the orchestration/governance value sits higher.

→ Sharpens the narrative's **L5** (which was `[INFERRED]`): the control plane is real but **bifurcated** — the protocol commoditizes (sourced), the governance layer is the contested moat (still partly inferred whether NOW wins it vs. hyperscalers / the labs' own agent SDKs).

## Cross-reference
- [[ServiceNow]] (control-plane bet) · [[Anthropic]] (MCP author; also a competitor via Claude Agent SDK) · [narrative: CRWD + NOW](../../narratives/2026-06-01 CRWD %2B NOW.md)

## Implications — pages flagged
- [[ServiceNow]] — note MCP/AAIF as both enabler (standard rails) and commoditization risk (orchestration moat must sit above the protocol)
