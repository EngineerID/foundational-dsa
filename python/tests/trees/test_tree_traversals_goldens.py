import json
from pathlib import Path

from dsa.trees.bst import BST
from dsa.trees.tree_traversals import (
    in_order_recursive,
    post_order_recursive,
    pre_order_recursive,
)

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "tree-traversals-goldens.json").read_text()
)


def test_tree_traversals_shared_goldens():
    for case in GOLDENS:
        tree = BST()
        for key, value in case["inserts"]:
            tree.insert(key, value)
        root = tree.get_root()
        assert in_order_recursive(root) == case["inOrder"]
        assert pre_order_recursive(root) == case["preOrder"]
        assert post_order_recursive(root) == case["postOrder"]
