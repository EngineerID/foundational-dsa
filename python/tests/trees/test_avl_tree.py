from dsa.trees.avl_tree import AVLTree


def test_avl_sequential_insert():
    avl = AVLTree[int, str]()
    for i in range(1, 11):
        avl.insert(i, "")
    assert len(avl.in_order()) == 10
    assert avl.in_order() == list(range(1, 11))


def test_avl_search_after_rebalance():
    avl = AVLTree[int, str]()
    for i in [10, 20, 30, 40, 50]:
        avl.insert(i, str(i))
    assert avl.search(30) == "30"
    assert avl.search(25) is None


def test_avl_delete_maintains_order():
    avl = AVLTree[int, str]()
    for i in [3, 1, 4, 2, 5]:
        avl.insert(i, "")
    avl.delete(4)
    assert avl.in_order() == [1, 2, 3, 5]


def test_avl_update_key():
    avl = AVLTree[int, str]()
    avl.insert(7, "old")
    avl.insert(7, "new")
    assert avl.search(7) == "new"
