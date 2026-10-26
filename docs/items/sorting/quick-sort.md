# Quick Sort

Topic: **sorting** / `quick-sort`

Sort in place via Lomuto partition, optional random pivot, or 3-way partition.

**Complexity:** sort/sort3Way: Time O(n log n) average; Space O(log n).

Sorts **in place**; optional randomized pivot and 3-way partition variants.

**Worked example:** [Topic index](../../worked-examples.md#quick-sort) (summary) · run `npm run demo -- quick-sort` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`QuickSort`](../../../java/src/main/java/com/dsa/examples/sorting/QuickSort.java) |
| Python | [`quick_sort`](../../../python/dsa/sorting/quick_sort.py) |
| JavaScript | [`quickSort`](../../../javascript/src/sorting/quickSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_quick_sort`](../../../python/tests/sorting/test_quick_sort.py) |
| JavaScript | [`quickSort.test.js`](../../../javascript/test/sorting/quickSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.
