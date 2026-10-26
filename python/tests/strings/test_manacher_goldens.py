import json
from pathlib import Path

from dsa.strings.manacher import longest_palindrome_length

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "manacher-goldens.json").read_text()
)


def test_manacher_shared_goldens():
    for case in GOLDENS:
        assert longest_palindrome_length(case["s"]) == case["expected"]
