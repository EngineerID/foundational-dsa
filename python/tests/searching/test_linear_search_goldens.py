import json
from pathlib import Path

from dsa.searching.linear_search import index_of

REPO_ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((REPO_ROOT / "tools" / "linear-search-goldens.json").read_text())


def test_linear_search_shared_goldens():
    for case in GOLDENS:
        assert index_of(case["arr"], case["target"]) == case["expected"]
