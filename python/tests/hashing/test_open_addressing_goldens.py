import json
from pathlib import Path

from dsa.hashing.open_addressing import HashTableOpenAddressing

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "open-addressing-goldens.json").read_text()
)


def test_open_addressing_shared_goldens():
    for case in GOLDENS:
        table = HashTableOpenAddressing()
        for op, key, value in case["ops"]:
            assert op == "put"
            table.put(key, value)
        g = case["get"]
        assert table.get(g["key"]) == g["value"]
        r = case["remove"]
        assert table.remove(r["key"]) == r["present"]
        after = case["getAfterRemove"]
        assert table.get(after["key"]) == after["value"]
