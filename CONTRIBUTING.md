# Contributing to foundational-dsa

Thank you for helping improve this trilingual DSA reference. The project keeps **72 topics** in sync across Java, Python, and JavaScript, with tests and docs for each.

## Before you start

1. Read [README.md](README.md) and [AGENTS.md](AGENTS.md) for setup and verification.
2. Pick a topic from [COVERAGE.md](COVERAGE.md) or [INVENTORY.md](INVENTORY.md), or open an issue to discuss a new idea.
3. Run `bash .cursor/install.sh` once, then `npm test` from the repository root before opening a pull request.

## Good first issues

These are strong entry points when you are new to the repo:

| Kind of work | Where to look | Topic ids (examples) |
|--------------|---------------|----------------------|
| Docs only | [docs/items/](docs/items/), [docs/worked-examples.md](docs/worked-examples.md), [docs/interview-prep.md](docs/interview-prep.md) | Any catalog id |
| Cross-language parity | Same behavior in `java/`, `python/dsa/`, `javascript/src/` | Topics marked in issues |
| Edge-case tests | [python/tests/catalog/](python/tests/catalog/), [javascript/test/catalog/](javascript/test/catalog/), Java `catalog` tests | See `npm run check:edge-themes` |
| Tooling | [tools/](tools/) | Stub check, parity, matrix, demo runner |

When filing or choosing work, prefer issues labeled **`good first issue`** (maintainers add this label for scoped, well-defined tasks). If you want a maintainer to triage your idea, use the issue templates under [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/).

## Adding or changing an algorithm

1. Implement in all three languages (match naming in [docs/API.md](docs/API.md)).
2. Add or extend tests beside existing patterns for that topic area.
3. Add or update the topic page under `docs/items/<area>/<id>.md`.
4. Regenerate generated docs when needed: `npm run matrix`, `npm run inventory`, `npm run api:doc` (then run the matching `*:check` scripts).
5. Run `npm test` locally; for full CI parity use `npm run test:ci` (see [docs/running-ci-locally.md](docs/running-ci-locally.md)).

Do not commit secrets, personal contact data, or credentials. Tests must not call live external services.

## Pull requests

- Keep changes focused; one logical topic per PR when possible.
- Use clear commit messages (no personal email addresses in commits).
- Draft PRs may skip heavy CI until marked ready; mark ready when you want the full Java/Python/JS gate.
- Only maintainers merge to `main`.

## Code style

- **Java:** Maven module under `java/`, JUnit 5, package `com.dsa.examples`.
- **Python:** `python/dsa/`, pytest, `ruff` for lint/format (CI runs `npm run lint`).
- **JavaScript:** `javascript/src/`, Jest, ESLint flat config at repo root.

Complexity and invariants for catalog items live in `tools/doc-spec.mjs` and module docstrings.

## Questions

Open a [GitHub Discussion](https://github.com/EngineerID/foundational-dsa/discussions) or an issue using the templates. For sponsorship or visibility questions, see the Sponsor section in [README.md](README.md).
