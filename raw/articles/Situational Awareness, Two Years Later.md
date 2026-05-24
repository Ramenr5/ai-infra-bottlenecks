---
title: "Situational Awareness, Two Years Later"
source: "https://medium.com/data-science-collective/situational-awareness-two-years-later-4b941d052ef9"
author:
  - "[[Omer Ansari]]"
published: 2026-04-29
created: 2026-05-24
description: "Leopold Aschenbrenner bet big on straight lines and San Francisco whispers. Here is where reality landed, and where it veered off the map en"
tags:
  - "clippings"
---
*Leopold Aschenbrenner bet big on straight lines and San Francisco whispers. Here is where reality landed, and where it veered off the map entirely.*

In June 2024, Leopold Aschenbrenner, a former OpenAI researcher, published a sprawling, 165-page treatise called *Situational Awareness: The Decade Ahead*. It was part prophecy, part technical manifesto, part national security alarm bell. He argued, with charts and OOMs (orders of magnitude) and SF-gossip, that we were hurtling toward AGI by 2027, superintelligence by the end of the decade, and that a geopolitical cataclysm, involving trillion-dollar compute clusters and a US-China cold war over AI, was not just plausible, but underway.

The document landed like a grenade in the AI community. Some hailed it as the most important essay of the decade. Others dismissed it as tech-bro eschatology wrapped in scaling laws.

Nearly two years have passed since then. We now have real data, real events, real models, and real money flows to evaluate his claims. And as a person who has spent years wrestling messy, unstructured data into submission, who has seen firsthand how a well-placed LLM can transform chaos into clarity, I found this to be an irresistible exercise.

So I did what any data-obsessed person would do. I took each of Aschenbrenner’s major predictions, hunted for the freshest signals in industry reports, academic papers, earnings calls, and geopolitical dispatches, and held each prediction up against the harsh light of reality.

*The verdict? He was more right than wrong. But the universe, as it often does, had a few curveballs of its own.*

## I · The Trillion-Dollar Cluster

### Prediction: “Many trillions of dollars will go into GPU, datacenter, and power buildout before the end of the decade.”

Let me be blunt: this one is not just confirmed. It is *accelerating faster than Leopold forecast*.

Leopold projected total annual AI investment might hit $500 billion by around 2026 and about $2 trillion by 2028. McKinsey, in April 2025, published a jaw-dropping report projecting $5.2 trillion in total datacenter capital expenditures through 2030, with an upside scenario of $7.9 trillion. The Big Five hyperscalers (Amazon, Microsoft, Google, Meta, Oracle) are now projected to spend $602 billion in capex in 2026 alone, a 36% increase year-over-year, with roughly 75% of that going directly to AI infrastructure.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Yxlz-2z_M9p7LsfGE7-CMA.png)

Consider the sheer scale of what is happening right now. The Stargate Initiative, spearheaded by OpenAI, SoftBank, and Oracle, is a $500 billion multi-year plan to build 20 massive data centers in Texas, each spanning 500,000 square feet, targeting 10 gigawatts of AI-ready power. That is the equivalent of the total power consumption of New York City and San Diego combined. Amazon is building a $23 billion expansion in Ohio. Elon Musk built Colossus (a 100,000-GPU supercomputer) inside a shuttered refrigerator factory in 122 days.

And here is the number that should make you sit up: hyperscaler capex now consumes 2.2% of US GDP. JP Morgan estimates up to $7 trillion of AI spending will be financed with borrowed money. Meta and Oracle alone issued $75 billion in bonds in just two months of 2025. As Bank of America ominously noted: “The AI boom is hitting a money wall.”

> **Verdict: CONFIRMED and EXCEEDED.** Leopold predicted massive investment. The actual numbers have outrun his projections.

## II · AGI by 2027

### Prediction: “AGI by 2027 is strikingly plausible… models will be able to do the work of an AI researcher/engineer.”

This is where it gets nuanced. Leopold was arguing that extrapolating the trendlines in compute, algorithmic efficiency, and “unhobbling” gains made 2027 a plausible arrival window for AI systems that could match PhD-level researchers.

