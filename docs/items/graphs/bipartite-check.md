# Bipartite Check

Topic: **graphs** / `bipartite-check`

Test whether an undirected graph is 2-colorable.

**Complexity:** isBipartite: Time O(V+E); Space O(V).

**Worked example:** [Topic index](../../worked-examples.md#bipartite-check) (summary) · run `npm run demo -- bipartite-check` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`BipartiteCheck`](../../../java/src/main/java/com/dsa/examples/graphs/BipartiteCheck.java) |
| Python | [`bipartite_check`](../../../python/dsa/graphs/bipartite_check.py) |
| JavaScript | [`bipartiteCheck`](../../../javascript/src/graphs/bipartiteCheck.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bipartite_check`](../../../python/tests/graphs/test_bipartite_check.py) |
| JavaScript | [`bipartiteCheck.test.js`](../../../javascript/test/graphs/bipartiteCheck.test.js) |
| Java | [`BipartiteCheckTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/BipartiteCheckTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
