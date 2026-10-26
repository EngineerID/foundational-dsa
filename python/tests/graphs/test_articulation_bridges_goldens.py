import json
from pathlib import Path

from dsa.graphs.articulation_bridges import find
from dsa.graphs.graph import Graph

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3] / "tools" / "articulation-bridges-goldens.json"
    ).read_text()
)


def test_articulation_bridges_shared_goldens():
    for case in GOLDENS:
        g = Graph(case["n"], case["directed"], case["weighted"])
        for u, v in case["edges"]:
            g.add_edge(u, v)
        result = find(g)
        assert sorted(result.articulation_points) == case["articulationPoints"]
        assert [list(b) for b in result.bridges] == case["bridges"]
