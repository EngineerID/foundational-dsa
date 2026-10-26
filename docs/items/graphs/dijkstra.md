# Dijkstra

Topic: **graphs** / `dijkstra`

Single-source shortest paths on non-negative edge weights.

**Complexity:** shortestPaths: Time O(E log V); Space O(V).

Edge weights must be **non-negative**; uses a min-heap / priority queue.

**Walkthrough:** [Worked examples — Dijkstra](../../worked-examples.md#dijkstra-non-negative-weights).

## Implementations

| Language | Source |
|----------|--------|
| Java | [`Dijkstra`](../../../java/src/main/java/com/dsa/examples/graphs/Dijkstra.java) |
| Python | [`dijkstra`](../../../python/dsa/graphs/dijkstra.py) |
| JavaScript | [`dijkstra`](../../../javascript/src/graphs/dijkstra.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_dijkstra`](../../../python/tests/graphs/test_dijkstra.py) |
| JavaScript | [`dijkstra.test.js`](../../../javascript/test/graphs/dijkstra.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
