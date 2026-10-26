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

- `npm run check:docs-links`
- `npm run check:item-doc-headings`
- `npm run check:item-doc-complexity`
- `npm run check:golden-parity`, `check:golden-fixtures-doc`, `check:catalog-golden-coverage`, `check:shared-golden-themes`
- `npm run check:stubs`
- `npm run test:java` (JUnit 5 via Maven Wrapper; default **2m per-test** timeout in `java/pom.xml` / `junit-platform.properties` so hangs fail with the test name)
- `npm run test:py` (`python3 -m pytest`)
- `npm run test:js` (Jest)
- `npm run check:parity`
- `npm run matrix:check`

**Full GitHub Actions parity** (lint, coverage, edge-theme scan, matrix regeneration):

```bash
npm run test:ci
```

Same via `make test-ci`. Step-by-step table: [`docs/running-ci-locally.md`](docs/running-ci-locally.md).

Additional checks:

```bash
npm run lint
npm run check:edge-themes
npm run check:ci-policy
npm run check:practice-walkthrough
npm run check:practice-catalog-topics
```

`check:practice-walkthrough` ensures every problem in `docs/practice-problems.md` links to a `worked-examples.md` walkthrough (or is listed in `tools/practice-walkthrough-data.mjs` `PRACTICE_WALKTHROUGH_EXEMPT`). `check:practice-catalog-topics` validates `catalogTopic` metadata and the expanding `PRACTICE_TOPIC_TARGET` list in the same data module.

Optional local timing (not a CI gate): `npm run bench` (see `tools/micro-bench.mjs`).

Per language:

```bash
npm run test:java
npm run test:py
npm run test:js
```

One algorithm in the languages that implement it:

```bash
npm run demo -- binary-search
```

Worked walkthroughs: [`docs/worked-examples.md`](docs/worked-examples.md).

## Layout

- `java/` — Maven + JUnit 5 (`com.dsa.examples`)
- `python/` — pytest package `dsa`
- `javascript/` — Jest sources in `src/`, tests in `test/`
- `tools/` — stub check, parity check, coverage matrix, demo runner, edge-case theme checker (`tools/edge-case-coverage.mjs`, `npm run check:edge-themes`)
- `docs/` — per-item notes, `docs/API.md`, `docs/worked-examples.md`, and `docs/running-ci-locally.md`
- `reference/` — imported CS and math reference trees
- `COVERAGE.md` — generated trilingual status (`npm run matrix` rewrites it; `npm run matrix:check` only checks)
- `INVENTORY.md` — generated topic index with source paths (`npm run inventory`; `inventory:check` in `test:ci`)

**Edge-case catalog tests** (shared themes across topics) live at:

- `python/tests/catalog/test_edge_case_themes.py`
- `javascript/test/catalog/edgeCaseThemes.test.js`
- `java/src/test/java/com/dsa/examples/catalog/EdgeCaseThemesTest.java`

**Shared regression JSON** (trilingual tests): `tools/kmp-goldens.json`, `tools/binary-search-goldens.json`, `tools/binary-search-boundary-goldens.json` (first/last occurrence). Java `*GoldensTest` classes load these via `GoldenJson` / `GoldenIntArrays` under `java/.../support/` (no regex parsing).

**Graph unreachable sentinel:** `GRAPH_UNREACHABLE` (`536870911`) in `tools/graph-sentinel.mjs` / `doc-spec.mjs`; `npm run check:graph-sentinel`. Unweighted **BFS** goldens use **`-1`** for unreachable, not this sentinel.

**Catalog edge themes** (cross-item): `python/tests/catalog/`, `javascript/test/catalog/`, `java/.../catalog/`; `npm run check:catalog-items` verifies all 41 topic ids are referenced.

Module-level complexity and invariants are centralized in `tools/doc-spec.mjs` and mirrored in source docstrings.

## CI

GitHub Actions workflow [`ci`](.github/workflows/ci.yml) uses an EngineerID **CI-minutes policy**:

- Push triggers only on `main`; pull requests use `opened`, `synchronize`, `reopened`, and `ready_for_review`.
- Jobs: **`changes`** (paths-filter + draft gate → `run_heavy`), **`ci-policy`** (actionlint + `scripts/ci-policy.mjs`), **`build-test`** (required check; heavy steps gated by `RUN_HEAVY`).
- Draft PRs and docs-only diffs skip heavy work but **`build-test` still succeeds**.

Policy docs: [`docs/ci.md`](docs/ci.md). Cursor rule: [`.cursor/rules/ci.mdc`](.cursor/rules/ci.mdc).

Validate workflow policy locally:

```bash
node scripts/ci-policy.mjs
node --test scripts/ci-policy.test.mjs
```

Full CI parity: `npm run test:ci` (see [`docs/running-ci-locally.md`](docs/running-ci-locally.md)).

## Secrets

None. Install, tests, and CI do not read credentials. No secret names are required.
