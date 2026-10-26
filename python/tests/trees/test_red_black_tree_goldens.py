import json
from pathlib import Path

from dsa.trees.red_black_tree import RedBlackTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "red-black-tree-goldens.json").read_text()
)


def test_red_black_tree_shared_goldens():
    for case in GOLDENS:
        tree = RedBlackTree()
        for key, value in case["inserts"]:
            tree.insert(key, value)
        for key, value in case["searches"]:
            assert tree.search(key) == value
        assert tree.search(case["searchMiss"]) is None
