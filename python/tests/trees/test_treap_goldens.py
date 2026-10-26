import json
from pathlib import Path

from dsa.trees.treap import Treap

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "treap-goldens.json").read_text()
)


def test_treap_shared_goldens():
    for case in GOLDENS:
        t = Treap(seed=case["seed"])
        for key, value in case["inserts"]:
            t.insert(key, value)
        for row in case["searchResults"]:
            assert t.search(row["key"]) == row["value"]
