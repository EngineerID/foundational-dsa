# Graphs — Bellman-Ford

"""Single-source shortest paths with negative edges; detect negative cycles.

Technique: Bellman-Ford relaxation
Invariant: After i passes, shortest paths using <= i edges are correct.
shortestPaths: Time O(VE); Space O(V).
"""

from __future__ import annotations

from dataclasses import dataclass

from dsa.graphs.graph import Graph

_INF = 2**30 - 1


@dataclass(frozen=True)
class Result:
    """Result of Bellman-Ford."""

    distances: list[int]
    has_negative_cycle: bool


def shortest_paths(graph: Graph, source: int) -> Result:
    """Computes shortest paths from source.

    Time: O(V·E); Space: O(V).
    """
    n = graph.vertices()
    dist = [_INF] * n
    dist[source] = 0
    edges = graph.all_edges()
    for _ in range(n - 1):
        for u, v, w in edges:
            if dist[u] != _INF and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] != _INF and dist[u] + w < dist[v]:
            return Result(dist, True)
    return Result(dist, False)
