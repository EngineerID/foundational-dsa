import json
from pathlib import Path

from dsa.graphs.bipartite_check import is_bipartite
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "bipartite-check-goldens.json").read_text()
)


def _add_edge(g: Graph, edge: list) -> None:
    if len(edge) == 2:
        g.add_edge(edge[0], edge[1])
    else:
        g.add_edge(edge[0], edge[1], edge[2])


def test_bipartite_check_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for edge in case["edges"]:
            _add_edge(g, edge)
        assert is_bipartite(g) == case["expected"]
