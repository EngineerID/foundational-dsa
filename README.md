# foundational-dsa

[![License](https://img.shields.io/github/license/EngineerID/foundational-dsa)](./LICENSE)

Personal practice repo for **41 data structures and algorithms** (**123** implementations: 41 × Java, Python, and JavaScript).

**Maintainer:** Ivan Damnjanovic

## Repository map

```
foundational-dsa/
  java/           Maven + JUnit 5 (com.dsa.examples)
  python/         pytest (dsa package)
  javascript/     Jest (src/ + test/)
  tools/          stub check, coverage matrix, demo runner
  docs/           per-item READMEs, canonical API
  COVERAGE.md     generated trilingual status (npm run matrix)
```

| Area | Purpose |
|------|---------|
| [`java/`](java/) | Canonical Java reference (41 topics) |
| [`docs/API.md`](docs/API.md) | Cross-language canonical API |
| [`python/dsa/`](python/dsa/) | Python ports |
| [`javascript/src/`](javascript/src/) | JavaScript ports |
| [`docs/items/`](docs/items/) | Per-algorithm README with source links |

**Coverage:** [COVERAGE.md](COVERAGE.md) (run `npm run matrix` to regenerate)

**Interview extras** (out of scope here): [foundational-dsa-problems](https://github.com/EngineerID/foundational-dsa-problems)

## Prerequisites

- **Node.js** 20+ (root test runner)
- **Python** 3.10+ with `pytest`
- **JDK** 17+ (Maven Wrapper in `java/` — no global Maven required)

## Quick start

```bash
npm ci
pip install pytest
npm test
```

Per language:

```bash
npm run test:java
npm run test:py
npm run test:js
```

Run one algorithm's tests in all three languages:

```bash
npm run demo -- dijkstra
npm run demo -- binary-search python
```

## Topics (41)

| Package | Items |
|---------|-------|
| Searching | linear-search, binary-search, quick-select |
| Sorting | bubble, selection, insertion, merge, quick, heapsort, counting-sort, radix-sort |
| Strings | kmp |
| Linear | dynamic-array, singly/doubly-linked-list, stack, queue, deque |
| Heaps | binary-heap, priority-queue |
| Trees | bst, tree-traversals, avl-tree, order-statistic-tree, interval-tree, trie, b-tree |
| Hashing | separate-chaining, open-addressing, bloom-filter |
| Union-Find | union-find |
| Graphs | graph, bfs, dfs, topological-sort, dijkstra, bellman-ford, floyd-warshall, kruskal/prim/boruvka-mst |

Complexity and invariants are documented in each implementation’s module doc block and in [docs/API.md](docs/API.md).

## License

Apache License 2.0 — see [LICENSE](LICENSE).
