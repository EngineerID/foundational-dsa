# Heapsort

Topic: **sorting** / `heapsort`

## Overview

Sort an array in ascending order in place using a binary max-heap.

**Worked example:** [Topic index](../../worked-examples.md#heapsort) (summary) · run `npm run demo -- heapsort` in all three languages.

## Complexity

sort: Time O(n log n); Space O(1).
| | Time | Space |
|---|------|-------|
| Primary | Time O(n log n) | Space O(1) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`HeapSort`](../../../java/src/main/java/com/dsa/examples/sorting/HeapSort.java) |
| Python | [`heap_sort`](../../../python/dsa/sorting/heap_sort.py) |
| JavaScript | [`heapSort`](../../../javascript/src/sorting/heapSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_heap_sort`](../../../python/tests/sorting/test_heap_sort.py) |
| JavaScript | [`heapSort.test.js`](../../../javascript/test/sorting/heapSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.
