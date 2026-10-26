import json
from pathlib import Path

from dsa.strings.suffix_array import build

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "suffix-array-goldens.json").read_text()
)


def test_suffix_array_shared_goldens():
    for case in GOLDENS:
        assert build(case["s"]) == case["sa"]
