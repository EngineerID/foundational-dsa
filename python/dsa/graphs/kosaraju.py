# Graphs — Kosaraju SCC

"""Strongly connected components via two-pass DFS.

Technique: Kosaraju
Invariant: Finish order on G, DFS on transpose yields SCCs.
stronglyConnectedComponents: Time O(V+E); Space O(V).
"""

from dsa.graphs.graph import Graph


def strongly_connected_components(graph: Graph) -> list[list[int]]:
    """Returns SCCs as lists of vertex ids.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    visited = [False] * n
    order: list[int] = []

    def dfs1(v: int) -> None:
        visited[v] = True
        for e in graph.neighbors(v):
            if not visited[e.to]:
                dfs1(e.to)
        order.append(v)

    for v in range(n):
        if not visited[v]:
            dfs1(v)

    rev: list[list[int]] = [[] for _ in range(n)]
    for u in range(n):
        for e in graph.neighbors(u):
            rev[e.to].append(u)

    visited = [False] * n
    comps: list[list[int]] = []

    def dfs2(v: int, comp: list[int]) -> None:
        visited[v] = True
        comp.append(v)
        for w in rev[v]:
            if not visited[w]:
                dfs2(w, comp)

    for v in reversed(order):
        if not visited[v]:
            c: list[int] = []
            dfs2(v, c)
            comps.append(c)
    return comps
