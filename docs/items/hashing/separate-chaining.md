# Separate Chaining

Topic: **hashing** / `separate-chaining`

## Overview

Hash map with linked-list buckets and load-factor resize.


Resizes when load factor exceeds threshold (see implementation).

**Worked example:** [Topic index](../../worked-examples.md#separate-chaining) (summary) · run `npm run demo -- separate-chaining` in all three languages.

## Complexity

put/get/remove: Time O(1) average; resize O(n); Space O(n).

| | Time | Space |
|---|------|-------|
| Primary | Time O(1) | Space O(n) |

## Code links

| Language | Source |
|----------|--------|
| Java | [`HashTableChaining`](../../../java/src/main/java/com/dsa/examples/hashing/HashTableChaining.java) |
| Python | [`separate_chaining`](../../../python/dsa/hashing/separate_chaining.py) |
| JavaScript | [`separateChaining`](../../../javascript/src/hashing/separateChaining.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_separate_chaining`](../../../python/tests/hashing/test_separate_chaining.py) |
| JavaScript | [`separateChaining.test.js`](../../../javascript/test/hashing/separateChaining.test.js) |
| Java | [`HashingTest.java`](../../../java/src/test/java/com/dsa/examples/hashing/HashingTest.java) |

**Property-style checks:** Java [`PropertyHashingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertyHashingTest.java); Python [`test_property_hashing`](../../../python/tests/test_property_hashing.py); JavaScript [`property/hashing.test.js`](../../../javascript/test/property/hashing.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/hashing/`.
