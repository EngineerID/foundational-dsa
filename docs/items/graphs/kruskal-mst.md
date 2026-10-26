# Kruskal Mst

Topic: **graphs** / `kruskal-mst`

## Overview

Minimum spanning tree via sorted edges and union-find.

**Practice:** [MST Kruskal (problem 15)](../../practice-problems.md#15-minimum-spanning-tree-kruskal) · **Worked example:** [Topic index](../../worked-examples.md#kruskal-mst) (summary) · run `npm run demo -- kruskal-mst` in all three languages.

## Complexity

mstWeight: Time O(E log E); Space O(V).


## Code links

| Language | Source |
|----------|--------|
| Java | [`KruskalMST`](../../../java/src/main/java/com/dsa/examples/graphs/KruskalMST.java) |
| Python | [`kruskal_mst`](../../../python/dsa/graphs/kruskal_mst.py) |
| JavaScript | [`kruskalMst`](../../../javascript/src/graphs/kruskalMst.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_kruskal_mst`](../../../python/tests/graphs/test_kruskal_mst.py) |
| JavaScript | [`kruskalMst.test.js`](../../../javascript/test/graphs/kruskalMst.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
