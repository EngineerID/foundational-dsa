import json
from pathlib import Path

from dsa.linear.dynamic_array import DynamicArray

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "dynamic-array-goldens.json").read_text()
)


def test_dynamic_array_shared_goldens():
    for case in GOLDENS:
        arr = DynamicArray()
        for v in case["append"]:
            arr.add(v)
        assert arr.size() == case["size"]
        for pair in case["get"]:
            assert arr.get(pair["index"]) == pair["value"]
