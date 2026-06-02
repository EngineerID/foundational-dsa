from dsa.unionfind.union_find import UnionFind


def test_initial_components():
    uf = UnionFind(5)
    assert uf.count_components() == 5
    assert uf.connected(0, 1) is False


def test_union_and_connected():
    uf = UnionFind(5)
    uf.union(0, 1)
    uf.union(2, 3)
    assert uf.connected(0, 1) is True
    assert uf.count_components() == 3
    uf.union(1, 2)
    assert uf.connected(0, 3) is True
    assert uf.count_components() == 2


def test_redundant_union():
    uf = UnionFind(3)
    uf.union(0, 1)
    uf.union(0, 1)
    assert uf.count_components() == 2
