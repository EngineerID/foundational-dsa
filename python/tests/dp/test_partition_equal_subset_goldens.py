import json
from pathlib import Path

from dsa.dp.partition_equal_subset import can_partition

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3] / "tools" / "partition-equal-subset-goldens.json"
    ).read_text()
)


def test_partition_equal_subset_shared_goldens():
    for case in GOLDENS:
        assert can_partition(case["nums"]) == case["expected"]
