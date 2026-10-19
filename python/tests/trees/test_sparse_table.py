from dsa.trees.sparse_table import SparseTable


def test_query():
    assert SparseTable([2, 1]).query(0, 1) == 1
