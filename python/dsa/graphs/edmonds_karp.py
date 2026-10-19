# Graphs — Edmonds-Karp max flow

"""Maximum flow via BFS augmenting paths (Edmonds-Karp).

Technique: Edmonds-Karp
Invariant: Residual capacities decrease until no s-t path.
maxFlow: Time O(VE^2); Space O(V^2).
"""

from collections import deque


def max_flow(n: int, edges: list[tuple[int, int, int]], source: int, sink: int) -> int:
    """Directed edges (u, v, capacity). Returns max flow value.

    Time: O(VE^2); Space: O(V^2).
    """
    if source < 0 or sink < 0 or source >= n or sink >= n:
        raise IndexError(source)
    cap = [[0] * n for _ in range(n)]
    for u, v, c in edges:
        if c < 0:
            raise ValueError("negative capacity")
        cap[u][v] += c
    flow = 0
    while True:
        parent = [-1] * n
        parent[source] = source
        q: deque[int] = deque([source])
        while q and parent[sink] == -1:
            u = q.popleft()
            for v in range(n):
                if parent[v] == -1 and cap[u][v] > 0:
                    parent[v] = u
                    q.append(v)
        if parent[sink] == -1:
            break
        add = 10**18
        v = sink
        while v != source:
            u = parent[v]
            add = min(add, cap[u][v])
            v = u
        v = sink
        while v != source:
            u = parent[v]
            cap[u][v] -= add
            cap[v][u] += add
            v = u
        flow += add
    return flow
