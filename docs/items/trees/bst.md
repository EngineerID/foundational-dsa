# Bst

Topic: **trees** / `bst`

## Overview

Binary search tree for ordered key storage.


Duplicate keys typically follow left-or-right policy defined in the implementation.

**Walkthrough:** [Worked examples — Bst](../../worked-examples.md#bst-search-and-in-order-walk).

## Complexity

search/insert/delete: Time O(h) height; Space O(n).

| | Time | Space |
|---|------|-------|
| Primary | Time O(h) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BST`](../../../java/src/main/java/com/dsa/examples/trees/BST.java) |
| Python | [`bst`](../../../python/dsa/trees/bst.py) |
| JavaScript | [`bst`](../../../javascript/src/trees/bst.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bst`](../../../python/tests/trees/test_bst.py) |
| JavaScript | [`bst.test.js`](../../../javascript/test/trees/bst.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
