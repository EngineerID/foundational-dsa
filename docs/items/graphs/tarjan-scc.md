# Tarjan Scc

Topic: **graphs** / `tarjan-scc`

Strongly connected components in a directed graph.

**Complexity:** stronglyConnectedComponents: Time O(V+E); Space O(V).

**Worked example:** [Topic index](../../worked-examples.md#tarjan-scc) (summary) · run `npm run demo -- tarjan-scc` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`TarjanSCC`](../../../java/src/main/java/com/dsa/examples/graphs/TarjanSCC.java) |
| Python | [`tarjan_scc`](../../../python/dsa/graphs/tarjan_scc.py) |
| JavaScript | [`tarjanScc`](../../../javascript/src/graphs/tarjanScc.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_tarjan_scc`](../../../python/tests/graphs/test_tarjan_scc.py) |
| JavaScript | [`tarjanScc.test.js`](../../../javascript/test/graphs/tarjanScc.test.js) |
| Java | [`TarjanSCCTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/TarjanSCCTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
