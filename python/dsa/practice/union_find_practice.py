# Practice — Union–find connectivity

from dsa.unionfind.union_find import UnionFind


def connected(n: int, unions: list[list[int]], a: int, b: int) -> bool:
    uf = UnionFind(n)
    for u, v in unions:
        uf.union(u, v)
    return uf.connected(a, b)
