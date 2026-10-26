# Pattern recognition guide

Map **problem signals** in interview statements to catalog **topic ids**. Pair this with [interview-prep.md](interview-prep.md) (prompt tables) and [worked-examples.md](worked-examples.md) (step tables).

## How to use

1. Underline nouns (input shape) and verbs (what to optimize).
2. Match one row below; if several fit, prefer the **simplest** data structure that meets constraints.
3. Run `npm run demo -- <topic-id>` to see trilingual tests for that implementation.

## Signal → topic

| If you see… | Think… | Topic id(s) |
|-------------|--------|-------------|
| Sorted array, find / boundary | Binary search | `binary-search` |
| “Minimum capacity / speed / time” + monotone feasibility | Binary search on answer | `binary-search` (predicate pattern) |
| Substring, pattern, LPS / prefix | KMP / Z / rolling hash | `kmp`, `z-algorithm`, `rabin-karp` |
| Window of size k, max/min in window | Sliding window + deque | `sliding-window-maximum` |
| LRU / LFU cache with O(1) ops | Hash + linked order | `lru-cache` |
| Dynamic connectivity, Kruskal | Union–find | `union-find` |
| Unweighted shortest path | BFS | `bfs` |
| Non-negative edge weights | Dijkstra | `dijkstra` |
| Negative edges | Bellman–Ford | `bellman-ford` |
| All-pairs shortest paths | Floyd–Warshall | `floyd-warshall` |
| Course prerequisites, DAG order | Topological sort | `topological-sort` |
| Range sum / point update on array | Fenwick / segment tree | `fenwick-tree`, `segment-tree` |
| 0/1 items + weight cap | Knapsack DP | `knapsack` |
| Two strings, subsequence / edit cost | LCS / edit distance | `lcs`, `edit-distance` |
| Stream, uniform random sample size k | Reservoir sampling | `reservoir-sampling` |
| Sorted order, in-place O(n log n) | Merge / heap / quick sort | `merge-sort`, `heapsort`, `quick-sort` |

## Cross-language checks

Shared JSON goldens and catalog tests lock behavior across Java, Python, and JavaScript:

- `tools/*-goldens.json` with matching `*Goldens*` tests (see `tools/golden-fixtures.mjs` for the full list, including randomized/stateful topics such as `treap`, `bloom-filter`, `lru-cache`, `reservoir-sampling`).
- `WorkedInterviewExamplesTest` / `test_worked_interview_examples.py` / `workedInterviewExamples.test.js` for walkthrough scenarios.

When extending an algorithm, add edge cases (empty, single element, duplicates, invalid input, large n) in **all three** dedicated test files unless catalog tests already cover them.

## Practice problems

Twenty standalone problems with trilingual solutions: [practice-problems.md](practice-problems.md). Full time/space table: [complexity-cheatsheet.md](complexity-cheatsheet.md).

## Next steps

- [Interview prep map](interview-prep.md)
- [Practice problems](practice-problems.md)
- [API.md](API.md) for method names per language
- [CONTRIBUTING.md](../CONTRIBUTING.md) for parity and test expectations
