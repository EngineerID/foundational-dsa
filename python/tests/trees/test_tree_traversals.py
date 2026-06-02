from dsa.trees.bst import BST
from dsa.trees import tree_traversals as tt


def test_recursive_traversals():
    bst = BST[int, str]()
    bst.insert(4, "")
    bst.insert(2, "")
    bst.insert(6, "")
    root = bst.get_root()
    assert tt.in_order_recursive(root) == [2, 4, 6]
    assert tt.pre_order_recursive(root) == [4, 2, 6]
    assert tt.post_order_recursive(root) == [2, 6, 4]


def test_iterative_and_level_order():
    bst = BST[int, str]()
    bst.insert(4, "")
    bst.insert(2, "")
    bst.insert(6, "")
    root = bst.get_root()
    assert tt.in_order_iterative(root) == [2, 4, 6]
    assert tt.pre_order_iterative(root) == [4, 2, 6]
    assert tt.post_order_iterative(root) == [2, 6, 4]
    assert tt.level_order(root) == [4, 2, 6]


def test_empty_tree():
    assert tt.in_order_recursive(None) == []
    assert tt.level_order(None) == []


def test_single_node():
    bst = BST[int, str]()
    bst.insert(1, "")
    root = bst.get_root()
    assert tt.in_order_recursive(root) == [1]
    assert tt.pre_order_iterative(root) == [1]
