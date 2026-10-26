# Top K Frequent Elements

Topic: **heaps** / `top-k-frequent-elements`

## Overview

K most frequent integers (by count, then value).

**Walkthrough:** [Worked examples — Top K Frequent Elements](../../worked-examples.md#top-k-frequent-elements).

## Complexity

topKFrequent: Time O(n log k); Space O(n).

| | Time | Space |
|---|------|-------|
| Primary | Time O(n log k) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`TopKFrequentElements`](../../../java/src/main/java/com/dsa/examples/heaps/TopKFrequentElements.java) |
| Python | [`top_k_frequent_elements`](../../../python/dsa/heaps/top_k_frequent_elements.py) |
| JavaScript | [`topKFrequentElements`](../../../javascript/src/heaps/topKFrequentElements.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_top_k_frequent_elements`](../../../python/tests/heaps/test_top_k_frequent_elements.py) |
| JavaScript | [`topKFrequentElements.test.js`](../../../javascript/test/heaps/topKFrequentElements.test.js) |
| Java | [`TopKFrequentElementsTest.java`](../../../java/src/test/java/com/dsa/examples/heaps/TopKFrequentElementsTest.java) |

**Property-style checks:** Java [`PropertyHeapsTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHeapsTest.java); Python [`test_property_heaps`](../../../python/tests/test_property_heaps.py); JavaScript [`property/heaps.test.js`](../../../javascript/test/property/heaps.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/heaps/`.
