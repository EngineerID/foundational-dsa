import json
from pathlib import Path

from dsa.sorting.merge_sort import sort

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "merge-sort-goldens.json").read_text()
)


def test_merge_sort_shared_goldens():
    for case in GOLDENS:
        assert sort(case["input"]) == case["sorted"]
