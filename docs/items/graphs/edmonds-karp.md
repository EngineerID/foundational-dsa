# Edmonds Karp

Topic: **graphs** / `edmonds-karp`

Maximum s-t flow in a capacitated network.

**Complexity:** maxFlow: Time O(VE²); Space O(V²).

**Worked example:** [Topic index](../../worked-examples.md#edmonds-karp) (summary) · run `npm run demo -- edmonds-karp` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`EdmondsKarp`](../../../java/src/main/java/com/dsa/examples/graphs/EdmondsKarp.java) |
| Python | [`edmonds_karp`](../../../python/dsa/graphs/edmonds_karp.py) |
| JavaScript | [`edmondsKarp`](../../../javascript/src/graphs/edmondsKarp.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_edmonds_karp`](../../../python/tests/graphs/test_edmonds_karp.py) |
| JavaScript | [`edmondsKarp.test.js`](../../../javascript/test/graphs/edmondsKarp.test.js) |
| Java | [`EdmondsKarpTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/EdmondsKarpTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
