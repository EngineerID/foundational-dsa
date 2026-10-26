import json
from pathlib import Path

from dsa.dp.lcs import length

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "lcs-goldens.json").read_text()
)


def test_lcs_shared_goldens():
    for case in GOLDENS:
        assert length(case["a"], case["b"]) == case["expected"]
