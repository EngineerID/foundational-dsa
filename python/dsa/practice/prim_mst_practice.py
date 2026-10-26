from dsa.graphs.graph import Graph
from dsa.graphs.prim_mst import total_weight


def mst_total_weight(n: int, edges: list[list[int]]) -> int:
    g = Graph(n, directed=False, weighted=True)
    for u, v, w in edges:
        g.add_edge(u, v, w)
    return total_weight(g)
