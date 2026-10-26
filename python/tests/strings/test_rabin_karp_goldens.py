import json
from pathlib import Path

from dsa.strings.rabin_karp import search

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "rabin-karp-goldens.json").read_text()
)


def test_rabin_karp_shared_goldens():
    for case in GOLDENS:
        assert search(case["text"], case["pattern"]) == case["expected"]
