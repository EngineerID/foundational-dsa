import json
from pathlib import Path

import pytest

from dsa.searching.two_sum_ii import two_sum_sorted

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "two-sum-ii-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("nums")))
def test_shared_goldens(case):
    if case.get("expectError"):
        with pytest.raises(ValueError):
            two_sum_sorted(case["nums"], case["target"])
        return
    assert two_sum_sorted(case["nums"], case["target"]) == case["expected"]
