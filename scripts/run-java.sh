#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_DIR="$ROOT/build/java"
SEARCH_ROOT="$ROOT/Algorithms"

if ! command -v javac >/dev/null 2>&1; then
  echo "javac not found. Install JDK 11+ and add it to PATH." >&2
  exit 1
fi

mkdir -p "$BUILD_DIR"

mapfile -t JAVA_FILES < <(find "$SEARCH_ROOT" -name "*.java" | sort)

if [ "${#JAVA_FILES[@]}" -eq 0 ]; then
  echo "No Java files found under Algorithms/."
  exit 0
fi

echo "Compiling Java files..."
javac -d "$BUILD_DIR" "${JAVA_FILES[@]}"

MAIN_CLASSES=()
for file in "${JAVA_FILES[@]}"; do
  if grep -q 'public[[:space:]]\+static[[:space:]]\+void[[:space:]]\+main[[:space:]]*(' "$file"; then
    MAIN_CLASSES+=("$(basename "$file" .java)")
  fi
done

if [ "${#MAIN_CLASSES[@]}" -eq 0 ]; then
  echo "Compiled successfully. No classes with main() to run."
  exit 0
fi

FAILED=()
for class in $(printf '%s\n' "${MAIN_CLASSES[@]}" | sort -u); do
  echo ""
  echo "=== Running $class ==="
  if (cd "$BUILD_DIR" && java "$class"); then
    :
  else
    FAILED+=("$class")
  fi
done

if [ "${#FAILED[@]}" -gt 0 ]; then
  echo ""
  echo "Failed to run:"
  printf '  %s\n' "${FAILED[@]}"
  exit 1
fi

echo ""
echo "Java runner finished."
