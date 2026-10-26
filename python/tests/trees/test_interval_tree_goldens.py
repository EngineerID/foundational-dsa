import json
from pathlib import Path

import pytest

from dsa.trees.interval_tree import Interval, IntervalTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "interval-tree-goldens.json").read_text()
)


def test_interval_tree_shared_goldens():
    for case in GOLDENS:
        if case.get("expectError"):
            tree = IntervalTree()
            with pytest.raises(ValueError):
                for low, high in case["inserts"]:
                    tree.insert(Interval(low, high))
            continue
        tree = IntervalTree()
        for low, high in case["inserts"]:
            tree.insert(Interval(low, high))
        q = case["query"]
        got = sorted([[i.low, i.high] for i in tree.overlap_search(Interval(q[0], q[1]))])
        assert got == case["overlaps"]
