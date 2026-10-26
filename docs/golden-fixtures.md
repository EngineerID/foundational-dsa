# Shared golden fixtures

Trilingual `*Goldens*` tests lock behavior against JSON under `tools/`. Registry: `tools/golden-fixtures.mjs` (`npm run check:golden-parity`).

## Topics with shared goldens (86 catalog ids)

| Topic id | JSON |
|----------|------|
| `a-star` | `a-star-goldens.json` |
| `aho-corasick` | `aho-corasick-goldens.json` |
| `articulation-bridges` | `articulation-bridges-goldens.json` |
| `avl-tree` | `avl-tree-goldens.json` |
| `b-tree` | `b-tree-goldens.json` |
| `bellman-ford` | `bellman-ford-goldens.json` |
| `bfs` | `bfs-goldens.json` |
| `binary-heap` | `binary-heap-goldens.json` |
| `binary-search` | `binary-search-goldens.json` |
| `binary-search-boundary` | `binary-search-boundary-goldens.json` |
| `bipartite-check` | `bipartite-check-goldens.json` |
| `bloom-filter` | `bloom-filter-goldens.json` |
| `boruvka-mst` | `boruvka-mst-goldens.json` |
| `bst` | `bst-goldens.json` |
| `bubble-sort` | `bubble-sort-goldens.json` |
| `coin-change` | `coin-change-goldens.json` |
| `counting-sort` | `counting-sort-goldens.json` |
| `course-schedule` | `course-schedule-goldens.json` |
| `deque` | `deque-goldens.json` |
| `dfs` | `dfs-goldens.json` |
| `dijkstra` | `dijkstra-goldens.json` |
| `doubly-linked-list` | `doubly-linked-list-goldens.json` |
| `dynamic-array` | `dynamic-array-goldens.json` |
| `edit-distance` | `edit-distance-goldens.json` |
| `edmonds-karp` | `edmonds-karp-goldens.json` |
| `fenwick-tree` | `fenwick-tree-goldens.json` |
| `floyd-warshall` | `floyd-warshall-goldens.json` |
| `graph` | `graph-goldens.json` |
| `heapsort` | `heapsort-goldens.json` |
| `hungarian` | `hungarian-goldens.json` |
| `insertion-sort` | `insertion-sort-goldens.json` |
| `interval-tree` | `interval-tree-goldens.json` |
| `kmp` | `kmp-goldens.json` |
| `knapsack` | `knapsack-goldens.json` |
| `kosaraju` | `kosaraju-goldens.json` |
| `kruskal-mst` | `mst-goldens.json` |
| `lca-binary-lifting` | `lca-binary-lifting-goldens.json` |
| `lcs` | `lcs-goldens.json` |
| `level-order-traversal` | `level-order-traversal-goldens.json` |
| `linear-search` | `linear-search-goldens.json` |
| `lis` | `lis-goldens.json` |
| `longest-palindromic-subsequence` | `longest-palindromic-subsequence-goldens.json` |
| `longest-substring-without-repeating` | `longest-substring-without-repeating-goldens.json` |
| `lru-cache` | `lru-cache-goldens.json` |
| `manacher` | `manacher-goldens.json` |
| `matrix-chain` | `matrix-chain-goldens.json` |
| `maximum-subarray` | `maximum-subarray-goldens.json` |
| `meeting-rooms-ii` | `meeting-rooms-ii-goldens.json` |
| `merge-intervals` | `merge-intervals-goldens.json` |
| `merge-sort` | `merge-sort-goldens.json` |
| `monotonic-stack` | `monotonic-stack-goldens.json` |
| `number-of-islands` | `number-of-islands-goldens.json` |
| `open-addressing` | `open-addressing-goldens.json` |
| `order-statistic-tree` | `order-statistic-tree-goldens.json` |
| `partition-equal-subset` | `partition-equal-subset-goldens.json` |
| `prim-mst` | `mst-goldens.json` |
| `priority-queue` | `priority-queue-goldens.json` |
| `queue` | `queue-goldens.json` |
| `quick-select` | `quick-select-goldens.json` |
| `quick-sort` | `quick-sort-goldens.json` |
| `rabin-karp` | `rabin-karp-goldens.json` |
| `radix-sort` | `radix-sort-goldens.json` |
| `red-black-tree` | `red-black-tree-goldens.json` |
| `reservoir-sampling` | `reservoir-sampling-goldens.json` |
| `rod-cutting` | `rod-cutting-goldens.json` |
| `segment-tree` | `segment-tree-goldens.json` |
| `selection-sort` | `selection-sort-goldens.json` |
| `separate-chaining` | `separate-chaining-goldens.json` |
| `singly-linked-list` | `singly-linked-list-goldens.json` |
| `sliding-window-maximum` | `sliding-window-maximum-goldens.json` |
| `sparse-table` | `sparse-table-goldens.json` |
| `stack` | `stack-goldens.json` |
| `suffix-array` | `suffix-array-goldens.json` |
| `tarjan-scc` | `tarjan-scc-goldens.json` |
| `top-k-frequent-elements` | `top-k-frequent-elements-goldens.json` |
| `topological-sort` | `topological-sort-goldens.json` |
| `trapping-rain-water` | `trapping-rain-water-goldens.json` |
| `treap` | `treap-goldens.json` |
| `tree-traversals` | `tree-traversals-goldens.json` |
| `trie` | `trie-goldens.json` |
| `tsp-bitmask` | `tsp-bitmask-goldens.json` |
| `two-sum-ii` | `two-sum-ii-goldens.json` |
| `union-find` | `union-find-goldens.json` |
| `valid-parentheses` | `valid-parentheses-goldens.json` |
| `word-search` | `word-search-goldens.json` |
| `z-algorithm` | `z-algorithm-goldens.json` |

## Catalog topics still without shared goldens (0)


None — every catalog topic has shared JSON goldens and trilingual `*Goldens*` tests.

Regenerate this page: `node tools/refresh-golden-fixtures-doc.mjs`. Gap list only: `node tools/list-golden-fixture-gaps.mjs`.
