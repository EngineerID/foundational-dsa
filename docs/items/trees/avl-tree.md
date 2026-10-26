# Avl Tree

Topic: **trees** / `avl-tree`

## Overview

Self-balancing BST with height-balance after insert/delete.

**Worked example:** [Topic index](../../worked-examples.md#avl-tree) (summary) · run `npm run demo -- avl-tree` in all three languages.

## Complexity

search/insert/delete: Time O(log n); Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(log n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`AVLTree`](../../../java/src/main/java/com/dsa/examples/trees/AVLTree.java) |
| Python | [`avl_tree`](../../../python/dsa/trees/avl_tree.py) |
| JavaScript | [`avlTree`](../../../javascript/src/trees/avlTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_avl_tree`](../../../python/tests/trees/test_avl_tree.py) |
| JavaScript | [`avlTree.test.js`](../../../javascript/test/trees/avlTree.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
