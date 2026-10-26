"""Load shared regression JSON from tools/*-goldens.json."""

from __future__ import annotations

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]


def load_golden_json(filename: str) -> list[dict]:
    path = REPO_ROOT / "tools" / filename
    return json.loads(path.read_text())
