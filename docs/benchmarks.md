# Local benchmarks

The harness in [`tools/micro-bench.mjs`](../tools/micro-bench.mjs) compares representative **asymptotic classes** on the same machine. Results vary by hardware; use them for relative trends, not absolute SLA numbers.

## Run

```bash
npm run bench
```

## What it measures

| Comparison | Classes illustrated |
|------------|---------------------|
| bubble-sort vs merge-sort | O(n²) vs O(n log n) sorting |
| linear-search vs binary-search | O(n) vs O(log n) on sorted data |
| dijkstra vs floyd-warshall | O(E log V) SSSP vs O(V³) APSP (dense small V) |
| lis (DP) vs brute LIS scan | O(n log n) vs O(n²) style growth |

CI does not run these timings; they are documented here for local study only.
