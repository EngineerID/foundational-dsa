# Graphs — Dijkstra's Algorithm

"""Single-source shortest paths on non-negative edge weights.

Technique: Dijkstra's algorithm (indexed min-heap)
Invariant: Extracted distances are final when weights nonnegative.
shortestPaths: Time O(E log V); Space O(V).
"""

from dsa.graphs.graph import Graph
from dsa.heaps.indexed_min_heap import IndexedMinHeap

_INF = 2**30 - 1


def shortest_paths(graph: Graph, source: int) -> list[int]:
    """Returns shortest distances from source (INF if unreachable).

    Time: O((V+E) log V); Space: O(V).
    """
    n = graph.vertices()
    dist = [_INF] * n
    dist[source] = 0
    heap = IndexedMinHeap(n)
    heap.insert(source, 0)
    while not heap.is_empty():
        u = heap.extract_min()
        for edge in graph.neighbors(u):
            v = edge.to
            nd = dist[u] + edge.weight
            if nd < dist[v]:
                dist[v] = nd
                heap.insert(v, nd)
    return dist
