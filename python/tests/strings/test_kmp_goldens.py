import json
from pathlib import Path

from dsa.strings.kmp import search

REPO_ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((REPO_ROOT / "tools" / "kmp-goldens.json").read_text())


def test_kmp_shared_goldens():
    for case in GOLDENS:
        assert search(case["text"], case["pattern"]) == case["expected"]
