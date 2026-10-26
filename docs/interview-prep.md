# Interview prep map

This page maps **common interview problem shapes** to catalog **topic ids** in this repo. Each id works with the demo runner:

```bash
npm run demo -- <topic-id>
npm run demo -- <topic-id> python   # optional: java | python | js
```

Full topic list: [COVERAGE.md](../COVERAGE.md). Step-by-step walkthroughs: [worked-examples.md](worked-examples.md). **20 curated problems** with trilingual solutions: [practice-problems.md](practice-problems.md). API names: [API.md](API.md). **Pattern signals → topics:** [pattern-recognition.md](pattern-recognition.md).

## Detailed walkthroughs (step tables)

| Pattern | Doc section |
|---------|-------------|
| Binary search (index + binary search on answer), merge sort, KMP | [worked-examples.md](worked-examples.md#binary-search-on-a-sorted-array) |
| Dijkstra, union–find, LRU cache | [worked-examples.md](worked-examples.md#dijkstra-non-negative-weights) |
| Course schedule (topo sort), sliding window | [worked-examples.md](worked-examples.md#topological-sort-kahn-course-schedule) |
| BFS unweighted, edit distance, knapsack, LCS | [worked-examples.md](worked-examples.md#bfs-unweighted-shortest-paths) |

Trilingual tests for these scenarios: `WorkedInterviewExamplesTest`, `test_worked_interview_examples.py`, `workedInterviewExamples.test.js`.

## Arrays and searching

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Find element in unsorted array | `linear-search` | `npm run demo -- linear-search` |
| Find index in sorted array | `binary-search` | `npm run demo -- binary-search` |
| Two sum on sorted array (1-based indices) | `two-sum-ii` | `npm run demo -- two-sum-ii` |
| Trapping rain water | `trapping-rain-water` | `npm run demo -- trapping-rain-water` |
| Kth smallest / quickselect | `quick-select` | `npm run demo -- quick-select` |
| Reservoir sampling / stream pick | `reservoir-sampling` | `npm run demo -- reservoir-sampling` |
| Next greater element / monotonic stack | `monotonic-stack` | `npm run demo -- monotonic-stack` |
| Sliding window maximum | `sliding-window-maximum` | `npm run demo -- sliding-window-maximum` |

## Sorting

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Merge overlapping intervals | `merge-intervals` | `npm run demo -- merge-intervals` |
| Stable O(n log n) sort | `merge-sort` | `npm run demo -- merge-sort` |
| In-place sort, average fast | `quick-sort` | `npm run demo -- quick-sort` |
| O(n) sort, small integer range | `counting-sort` | `npm run demo -- counting-sort` |
| Sort non-negative integers by digit | `radix-sort` | `npm run demo -- radix-sort` |
| Heap-based O(n log n) in-place | `heapsort` | `npm run demo -- heapsort` |

## Strings and patterns

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Substring search (linear) | `kmp` | `npm run demo -- kmp` |
| Z-box / prefix function variant | `z-algorithm` | `npm run demo -- z-algorithm` |
| Rolling hash substring | `rabin-karp` | `npm run demo -- rabin-karp` |
| Longest substring without repeating | `longest-substring-without-repeating` | `npm run demo -- longest-substring-without-repeating` |
| Longest palindromic substring | `manacher` | `npm run demo -- manacher` |
| Multi-pattern dictionary | `aho-corasick` | `npm run demo -- aho-corasick` |
| Prefix dictionary / autocomplete | `trie` | `npm run demo -- trie` |

## Linear structures and cache

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Valid parentheses / bracket matching | `valid-parentheses` | `npm run demo -- valid-parentheses` |
| Stack / queue / deque | `stack`, `queue`, `deque` | `npm run demo -- stack` |
| LRU cache (get/put O(1)) | `lru-cache` | `npm run demo -- lru-cache` |
| Dynamic array / list growth | `dynamic-array` | `npm run demo -- dynamic-array` |

## Trees and heaps

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| BST insert/search | `bst` | `npm run demo -- bst` |
| Balanced BST | `avl-tree`, `red-black-tree` | `npm run demo -- avl-tree` |
| Top K frequent elements | `top-k-frequent-elements` | `npm run demo -- top-k-frequent-elements` |
| Meeting rooms II (min rooms) | `meeting-rooms-ii` | `npm run demo -- meeting-rooms-ii` |
| Heap / priority scheduling | `binary-heap`, `priority-queue` | `npm run demo -- priority-queue` |
| Range sum / min on array | `fenwick-tree`, `segment-tree` | `npm run demo -- segment-tree` |
| LCA on tree | `lca-binary-lifting` | `npm run demo -- lca-binary-lifting` |

## Graphs

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| BFS shortest path (unweighted) | `bfs` | `npm run demo -- bfs` |
| Number of islands (grid components) | `number-of-islands` | `npm run demo -- number-of-islands` |
| Word search on grid | `word-search` | `npm run demo -- word-search` |
| DFS / cycle / components | `dfs` | `npm run demo -- dfs` |
| Course schedule / topo order | `course-schedule`, `topological-sort` | `npm run demo -- course-schedule` |
| Weighted SSSP, non-negative edges | `dijkstra` | `npm run demo -- dijkstra` |
| Negative edges / detect cycle | `bellman-ford` | `npm run demo -- bellman-ford` |
| All-pairs shortest paths | `floyd-warshall` | `npm run demo -- floyd-warshall` |
| Minimum spanning tree | `kruskal-mst`, `prim-mst` | `npm run demo -- kruskal-mst` |
| Strongly connected components | `tarjan-scc`, `kosaraju` | `npm run demo -- tarjan-scc` |
| Bipartite check | `bipartite-check` | `npm run demo -- bipartite-check` |
| Network flow (max flow) | `edmonds-karp` | `npm run demo -- edmonds-karp` |

## Union–find and connectivity

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Dynamic connectivity / Kruskal helper | `union-find` | `npm run demo -- union-find` |
| Number of islands (with grid → UF) | `union-find`, `dfs`, `bfs` | `npm run demo -- union-find` |

## Dynamic programming

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Longest increasing subsequence | `lis` | `npm run demo -- lis` |
| Longest common subsequence | `lcs` | `npm run demo -- lcs` |
| 0/1 knapsack | `knapsack` | `npm run demo -- knapsack` |
| Edit distance | `edit-distance` | `npm run demo -- edit-distance` |
| Coin change (min coins) | `coin-change` | `npm run demo -- coin-change` |
| Maximum subarray (Kadane) | `maximum-subarray` | `npm run demo -- maximum-subarray` |
| Matrix chain multiplication | `matrix-chain` | `npm run demo -- matrix-chain` |
| TSP (small n, bitmask) | `tsp-bitmask` | `npm run demo -- tsp-bitmask` |

## Hashing

| Interview prompt | Topic id | Demo |
|------------------|----------|------|
| Hash map (chaining) | `separate-chaining` | `npm run demo -- separate-chaining` |
| Open addressing / probing | `open-addressing` | `npm run demo -- open-addressing` |
| Probabilistic set membership | `bloom-filter` | `npm run demo -- bloom-filter` |

## Suggested study order

1. `binary-search`, `merge-sort`, `kmp` — see detailed tables in [worked-examples.md](worked-examples.md).
2. `dijkstra`, `union-find`, `lru-cache` — same doc, graph/DS classics.
3. One graph traversal pair: `bfs` + `dfs`, then one DP trio: `lis`, `knapsack`, `edit-distance`.
4. Work through problems 1–20 in [practice-problems.md](practice-problems.md) (each maps to catalog topics above).

Run the full local gate before interview practice sessions:

```bash
npm test
```

For CI-equivalent checks (lint, coverage, link scan): [running-ci-locally.md](running-ci-locally.md).
