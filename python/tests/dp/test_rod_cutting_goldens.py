import json
from pathlib import Path

from dsa.dp.rod_cutting import max_profit

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "rod-cutting-goldens.json").read_text()
)


def test_rod_cutting_shared_goldens():
    for case in GOLDENS:
        assert max_profit(case["prices"], case["length"]) == case["expected"]
