import json
from pathlib import Path

from dsa.searching.binary_search import search

REPO_ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((REPO_ROOT / "tools" / "binary-search-goldens.json").read_text())


def test_binary_search_shared_goldens():
    for case in GOLDENS:
        assert search(case["arr"], case["key"]) == case["expected"]
