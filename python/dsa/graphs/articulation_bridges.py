# Graphs — Articulation points and bridges

"""Bridges and articulation points in undirected graphs.

Technique: Tarjan DFS lowlink
Invariant: Bridge u-v when low[v] > disc[u].
find: Time O(V+E); Space O(V).
"""

from dataclasses import dataclass

from dsa.graphs.graph import Graph


@dataclass(frozen=True)
class Result:
    """Articulation points and bridges."""

    articulation_points: list[int]
    bridges: list[tuple[int, int]]


def find(graph: Graph) -> Result:
    """Returns articulation points and bridges (u < v).

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    time = 0
    disc = [-1] * n
    low = [-1] * n
    parent = [-1] * n
    ap = set()
    bridges: list[tuple[int, int]] = []

    def dfs(u: int) -> None:
        nonlocal time
        disc[u] = low[u] = time
        time += 1
        children = 0
        for e in graph.neighbors(u):
            v = e.to
            if disc[v] == -1:
                children += 1
                parent[v] = u
                dfs(v)
                low[u] = min(low[u], low[v])
                if low[v] > disc[u]:
                    bridges.append((min(u, v), max(u, v)))
                if parent[u] == -1 and children > 1:
                    ap.add(u)
                if parent[u] != -1 and low[v] >= disc[u]:
                    ap.add(u)
            elif v != parent[u]:
                low[u] = min(low[u], disc[v])

    for v in range(n):
        if disc[v] == -1:
            dfs(v)
    return Result(sorted(ap), bridges)
