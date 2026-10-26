import json
from pathlib import Path

from dsa.graphs.graph import Graph
from dsa.graphs.kruskal_mst import mst
from dsa.graphs.kruskal_mst import total_weight as kruskal_weight
from dsa.graphs.prim_mst import total_weight as prim_weight

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "mst-goldens.json").read_text()
)


def test_mst_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v, w in case["edges"]:
            g.add_edge(u, v, w)
        assert kruskal_weight(g) == case["kruskalWeight"]
        assert len(mst(g)) == case["kruskalEdgeCount"]
        assert prim_weight(g) == case["primWeight"]
