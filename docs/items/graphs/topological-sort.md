# Topological Sort

Topic: **graphs** / `topological-sort`

## Overview

Linear ordering of a DAG respecting all edges.


**DAG only** — Kahn returns an **empty** list when a cycle is present.

**Walkthrough:** [Worked examples — Topological Sort](../../worked-examples.md#topological-sort-kahn-course-schedule).

## Complexity

sort: Time O(V+E); Space O(V).


## Code links

| Language | Source |
|----------|--------|
| Java | [`TopologicalSort`](../../../java/src/main/java/com/dsa/examples/graphs/TopologicalSort.java) |
| Python | [`topological_sort`](../../../python/dsa/graphs/topological_sort.py) |
| JavaScript | [`topologicalSort`](../../../javascript/src/graphs/topologicalSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_topological_sort`](../../../python/tests/graphs/test_topological_sort.py) |
| JavaScript | [`topologicalSort.test.js`](../../../javascript/test/graphs/topologicalSort.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
