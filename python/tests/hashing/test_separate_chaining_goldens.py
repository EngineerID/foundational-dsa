import json
from pathlib import Path

from dsa.hashing.separate_chaining import HashTableChaining

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "separate-chaining-goldens.json").read_text()
)


def test_separate_chaining_shared_goldens():
    for case in GOLDENS:
        table = HashTableChaining()
        for op, key, value in case["ops"]:
            assert op == "put"
            table.put(key, value)
        g = case["get"]
        assert table.get(g["key"]) == g["value"]
        if "getMissing" in case:
            m = case["getMissing"]
            assert table.get(m["key"]) == m["value"]
