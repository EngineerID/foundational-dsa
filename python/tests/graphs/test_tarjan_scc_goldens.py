import json
from pathlib import Path

from dsa.graphs import tarjan_scc
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "tarjan-scc-goldens.json").read_text()
)


def _sizes(g):
    comps = tarjan_scc.strongly_connected_components(g)
    return sorted(len(c) for c in comps)


def test_tarjan_scc_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for edge in case["edges"]:
            if len(edge) == 2:
                g.add_edge(edge[0], edge[1])
            else:
                g.add_edge(edge[0], edge[1], edge[2])
        comps = tarjan_scc.strongly_connected_components(g)
        assert len(comps) == case["componentCount"]
        assert _sizes(g) == case["componentSizes"]
