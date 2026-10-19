# Graphs — A* shortest path

"""A* search with nonnegative edge weights and admissible heuristic.

Technique: A* (best-first search)
Invariant: f = g + h; with h=0 reduces to Dijkstra.
shortestPathLength: Time O(E log V); Space O(V).
"""

from __future__ import annotations

import heapq

from dsa.graphs.graph import Graph

_INF = 10**18


def shortest_path_length(graph: Graph, source: int, goal: int) -> int:
    """Returns shortest path length from source to goal, or -1 if unreachable.

    Uses h(v)=0 (admissible). Time: O((V+E) log V); Space: O(V).
    """
    n = graph.vertices()
    if source < 0 or goal < 0 or source >= n or goal >= n:
        raise IndexError(source)
    dist = [_INF] * n
    dist[source] = 0
    pq: list[tuple[int, int]] = [(0, source)]
    while pq:
        f, u = heapq.heappop(pq)
        if u == goal:
            return dist[u]
        if f > dist[u]:
            continue
        for e in graph.neighbors(u):
            nd = dist[u] + e.weight
            if nd < dist[e.to]:
                dist[e.to] = nd
                heapq.heappush(pq, (nd, e.to))
    return -1 if dist[goal] >= _INF else dist[goal]
