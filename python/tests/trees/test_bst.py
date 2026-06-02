from dsa.trees.bst import BST


def test_bst_operations():
    bst = BST[int, str]()
    bst.insert(5, "five")
    bst.insert(2, "two")
    bst.insert(8, "eight")
    assert bst.search(5) == "five"
    assert bst.in_order() == [2, 5, 8]
    assert bst.successor(5) == 8
    bst.delete(5)
    assert bst.search(5) is None


def test_bst_update_existing_key():
    bst = BST[int, str]()
    bst.insert(1, "one")
    bst.insert(1, "ONE")
    assert bst.search(1) == "ONE"
    assert bst.in_order() == [1]


def test_bst_predecessor_and_missing_key():
    bst = BST[int, str]()
    bst.insert(10, "")
    bst.insert(5, "")
    bst.insert(15, "")
    assert bst.predecessor(10) == 5
    assert bst.successor(15) is None
    assert bst.search(99) is None


def test_bst_delete_leaf_and_single_child():
    bst = BST[int, str]()
    bst.insert(10, "")
    bst.insert(5, "")
    bst.delete(5)
    assert bst.in_order() == [10]
    bst.insert(15, "")
    bst.delete(10)
    assert bst.in_order() == [15]
