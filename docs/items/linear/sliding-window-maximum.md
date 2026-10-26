# Sliding Window Maximum

Topic: **linear** / `sliding-window-maximum`

## Overview

Maximum in each sliding window of size k.


Window size `k` must be **positive** and `k <= n`.

**Walkthrough:** [Worked examples — Sliding Window Maximum](../../worked-examples.md#sliding-window-maximum).

## Complexity

maxSlidingWindow: Time O(n); Space O(k).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n) | Space O(k) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`SlidingWindowMaximum`](../../../java/src/main/java/com/dsa/examples/linear/SlidingWindowMaximum.java) |
| Python | [`sliding_window_maximum`](../../../python/dsa/linear/sliding_window_maximum.py) |
| JavaScript | [`slidingWindowMaximum`](../../../javascript/src/linear/slidingWindowMaximum.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_sliding_window_maximum`](../../../python/tests/linear/test_sliding_window_maximum.py) |
| JavaScript | [`slidingWindowMaximum.test.js`](../../../javascript/test/linear/slidingWindowMaximum.test.js) |
| Java | [`SlidingWindowMaximumTest.java`](../../../java/src/test/java/com/dsa/examples/linear/SlidingWindowMaximumTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.
