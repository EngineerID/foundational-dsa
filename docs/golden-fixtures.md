# Shared golden fixtures

Trilingual `*Goldens*` tests lock behavior against JSON under `tools/`. Registry: `tools/golden-fixtures.mjs` (`npm run check:golden-parity`).

## Topics with shared goldens (43 catalog ids)

| Topic id | JSON |
|----------|------|
| `bfs` | `bfs-goldens.json` |
| `binary-heap` | `binary-heap-goldens.json` |
| `binary-search` | `binary-search-goldens.json` |
| `binary-search-boundary` | `binary-search-boundary-goldens.json` |
| `bloom-filter` | `bloom-filter-goldens.json` |
| `bst` | `bst-goldens.json` |
| `bubble-sort` | `bubble-sort-goldens.json` |
| `coin-change` | `coin-change-goldens.json` |
| `counting-sort` | `counting-sort-goldens.json` |
| `dfs` | `dfs-goldens.json` |
| `dijkstra` | `dijkstra-goldens.json` |
| `dynamic-array` | `dynamic-array-goldens.json` |
| `edit-distance` | `edit-distance-goldens.json` |
| `fenwick-tree` | `fenwick-tree-goldens.json` |
| `graph` | `graph-goldens.json` |
| `heapsort` | `heapsort-goldens.json` |
| `insertion-sort` | `insertion-sort-goldens.json` |
| `kmp` | `kmp-goldens.json` |
| `knapsack` | `knapsack-goldens.json` |
| `kruskal-mst` | `mst-goldens.json` |
| `lcs` | `lcs-goldens.json` |
| `linear-search` | `linear-search-goldens.json` |
| `lis` | `lis-goldens.json` |
| `lru-cache` | `lru-cache-goldens.json` |
| `merge-sort` | `merge-sort-goldens.json` |
| `open-addressing` | `open-addressing-goldens.json` |
| `prim-mst` | `mst-goldens.json` |
| `queue` | `queue-goldens.json` |
| `quick-select` | `quick-select-goldens.json` |
| `quick-sort` | `quick-sort-goldens.json` |
| `rabin-karp` | `rabin-karp-goldens.json` |
| `radix-sort` | `radix-sort-goldens.json` |
| `reservoir-sampling` | `reservoir-sampling-goldens.json` |
| `selection-sort` | `selection-sort-goldens.json` |
| `separate-chaining` | `separate-chaining-goldens.json` |
| `singly-linked-list` | `singly-linked-list-goldens.json` |
| `sliding-window-maximum` | `sliding-window-maximum-goldens.json` |
| `stack` | `stack-goldens.json` |
| `topological-sort` | `topological-sort-goldens.json` |
| `treap` | `treap-goldens.json` |
| `tree-traversals` | `tree-traversals-goldens.json` |
| `trie` | `trie-goldens.json` |
| `union-find` | `union-find-goldens.json` |

## Catalog topics still without shared goldens (30)


`doubly-linked-list`, `deque`, `priority-queue`, `avl-tree`, `order-statistic-tree`, `interval-tree`, `b-tree`, `segment-tree`, `z-algorithm`, `bellman-ford`, `floyd-warshall`, `boruvka-mst`, `a-star`, `tarjan-scc`, `kosaraju`, `bipartite-check`, `articulation-bridges`, `edmonds-karp`, `hungarian`, `red-black-tree`, `lca-binary-lifting`, `sparse-table`, `manacher`, `suffix-array`, `aho-corasick`, `matrix-chain`, `longest-palindromic-subsequence`, `partition-equal-subset`, `rod-cutting`, `tsp-bitmask`.

Regenerate this page: `node tools/refresh-golden-fixtures-doc.mjs`. Gap list only: `node tools/list-golden-fixture-gaps.mjs`.
