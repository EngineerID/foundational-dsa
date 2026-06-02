# Graphs — Depth-First Search

"""Depth-first traversal, cycle detection, and connectivity.

Technique: DFS
Invariant: Recursive/stack visit marks discovered nodes until backtrack.
traverse/hasCycle: Time O(V+E); Space O(V).
"""

from __future__ import annotations

from dataclasses import dataclass

from dsa.graphs.graph import Graph
from dsa.linear.stack import Stack


@dataclass(frozen=True)
class DfsResult:
    """DFS traversal result."""

    discovery: list[int]
    finish: list[int]


def traverse_recursive(graph: Graph, source: int) -> DfsResult:
    """Recursive DFS from source on all reachable vertices.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    disc = [-1] * n
    fin = [-1] * n
    time = [0]

    def dfs(u: int) -> None:
        disc[u] = time[0]
        time[0] += 1
        for edge in graph.neighbors(u):
            v = edge.to
            if disc[v] == -1:
                dfs(v)
        fin[u] = time[0]
        time[0] += 1

    dfs(source)
    return DfsResult(disc, fin)


def traverse_iterative(graph: Graph, source: int) -> DfsResult:
    """Iterative DFS from source.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    disc = [-1] * n
    fin = [-1] * n
    done = [False] * n
    stack = Stack()
    time = 0
    stack.push([source, 0])
    disc[source] = time
    time += 1
    while not stack.is_empty():
        frame = stack.peek()
        u, idx = frame[0], frame[1]
        neighbors = graph.neighbors(u)
        if idx < len(neighbors):
            frame[1] = idx + 1
            v = neighbors[idx].to
            if disc[v] == -1:
                disc[v] = time
                time += 1
                stack.push([v, 0])
        else:
            stack.pop()
            if not done[u]:
                fin[u] = time
                time += 1
                done[u] = True
    return DfsResult(disc, fin)
