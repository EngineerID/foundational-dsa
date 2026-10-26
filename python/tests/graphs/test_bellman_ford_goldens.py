import json
from pathlib import Path

from dsa.graphs.bellman_ford import shortest_paths
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "bellman-ford-goldens.json").read_text()
)


def test_bellman_ford_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for edge in case["edges"]:
            g.add_edge(edge[0], edge[1], edge[2])
        result = shortest_paths(g, case["source"])
        assert result.has_negative_cycle == case["hasNegativeCycle"]
        if "distances" in case:
            assert result.distances == case["distances"]
