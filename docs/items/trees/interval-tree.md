# Interval Tree

Topic: **trees** / `interval-tree`

Store intervals and query overlaps with a point or interval.

**Complexity:** insert/query: Time O(log n + k) reported; Space O(n).

**Worked example:** [Topic index](../../worked-examples.md#interval-tree) (summary) · run `npm run demo -- interval-tree` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`IntervalTree`](../../../java/src/main/java/com/dsa/examples/trees/IntervalTree.java) |
| Python | [`interval_tree`](../../../python/dsa/trees/interval_tree.py) |
| JavaScript | [`intervalTree`](../../../javascript/src/trees/intervalTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_interval_tree`](../../../python/tests/trees/test_interval_tree.py) |
| JavaScript | [`intervalTree.test.js`](../../../javascript/test/trees/intervalTree.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
