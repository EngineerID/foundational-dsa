#!/usr/bin/env python3
"""Merge tools/golden-edge-append.json into *-goldens.json (idempotent)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS = ROOT / "tools"
APPEND_FILES = [TOOLS / "golden-edge-append.json", TOOLS / "golden-edge-manual.json"]


def case_key(case: dict) -> str:
    return json.dumps(case, sort_keys=True)


def merge(existing: list, extra: list) -> list:
    seen = {case_key(c) for c in existing}
    out = list(existing)
    for c in extra:
        k = case_key(c)
        if k not in seen:
            out.append(c)
            seen.add(k)
    return out


def main() -> None:
    append: dict[str, list] = {}
    for path in APPEND_FILES:
        if path.exists():
            append.update(json.loads(path.read_text()))
    changed = 0
    for name, extras in append.items():
        path = TOOLS / name
        if not path.exists():
            continue
        cases = json.loads(path.read_text())
        merged = merge(cases, extras)
        if merged != cases:
            path.write_text(json.dumps(merged, indent=2) + "\n")
            changed += 1
    print(f"Merged edge appends into {changed} files.")


if __name__ == "__main__":
    main()
