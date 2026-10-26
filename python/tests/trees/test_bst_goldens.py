import json
from pathlib import Path

from dsa.trees.bst import BST

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "bst-goldens.json").read_text()
)


def test_bst_shared_goldens():
    for case in GOLDENS:
        tree = BST()
        for key, value in case["inserts"]:
            tree.insert(key, value)
        assert tree.in_order() == case["inOrderKeys"]
        assert tree.search(case["searchKey"]) == case["searchValue"]
