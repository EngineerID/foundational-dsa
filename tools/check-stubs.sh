#!/usr/bin/env bash
set -euo pipefail
PATTERN='NotImplementedError|notImplemented|TODO: implement|JS pending|\bpending\b'
HITS=$(grep -rInE "$PATTERN" java/src python/dsa python/tests javascript/src javascript/test 2>/dev/null || true)
if [ -n "$HITS" ]; then
  echo "Stub markers found — implement or remove these before committing:"
  echo "$HITS"
  exit 1
fi
echo "No stub markers."
