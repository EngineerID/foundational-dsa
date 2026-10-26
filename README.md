# foundational-dsa

[![CI](https://github.com/EngineerID/foundational-dsa/actions/workflows/ci.yml/badge.svg)](https://github.com/EngineerID/foundational-dsa/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE)
[![Sponsor](https://img.shields.io/badge/Sponsor-EngineerID-ea4aaa?logo=github-sponsors&logoColor=white)](https://github.com/sponsors/EngineerID)

**foundational-dsa** is a trilingual reference library: **79 classic data structures and algorithms**, each with matching implementations in **Java**, **Python**, and **JavaScript** (237 implementations in total). Every topic ships with tests, a short doc page under [`docs/items/`](docs/items/), and entries in [`docs/API.md`](docs/API.md) so you can compare APIs and idioms across languages.

Use it to study implementations side by side, prepare for interviews, or teach DSA with runnable code rather than pseudocode. Step-by-step walkthroughs for core algorithms are in [`docs/worked-examples.md`](docs/worked-examples.md). Map common interview prompts to topic ids in [`docs/interview-prep.md`](docs/interview-prep.md).

**Maintainer:** [Ivan Damnjanovic](https://github.com/EngineerID)  
**License:** Apache License 2.0 ([LICENSE](LICENSE))

## Start here

| Step | Action |
|------|--------|
| 1 | Clone the repo and run `bash .cursor/install.sh` once (Node 20+, Python 3.10+, JDK 17+). |
| 2 | Run `npm test` from the root — docs link scan, complexity checks, then Java, Python, JavaScript, parity, and matrix. |
| 3 | Explore a topic: [COVERAGE.md](COVERAGE.md) lists all 79 ids; `npm run demo -- <id>` runs that topic’s tests in all three languages. |
| 4 | Interview study: [docs/interview-prep.md](docs/interview-prep.md) maps prompts to ids; [docs/worked-examples.md](docs/worked-examples.md) has step tables; [docs/practice-problems.md](docs/practice-problems.md) has 20 trilingual problems. |
| 5 | First PR: read [CONTRIBUTING.md](CONTRIBUTING.md) (scope, `npm test` vs `npm run test:ci`, issue templates). |
| 6 | Security reports: [SECURITY.md](SECURITY.md). |

**Complexity notation:** README and [docs/items/](docs/items/) use `O(n log n)` style; some doc-spec strings use `·` for multiply (e.g. `O(n·W)` for knapsack capacity). Meaning is the same across languages.

## Layout

```
foundational-dsa/
  java/            Canonical Java (Maven, JUnit 5, package com.dsa.examples)
  python/          Python ports (pytest, import package dsa)
  javascript/      JavaScript ports (Jest, src/ and test/)
  docs/            docs/API.md plus one README per topic under docs/items/
  tools/           Test runners, parity check, coverage matrix, demo
  reference/       Short study outlines (not the implementations)
  COVERAGE.md      Trilingual status table (regenerate with npm run matrix)
  package.json     Private root test runner (npm name: dsa-trilingual)
  Makefile         Same checks as the npm scripts
```

| Path | What it is |
|------|------------|
| [`java/`](java/) | Canonical Java reference. Maven artifact id `foundational-dsa`. |
| [`python/dsa/`](python/dsa/) | Python ports. The pytest project name in `python/pyproject.toml` is `dsa`. |
| [`javascript/src/`](javascript/src/) | JavaScript ports. `javascript/package.json` name is `dsa-javascript`. |
| [`docs/API.md`](docs/API.md) | Cross-language API: the operation name in each language. |
| [`docs/items/`](docs/items/) | One page per topic, with links to source and tests. |
| [`tools/`](tools/) | Scripts behind `npm test` and `make test`. |
| [`reference/cs-reference/`](reference/cs-reference/) | Computing-topics outline, merged from CS-Reference. |
| [`reference/math-reference/`](reference/math-reference/) | Math-topics outline, merged from Math-Reference. |
| [`COVERAGE.md`](COVERAGE.md) | Generated matrix. Do not edit by hand. |
| [`INVENTORY.md`](INVENTORY.md) | Topic index with source paths (`npm run inventory`). |

`reference/` is study notes only. The runnable code is under `java/`, `python/`, and `javascript/`.

Names differ by toolchain: the repo and the Java artifact are `foundational-dsa`, the root npm package is the private test runner `dsa-trilingual`, the Python project is `dsa`, and the JavaScript package is `dsa-javascript`. None of these packages are published to a registry.

## Prerequisites

- **Node.js** 20 or newer (CI uses 22)
- **Python** 3.10 or newer, with `pytest` (CI uses 3.12)
- **JDK** 17 or newer. Java tests use the Maven Wrapper at `java/mvnw`, so a global Maven install is optional

## Setup and tests

Install dependencies and compile the Java tests once:

```bash
bash .cursor/install.sh
```

That runs `npm ci`, `python3 -m pip install --user pytest`, and a Maven Wrapper test-compile. The toolchains above must already be on your machine.

Run the full check (stub scan, Java, Python, JavaScript, cross-language parity, and the coverage matrix):

```bash
npm test
```

The same sequence via Make:

```bash
make test
```

One language only:

```bash
npm run test:java
npm run test:py
npm run test:js
```

Make equivalents: `make test-java`, `make test-py`, `make test-js`.

Run one topic in all three languages, or in a single language (`java`, `python`, or `js`):

```bash
npm run demo -- dijkstra
npm run demo -- binary-search python
```

Topic ids are the first column of [COVERAGE.md](COVERAGE.md), such as `dijkstra`, `binary-search`, and `union-find`.

### What `npm test` runs

1. `npm run check:docs-links` — fails if a relative link or `#heading` anchor in docs is broken (and blocks forbidden private external URLs).
2. `npm run check:readme-index` — fails if README is missing a link to any catalog topic or practice problem.
3. `npm run check:complexity-cheatsheet` — fails if [docs/complexity-cheatsheet.md](docs/complexity-cheatsheet.md) is out of date with `doc-spec.mjs`.
4. `npm run check:item-doc-complexity` — fails if a `docs/items` **Complexity:** line diverges from `tools/doc-spec.mjs`.
5. `npm run check:golden-parity` and `npm run check:complexity-sanity` — shared golden fixtures and fast timing bounds.
6. `npm run check:stubs` — fails if a source or test file still contains a stub marker.
7. `npm run test:java` — `sh java/mvnw test` (JUnit 5).
8. `npm run test:py` — pytest on `python/`.
9. `npm run test:js` — Jest with `javascript/jest.config.js`.
10. `npm run check:parity` — same topics exposed in all three languages.
11. `npm run matrix:check` — [COVERAGE.md](COVERAGE.md) matches the tree.

After adding a topic, regenerate the matrix with `npm run matrix` (or `make matrix`). `npm run matrix:check` only verifies; it does not rewrite the file.

Continuous integration uses a [CI-minutes policy](docs/ci.md): push to `main` and pull requests (draft PRs skip heavy work until marked ready). See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) and [docs/running-ci-locally.md](docs/running-ci-locally.md).

## Topics (79)

| Area | Topics |
|------|--------|
| Searching | linear-search, binary-search, two-sum-ii, trapping-rain-water, quick-select, reservoir-sampling |
| Sorting | bubble-sort, selection-sort, insertion-sort, merge-sort, quick-sort, heapsort, counting-sort, radix-sort, merge-intervals |
| Strings | kmp, z-algorithm, rabin-karp, longest-substring-without-repeating, manacher, suffix-array, aho-corasick |
| Dynamic programming | lis, lcs, knapsack, edit-distance, coin-change, maximum-subarray, matrix-chain, longest-palindromic-subsequence, partition-equal-subset, rod-cutting, tsp-bitmask |
| Linear | dynamic-array, singly-linked-list, doubly-linked-list, stack, queue, deque, valid-parentheses, monotonic-stack, sliding-window-maximum, lru-cache |
| Heaps | binary-heap, priority-queue |
| Trees | bst, tree-traversals, avl-tree, order-statistic-tree, interval-tree, trie, b-tree, segment-tree, fenwick-tree, red-black-tree, lca-binary-lifting, treap, sparse-table |
| Hashing | separate-chaining, open-addressing, bloom-filter |
| Union-Find | union-find |
| Graphs | graph, bfs, dfs, topological-sort, dijkstra, bellman-ford, floyd-warshall, kruskal-mst, prim-mst, boruvka-mst, a-star, tarjan-scc, kosaraju, bipartite-check, articulation-bridges, edmonds-karp, hungarian |

## Complexity (primary operations)

Typical time and auxiliary space for the main entry point of each topic (see module docstrings and [docs/API.md](docs/API.md) for per-method detail and invariants). `n` is input size, `m` pattern length, `V`/`E` vertices/edges, `h` tree height, `k` range or hash width as applicable.

| Topic | Item | Time | Space |
|-------|------|------|-------|
| searching | linear-search | O(n) | O(1) |
| searching | binary-search | O(log n) | O(1) |
| searching | two-sum-ii | O(n) | O(1) |
| searching | trapping-rain-water | O(n) | O(1) |
| searching | quick-select | O(n) avg, O(n²) worst | O(1) |
| searching | reservoir-sampling | O(n) | O(k) |
| sorting | bubble-sort | O(n²) | O(1) |
| sorting | selection-sort | O(n²) | O(1) |
| sorting | insertion-sort | O(n²) worst, O(n) best | O(1) |
| sorting | merge-sort | O(n log n) | O(n) |
| sorting | quick-sort | O(n log n) avg | O(log n) |
| sorting | heapsort | O(n log n) | O(1) |
| sorting | counting-sort | O(n + k) | O(k) |
| sorting | radix-sort | O(d · n) | O(n) |
| sorting | merge-intervals | O(n log n) | O(n) |
| strings | kmp | O(n + m) | O(m) |
| linear | dynamic-array | O(1) amortized append/get | O(n) |
| linear | singly-linked-list | O(1) prepend / O(n) search | O(n) |
| linear | doubly-linked-list | O(1) at known node | O(n) |
| linear | stack | O(1) amortized | O(n) |
| linear | queue | O(1) amortized | O(n) |
| linear | deque | O(1) amortized | O(n) |
| linear | valid-parentheses | O(n) | O(n) |
| linear | monotonic-stack | O(n) | O(n) |
| linear | sliding-window-maximum | O(n) | O(k) |
| linear | lru-cache | O(1) get/put | O(capacity) |
| heaps | binary-heap | O(log n) insert/extract | O(n) |
| heaps | priority-queue | O(log n) | O(n) |
| trees | bst | O(h) | O(n) |
| trees | tree-traversals | O(n) | O(h) or O(w) |
| trees | avl-tree | O(log n) | O(n) |
| trees | order-statistic-tree | O(log n) | O(n) |
| trees | interval-tree | O(log n + k) reported | O(n) |
| trees | trie | O(L) key length | O(total chars) |
| trees | b-tree | O(log_t n) | O(n) |
| trees | red-black-tree | O(log n) | O(n) |
| trees | lca-binary-lifting | O(log n) query | O(n log n) |
| trees | treap | O(log n) expected | O(n) |
| trees | sparse-table | O(1) query | O(n log n) |
| hashing | separate-chaining | O(1) avg | O(n) |
| hashing | open-addressing | O(1) avg | O(n) slots |
| hashing | bloom-filter | O(k) | O(m) bits |
| unionfind | union-find | O(α(n)) amortized | O(n) |
| graphs | graph | O(1) amortized add edge | O(V + E) |
| graphs | bfs | O(V + E) | O(V) |
| graphs | dfs | O(V + E) | O(V) |
| graphs | topological-sort | O(V + E) | O(V) |
| graphs | dijkstra | O(E log V) | O(V) |
| graphs | bellman-ford | O(VE) | O(V) |
| graphs | floyd-warshall | O(V³) | O(V²) |
| graphs | kruskal-mst | O(E log E) | O(V) |
| graphs | prim-mst | O(E log V) | O(V) |
| graphs | boruvka-mst | O(E log V) | O(V) |
| graphs | a-star | O(E log V) | O(V) |
| graphs | tarjan-scc | O(V + E) | O(V) |
| graphs | kosaraju | O(V + E) | O(V) |
| graphs | bipartite-check | O(V + E) | O(V) |
| graphs | articulation-bridges | O(V + E) | O(V) |
| graphs | edmonds-karp | O(VE²) | O(V²) |
| graphs | hungarian | O(n³) | O(n²) |
| trees | segment-tree | O(log n) | O(n) |
| trees | fenwick-tree | O(log n) | O(n) |
| strings | z-algorithm | O(n + m) | O(n) |
| strings | rabin-karp | O(n + m) avg | O(1) |
| strings | manacher | O(n) | O(n) |
| strings | suffix-array | O(n log n) | O(n) |
| strings | aho-corasick | O(n + m + z) | O(m) |
| dp | lis | O(n log n) | O(n) |
| dp | lcs | O(nm) | O(min(n,m)) |
| dp | knapsack | O(n·W) | O(W) |
| dp | edit-distance | O(nm) | O(min(n,m)) |
| dp | coin-change | O(n·amount) | O(amount) |
| dp | matrix-chain | O(n³) | O(n²) |
| dp | longest-palindromic-subsequence | O(n²) | O(n²) |
| dp | partition-equal-subset | O(n·sum) | O(sum) |
| dp | rod-cutting | O(n·length) | O(length) |
| dp | tsp-bitmask | O(n²·2^n) | O(n·2^n) |

Local asymptotic comparisons (not CI gates): `npm run bench` and [docs/benchmarks.md](docs/benchmarks.md).

For step-by-step walkthroughs of binary search, merge sort, KMP, Dijkstra, union–find, and LRU cache, see [docs/worked-examples.md](docs/worked-examples.md).

To mirror the GitHub Actions job locally, see [docs/running-ci-locally.md](docs/running-ci-locally.md).

## Full algorithm index

Every catalog topic links to its doc page under [docs/items/](docs/items/). Practice problems are in [docs/practice-problems.md](docs/practice-problems.md). Pattern signals: [docs/pattern-recognition.md](docs/pattern-recognition.md).

### dp

- [coin-change](docs/items/dp/coin-change.md)
- [edit-distance](docs/items/dp/edit-distance.md)
- [knapsack](docs/items/dp/knapsack.md)
- [lcs](docs/items/dp/lcs.md)
- [lis](docs/items/dp/lis.md)
- [longest-palindromic-subsequence](docs/items/dp/longest-palindromic-subsequence.md)
- [matrix-chain](docs/items/dp/matrix-chain.md)
- [maximum-subarray](docs/items/dp/maximum-subarray.md)
- [partition-equal-subset](docs/items/dp/partition-equal-subset.md)
- [rod-cutting](docs/items/dp/rod-cutting.md)
- [tsp-bitmask](docs/items/dp/tsp-bitmask.md)

### graphs

- [a-star](docs/items/graphs/a-star.md)
- [articulation-bridges](docs/items/graphs/articulation-bridges.md)
- [bellman-ford](docs/items/graphs/bellman-ford.md)
- [bfs](docs/items/graphs/bfs.md)
- [bipartite-check](docs/items/graphs/bipartite-check.md)
- [boruvka-mst](docs/items/graphs/boruvka-mst.md)
- [dfs](docs/items/graphs/dfs.md)
- [dijkstra](docs/items/graphs/dijkstra.md)
- [edmonds-karp](docs/items/graphs/edmonds-karp.md)
- [floyd-warshall](docs/items/graphs/floyd-warshall.md)
- [graph](docs/items/graphs/graph.md)
- [hungarian](docs/items/graphs/hungarian.md)
- [kosaraju](docs/items/graphs/kosaraju.md)
- [kruskal-mst](docs/items/graphs/kruskal-mst.md)
- [prim-mst](docs/items/graphs/prim-mst.md)
- [tarjan-scc](docs/items/graphs/tarjan-scc.md)
- [topological-sort](docs/items/graphs/topological-sort.md)

### hashing

- [bloom-filter](docs/items/hashing/bloom-filter.md)
- [open-addressing](docs/items/hashing/open-addressing.md)
- [separate-chaining](docs/items/hashing/separate-chaining.md)

### heaps

- [binary-heap](docs/items/heaps/binary-heap.md)
- [priority-queue](docs/items/heaps/priority-queue.md)

### linear

- [deque](docs/items/linear/deque.md)
- [doubly-linked-list](docs/items/linear/doubly-linked-list.md)
- [dynamic-array](docs/items/linear/dynamic-array.md)
- [lru-cache](docs/items/linear/lru-cache.md)
- [monotonic-stack](docs/items/linear/monotonic-stack.md)
- [valid-parentheses](docs/items/linear/valid-parentheses.md)
- [queue](docs/items/linear/queue.md)
- [singly-linked-list](docs/items/linear/singly-linked-list.md)
- [sliding-window-maximum](docs/items/linear/sliding-window-maximum.md)
- [stack](docs/items/linear/stack.md)

### searching

- [binary-search](docs/items/searching/binary-search.md)
- [linear-search](docs/items/searching/linear-search.md)
- [trapping-rain-water](docs/items/searching/trapping-rain-water.md)
- [two-sum-ii](docs/items/searching/two-sum-ii.md)
- [quick-select](docs/items/searching/quick-select.md)
- [reservoir-sampling](docs/items/searching/reservoir-sampling.md)

### sorting

- [bubble-sort](docs/items/sorting/bubble-sort.md)
- [counting-sort](docs/items/sorting/counting-sort.md)
- [heapsort](docs/items/sorting/heapsort.md)
- [insertion-sort](docs/items/sorting/insertion-sort.md)
- [merge-intervals](docs/items/sorting/merge-intervals.md)
- [merge-sort](docs/items/sorting/merge-sort.md)
- [quick-sort](docs/items/sorting/quick-sort.md)
- [radix-sort](docs/items/sorting/radix-sort.md)
- [selection-sort](docs/items/sorting/selection-sort.md)

### strings

- [aho-corasick](docs/items/strings/aho-corasick.md)
- [kmp](docs/items/strings/kmp.md)
- [longest-substring-without-repeating](docs/items/strings/longest-substring-without-repeating.md)
- [manacher](docs/items/strings/manacher.md)
- [rabin-karp](docs/items/strings/rabin-karp.md)
- [suffix-array](docs/items/strings/suffix-array.md)
- [z-algorithm](docs/items/strings/z-algorithm.md)

### trees

- [avl-tree](docs/items/trees/avl-tree.md)
- [b-tree](docs/items/trees/b-tree.md)
- [bst](docs/items/trees/bst.md)
- [fenwick-tree](docs/items/trees/fenwick-tree.md)
- [interval-tree](docs/items/trees/interval-tree.md)
- [lca-binary-lifting](docs/items/trees/lca-binary-lifting.md)
- [order-statistic-tree](docs/items/trees/order-statistic-tree.md)
- [red-black-tree](docs/items/trees/red-black-tree.md)
- [segment-tree](docs/items/trees/segment-tree.md)
- [sparse-table](docs/items/trees/sparse-table.md)
- [treap](docs/items/trees/treap.md)
- [tree-traversals](docs/items/trees/tree-traversals.md)
- [trie](docs/items/trees/trie.md)

### unionfind

- [union-find](docs/items/unionfind/union-find.md)

### Practice problems

- [Two Sum II](docs/practice-problems.md#1-two-sum-ii)
- [Maximum subarray](docs/practice-problems.md#2-maximum-subarray)
- [Valid parentheses](docs/practice-problems.md#3-valid-parentheses)
- [Meeting rooms II](docs/practice-problems.md#4-meeting-rooms-ii)
- [Number of islands](docs/practice-problems.md#5-number-of-islands)
- [Top K frequent elements](docs/practice-problems.md#6-top-k-frequent-elements)
- [Course schedule](docs/practice-problems.md#7-course-schedule)
- [Longest substring without repeating](docs/practice-problems.md#8-longest-substring-without-repeating-characters)
- [Coin change](docs/practice-problems.md#9-coin-change)
- [LRU cache design](docs/practice-problems.md#10-lru-cache-design)
- [Merge intervals](docs/practice-problems.md#11-merge-intervals)
- [Binary tree level order traversal](docs/practice-problems.md#12-binary-tree-level-order-traversal)
- [Word search](docs/practice-problems.md#13-word-search)
- [Kth largest element](docs/practice-problems.md#14-kth-largest-element)
- [Minimum spanning tree (Kruskal)](docs/practice-problems.md#15-minimum-spanning-tree-kruskal)
- [Trapping rain water](docs/practice-problems.md#16-trapping-rain-water)
- [Edit distance](docs/practice-problems.md#17-edit-distance)
- [Serialize binary tree](docs/practice-problems.md#18-serialize-and-deserialize-binary-tree)
- [Network delay time](docs/practice-problems.md#19-network-delay-time)
- [Sliding window maximum](docs/practice-problems.md#20-sliding-window-maximum)

See also the generated [complexity cheat sheet](docs/complexity-cheatsheet.md) for all **79** catalog topics.

## Sponsor

If this reference helps your studies or team, consider [sponsoring on GitHub](https://github.com/sponsors/EngineerID). Sponsorship supports maintenance of the trilingual catalog, docs, and CI. You can also star the repo and open issues or pull requests — see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Apache License 2.0. See [LICENSE](LICENSE).
