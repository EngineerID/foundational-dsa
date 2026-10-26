import json
from pathlib import Path

from dsa.sorting.quick_sort import sort, sort_3way

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "quick-sort-goldens.json").read_text()
)


def test_quick_sort_shared_goldens():
    for case in GOLDENS:
        arr = list(case["input"])
        if case["mode"] == "sort3Way":
            sort_3way(arr)
        else:
            sort(arr)
        assert arr == case["expected"]
