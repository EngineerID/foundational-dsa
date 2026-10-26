from dsa.dp.partition_equal_subset import can_partition
from tests.golden_loader import load_golden_json

GOLDENS = load_golden_json("partition-equal-subset-goldens.json")


def test_partition_equal_subset_shared_goldens():
    for case in GOLDENS:
        assert can_partition(case["nums"]) == case["expected"]