The AI 2027 project, a detailed scenario-planning exercise published in April 2025 by Daniel Kokotajlo and collaborators, tried to formalize and test this timeline. As of early 2026, they graded their own 2025 predictions and found progress at roughly 65% of the pace they had anticipated. The authors have since revised their median AGI timeline from 2027 to around 2029–2030.

Notably, Anthropic remains the outlier. Their formal recommendations to the White House in March 2025 stated they expect AI systems with “intellectual capabilities matching or exceeding that of Nobel Prize winners across most disciplines” by late 2026 or early 2027. Dario Amodei has described this as “a country of geniuses in a datacenter.” OpenAI’s Sam Altman declared in January 2025 that “we are now confident we know how to build AGI.” Google DeepMind’s Hassabis shortened his estimate from “ten years” to “three to five years.”

But there are counter-signals worth noting. Andrej Karpathy, one of the most respected researchers in the field, publicly argued that coding-agent-based AI takeoff would take much longer than the 2027 scenario. The METR RCT (randomized controlled trial) found that experienced programmers using early-2025 AI tools were actually 19% *slower* at completing tasks. And Yann LeCun left his role as Meta’s chief AI scientist in late 2025, arguing that LLMs were fundamentally limited: great at regurgitating old knowledge, not at generating new knowledge.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*a6KB7XVvV0cQxNxJ497KHA.png)

> **Verdict: DIRECTIONALLY RIGHT, but likely 2–3 years early.** The trajectory is correct. AI capabilities are advancing at breathtaking speed. But the 2027 date now appears optimistic. Most grounded forecasters have shifted to 2029–2032. Progress is running at ~65% of the pace Leopold implicitly assumed.

## III · Algorithmic Efficiency

### Prediction: “~0.5 OOMs/year of algorithmic efficiency… ~2 OOMs of gains by 2027.”

This might be Leopold’s single most vindicated prediction — and the one the universe amplified in the most delicious, unexpected way.

In January 2025, a relatively unknown Chinese AI lab called DeepSeek released V3 and R1: models that matched GPT-4’s performance at a training cost estimated at just $5.6 million, using only 2,048 H800 GPUs and 2.79 million GPU hours. For context, Meta’s Llama 3.1 used more than 16,000 H100 GPUs and 30.84 million GPU hours. McKinsey estimated the cost reduction at roughly 18x for training and 36x for inference compared to GPT-4o.

Leopold had anticipated steady algorithmic progress. What he did not, and could not, have anticipated was that export controls on China would act as a forcing function, a creative constraint that birthed what the industry now calls the “DeepSeek Shock.” Necessity, as always, mothered invention. Mixture-of-Experts architectures, Multi-Head Latent Attention (slashing KV cache by 93%), FP8 mixed-precision training, Reinforcement Learning with Verifiable Rewards (RLVR). These were not incremental tweaks. They were architectural revolutions born under siege.

If you have ever read Clayton Christensen, you will recognize the pattern instantly. DeepSeek is the textbook disruptive innovator: inferior hardware, but dramatically cheaper and faster output. The trillion-dollar cluster thesis assumed the game would be won by whoever had the most GPUs. DeepSeek showed that the game could be won by whoever used their GPUs most cleverly. It is the same lesson that surfaces whenever you work with messy real-world data: you do not always need to fix the source. Sometimes you plug intelligence into the middle of the stream and let it purify what flows through. DeepSeek did that, except the “stream” was the entire AI training pipeline.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MryClC1Lrfv9n35HrjgY1A.png)

And the innovation did not stop at DeepSeek. A whole new “scaling law” emerged that Leopold’s June 2024 essay only hinted at: inference-time compute scaling. Instead of spending more on training, models like OpenAI’s o1 and o3 series, DeepSeek-R1, Claude 3.7 Sonnet, and Gemini 2.5 Pro spend more compute at inference, “thinking longer”, and extract dramatically better reasoning performance. This is the equivalent of discovering a new dimension of improvement that the original compute + algorithmic efficiency framework did not fully capture.

> **Verdict: CONFIRMED and EXCEEDED.** Algorithmic efficiency gains have been staggering: possibly exceeding the 0.5 OOM/year trendline, especially when you include inference-time scaling. The DeepSeek Shock alone vindicated this thesis more powerfully than any earnings call ever could.

