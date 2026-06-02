import pytest

from dsa.trees.b_tree import BTree


def test_btree_insert_and_search():
    btree = BTree(3)
    for i in range(1, 21):
        btree.insert(i)
    assert btree.search(10)
    assert not btree.search(21)


def test_btree_invalid_degree():
    with pytest.raises(ValueError, match="t must be >= 2"):
        BTree(1)


def test_btree_single_key():
    btree = BTree(2)
    btree.insert(42)
    assert btree.search(42)
    assert not btree.search(41)


def test_btree_duplicate_insert():
    btree = BTree(3)
    btree.insert(5)
    btree.insert(5)
    assert btree.search(5)
