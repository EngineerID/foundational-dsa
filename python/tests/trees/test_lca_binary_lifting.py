from dsa.trees.lca_binary_lifting import LCABinaryLifting


def test_query():
    assert LCABinaryLifting([0, 0]).query(1, 0) == 0
