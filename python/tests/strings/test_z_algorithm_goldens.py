import json
from pathlib import Path

from dsa.strings.z_algorithm import search, z_array

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "z-algorithm-goldens.json").read_text()
)


def test_z_algorithm_shared_goldens():
    for case in GOLDENS:
        assert search(case["text"], case["pattern"]) == case["index"]
        assert z_array(case["text"]) == case["z"]
