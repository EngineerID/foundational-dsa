from dsa.trees.red_black_tree import RedBlackTree


def test_search_insert():
    t = RedBlackTree()
    t.insert(1, 9)
    assert t.search(1) == 9
