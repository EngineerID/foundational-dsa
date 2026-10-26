# Bloom Filter

Topic: **hashing** / `bloom-filter`

## Overview

Probabilistic set membership with false positives possible.


**No false negatives**; false positives possible. Membership is probabilistic.

**Worked example:** [Topic index](../../worked-examples.md#bloom-filter) (summary) · run `npm run demo -- bloom-filter` in all three languages.

## Complexity

add/mightContain: Time O(k); Space O(m) bits.
| | Time | Space |
|---|------|-------|
| Primary | Time O(k) | Space O(m) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`BloomFilter`](../../../java/src/main/java/com/dsa/examples/hashing/BloomFilter.java) |
| Python | [`bloom_filter`](../../../python/dsa/hashing/bloom_filter.py) |
| JavaScript | [`bloomFilter`](../../../javascript/src/hashing/bloomFilter.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_bloom_filter`](../../../python/tests/hashing/test_bloom_filter.py) |
| JavaScript | [`bloomFilter.test.js`](../../../javascript/test/hashing/bloomFilter.test.js) |
| Java | [`HashingTest.java`](../../../java/src/test/java/com/dsa/examples/hashing/HashingTest.java) |

**Property-style checks:** Java [`PropertyHashingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHashingTest.java); Python [`test_property_hashing`](../../../python/tests/test_property_hashing.py); JavaScript [`property/hashing.test.js`](../../../javascript/test/property/hashing.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/hashing/`.
