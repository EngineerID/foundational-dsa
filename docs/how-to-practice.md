# How to practice with foundational-dsa

This repo ships **87 trilingual practice problems** ([practice-problems.md](practice-problems.md)) that wrap the same algorithms as the catalog under `practice/`. Use this guide to study efficiently and to verify your understanding with tests.

## Recommended loop

1. **Pick a topic** from [COVERAGE.md](../COVERAGE.md) or the [README topic tables](../README.md#topics-87).
2. **Read the problem** in [practice-problems.md](practice-problems.md) — **Statement**, **Edge cases** (shared golden JSON), **Implementation** paths, and the linked **Walkthrough** in [worked-examples.md](worked-examples.md) (includes **Complexity**).
3. **Run the catalog demo** to see the reference API: `npm run demo -- <topic-id>` (all three languages by default).
4. **Open the practice source** for your language (paths are listed under **Implementation** in the practice doc).
5. **Compare with goldens**: shared JSON under `tools/*-goldens.json` is exercised by `PracticeSharedGoldensTest` / `test_practice_goldens.py` / `practiceGoldens.test.js`.
6. **Optional write mode**: reimplement the practice function yourself, then run language tests:
   - Java: `cd java && sh mvnw -q -Dtest=PracticeProblemsTest,PracticeSharedGoldensTest test`
   - Python: `python3 -m pytest python/tests/practice -q`
   - JavaScript: `npx jest --config javascript/jest.config.js test/practice`

## Property checks (practice vs brute force)

For **sorting**, **searching**, **graphs**, and **dynamic programming** topics, seeded property tests compare each practice wrapper to a small-`n` brute-force reference (**25 trials**, seed **42**):

| Language | Test entrypoint |
|----------|-----------------|
| JavaScript | `javascript/test/practice/practiceProperty.test.js` |
| Python | `python/tests/practice/test_practice_property.py` |
| Java | `PracticePropertyTest` |

CI runs these via `npm test` (`check:practice-property-coverage` ensures every listed topic appears in all three files).

Topic ids in scope: see `tools/practice-property-topics.mjs` (`PRACTICE_PROPERTY_SORTING`, `_SEARCHING`, `_GRAPHS`, `_DP`).

## Interview mapping

Use [pattern-recognition.md](pattern-recognition.md) and [interview-prep.md](interview-prep.md) to connect LeetCode-style prompts to catalog ids, then jump to the matching practice section by topic.

## Full verification

From the repository root:

```bash
npm test
```

That includes practice golden parity, edge-case golden counts, walkthrough/complexity doc checks, and the full Java / Python / JavaScript suites.
