# Kosaraju

Topic: **graphs** / `kosaraju`

## Overview

Strongly connected components via two-pass DFS.

**Worked example:** [Topic index](../../worked-examples.md#kosaraju) (summary) · run `npm run demo -- kosaraju` in all three languages.

## Complexity

stronglyConnectedComponents: Time O(V+E); Space O(V).


## Code links

| Language | Source |
|----------|--------|
| Java | [`Kosaraju`](../../../java/src/main/java/com/dsa/examples/graphs/Kosaraju.java) |
| Python | [`kosaraju`](../../../python/dsa/graphs/kosaraju.py) |
| JavaScript | [`kosaraju`](../../../javascript/src/graphs/kosaraju.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_kosaraju`](../../../python/tests/graphs/test_kosaraju.py) |
| JavaScript | [`kosaraju.test.js`](../../../javascript/test/graphs/kosaraju.test.js) |
| Java | [`KosarajuTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/KosarajuTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
