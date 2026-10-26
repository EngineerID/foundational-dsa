import json
from pathlib import Path

from dsa.trees.b_tree import BTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "b-tree-goldens.json").read_text()
)


def test_b_tree_shared_goldens():
    for case in GOLDENS:
        if case.get("expectError"):
            with pytest.raises(ValueError):
                BTree(case["t"])
            continue
        tree = BTree(case["t"])
        for key in case["inserts"]:
            tree.insert(key)
        for spec in case["searches"]:
            assert tree.search(spec["key"]) == spec["found"]
