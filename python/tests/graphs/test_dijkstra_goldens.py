import json
from pathlib import Path

from dsa.graphs.dijkstra import shortest_paths
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "dijkstra-goldens.json").read_text()
)


def test_dijkstra_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v, w in case["edges"]:
            g.add_edge(u, v, w)
        assert shortest_paths(g, case["source"]) == case["distances"]
