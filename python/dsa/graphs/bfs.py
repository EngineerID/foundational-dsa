# Graphs — Breadth-First Search

"""BFS for unweighted shortest paths and level-order distances.

Time: O(V+E); Space: O(V).
"""

from dsa.graphs.graph import Graph
from dsa.linear.queue import Queue


def distances(graph: Graph, source: int) -> list[int]:
    """Returns distances from source to all vertices (-1 if unreachable).

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    dist = [-1] * n
    visited = [False] * n
    q = Queue()
    dist[source] = 0
    visited[source] = True
    q.enqueue(source)
    while not q.is_empty():
        u = q.dequeue()
        for edge in graph.neighbors(u):
            v = edge.to
            if not visited[v]:
                visited[v] = True
                dist[v] = dist[u] + 1
                q.enqueue(v)
    return dist
