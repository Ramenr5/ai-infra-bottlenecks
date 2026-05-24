---
type: bottleneck
created: 2026-05-24
updated: 2026-05-24
sources: ["[[Can AI scaling continue through 2030 (2024)]]"]
layer: compute
severity: watch
mechanism: capacity
tags: [latency, network-topology, nvlink, infiniband, distributed-training]
---

# Latency wall

A fundamental speed limit on training imposed by the minimum time required for sequential forward/backward passes through a model. **Distant** — not the 2030 binding constraint — but eventually becomes the ceiling beyond ~1e32 FLOP without new network topologies.

## Key numbers

| Scenario | Ceiling | Source |
| --- | --- | --- |
| 60M-token batch (GPT-4-scale), no batch scaling | **2e30–2e32 FLOP** | [[Can AI scaling continue through 2030 (2024)]] |
| With Erdil/Schneider-Joseph batch scaling | **3e30–1e32 FLOP** | Same |
| Beyond ~1e32 FLOP | Requires new network topologies | Same |

For context: GPT-4 ≈ 2e25 FLOP. Latency wall is ~5–6 orders of magnitude above that.

## How the wall works

1. Each transformer layer requires a sequential forward + backward pass; these can't be parallelized within a layer
2. Model depth (# layers) tends to grow as cube root of parameter count
3. Batch size can amortize layer latency, but only up to a "critical batch size" — beyond which gains drop sharply
4. So at fixed batch size, larger models require more sequential batches → more total time → an upper bound on FLOP-per-9-month training run

## Component latencies (modern hardware, per Epoch)

- **Kernel latency**: ~4.5 µs per matmul on A100
- **Intra-NVLINK-pod all-reduce**: ~9.2 µs
- **Per-matmul base latency** in 8-GPU NVLINK pod: ~13.7 µs
- **Per-layer latency** (4 matmuls × 2 passes): ~110 µs
- **Internode (InfiniBand) latency**: scales logarithmically with # nodes

## How to push it back

1. **New network topologies** (mesh instead of tree) — bypass logarithmic internode latency
2. **Larger pods** — reduce internode communication share
3. **Better protocols** — e.g., Meta's NCCLX fork of NVIDIA NCCL shaves tens of µs
4. **Batch-size scaling** with model size (Erdil/Schneider-Joseph conjecture: cube-root of parameters)
5. **Fewer layers per parameter count** — pruning research suggests up to 50% intermediate layer reduction possible without large loss

## Why "watch" not "acute"

- Median 2030 ceiling is **3e31 FLOP** — 150× above what [[Power & energy|power]] allows (2e29 FLOP)
- Multiple research directions for pushing it back
- Won't be the binding 2030 constraint per Epoch's analysis

## Linkage to other constraints

- Drives demand for [[Networking & optics|optical interconnect]] improvements and new switch ASICs
- Pushes adoption of co-packaged optics
- Indirectly affects [[Datacenter physical]] design (pod topology, cable routing)

## Open questions / what to watch

- Does anyone build a mesh-topology AI cluster at scale before 2030?
- Does NVIDIA's NVL72 / NVL576 generation collapse internode latency enough to push the wall further?
- Co-packaged optics adoption timeline
- Empirical critical batch size scaling (is the cube-root conjecture right?)
