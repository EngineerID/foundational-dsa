# Boruvka Mst

Topic: **graphs** / `boruvka-mst`

## Overview

Minimum spanning tree via repeated cheapest outgoing edge per component.

**Worked example:** [Topic index](../../worked-examples.md#boruvka-mst) (summary) · run `npm run demo -- boruvka-mst` in all three languages.

## Complexity

mstWeight: Time O(E log V); Space O(V).


## Code links

| Language | Source |
|----------|--------|
| Java | [`BoruvkaMST`](../../../java/src/main/java/com/dsa/examples/graphs/BoruvkaMST.java) |
| Python | [`boruvka_mst`](../../../python/dsa/graphs/boruvka_mst.py) |
| JavaScript | [`boruvkaMst`](../../../javascript/src/graphs/boruvkaMst.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_boruvka_mst`](../../../python/tests/graphs/test_boruvka_mst.py) |
| JavaScript | [`boruvkaMst.test.js`](../../../javascript/test/graphs/boruvkaMst.test.js) |
| Java | [`GraphsTest.java`](../../../java/src/test/java/com/dsa/examples/graphs/GraphsTest.java) |

**Property-style checks:** Java [`PropertyGraphsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyGraphsTest.java); Python [`test_property_graphs`](../../../python/tests/test_property_graphs.py); JavaScript [`property/graphs.test.js`](../../../javascript/test/property/graphs.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/graphs/`.
