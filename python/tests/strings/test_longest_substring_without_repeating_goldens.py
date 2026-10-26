import json
from pathlib import Path

from dsa.strings import longest_substring_without_repeating

GOLDENS = json.loads(
    (
        Path(__file__).resolve().parents[3]
        / "tools"
        / "longest-substring-without-repeating-goldens.json"
    ).read_text(encoding="utf-8"),
)


def test_longest_substring_without_repeating_shared_goldens():
    for case in GOLDENS:
        assert (
            longest_substring_without_repeating.length_of_longest_substring(case["s"])
            == case["expected"]
        )
