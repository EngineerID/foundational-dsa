# Practice — Dijkstra shortest paths

from dsa.graphs.dijkstra import shortest_paths
from dsa.graphs.graph import Graph


def shortest_distances(n: int, edges: list[list[int]], source: int) -> list[int]:
    g = Graph(n, directed=True, weighted=True)
    for u, v, w in edges:
        g.add_edge(u, v, w)
    return shortest_paths(g, source)
