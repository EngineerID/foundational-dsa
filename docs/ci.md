# Continuous integration

GitHub Actions workflows live under [`.github/workflows/`](../.github/workflows/). This repository follows an **EngineerID CI-minutes policy**: cheap jobs always run; **heavy** work runs only when changes warrant it and the pull request is not a draft.

## Workflows

| Workflow | File | Purpose |
|----------|------|---------|
| `ci` | [`ci.yml`](../.github/workflows/ci.yml) | Lint, tests, parity, coverage, matrix |
| `secret-scan` | [`secret-scan.yml`](../.github/workflows/secret-scan.yml) | gitleaks on `main` and pull requests |

## Triggers (`ci`)

- **Push** — only the default branch (`main`).
- **Pull request** — `opened`, `synchronize`, `reopened`, and `ready_for_review` (marking a draft ready re-runs heavy checks).

There is no `workflow_dispatch` on `ci`.

## Concurrency

Both workflows use a concurrency group per ref or pull request with **`cancel-in-progress: true`**, so newer commits supersede older runs.

## Jobs (`ci`)

### `changes` (always)

Uses [dorny/paths-filter](https://github.com/dorny/paths-filter) (SHA-pinned) with `pull-requests: read` to classify **heavy** paths (`java/`, `python/`, `javascript/`, `tools/`, lockfiles, CI config, and similar).

Outputs **`run_heavy`**:

| Situation | `run_heavy` |
|-----------|-------------|
| Push to `main` | `true` |
| Draft pull request | `false` (live status from the GitHub API via env `is_draft`, not only the event payload) |
| Ready PR, only docs/metadata changes | `false` |
| Ready PR, heavy paths touched | `true` |
| Ambiguous filter / large PR (>3000 files) | `true` (safe default) |

### `ci-policy` (always)

1. **actionlint** on workflow files.
2. [`scripts/ci-policy.mjs`](../scripts/ci-policy.mjs) — structural policy checks.
3. [`scripts/ci-policy.test.mjs`](../scripts/ci-policy.test.mjs) — regression tests for the policy script.

### `build-test` (required check name)

Depends on `changes`. When `run_heavy` is `false`, the job **still succeeds** after a short gate step; heavy steps are skipped. When `run_heavy` is `true`, it runs the full sequence documented in [running-ci-locally.md](running-ci-locally.md) (lint through `matrix:check`, plus coverage artifact upload).

Caches are enabled only where a manifest exists: `package-lock.json` (npm), `java/pom.xml` (Maven), `python/pyproject.toml` (pip).

## Dependabot

[`.github/dependabot.yml`](../.github/dependabot.yml) uses **grouped** weekly updates and a low **open-pull-requests-limit** (2 per ecosystem) to limit PR noise.

## Local parity

```bash
node scripts/ci-policy.mjs
node --test scripts/ci-policy.test.mjs
npm run test:ci    # full heavy sequence
```

See also [AGENTS.md](../AGENTS.md) and [`.cursor/rules/ci.mdc`](../.cursor/rules/ci.mdc).
