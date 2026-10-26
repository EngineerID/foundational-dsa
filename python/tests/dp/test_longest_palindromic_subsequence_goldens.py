import json
from pathlib import Path

from dsa.dp.longest_palindromic_subsequence import length

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3]
        / "tools"
        / "longest-palindromic-subsequence-goldens.json"
    ).read_text()
)


def test_longest_palindromic_subsequence_shared_goldens():
    for case in GOLDENS:
        assert length(case["s"]) == case["expected"]
