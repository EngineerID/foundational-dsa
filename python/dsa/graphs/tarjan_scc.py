# Graphs — Tarjan SCC

"""Strongly connected components in a directed graph.

Technique: Tarjan SCC
Invariant: Lowlink identifies SCC roots on DFS stack.
stronglyConnectedComponents: Time O(V+E); Space O(V).
"""

from dsa.graphs.graph import Graph


def strongly_connected_components(graph: Graph) -> list[list[int]]:
    """Returns SCCs as lists of vertex ids.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    index = 0
    stack: list[int] = []
    on_stack = [False] * n
    ids = [-1] * n
    low = [-1] * n
    result: list[list[int]] = []

    def dfs(v: int) -> None:
        nonlocal index
        ids[v] = low[v] = index
        index += 1
        stack.append(v)
        on_stack[v] = True
        for e in graph.neighbors(v):
            w = e.to
            if ids[w] == -1:
                dfs(w)
                low[v] = min(low[v], low[w])
            elif on_stack[w]:
                low[v] = min(low[v], ids[w])
        if low[v] == ids[v]:
            comp: list[int] = []
            while True:
                w = stack.pop()
                on_stack[w] = False
                comp.append(w)
                if w == v:
                    break
            result.append(comp)

    for v in range(n):
        if ids[v] == -1:
            dfs(v)
    return result
