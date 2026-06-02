# Graphs — Boruvka MST

"""Minimum spanning tree via Boruvka's algorithm.

Time: O(E log V); Space: O(V).
"""

from dsa.graphs.graph import Graph
from dsa.unionfind.union_find import UnionFind

_INF = 2**30 - 1


def total_weight(graph: Graph) -> int:
    """Returns total weight of MST.

    Time: O(E log V); Space: O(V).
    """
    n = graph.vertices()
    uf = UnionFind(n)
    total = 0
    components = n
    edges = graph.all_edges()
    while components > 1:
        best_weight = [_INF] * n
        best_to = [-1] * n
        for u, v, w in edges:
            cu = uf.find(u)
            cv = uf.find(v)
            if cu == cv:
                continue
            if w < best_weight[cu]:
                best_weight[cu] = w
                best_to[cu] = v
            if w < best_weight[cv]:
                best_weight[cv] = w
                best_to[cv] = u
        merged = False
        for c in range(n):
            if best_to[c] >= 0:
                u = c
                v = best_to[c]
                if not uf.connected(u, v):
                    uf.union(u, v)
                    total += best_weight[c]
                    components -= 1
                    merged = True
        if not merged:
            break
    return total