## IV · The Geopolitical Chessboard

### Prediction: “If we’re lucky, we’ll be in an all-out race with the CCP; if we’re unlucky, an all-out war.”

Leopold’s most alarming thesis, that AI would become a national security issue on the scale of the nuclear arms race, is proving disturbingly prescient.

At Davos 2026, the atmosphere shifted palpably. Demis Hassabis stated that Chinese AI companies are now only about six months behind the most advanced Western labs, down from several years just two years prior. Dario Amodei used “unusually stark language,” comparing selling advanced chips to China to providing an authoritarian government with capabilities akin to nuclear weapons. The Council on Foreign Relations published a January 2026 piece flatly titled “How 2026 Could Decide the Future of Artificial Intelligence,” noting that Chinese operators had already used AI agents “to an unprecedented degree” for cyberattacks, with Anthropic disclosing a November 2025 incident where a Chinese state-sponsored attack was 80–90% autonomously executed by AI agents.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*me3rkc4ZBT6fowKB8aL_wA.png)

The Trump administration’s National Security Strategy makes it explicit: “We want to ensure that US technology and US standards, particularly in AI, biotech, and quantum computing, drive the world forward.” The Stargate Initiative is not just an infrastructure play, it is a national security project dressed in corporate clothing. In 2026, five US companies alone will spend more than $450 billion on AI capex, exceeding the inflation-adjusted cost of the entire Apollo program in a single year.

But here is where Leopold may have underestimated China. He wrote that “China isn’t at all out of the game,” but the extent to which China’s open-source AI strategy has been successful, with DeepSeek, Qwen, and others now being used by several major US tech companies in their own applications, was not fully anticipated. China is playing a different game: not matching compute, but routing around it with architectural brilliance and open-source diffusion. The CSIS analysis bluntly concluded that “the rate of China’s progress is best predicted by market and technological complexities, not by the extent to which export controls were applied.”

> **Verdict: CONFIRMED, with China performing BETTER than predicted.** The national security mobilization is real. But the “race” is not playing out as a simple compute arms race: it is an algorithmic chess match, and China has proven a far more creative opponent than the essay assumed.

## V · The Unhobbling

### Prediction: “Unhobbling gains should take us from chatbots to agents, from a tool to drop-in remote worker replacements.”

This was Leopold’s most conceptually interesting claim. He argued that the “raw intelligence” was already there in base models, locked behind dumb constraints. RLHF, chain-of-thought, tool use, scaffolding: these would unlock latent capability and transform AI from a clever parlor trick into something that could actually do work.

## Get Omer Ansari’s stories in your inbox

Join Medium for free to get updates from this writer.

Three major products shipped since the essay was published that directly test this thesis. They tell a fascinating, conflicted story.

**Claude Code** (late 2024, rapidly evolved through 2026) gave developers a terminal-based agent that could read codebases, write files, execute commands, and chain multi-step workflows. It became one of Anthropic’s most-used products. The community quickly discovered the `--dangerously-skip-permissions` flag, which lets Claude run uninterrupted for hours. Developers started using it for everything from 9-hour autonomous coding sessions to building entire financial analysis systems overnight. Anthropic's own engineers use it internally. Their February 2026 blog post on building a C compiler with parallel Claudes shows the flag in a bash while-loop, with the parenthetical: *"Run this in a container, not your actual machine."* Even the people who built it will not run it on bare metal. In March 2026, Anthropic shipped **Auto Mode** as a safer middle ground: a Sonnet 4.6 safety classifier that auto-approves low-risk actions while blocking destructive ones. The revealing statistic: users accept 93% of permission prompts anyway. The friction was real, and most AI actions are benign.

**Claude Cowork** (January 2026) was the pivotal “unhobbling for everyone” move. VentureBeat reported that Anthropic built the entire feature in roughly a week and a half, largely using Claude Code itself. That recursive loop (AI building AI tools) is itself a signal that the intelligence explosion Leopold described in Chapter II may already be beginning at the product layer, if not yet at the research layer. Cowork brought the same agentic architecture to non-developers: point Claude at a folder, describe an outcome, walk away. On March 23, 2026, Anthropic extended this with **Computer Use**, letting Claude see, navigate, and control a user’s desktop. Users can now message Claude from their phone, and Claude opens apps, fills spreadsheets, and completes multi-step workflows on the desktop without human intervention. Anthropic calls this “Dispatch.”

