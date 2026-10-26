import json
from pathlib import Path

from dsa.dp.edit_distance import distance

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "edit-distance-goldens.json").read_text()
)


def test_edit_distance_shared_goldens():
    for case in GOLDENS:
        assert distance(case["a"], case["b"]) == case["expected"]
