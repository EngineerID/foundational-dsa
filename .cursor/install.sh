#!/usr/bin/env bash
# Idempotent bootstrap for foundational-dsa.
# Toolchains follow .github/workflows/ci.yml and the repo pins:
#   Node.js 22 (README allows 20+; Jest accepts 18.14, 20, 22, or >=24)
#   Python >=3.10 (CI installs 3.12)
#   JDK >=17 (CI installs Temurin 17; java/pom.xml sets maven.compiler.release to 17)
# pytest is unpinned, matching CI's `pip install pytest`.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 22 is required (CI pins node-version: '22')." >&2
  exit 1
fi

node -e 'const major = Number(process.versions.node.split(".")[0]); if (!(major === 20 || major === 22 || major >= 24)) { console.error(`Node.js 20, 22, or >=24 is required (found ${process.version}; CI pins 22).`); process.exit(1); }'

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3.10+ is required (CI pins python-version: '3.12')." >&2
  exit 1
fi

python3 - <<'PY'
import sys
if sys.version_info < (3, 10):
    raise SystemExit(
        f"Python 3.10+ is required (found {sys.version.split()[0]}; CI pins 3.12)."
    )
PY

if ! command -v java >/dev/null 2>&1; then
  echo "JDK 17+ is required (CI pins Temurin 17)." >&2
  exit 1
fi

java_version="$(java -version 2>&1 | sed -n 's/.* version "\([0-9][0-9]*\).*/\1/p' | head -1)"
if [ -z "${java_version}" ] || [ "${java_version}" -lt 17 ]; then
  echo "JDK 17+ is required (found major '${java_version:-unknown}'; CI pins Temurin 17)." >&2
  exit 1
fi

npm ci

# User site-packages so this does not need root and can be repeated safely.
# `python3 -m pytest` imports from the user site; the pytest script need not be on PATH.
python3 -m pip install --user --disable-pip-version-check --no-warn-script-location \
  pytest pytest-cov hypothesis ruff

# Cache Maven Wrapper 3.9.9 and test dependencies without running the suite.
# The wrapper resolves the project from its own directory; invoke it there,
# the same way tools/run-java-test.mjs does.
( cd java && sh mvnw -q -DskipTests test-compile )