**Autonomous SWE Agents** round out the picture. Cognition AI’s Devin, Sierra’s Ghostwriter (an “agent that builds agents,” accepting SOPs and plain English to produce production-ready customer service bots), SWE-Agent, and dozens of others. SWE-bench scores for leading agents sit at roughly 50% on complex tasks as of early 2026, projected to reach 70–80% by year end. Anthropic’s own 2026 Agentic Coding Trends Report notes that “the 10x Engineer is being redefined as an engineer who learned to manage ten agents.”

> **But here is where I must push back on Leopold’s framing.** He treated unhobbling as primarily a *technical* problem: better RL, better scaffolding, better tool-use. The evidence says it is equally a *trust, safety, and workflow design* problem. And those do not follow OOM trendlines.

The `--dangerously-skip-permissions` flag has produced a catalog of disasters. The Wolak incident (October 2025): Claude executed `rm -rf` from root, attempting to delete an entire system. The Reddit incident (December 2025): Claude wiped a user's home directory, including Keychain passwords; it hit 197 points on Hacker News. The PromptArmor demo (January 2026): hidden 1-point white text in a.docx file manipulated Claude into uploading sensitive files to an attacker's account. In March 2026, CVE-2026-24052 was assigned for a path traversal vulnerability in Claude Code itself. These are not edge cases. They represent a fundamental tension: full autonomy is where the productivity gains live, but full autonomy is also where the catastrophic failures live.

Then there is the METR productivity paradox. Their randomized controlled trial found experienced programmers were 19% slower with AI tools. Not faster. Slower. This is not a model capability problem. It is a human-AI integration problem. As the 2026 Agentic Coding Trends Report captures it: “Engineers describe developing intuitions for AI delegation over time… they tended to delegate tasks that are easily verifiable or low-stakes. The more conceptually difficult a task, the more likely engineers keep it for themselves.” Swfte AI’s data shows 46% of developers actively distrust AI code accuracy. The number one frustration, cited by 66% of developers: AI solutions are “almost right, but not quite.”

Leopold’s framework treated unhobbling as a one-directional ramp: unlock capability, get productivity. The reality is more like a two-body problem. Capability and trust must advance together, and trust advances slower because it depends on human adaptation, organizational change, and security engineering. Anyone who has ever tried to introduce a major technology change inside a large IT organization knows this intimately. You can have the most powerful platform in the world, but 60–70% of the work is adoption: integrating it into existing processes, tools, and culture. The impetus to become AI-driven must come from inside, because no outside entity knows the organization better than itself. Auto Mode’s entire existence is evidence that Anthropic recognizes full autonomy without safety guardrails is untenable. The fact that their most sophisticated answer (a two-layer classifier system using Sonnet 4.6 alongside the primary agent) is still labeled a “research preview” tells you how unsolved this problem remains.

> **Verdict: CONFIRMED on direction, SLOWER on impact.** The chatbot-to-agent transition is happening at remarkable speed. Claude Cowork, Computer Use, Devin, Ghostwriter, Auto Mode: the evidence is overwhelming. But the “drop-in remote worker” vision is 2–4 years further out than Leopold implied, because the safety/trust/integration layer is itself a hard problem that no amount of model intelligence automatically solves. The unhobbling is real. It is gated by human factors that resist OOM-counting.

## VI · The Full Scorecard

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bCbaFLx8ibAr_qdGaCmaMg.png)

## VII · What Leopold Did Not Predict

Every forecast, no matter how brilliant, has blind spots. Here is what the data surfaced that Aschenbrenner’s model did not account for.

**DeepSeek / Efficiency Revolution —** HIGH IMPACT

China’s algorithmic judo, achieving GPT-4 parity at 1/18th the cost, was not in anyone’s playbook. It inverted the ‘just throw more compute at it’ thesis.

**Open-Source Dominance Shift —** HIGH IMPACT

Qwen, DeepSeek, and Mistral dethroned Meta’s Llama. The open-weight ecosystem exploded in unexpected directions.

