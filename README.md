# foundational-dsa

[![License](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE)

Reference implementations of **41 data structures and algorithms**, each written in **Java, Python, and JavaScript** (123 implementations). Every topic has tests and a short doc that links to the three sources.

**Maintainer:** Ivan Damnjanovic
**License:** Apache License 2.0 ([LICENSE](LICENSE))

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

`reference/` is study notes only. The runnable code is under `java/`, `python/`, and `javascript/`.

Names differ by toolchain: the repo and the Java artifact are `foundational-dsa`, the root npm package is the private test runner `dsa-trilingual`, the Python project is `dsa`, and the JavaScript package is `dsa-javascript`. None of these packages are published.

## Prerequisites

- **Node.js** 20 or newer (CI uses 22)
- **Python** 3.10 or newer, with `pytest` (CI uses 3.12)
- **JDK** 17 or newer. Java tests use the Maven Wrapper at `java/mvnw`, so a global Maven install is optional

## Setup and tests

Install dependencies and compile the Java tests once:

```bash
bash .cursor/install.sh
```

That runs `npm ci`, `python3 -m pip install --user pytest`, and a Maven Wrapper test-compile. Toolchains above must already be installed.

Run the full check (stub scan, Java, Python, JavaScript, cross-language parity, and the coverage matrix):

```bash
npm test
```

The same sequence via Make:

```bash
make test
```

One language:

```bash
npm run test:java
npm run test:py
npm run test:js
```

Make equivalents: `make test-java`, `make test-py`, `make test-js`.

One topic, in all three languages or in one of `java`, `python`, or `js`:

```bash
npm run demo -- dijkstra
npm run demo -- binary-search python
```

Topic ids are the first column of [COVERAGE.md](COVERAGE.md), such as `dijkstra`, `binary-search`, and `union-find`.

### What `npm test` runs

1. `npm run check:stubs` fails if a source or test file still contains a stub marker.
2. `npm run test:java` runs `sh java/mvnw test` (JUnit 5).
3. `npm run test:py` runs pytest on `python/`.
4. `npm run test:js` runs Jest with `javascript/jest.config.js`.
5. `npm run check:parity` checks that the three languages expose the same topics.
6. `npm run matrix:check` checks that [COVERAGE.md](COVERAGE.md) matches the tree.

After adding a topic, regenerate the matrix with `npm run matrix` (or `make matrix`). `npm run matrix:check` does not rewrite the file.

## Topics (41)

| Area | Topics |
|------|--------|
| Searching | linear-search, binary-search, quick-select |
| Sorting | bubble-sort, selection-sort, insertion-sort, merge-sort, quick-sort, heapsort, counting-sort, radix-sort |
| Strings | kmp |
| Linear | dynamic-array, singly-linked-list, doubly-linked-list, stack, queue, deque |
| Heaps | binary-heap, priority-queue |
| Trees | bst, tree-traversals, avl-tree, order-statistic-tree, interval-tree, trie, b-tree |
| Hashing | separate-chaining, open-addressing, bloom-filter |
| Union-Find | union-find |
| Graphs | graph, bfs, dfs, topological-sort, dijkstra, bellman-ford, floyd-warshall, kruskal-mst, prim-mst, boruvka-mst |

Complexity and invariants are in each implementation's module comment and in [docs/API.md](docs/API.md).

## License

Apache License 2.0. See [LICENSE](LICENSE).
