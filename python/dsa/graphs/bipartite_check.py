# Graphs — Bipartite check

"""Test whether an undirected graph is 2-colorable.

Technique: BFS coloring
Invariant: Bipartite iff no odd cycle.
isBipartite: Time O(V+E); Space O(V).
"""

from collections import deque

from dsa.graphs.graph import Graph


def is_bipartite(graph: Graph) -> bool:
    """Returns True if the graph is bipartite.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    color = [-1] * n
    for start in range(n):
        if color[start] != -1:
            continue
        color[start] = 0
        q: deque[int] = deque([start])
        while q:
            u = q.popleft()
            for e in graph.neighbors(u):
                v = e.to
                if color[v] == -1:
                    color[v] = 1 - color[u]
                    q.append(v)
                elif color[v] == color[u]:
                    return False
    return True