**Inference-Time Compute Scaling —** HIGH IMPACT

A whole new ‘scaling law’, spending more compute at inference rather than training, emerged as the dominant paradigm shift with o1/R1.

**AI Bubble / Debt Concerns —** MEDIUM IMPACT

94% of operating cash flows consumed by AI capex. $1.5T in projected debt. Sundar Pichai himself noted ‘elements of irrationality’.

**MCP Protocol Standardization —** MEDIUM IMPACT

Tool-use standardization via Model Context Protocol joined the Linux Foundation and became the de facto standard faster than anyone expected.

**AI Agent Productivity Paradox —** MEDIUM IMPACT

METR’s RCT found experienced devs were 19% SLOWER with AI tools. Yann LeCun left Meta over LLM limitations. A humbling counter-signal.

The most profound miss was not a factual error. It was an architectural one. Leopold’s framework was fundamentally a *compute-centric* model: throw more GPUs at the problem, ride the OOM trendlines, and AGI falls out the other end. What actually happened was that the field discovered you could get almost as far by being *smarter* about how you use compute (inference-time scaling, RLVR, MoE, hardware-software co-design) as by simply having more of it.

This is the Jevons Paradox of AI: making AI cheaper and more efficient does not reduce total spending. It *increases* it, because the market for AI inference expands faster than costs decline.

The other major surprise was the AI productivity paradox. The METR finding that experienced developers were slower with AI coding tools is genuinely humbling. But it should not be surprising to anyone who has actually integrated AI into real workflows. Using GPT to write code makes you faster only if you develop the intuition for when to trust it, when to interrogate it, and when to throw its output away and start over. That intuition is hard-won. It does not come from a demo or a benchmark. The “unhobbling” gains Leopold counted on are not purely a function of model capability. They depend on the human being on the other end learning to play at a higher level: orchestrating, reviewing, course-correcting. Not writing the software anymore, but conducting the orchestra that writes it.

## VIII · The Water Beneath

Leopold Aschenbrenner wrote an essay that was, in many ways, a love letter to trendlines: an argument that if you trust the data, the implications are staggering. And on the largest dimensions (capital mobilization, algorithmic progress, geopolitical stakes, the transition from chatbot to agent) he was right. The data supports him.

But data has a way of humbling its most fervent believers. DeepSeek was not in the model. Inference-time scaling was not in the model. The productivity paradox was not in the model. They were truths hiding in plain sight, waiting for someone to look past the trendlines.

As of March 2026, here is the picture that the data paints for me:

**The capital mobilization is real and accelerating.** Over a trillion dollars a year is now flowing into AI infrastructure. This is not hype; this is the largest industrial mobilization since the post-war buildout. But it is increasingly debt-financed, and the sustainability of 94% cash-flow-to-capex ratios is a genuine open question.

**AGI is not 2027. But it is probably not 2040 either.** The serious forecasters have converged on something like 2029–2033, with wide uncertainty bands. Anthropic remains the most aggressive. The path runs through coding agents, automated AI research, and inference-time scaling, not just bigger pretraining runs.

**China is not losing.** Six months behind, and closing. Open-source as strategic weapon. Algorithmic brilliance under hardware constraints. Export controls as creative catalysts. This is a very different competitive landscape than Leopold’s “free world must prevail” framing assumed.

**The human factor is the “c” in the equation.** In y = mx + c, we tend to call the unexplained residual “error.” But the METR productivity paradox, the organizational adaptation challenges, the trust deficits, the security disasters: these are not error. They are the part of the equation we have not yet learned to read. And they will determine whether trillions in investment translate into actual economic value, or into the most expensive regret in corporate history.

*“Beneath it all, my friends, is the ocean of data. The dark deep waters where truth lurks, waiting patiently for us to find it.”*

Leopold saw the currents. He was right about the direction of the tide. But the ocean, as it always does, had currents of its own, deeper, stranger, and more powerful than anyone can predict.

Sources: McKinsey (Apr 2025), CreditSights, IEEE ComSoc, Atlantic Council, CFR, AI 2027 Project, 80,000 Hours, Epoch AI, CSIS, METR, DeepSeek technical reports, company earnings calls.