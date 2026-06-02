# Graphs — Topological Sort

"""Linear ordering of a DAG respecting all edges.

Technique: Kahn topological sort (BFS in-degree)
Invariant: Output order: for each edge u->v, pos[u] < pos[v].
sort: Time O(V+E); Space O(V).
"""

from dsa.graphs.graph import Graph
from dsa.linear.queue import Queue


def kahn(graph: Graph) -> list[int]:
    """Returns a topological order, or empty list if a cycle exists.

    Time: O(V+E); Space: O(V).
    """
    n = graph.vertices()
    indegree = [0] * n
    for u in range(n):
        for edge in graph.neighbors(u):
            indegree[edge.to] += 1
    q = Queue()
    for i in range(n):
        if indegree[i] == 0:
            q.enqueue(i)
    order: list[int] = []
    while not q.is_empty():
        u = q.dequeue()
        order.append(u)
        for edge in graph.neighbors(u):
            indegree[edge.to] -= 1
            if indegree[edge.to] == 0:
                q.enqueue(edge.to)
    return order if len(order) == n else []
