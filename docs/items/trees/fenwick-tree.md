# Fenwick Tree

Topic: **trees** / `fenwick-tree`

Prefix sums and range sums with point updates.

**Complexity:** add/prefixSum/rangeSum: Time O(log n); Space O(n).

**Worked example:** [Topic index](../../worked-examples.md#fenwick-tree) (summary) · run `npm run demo -- fenwick-tree` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`FenwickTree`](../../../java/src/main/java/com/dsa/examples/trees/FenwickTree.java) |
| Python | [`fenwick_tree`](../../../python/dsa/trees/fenwick_tree.py) |
| JavaScript | [`fenwickTree`](../../../javascript/src/trees/fenwickTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_fenwick_tree`](../../../python/tests/trees/test_fenwick_tree.py) |
| JavaScript | [`fenwickTree.test.js`](../../../javascript/test/trees/fenwickTree.test.js) |
| Java | [`FenwickTreeTest.java`](../../../java/src/test/java/com/dsa/examples/trees/FenwickTreeTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
