# Merge Intervals

Topic: **sorting** / `merge-intervals`

## Overview

Merge overlapping closed intervals after sorting by start.

**Practice:** [Merge intervals (problem 11)](../../practice-problems.md#11-merge-intervals) · run `npm run demo -- merge-intervals` in all three languages.

## Complexity

mergeIntervals: Time O(n log n); Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`MergeIntervals`](../../../java/src/main/java/com/dsa/examples/sorting/MergeIntervals.java) |
| Python | [`merge_intervals`](../../../python/dsa/sorting/merge_intervals.py) |
| JavaScript | [`mergeIntervals`](../../../javascript/src/sorting/mergeIntervals.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_merge_intervals`](../../../python/tests/sorting/test_merge_intervals.py) |
| JavaScript | [`mergeIntervals.test.js`](../../../javascript/test/sorting/mergeIntervals.test.js) |
| Java | [`MergeIntervalsTest.java`](../../../java/src/test/java/com/dsa/examples/sorting/MergeIntervalsTest.java) |

**Property-style checks:** Java [`PropertySortsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySortsTest.java); Python [`test_property_sorts`](../../../python/tests/test_property_sorts.py); JavaScript [`property/sorts.test.js`](../../../javascript/test/property/sorts.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/sorting/`.
