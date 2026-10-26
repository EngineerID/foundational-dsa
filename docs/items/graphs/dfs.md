# Dfs

Topic: **graphs** / `dfs`

Depth-first traversal, cycle detection, and connectivity.

**Complexity:** traverse/hasCycle: Time O(V+E); Space O(V).

**Worked example:** [Topic index](../../worked-examples.md#dfs) (summary) · run `npm run demo -- dfs` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`DFS`](../../../java/src/main/java/com/dsa/examples/graphs/DFS.java) |
| Python | [`dfs`](../../../python/dsa/graphs/dfs.py) |
| JavaScript | [`dfs`](../../../javascript/src/graphs/dfs.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_dfs`](../../../python/tests/graphs/test_dfs.py) |
| JavaScript | [`dfs.test.js`](../../../javascript/test/graphs/dfs.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
