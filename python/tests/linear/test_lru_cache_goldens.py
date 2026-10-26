import json
from pathlib import Path

from dsa.linear.lru_cache import LRUCache

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "lru-cache-goldens.json").read_text()
)


def test_lru_cache_shared_goldens():
    for case in GOLDENS:
        cache = LRUCache(case["capacity"])
        for step in case["steps"]:
            if step["op"] == "put":
                cache.put(step["key"], step["value"])
            else:
                assert cache.get(step["key"]) == step["expected"]
