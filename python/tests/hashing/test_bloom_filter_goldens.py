import json
from pathlib import Path

from dsa.hashing.bloom_filter import BloomFilter

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "bloom-filter-goldens.json").read_text()
)


def test_bloom_filter_shared_goldens():
    for case in GOLDENS:
        bf = BloomFilter(case["expectedItems"], case["falsePositiveRate"])
        for item in case["add"]:
            bf.add(item)
        for q in case["queries"]:
            assert bf.might_contain(q["item"]) == q["expected"]
