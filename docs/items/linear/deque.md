# Deque

Topic: **linear** / `deque`

## Overview

Double-ended queue with O(1) push/pop at both ends.

**Worked example:** [Topic index](../../worked-examples.md#deque) (summary) · run `npm run demo -- deque` in all three languages.

## Complexity

pushFront/pushBack/pop: Time O(1) amortized; Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(1) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`Deque`](../../../java/src/main/java/com/dsa/examples/linear/Deque.java) |
| Python | [`deque`](../../../python/dsa/linear/deque.py) |
| JavaScript | [`deque`](../../../javascript/src/linear/deque.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_deque`](../../../python/tests/linear/test_deque.py) |
| JavaScript | [`deque.test.js`](../../../javascript/test/linear/deque.test.js) |
| Java | [`LinearStructuresTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LinearStructuresTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.
