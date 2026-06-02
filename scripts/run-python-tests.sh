#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PYTHON="${PYTHON:-python3}"

mapfile -t TEST_FILES < <(find "$ROOT/Algorithms" "$ROOT/Data-Structures" \
  \( -name "unit_test.py" -o -name "unit-test.py" \) 2>/dev/null | sort)

if [ "${#TEST_FILES[@]}" -eq 0 ]; then
  echo "No Python test files found." >&2
  exit 1
fi

FAILED=()

for file in "${TEST_FILES[@]}"; do
  dir="$(dirname "$file")"
  name="$(basename "$file")"
  echo ""
  echo "=== $name ($dir) ==="
  set +e
  (cd "$dir" && "$PYTHON" -m unittest "$name" -v)
  exit_code=$?
  set -e
  if [ "$exit_code" -eq 5 ]; then
    echo "No unittest cases; running as script..."
    if (cd "$dir" && "$PYTHON" "$name"); then
      :
    else
      FAILED+=("$file")
    fi
  elif [ "$exit_code" -ne 0 ]; then
    FAILED+=("$file")
  fi
done

if [ "${#FAILED[@]}" -gt 0 ]; then
  echo ""
  echo "Failed:"
  printf '  %s\n' "${FAILED[@]}"
  exit 1
fi

echo ""
echo "All Python tests passed."
