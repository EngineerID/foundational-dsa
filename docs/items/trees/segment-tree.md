# Segment Tree

Topic: **trees** / `segment-tree`

## Overview

Range aggregate queries with point updates on an array.

**Worked example:** [Topic index](../../worked-examples.md#segment-tree) (summary) · run `npm run demo -- segment-tree` in all three languages.

## Complexity

update/rangeSum: Time O(log n); Space O(n).

| | Time | Space |
|---|------|-------|
| Primary | Time O(log n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`SegmentTree`](../../../java/src/main/java/com/dsa/examples/trees/SegmentTree.java) |
| Python | [`segment_tree`](../../../python/dsa/trees/segment_tree.py) |
| JavaScript | [`segmentTree`](../../../javascript/src/trees/segmentTree.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_segment_tree`](../../../python/tests/trees/test_segment_tree.py) |
| JavaScript | [`segmentTree.test.js`](../../../javascript/test/trees/segmentTree.test.js) |
| Java | [`SegmentTreeTest.java`](../../../java/src/test/java/com/dsa/examples/trees/SegmentTreeTest.java) |

**Property-style checks:** Java [`PropertyTreesTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyTreesTest.java); Python [`test_property_trees`](../../../python/tests/test_property_trees.py); JavaScript [`property/trees.test.js`](../../../javascript/test/property/trees.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/trees/`.
