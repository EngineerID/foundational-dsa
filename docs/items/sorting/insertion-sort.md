# Insertion Sort

Topic: **sorting** / `insertion-sort`

Sort an array in ascending order in place (efficient on nearly sorted input).

**Complexity:** sort: Time O(n²) worst, O(n) best; Space O(1).

**Worked example:** [Topic index](../../worked-examples.md#insertion-sort) (summary) · run `npm run demo -- insertion-sort` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`InsertionSort`](../../../java/src/main/java/com/dsa/examples/sorting/InsertionSort.java) |
| Python | [`insertion_sort`](../../../python/dsa/sorting/insertion_sort.py) |
| JavaScript | [`insertionSort`](../../../javascript/src/sorting/insertionSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_insertion_sort`](../../../python/tests/sorting/test_insertion_sort.py) |
| JavaScript | [`insertionSort.test.js`](../../../javascript/test/sorting/insertionSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.
