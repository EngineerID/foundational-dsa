# Running CI locally

GitHub Actions runs [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) on **push to `main`** and on pull requests (`opened`, `synchronize`, `reopened`, `ready_for_review`). Draft PRs and non-impacting changes skip heavy steps but the required **`build-test`** job still passes. See [CI policy](ci.md). The [`secret-scan` workflow](../.github/workflows/secret-scan.yml) scans for leaked secrets on `main` and on pull requests.

## Prerequisites

Same as the root [README](../README.md): Node.js 20+ (CI uses 22), Python 3.10+ (CI uses 3.12), JDK 17+. Bootstrap once:

```bash
bash .cursor/install.sh
```

For a full CI-equivalent Python environment (property tests, coverage, lint), also install:

```bash
python3 -m pip install --user pytest pytest-cov hypothesis ruff
```

## CI policy (`ci-policy` job)

| Step | Local command |
|------|----------------|
| Workflow lint | Install [actionlint](https://github.com/rhysd/actionlint) and run `actionlint -color` |
| Policy script | `node scripts/ci-policy.mjs` |
| Policy tests | `node --test scripts/ci-policy.test.mjs` |

## Main CI job (`build-test`)

When `run_heavy` is true, run these from the repository root in order:

| Step | Local command |
|------|----------------|
| Install Node deps | `npm ci` |
| Install Python test/lint deps | `pip install pytest pytest-cov hypothesis ruff` |
| Lint | `npm run lint` |
| Stub scan | `npm run check:stubs` |
| Java tests | `npm run test:java` |
| Python tests (with coverage in CI) | `PYTEST_COV=1 npm run test:py` |
| JavaScript tests | `npm run test:js` |
| Cross-language parity | `npm run check:parity` |
| Edge-case theme scan | `npm run check:edge-themes` |
| Line-coverage report | `node tools/coverage-report.mjs` |
| Regenerate matrix | `npm run matrix` |
| Upload artifact | *(CI only)* writes `coverage/` and uploads `line-coverage-report` |
| Strict matrix check | `npm run matrix:check` |

One-shot equivalent (matches CI except artifact upload):

```bash
npm run test:ci
```

Or via Make:

```bash
make test-ci
```

The default `npm test` / `make test` sequence matches CI except it does **not** run `npm run lint`, `node tools/coverage-report.mjs`, or `npm run matrix` (only `matrix:check`).

## Secret scan (`gitleaks`)

CI installs [gitleaks](https://github.com/gitleaks/gitleaks) 8.30.1 and runs:

```bash
gitleaks detect --source . --redact --exit-code 1
```

Install gitleaks locally if you want to mirror that job before pushing.

## Environment variables

| Variable | When | Effect |
|----------|------|--------|
| `CI=true` | Set in CI | Standard flag for tooling; tests do not require it locally |
| `PYTEST_COV=1` | CI Python step | Enables pytest coverage collection (see `tools/run-py-test.mjs`) |

## Makefile shortcuts

```bash
make test          # stubs + java + py + js + parity + matrix:check
make test-java
make test-py
make test-js
make matrix-check
make check-edge-themes
make bench
```
