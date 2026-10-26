import json
from pathlib import Path

from dsa.strings.aho_corasick import search

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "aho-corasick-goldens.json").read_text()
)


def test_aho_corasick_shared_goldens():
    for case in GOLDENS:
        assert search(case["text"], case["patterns"]) == case["hits"]
