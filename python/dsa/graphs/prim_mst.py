# Graphs — Prim MST

"""Minimum spanning tree via Prim's algorithm (priority queue).

Time: O((V+E) log V); Space: O(V).
"""

from __future__ import annotations

from dataclasses import dataclass, field

from dsa.graphs.graph import Graph
from dsa.heaps.priority_queue import PriorityQueue

_INF = 2**30 - 1


@dataclass(order=True)
class _VertexKey:
    key: int
    vertex: int = field(compare=False)


def total_weight(graph: Graph) -> int:
    """Returns total weight of MST starting from vertex 0.

    Time: O((V+E) log V); Space: O(V).
    """
    n = graph.vertices()
    in_mst = [False] * n
    key = [_INF] * n
    key[0] = 0
    total = 0
    pq: PriorityQueue[_VertexKey] = PriorityQueue()
    pq.insert(_VertexKey(0, 0))
    while not pq.is_empty():
        vk = pq.extract_min()
        u = vk.vertex
        if in_mst[u]:
            continue
        in_mst[u] = True
        total += vk.key
        for edge in graph.neighbors(u):
            v = edge.to
            if not in_mst[v] and edge.weight < key[v]:
                key[v] = edge.weight
                pq.insert(_VertexKey(key[v], v))
    return total
