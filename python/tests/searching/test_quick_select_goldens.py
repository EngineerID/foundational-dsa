import json
from pathlib import Path

from dsa.searching.quick_select import kth_smallest

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "quick-select-goldens.json").read_text()
)


def test_quick_select_shared_goldens():
    for case in GOLDENS:
        assert kth_smallest(case["arr"], case["k"]) == case["expected"]
