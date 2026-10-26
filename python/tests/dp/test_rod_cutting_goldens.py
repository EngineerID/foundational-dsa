import pytest

from dsa.dp.rod_cutting import max_profit
from tests.golden_loader import load_golden_json

GOLDENS = load_golden_json("rod-cutting-goldens.json")


def test_rod_cutting_shared_goldens():
    for case in GOLDENS:
        if case.get("expectError"):
            with pytest.raises(ValueError):
                max_profit(case["prices"], case["length"])
            continue
        assert max_profit(case["prices"], case["length"]) == case["expected"]
