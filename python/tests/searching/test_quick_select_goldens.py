import json
from pathlib import Path

import pytest

from dsa.searching.quick_select import kth_smallest

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "quick-select-goldens.json").read_text()
)


def test_quick_select_shared_goldens():
    for case in GOLDENS:
        if case.get("expectError"):
            with pytest.raises(ValueError):
                kth_smallest(case["arr"], case["k"])
        else:
            assert kth_smallest(case["arr"], case["k"]) == case["expected"]
