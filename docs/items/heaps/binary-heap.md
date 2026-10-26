# Binary Heap

Topic: **heaps** / `binary-heap`

## Overview

Array-based binary heap (min or max) with heapify operations.


**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.

**Worked example:** [Topic index](../../worked-examples.md#binary-heap) (summary) · run `npm run demo -- binary-heap` in all three languages.

## Complexity

insert/extract/peek: Time O(log n); buildHeap O(n); Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`BinaryHeap`](../../../java/src/main/java/com/dsa/examples/heaps/BinaryHeap.java) |
| Python | [`binary_heap`](../../../python/dsa/heaps/binary_heap.py) |
| JavaScript | [`binaryHeap`](../../../javascript/src/heaps/binaryHeap.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_binary_heap`](../../../python/tests/heaps/test_binary_heap.py) |
| JavaScript | [`binaryHeap.test.js`](../../../javascript/test/heaps/binaryHeap.test.js) |
| Java | [`HeapTest.java`](../../../java/src/test/java/com/dsa/examples/heaps/HeapTest.java) |

**Property-style checks:** Java [`PropertyHeapsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHeapsTest.java); Python [`test_property_heaps`](../../../python/tests/test_property_heaps.py); JavaScript [`property/heaps.test.js`](../../../javascript/test/property/heaps.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/heaps/`.
