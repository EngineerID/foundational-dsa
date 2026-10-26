# Practice — Topological sort (Kahn)

from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn


def order(n: int, edges: list[list[int]]) -> list[int]:
    g = Graph(n, directed=True, weighted=False)
    for u, v in edges:
        g.add_edge(u, v)
    return kahn(g)
