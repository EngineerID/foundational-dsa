# B Tree

Topic: **trees** / `b-tree`

## Overview

Disk-oriented multi-way search tree with bounded node fanout.

**Worked example:** [Topic index](../../worked-examples.md#b-tree) (summary) · run `npm run demo -- b-tree` in all three languages.

## Complexity

search/insert/delete: Time O(log_t n); Space O(n).

| | Time | Space |
|---|------|-------|
| Primary | Time O(log_t n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BTree`](../../../java/src/main/java/com/dsa/examples/trees/BTree.java) |
| Python | [`b_tree`](../../../python/dsa/trees/b_tree.py) |
| JavaScript | [`bTree`](../../../javascript/src/trees/bTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_b_tree`](../../../python/tests/trees/test_b_tree.py) |
| JavaScript | [`bTree.test.js`](../../../javascript/test/trees/bTree.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
