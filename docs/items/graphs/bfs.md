# Bfs

Topic: **graphs** / `bfs`

## Overview

Breadth-first traversal and unweighted shortest paths.


Unweighted shortest-path distances; invalid source index raises.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Walkthrough:** [Worked examples — Bfs](../../worked-examples.md#bfs-unweighted-shortest-paths).

## Complexity

distances/traverse: Time O(V+E); Space O(V).

| | Time | Space |
|---|------|-------|
| Primary | Time O(V+E) | Space O(V) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BFS`](../../../java/src/main/java/com/dsa/examples/graphs/BFS.java) |
| Python | [`bfs`](../../../python/dsa/graphs/bfs.py) |
| JavaScript | [`bfs`](../../../javascript/src/graphs/bfs.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bfs`](../../../python/tests/graphs/test_bfs.py) |
| JavaScript | [`bfs.test.js`](../../../javascript/test/graphs/bfs.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
