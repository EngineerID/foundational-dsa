import json
from pathlib import Path

from dsa.searching.reservoir_sampling import sample

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "reservoir-sampling-goldens.json").read_text(
        encoding="utf-8",
    ),
)


def test_reservoir_sampling_shared_goldens():
    for case in GOLDENS:
        assert sample(case["stream"], case["k"], case["seed"]) == case["expected"], case
