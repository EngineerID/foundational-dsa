# Agent notes

## Setup

Cloud Agents install dependencies with `bash .cursor/install.sh` (see `.cursor/environment.json`). The script is idempotent and safe to run again.

It expects the toolchains already on the image, at the versions pinned by `.github/workflows/ci.yml`:

- Node.js 22 (`actions/setup-node`, `node-version: '22'`). The README allows Node 20+. Jest accepts 18.14, 20, 22, or 24+.
- Python 3.12 (`actions/setup-python`). `python/pyproject.toml` requires `>=3.10`.
- JDK 17 or newer (`actions/setup-java` uses Temurin 17). `java/pom.xml` sets `maven.compiler.release` to 17. Maven Wrapper 3.9.9 is `java/mvnw`; a global Maven install is not required.

What the script installs:

- Root npm dependencies from `package-lock.json` (`npm ci`, Jest 30).
- Python test and lint packages unpinned, matching CI (`pytest`, `pytest-cov`, `hypothesis`, `ruff` via `python3 -m pip install --user`).
- Maven Wrapper download plus main/test compile (`sh java/mvnw -q -DskipTests test-compile`), so Java tests do not cold-start the wrapper.

There is no `start` command. This repo is a library: nothing needs to stay running.

Local setup is the same command from the repository root:

```bash
bash .cursor/install.sh
```

## Verify

**Default agent check:** `npm test` (also `make test`). That runs, in order:

- `npm run check:stubs`
- `npm run test:java` (JUnit 5 via Maven Wrapper)
- `npm run test:py` (`python3 -m pytest`)
- `npm run test:js` (Jest)
- `npm run check:parity`
- `npm run matrix:check`

**Full GitHub Actions parity** (lint, coverage report, matrix regeneration) is documented in [`docs/running-ci-locally.md`](docs/running-ci-locally.md). CI additionally runs `npm run lint`, `PYTEST_COV=1 npm run test:py`, `node tools/coverage-report.mjs`, and `npm run matrix` before `matrix:check`.

Per language:

```bash
npm run test:java
npm run test:py
npm run test:js
```

Lint:

```bash
npm run lint
```

One algorithm in the languages that implement it:

```bash
npm run demo -- binary-search
```

## Layout

- `java/` — Maven + JUnit 5 (`com.dsa.examples`)
- `python/` — pytest package `dsa`
- `javascript/` — Jest sources in `src/`, tests in `test/`
- `tools/` — stub check, parity check, coverage matrix, demo runner, edge-case theme checker (`tools/edge-case-coverage.mjs`)
- `docs/` — per-item notes, `docs/API.md`, and `docs/running-ci-locally.md`
- `reference/` — imported CS and math reference trees
- `COVERAGE.md` — generated trilingual status (`npm run matrix` rewrites it; `npm run matrix:check` only checks)

**Edge-case catalog tests** (shared themes across topics) live at:

- `python/tests/catalog/test_edge_case_themes.py`
- `javascript/test/catalog/edgeCaseThemes.test.js`
- `java/src/test/java/com/dsa/examples/catalog/EdgeCaseThemesTest.java`

Module-level complexity and invariants are centralized in `tools/doc-spec.mjs` and mirrored in source docstrings.

## Secrets

None. Install, tests, and CI do not read credentials. No secret names are required.
