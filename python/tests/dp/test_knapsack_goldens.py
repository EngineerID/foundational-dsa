import json
from pathlib import Path

from dsa.dp.knapsack import max_value

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "knapsack-goldens.json").read_text()
)


def test_knapsack_shared_goldens():
    for case in GOLDENS:
        assert max_value(case["weights"], case["values"], case["capacity"]) == case["expected"]
