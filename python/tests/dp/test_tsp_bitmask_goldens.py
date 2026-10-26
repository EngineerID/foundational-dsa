import json
from pathlib import Path

from dsa.dp.tsp_bitmask import min_cost

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "tsp-bitmask-goldens.json").read_text()
)


def test_tsp_bitmask_shared_goldens():
    for case in GOLDENS:
        assert min_cost(case["dist"]) == case["expected"]
