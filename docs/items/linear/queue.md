# Queue

Topic: **linear** / `queue`

FIFO queue backed by circular buffer. enqueue/dequeue: Time O(1) amortized; Space O(n).

**Worked example:** [Topic index](../../worked-examples.md#queue) (summary) · run `npm run demo -- queue` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`Queue`](../../../java/src/main/java/com/dsa/examples/linear/Queue.java) |
| Python | [`queue`](../../../python/dsa/linear/queue.py) |
| JavaScript | [`queue`](../../../javascript/src/linear/queue.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_queue`](../../../python/tests/linear/test_queue.py) |
| JavaScript | [`queue.test.js`](../../../javascript/test/linear/queue.test.js) |
| Java | [`LinearStructuresTest.java`](../../../java/src/test/java/com/dsa/examples/linear/LinearStructuresTest.java) |

**Property-style checks:** Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/linear/`.
