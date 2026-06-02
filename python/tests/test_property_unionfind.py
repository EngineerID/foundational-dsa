"""Property tests: union-find vs BFS components (100 trials)."""

from dsa.unionfind.union_find import UnionFind

from _property_helpers import PROPERTY_TRIALS, bfs_components, seeded_rng


def test_union_find_connected():
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        n = rng.randint(2, 12)
        edges: list[tuple[int, int]] = []
        for _ in range(rng.randint(0, n * 2)):
            u, v = rng.randint(0, n - 1), rng.randint(0, n - 1)
            if u != v:
                edges.append((u, v))
        uf = UnionFind(n)
        for u, v in edges:
            uf.union(u, v)
        comps = bfs_components(n, edges)
        comp_of = [-1] * n
        for i, comp in enumerate(comps):
            for v in comp:
                comp_of[v] = i
        for u in range(n):
            for v in range(n):
                same = comp_of[u] == comp_of[v] if comp_of[u] >= 0 else u == v
                assert uf.connected(u, v) == same
