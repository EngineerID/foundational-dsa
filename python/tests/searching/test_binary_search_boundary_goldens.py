import json
from pathlib import Path

from dsa.searching.binary_search import first_occurrence, last_occurrence

REPO_ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((REPO_ROOT / "tools" / "binary-search-boundary-goldens.json").read_text())


def test_binary_search_boundary_shared_goldens():
    for case in GOLDENS:
        arr = case["arr"]
        key = case["key"]
        assert first_occurrence(arr, key) == case["first"]
        assert last_occurrence(arr, key) == case["last"]
