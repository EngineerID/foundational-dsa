import json
from pathlib import Path

from dsa.dp.lis import length

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "lis-goldens.json").read_text()
)


def test_lis_shared_goldens():
    for case in GOLDENS:
        assert length(case["arr"]) == case["expected"]
