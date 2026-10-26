import json
from pathlib import Path

from dsa.linear.sliding_window_maximum import max_sliding_window

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3] / "tools" / "sliding-window-maximum-goldens.json"
    ).read_text()
)


def test_sliding_window_maximum_shared_goldens():
    for case in GOLDENS:
        assert max_sliding_window(case["nums"], case["k"]) == case["expected"]
