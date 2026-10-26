# Sparse Table

Topic: **trees** / `sparse-table`

Static range minimum queries on an array.

**Complexity:** query: Time O(1); Space O(n log n).

**Worked example:** [Topic index](../../worked-examples.md#sparse-table) (summary) · run `npm run demo -- sparse-table` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`SparseTable`](../../../java/src/main/java/com/dsa/examples/trees/SparseTable.java) |
| Python | [`sparse_table`](../../../python/dsa/trees/sparse_table.py) |
| JavaScript | [`sparseTable`](../../../javascript/src/trees/sparseTable.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_sparse_table`](../../../python/tests/trees/test_sparse_table.py) |
| JavaScript | [`sparseTable.test.js`](../../../javascript/test/trees/sparseTable.test.js) |
| Java | [`SparseTableTest.java`](../../../java/src/test/java/com/dsa/examples/trees/SparseTableTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
