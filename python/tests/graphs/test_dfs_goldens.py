import json
from pathlib import Path

from dsa.graphs.dfs import traverse_recursive
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "dfs-goldens.json").read_text()
)


def test_dfs_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for edge in case["edges"]:
            if len(edge) == 2:
                u, v = edge
                g.add_edge(u, v, 1)
            else:
                u, v, w = edge
                g.add_edge(u, v, w)
        result = traverse_recursive(g, case["source"])
        assert result.discovery == case["discovery"]
        assert result.finish == case["finish"]
