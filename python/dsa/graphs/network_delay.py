# Graphs — Network delay time

"""
Time until all nodes receive a signal from source, or -1 if any node is unreachable.
Technique: Dijkstra single-source shortest paths
Invariant: Answer is the maximum shortest-path distance from source.
network_delay: Time O((V+E) log V); Space O(V).
"""

from dsa.graphs.dijkstra import _INF, shortest_paths
from dsa.graphs.graph import Graph


def network_delay(n: int, times: list[list[int]] | None, source: int) -> int:
    """Directed edges [u, v, w] on nodes 0 .. n-1."""
    if n <= 0:
        return 0
    g = Graph(n, True, True)
    if times:
        for u, v, w in times:
            g.add_edge(u, v, w)
    dist = shortest_paths(g, source)
    best = 0
    for d in dist:
        if d >= _INF:
            return -1
        best = max(best, d)
    return best
