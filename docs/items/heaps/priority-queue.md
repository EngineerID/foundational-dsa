# Priority Queue

Topic: **heaps** / `priority-queue`

## Overview

Min-priority queue for scheduling by priority.

**Worked example:** [Topic index](../../worked-examples.md#priority-queue) (summary) · run `npm run demo -- priority-queue` in all three languages.

## Complexity

insert/extractMin/peek: Time O(log n); Space O(n).
| | Time | Space |
|---|------|-------|
| Primary | Time O(log n) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`PriorityQueue`](../../../java/src/main/java/com/dsa/examples/heaps/PriorityQueue.java) |
| Python | [`priority_queue`](../../../python/dsa/heaps/priority_queue.py) |
| JavaScript | [`priorityQueue`](../../../javascript/src/heaps/priorityQueue.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_priority_queue`](../../../python/tests/heaps/test_priority_queue.py) |
| JavaScript | [`priorityQueue.test.js`](../../../javascript/test/heaps/priorityQueue.test.js) |
| Java | [`HeapTest.java`](../../../java/src/test/java/com/dsa/examples/heaps/HeapTest.java) |

**Property-style checks:** Java [`PropertyHeapsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHeapsTest.java); Python [`test_property_heaps`](../../../python/tests/test_property_heaps.py); JavaScript [`property/heaps.test.js`](../../../javascript/test/property/heaps.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/heaps/`.
