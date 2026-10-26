import json
from pathlib import Path

from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "topological-sort-goldens.json").read_text()
)


def test_topological_sort_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v in case["edges"]:
            g.add_edge(u, v)
        assert kahn(g) == case["expectedOrder"]
