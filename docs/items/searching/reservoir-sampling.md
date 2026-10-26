# Reservoir Sampling

Topic: **searching** / `reservoir-sampling`

Uniform random sample of size k from a stream.

**Complexity:** sample: Time O(n); Space O(k).

**Worked example:** [Topic index](../../worked-examples.md#reservoir-sampling) (summary) · run `npm run demo -- reservoir-sampling` in all three languages.

## Implementations

| Language | Source |
|----------|--------|
| Java | [`ReservoirSampling`](../../../java/src/main/java/com/dsa/examples/searching/ReservoirSampling.java) |
| Python | [`reservoir_sampling`](../../../python/dsa/searching/reservoir_sampling.py) |
| JavaScript | [`reservoirSampling`](../../../javascript/src/searching/reservoirSampling.js) |

## Tests

| Language | Test |
|----------|------|
| Python | [`test_reservoir_sampling`](../../../python/tests/searching/test_reservoir_sampling.py) |
| JavaScript | [`reservoirSampling.test.js`](../../../javascript/test/searching/reservoirSampling.test.js) |
| Java | [`ReservoirSamplingTest.java`](../../../java/src/test/java/com/dsa/examples/searching/ReservoirSamplingTest.java) |

**Property-style checks:** Java [`PropertySearchingTest`](../../../java/src/test/java/com/dsa/examples/property/PropertySearchingTest.java); Python [`test_search_sort_hypothesis`](../../../python/tests/property/test_search_sort_hypothesis.py); JavaScript [`property/searchSort.property.test.js`](../../../javascript/test/property/searchSort.property.test.js).


Java unit tests also run via Maven under `java/src/test/java/com/dsa/examples/searching/`.
