# Treap

Topic: **trees** / `treap`

Randomized BST via heap priorities on keys.

**Complexity:** search/insert: Time O(log n); Space O(n).

**Worked example:** [Topic index](../../worked-examples.md#treap) (summary) · run `npm run demo -- treap` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`Treap`](../../../java/src/main/java/com/dsa/examples/trees/Treap.java) |
| Python | [`treap`](../../../python/dsa/trees/treap.py) |
| JavaScript | [`treap`](../../../javascript/src/trees/treap.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_treap`](../../../python/tests/trees/test_treap.py) |
| JavaScript | [`treap.test.js`](../../../javascript/test/trees/treap.test.js) |
| Java | [`TreapTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreapTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
