# Practice — DFS discovery and finish times

from dataclasses import dataclass

from dsa.graphs.dfs import traverse_recursive
from dsa.graphs.graph import Graph


@dataclass(frozen=True)
class DfsTimes:
    discovery: list[int]
    finish: list[int]


def traverse(n: int, edges: list[list[int]], source: int, directed: bool) -> DfsTimes:
    g = Graph(n, directed=directed, weighted=False)
    for u, v in edges:
        g.add_edge(u, v)
    result = traverse_recursive(g, source)
    return DfsTimes(discovery=result.discovery, finish=result.finish)
