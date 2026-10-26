import json
from pathlib import Path

from dsa.trees.avl_tree import AVLTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "avl-tree-goldens.json").read_text()
)


def test_avl_tree_shared_goldens():
    for case in GOLDENS:
        tree = AVLTree()
        for key, value in case["inserts"]:
            tree.insert(key, value)
        assert tree.in_order() == case["inOrderKeys"]
        assert tree.search(case["searchKey"]) == case["searchValue"]
