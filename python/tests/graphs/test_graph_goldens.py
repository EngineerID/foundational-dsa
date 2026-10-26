import json
from pathlib import Path

from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "graph-goldens.json").read_text()
)


def test_graph_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v, w in case["edges"]:
            g.add_edge(u, v, w)
        assert g.vertices() == case["vertices"]
        for vertex, count in case["neighborCount"].items():
            assert len(g.neighbors(int(vertex))) == count
        for vertex, to_list in case["edgeTo"].items():
            assert [e.to for e in g.neighbors(int(vertex))] == to_list
