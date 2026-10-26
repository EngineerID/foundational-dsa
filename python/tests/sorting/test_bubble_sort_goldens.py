import json
from pathlib import Path

from dsa.sorting.bubble_sort import sort

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "bubble-sort-goldens.json").read_text()
)


def test_bubble_sort_shared_goldens():
    for case in GOLDENS:
        arr = list(case["input"])
        sort(arr)
        assert arr == case["sorted"]
