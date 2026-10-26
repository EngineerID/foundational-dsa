# Shared golden fixtures

Trilingual `*Goldens*` tests lock behavior against JSON under `tools/`. Registry: `tools/golden-fixtures.mjs` (`npm run check:golden-parity`).

## Topics with shared goldens (22 catalog ids)

| Topic id | JSON |
|----------|------|
| `linear-search` | `linear-search-goldens.json` |
| `binary-search` | `binary-search-goldens.json` |
| `kmp` | `kmp-goldens.json` |
| `binary-search-boundary` | `binary-search-boundary-goldens.json` |
| `reservoir-sampling` | `reservoir-sampling-goldens.json` |
| `treap` | `treap-goldens.json` |
| `bloom-filter` | `bloom-filter-goldens.json` |
| `lru-cache` | `lru-cache-goldens.json` |
| `quick-select` | `quick-select-goldens.json` |
| `quick-sort` | `quick-sort-goldens.json` |
| `union-find` | `union-find-goldens.json` |
| `binary-heap` | `binary-heap-goldens.json` |
| `topological-sort` | `topological-sort-goldens.json` |
| `trie` | `trie-goldens.json` |
| `fenwick-tree` | `fenwick-tree-goldens.json` |
| `kruskal-mst` / `prim-mst` | `mst-goldens.json` |
| `edit-distance` | `edit-distance-goldens.json` |
| `dijkstra` | `dijkstra-goldens.json` |
| `sliding-window-maximum` | `sliding-window-maximum-goldens.json` |
| `bfs` | `bfs-goldens.json` |
| `merge-sort` | `merge-sort-goldens.json` |

## Catalog topics still without shared goldens (50)

`bubble-sort`, `selection-sort`, `insertion-sort`, `heapsort`, `counting-sort`, `radix-sort`, `dynamic-array`, `singly-linked-list`, `doubly-linked-list`, `stack`, `queue`, `deque`, `priority-queue`, `bst`, `tree-traversals`, `avl-tree`, `order-statistic-tree`, `interval-tree`, `b-tree`, `segment-tree`, `z-algorithm`, `rabin-karp`, `lis`, `lcs`, `knapsack`, `coin-change`, `separate-chaining`, `open-addressing`, `graph`, `dfs`, `bellman-ford`, `floyd-warshall`, `boruvka-mst`, `a-star`, `tarjan-scc`, `kosaraju`, `bipartite-check`, `articulation-bridges`, `edmonds-karp`, `hungarian`, `red-black-tree`, `lca-binary-lifting`, `sparse-table`, `manacher`, `suffix-array`, `aho-corasick`, `matrix-chain`, `longest-palindromic-subsequence`, `partition-equal-subset`, `rod-cutting`, `tsp-bitmask`.

Batch 9 added shared goldens for five high-traffic interview topics: `bfs`, `merge-sort`, `edit-distance`, `dijkstra`, and `sliding-window-maximum`.

Regenerate this gap list: `node tools/list-golden-fixture-gaps.mjs`.
