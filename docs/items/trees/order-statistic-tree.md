# Order Statistic Tree

Topic: **trees** / `order-statistic-tree`

## Overview

BST augmented with subtree sizes for rank and select.

**Worked example:** [Topic index](../../worked-examples.md#order-statistic-tree) (summary) · run `npm run demo -- order-statistic-tree` in all three languages.

## Complexity

rank/select/insert/delete: Time O(log n); Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(log n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`OrderStatisticTree`](../../../java/src/main/java/com/dsa/examples/trees/OrderStatisticTree.java) |
| Python | [`order_statistic_tree`](../../../python/dsa/trees/order_statistic_tree.py) |
| JavaScript | [`orderStatisticTree`](../../../javascript/src/trees/orderStatisticTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_order_statistic_tree`](../../../python/tests/trees/test_order_statistic_tree.py) |
| JavaScript | [`orderStatisticTree.test.js`](../../../javascript/test/trees/orderStatisticTree.test.js) |
| Java | [`TreesTest.java`](../../../java/src/test/java/com/dsa/examples/trees/TreesTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
