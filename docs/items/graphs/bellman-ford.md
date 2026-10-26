# Bellman Ford

Topic: **graphs** / `bellman-ford`

## Overview

Single-source shortest paths with negative edges; detect negative cycles.


Handles **negative** edge weights; detects reachable negative cycles.

**Worked example:** [Topic index](../../worked-examples.md#bellman-ford) (summary) · run `npm run demo -- bellman-ford` in all three languages.

## Complexity

shortestPaths: Time O(VE); Space O(V).
| | Time | Space |
|---|------|-------|
| Primary | Time O(VE) | Space O(V) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BellmanFord`](../../../java/src/main/java/com/dsa/examples/graphs/BellmanFord.java) |
| Python | [`bellman_ford`](../../../python/dsa/graphs/bellman_ford.py) |
| JavaScript | [`bellmanFord`](../../../javascript/src/graphs/bellmanFord.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bellman_ford`](../../../python/tests/graphs/test_bellman_ford.py) |
| JavaScript | [`bellmanFord.test.js`](../../../javascript/test/graphs/bellmanFord.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
