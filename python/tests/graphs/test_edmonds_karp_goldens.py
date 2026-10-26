import json
from pathlib import Path

from dsa.graphs.edmonds_karp import max_flow

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "edmonds-karp-goldens.json").read_text()
)


def test_edmonds_karp_shared_goldens():
    for case in GOLDENS:
        edges = [tuple(e) for e in case["edges"]]
        assert max_flow(case["n"], edges, case["source"], case["sink"]) == case["maxFlow"]
