import json
from pathlib import Path

import pytest

from dsa.trees.order_statistic_tree import OrderStatisticTree

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3] / "tools" / "order-statistic-tree-goldens.json"
    ).read_text()
)


def test_order_statistic_tree_shared_goldens():
    for case in GOLDENS:
        tree = OrderStatisticTree()
        if not case["inserts"]:
            with pytest.raises(ValueError):
                tree.select(1)
            assert tree.rank(5) == case["rank5"]
            continue
        for key, value in case["inserts"]:
            tree.insert(key, value)
        if "selectK" in case:
            assert tree.select(case["selectK"]) == case["selectKey"]
            assert tree.rank(case["rankKey"]) == 1
            continue
        assert tree.select(3) == case["select3"]
        assert tree.rank(5) == case["rank5"]
