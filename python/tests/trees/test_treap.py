from dsa.trees.treap import Treap


def test_search_insert():
    t = Treap(seed=0)
    t.insert(2, 2)
    assert t.search(2) == 2
