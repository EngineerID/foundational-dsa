# Contributing to foundational-dsa

Thank you for helping improve this trilingual DSA reference. The project keeps **76 topics** in sync across Java, Python, and JavaScript, with tests and docs for each.

## First-time contributor checklist

1. Fork or branch from **`main`**, then `bash .cursor/install.sh`.
2. Skim [README.md](README.md) **Start here** and pick a topic in [COVERAGE.md](COVERAGE.md).
3. Make a focused change (see [Good first issues](#good-first-issues) below).
4. Run **`npm test`** before you push — that is the default gate agents and reviewers expect.
5. Open a pull request using the [PR template](.github/pull_request_template.md); keep one logical change set per PR when you can.

## Verify your change

| Command | When to use |
|---------|-------------|
| `npm test` | Default: docs links + item-doc complexity + stubs + Java + Python + JS + parity + matrix |
| `npm run demo -- <id>` | Smoke one catalog topic in all languages (or add `python` / `java` / `js`) |
| `npm run test:ci` | Full GitHub Actions parity (lint, coverage, inventory, API doc checks) — see [docs/running-ci-locally.md](docs/running-ci-locally.md) |

Do not commit secrets, personal contact data, or credentials. Tests must not call live external services.

## Good first issues

| Kind of work | Where to look | Topic ids (examples) |
|--------------|---------------|----------------------|
| Docs only | [docs/items/](docs/items/), [docs/worked-examples.md](docs/worked-examples.md), [docs/interview-prep.md](docs/interview-prep.md) | Any catalog id |
| Walkthrough + tests | Catalog tests (`WorkedInterviewExamplesTest`, `test_worked_interview_examples.py`, `workedInterviewExamples.test.js`) | Match a section in worked-examples |
| Cross-language parity | Same behavior in `java/`, `python/dsa/`, `javascript/src/` | Topics marked in issues |
| Edge-case tests | [python/tests/catalog/](python/tests/catalog/), [javascript/test/catalog/](javascript/test/catalog/), Java `catalog` tests | `npm run check:edge-themes` |
| Tooling | [tools/](tools/) | Stub check, parity, matrix, demo runner |

When filing or choosing work, prefer issues labeled **`good first issue`**. Use the templates under [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/) for bugs, features, or scoped starter tasks.

## Adding or changing an algorithm

1. Implement in all three languages (match naming in [docs/API.md](docs/API.md)).
2. Add or extend tests beside existing patterns for that topic area.
3. Update the topic page under `docs/items/<area>/<id>.md` (or run `node tools/apply-item-doc-parity.mjs --id <id>` after editing `tools/doc-spec.mjs`).
4. Regenerate generated docs when needed: `npm run matrix`, `npm run inventory`, `npm run api:doc` (then run the matching `*:check` scripts).
5. Run `npm test` locally; use `npm run test:ci` before large doc or tooling changes.

**Complexity strings** live in `tools/doc-spec.mjs` and must match the **Complexity:** line on item pages (`npm run check:item-doc-complexity`).

## Pull requests

- Keep changes focused; one logical topic per PR when possible.
- Use clear commit messages (no personal email addresses in commits).
- Draft PRs may skip heavy CI until marked ready; mark ready when you want the full Java/Python/JS gate.
- Only maintainers merge to `main`.

## Code style

- **Java:** Maven module under `java/`, JUnit 5, package `com.dsa.examples`.
- **Python:** `python/dsa/`, pytest, `ruff` for lint/format (CI runs `npm run lint`).
- **JavaScript:** `javascript/src/`, Jest, ESLint flat config at repo root.

## Questions

Open a [GitHub Discussion](https://github.com/EngineerID/foundational-dsa/discussions) or an issue using the templates. For sponsorship, see the Sponsor section in [README.md](README.md).
