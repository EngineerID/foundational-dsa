# Security policy

## Supported versions

Security fixes apply to the **`main`** branch of [foundational-dsa](https://github.com/EngineerID/foundational-dsa). Release cadence follows maintainer merges; there are no published package artifacts.

## Reporting a vulnerability

**Do not** open a public issue for exploitable security problems.

1. Use [GitHub private vulnerability reporting](https://github.com/EngineerID/foundational-dsa/security/advisories/new) for this repository, or
2. Open a minimal **private** contact path via the maintainer profile linked from [README.md](README.md) (no secrets in the issue body).

Include steps to reproduce, impact, and suggested fix if you have one.

## Scope

This project is an **offline reference library** (Java, Python, JavaScript). CI and tests must not depend on live external services or credentials. Reports about theoretical complexity or incorrect algorithm output are welcome via normal [issues](https://github.com/EngineerID/foundational-dsa/issues) unless they expose a broader security concern.
