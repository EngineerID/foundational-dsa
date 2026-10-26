import json
from pathlib import Path

from dsa.graphs.a_star import shortest_path_length
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "a-star-goldens.json").read_text()
)


def test_a_star_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v, w in case["edges"]:
            g.add_edge(u, v, w)
        assert shortest_path_length(g, case["source"], case["goal"]) == case["length"]
