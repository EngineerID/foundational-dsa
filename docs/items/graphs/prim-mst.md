# Prim Mst

Topic: **graphs** / `prim-mst`

Minimum spanning tree growing from a start vertex. mstWeight: Time O(E log V); Space O(V).

**Worked example:** [Topic index](../../worked-examples.md#prim-mst) (summary) · run `npm run demo -- prim-mst` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`PrimMST`](../../../java/src/main/java/com/dsa/examples/graphs/PrimMST.java) |
| Python | [`prim_mst`](../../../python/dsa/graphs/prim_mst.py) |
| JavaScript | [`primMst`](../../../javascript/src/graphs/primMst.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_prim_mst`](../../../python/tests/graphs/test_prim_mst.py) |
| JavaScript | [`primMst.test.js`](../../../javascript/test/graphs/primMst.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
