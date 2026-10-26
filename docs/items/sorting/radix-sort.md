# Radix Sort

Topic: **sorting** / `radix-sort`

## Overview

LSD radix sort for non-negative integers using counting sort per digit.


**Non-negative integers**; behavior follows digit passes (see implementation).

**Worked example:** [Topic index](../../worked-examples.md#radix-sort) (summary) · run `npm run demo -- radix-sort` in all three languages.

## Complexity

sort: Time O(d * n); Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`RadixSort`](../../../java/src/main/java/com/dsa/examples/sorting/RadixSort.java) |
| Python | [`radix_sort`](../../../python/dsa/sorting/radix_sort.py) |
| JavaScript | [`radixSort`](../../../javascript/src/sorting/radixSort.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_radix_sort`](../../../python/tests/sorting/test_radix_sort.py) |
| JavaScript | [`radixSort.test.js`](../../../javascript/test/sorting/radixSort.test.js) |
| Java | [`SortingTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/SortingTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.
