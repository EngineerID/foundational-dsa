# Monotonic Stack

Topic: **linear** / `monotonic-stack`

## Overview

Next strictly greater element to the right for each index.

**Practice:** [Sliding window maximum (problem 20)](../../practice-problems.md#20-sliding-window-maximum) (related monotonic deque pattern) · run `npm run demo -- monotonic-stack` in all three languages.

## Complexity

nextGreaterElement: Time O(n); Space O(n).


## Code links

| Language | Source |
|----------|--------|
| Java | [`MonotonicStack`](../../../java/src/main/java/com/dsa/examples/linear/MonotonicStack.java) |
| Python | [`monotonic_stack`](../../../python/dsa/linear/monotonic_stack.py) |
| JavaScript | [`monotonicStack`](../../../javascript/src/linear/monotonicStack.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_monotonic_stack`](../../../python/tests/linear/test_monotonic_stack.py) |
| JavaScript | [`monotonicStack.test.js`](../../../javascript/test/linear/monotonicStack.test.js) |
| Java | [`MonotonicStackTest.java`](../../../java/src/test/java/com/dsa/examples/linear/MonotonicStackTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.
