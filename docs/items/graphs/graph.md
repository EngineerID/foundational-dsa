# Graph

Topic: **graphs** / `graph`

Adjacency-list directed/undirected weighted graph representation.

**Complexity:** addEdge/neighbors: Time O(1) amortized; Space O(V+E).

Vertex ids are `0 .. n-1`. Invalid vertex indices raise when querying neighbors.

**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** [Topic index](../../worked-examples.md#graph) (summary) · run `npm run demo -- graph` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`Graph`](../../../java/src/main/java/com/dsa/examples/graphs/Graph.java) |
| Python | [`graph`](../../../python/dsa/graphs/graph.py) |
| JavaScript | [`graph`](../../../javascript/src/graphs/graph.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_graph`](../../../python/tests/graphs/test_graph.py) |
| JavaScript | [`graph.test.js`](../../../javascript/test/graphs/graph.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
