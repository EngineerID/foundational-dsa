# Practice — BFS unweighted shortest distances

from dsa.graphs.bfs import distances as bfs_distances
from dsa.graphs.graph import Graph


def distances(n: int, edges: list[list[int]], source: int) -> list[int]:
    """Undirected edges [u, v]; -1 if unreachable. Time O(V+E)."""
    g = Graph(n, directed=False, weighted=False)
    for u, v in edges:
        g.add_edge(u, v)
    return bfs_distances(g, source)
