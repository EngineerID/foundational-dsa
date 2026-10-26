# Serialize Binary Tree

Topic: **trees** / `serialize-binary-tree`

## Overview

Encode and decode a binary tree in heap-style level order.

**Practice:** [Serialize binary tree (problem 18)](../../practice-problems.md#18-serialize-and-deserialize-binary-tree) · run `npm run demo -- serialize-binary-tree` in all three languages.

## Complexity

serialize/deserialize: Time O(n); Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`SerializeBinaryTree`](../../../java/src/main/java/com/dsa/examples/trees/SerializeBinaryTree.java) |
| Python | [`serialize_binary_tree`](../../../python/dsa/trees/serialize_binary_tree.py) |
| JavaScript | [`serializeBinaryTree`](../../../javascript/src/trees/serializeBinaryTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_serialize_binary_tree`](../../../python/tests/trees/test_serialize_binary_tree.py) |
| JavaScript | [`serializeBinaryTree.test.js`](../../../javascript/test/trees/serializeBinaryTree.test.js) |
| Java | [`SerializeBinaryTreeTest.java`](../../../java/src/test/java/com/dsa/examples/trees/SerializeBinaryTreeTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
