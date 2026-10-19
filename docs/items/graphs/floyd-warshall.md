# Floyd Warshall

Topic: **graphs** / `floyd-warshall`

All-pairs shortest paths via dynamic programming. allPairs: Time O(V³); Space O(V²).

All-pairs shortest paths; accepts negative edges when no negative cycles.

**Worked example:** [Topic index](../../worked-examples.md#floyd-warshall) (summary) · run `npm run demo -- floyd-warshall` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`FloydWarshall`](../../../java/src/main/java/com/dsa/examples/graphs/FloydWarshall.java) |
| Python | [`floyd_warshall`](../../../python/dsa/graphs/floyd_warshall.py) |
| JavaScript | [`floydWarshall`](../../../javascript/src/graphs/floydWarshall.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_floyd_warshall`](../../../python/tests/graphs/test_floyd_warshall.py) |
| JavaScript | [`floydWarshall.test.js`](../../../javascript/test/graphs/floydWarshall.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
