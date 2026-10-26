# Practice — Network delay time (Dijkstra)

from dsa.graphs.dijkstra import _INF, shortest_paths
from dsa.graphs.graph import Graph


def network_delay(n: int, times: list[list[int]], source: int) -> int:
    """Time for all nodes to receive a signal from ``source``, or -1 if impossible.

    ``times`` entries are ``[u, v, w]`` directed edges. Nodes are ``0 .. n-1``.

    Time: O((V+E) log V); Space O(V).
    """
    g = Graph(n, directed=True, weighted=True)
    for u, v, w in times:
        g.add_edge(u, v, w)
    dist = shortest_paths(g, source)
    best = 0
    for d in dist:
        if d >= _INF:
            return -1
        best = max(best, d)
    return best
