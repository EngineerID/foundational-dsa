import json
from pathlib import Path

from dsa.sorting.insertion_sort import sort

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "insertion-sort-goldens.json").read_text()
)


def test_insertion_sort_shared_goldens():
    for case in GOLDENS:
        arr = list(case["input"])
        sort(arr)
        assert arr == case["sorted"]
