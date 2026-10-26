import json
from pathlib import Path

from dsa.trees.order_statistic_tree import OrderStatisticTree

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3] / "tools" / "order-statistic-tree-goldens.json"
    ).read_text()
)


def test_order_statistic_tree_shared_goldens():
    for case in GOLDENS:
        tree = OrderStatisticTree()
        for key, value in case["inserts"]:
            tree.insert(key, value)
        assert tree.select(3) == case["select3"]
        assert tree.rank(5) == case["rank5"]
