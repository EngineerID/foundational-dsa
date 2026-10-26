from dsa.graphs.bellman_ford import Result, shortest_paths
from dsa.graphs.graph import Graph


def shortest_paths_result(n: int, edges: list[list[int]], source: int) -> Result:
    g = Graph(n, directed=True, weighted=True)
    for u, v, w in edges:
        g.add_edge(u, v, w)
    return shortest_paths(g, source)
