# How to practice with foundational-dsa

This repo ships **87 trilingual practice problems** ([practice-problems.md](practice-problems.md)) that wrap the same algorithms as the catalog under `practice/`. Use this guide to study efficiently and to verify your understanding with tests.

## Recommended loop

1. **Pick a topic** from [COVERAGE.md](../COVERAGE.md) or the [README topic tables](../README.md#topics-87).
2. **Read the problem** in [practice-problems.md](practice-problems.md) — **Statement**, **Edge cases** (shared golden JSON), **Complexity** (time/space from `tools/doc-spec.mjs`), **Implementation** paths, and the linked **Walkthrough** in [worked-examples.md](worked-examples.md).
3. **Run the catalog demo** to see the reference API: `npm run demo -- <topic-id>` (all three languages by default).
4. **Open the practice source** for your language (paths are listed under **Implementation** in the practice doc).
5. **Compare with goldens**: shared JSON under `tools/*-goldens.json` is exercised by catalog-style practice tests — `practiceGoldens.test.js` / `test_practice_goldens.py` / `PracticeSharedGoldensTest` for catalog-topic problems, plus `practiceInterviewGoldens*` for the 19 interview-style prompts (same JSON, practice APIs; `check:practice-interview-golden-trilingual`).
6. **Edge themes**: `practiceEdgeThemes*` runs empty / single / duplicate / large batteries on practice wrappers (parallel to catalog `edgeCaseThemes`).
7. **Optional write mode** (reimplement yourself):
   - Java: `cd java && sh mvnw -q -Dtest=PracticeProblemsTest,PracticeSharedGoldensTest test`
   - Python: `python3 -m pytest python/tests/practice -q`
   - JavaScript: `npx jest --config javascript/jest.config.js test/practice`

## Property checks (practice vs brute force)

All **87** practice catalog topics have seeded property tests that compare each practice wrapper to a small-`n` brute-force reference (**25 trials**, seed **42**):

| Language | Test entrypoints |
|----------|------------------|
| JavaScript | `practiceProperty.test.js`, `practicePropertyPhase2.test.js` |
| Python | `test_practice_property.py`, `test_practice_property_phase2.py` |
| Java | `PracticePropertyTest`, `PracticePropertyPhase2Test` |

Brute-force helpers live beside those tests (`practiceBruteforce*.js`, `practice_bruteforce*.py`, `PracticeBruteforce*.java`).

CI runs these via `npm test` (`check:practice-property-coverage` ensures every topic id in `tools/practice-property-topics.mjs` appears in all three languages).

## Interview mapping

Use [pattern-recognition.md](pattern-recognition.md) and [interview-prep.md](interview-prep.md) to connect LeetCode-style prompts to catalog ids, then jump to the matching practice section by topic.

## Full verification

From the repository root:

```bash
npm test
```

That includes `check:practice-problem-complexity`, interview golden trilingual coverage, edge golden counts, property tests, and the full Java / Python / JavaScript suites.
