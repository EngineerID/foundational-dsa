import json
from pathlib import Path

from dsa.graphs.hungarian import min_cost

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "hungarian-goldens.json").read_text()
)


def test_hungarian_shared_goldens():
    for case in GOLDENS:
        assert min_cost(case["cost"]) == case["minCost"]
