import json
from pathlib import Path

from dsa.trees.fenwick_tree import FenwickTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "fenwick-tree-goldens.json").read_text()
)


def test_fenwick_tree_shared_goldens():
    for case in GOLDENS:
        ft = FenwickTree(case["n"])
        for idx, delta in case["adds"]:
            ft.add(idx, delta)
        for row in case["checks"]:
            if "prefixAt" in row:
                assert ft.prefix_sum(row["prefixAt"]) == row["expected"]
            if "rangeLeft" in row:
                assert ft.range_sum(row["rangeLeft"], row["rangeRight"]) == row["expected"]
