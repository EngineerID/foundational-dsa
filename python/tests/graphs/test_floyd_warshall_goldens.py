import json
from pathlib import Path

from dsa.graphs.floyd_warshall import all_pairs_shortest_paths
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "floyd-warshall-goldens.json").read_text()
)


def test_floyd_warshall_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for edge in case["edges"]:
            g.add_edge(edge[0], edge[1], edge[2])
        dist = all_pairs_shortest_paths(g)
        for i, j, expected in case["pairs"]:
            assert dist[i][j] == expected
