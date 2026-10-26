import json
from pathlib import Path

from dsa.graphs.boruvka_mst import total_weight
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "boruvka-mst-goldens.json").read_text()
)


def test_boruvka_mst_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v, w in case["edges"]:
            g.add_edge(u, v, w)
        assert total_weight(g) == case["totalWeight"]
