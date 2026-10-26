import json
from pathlib import Path

from dsa.trees.trie import Trie

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "trie-goldens.json").read_text()
)


def test_trie_shared_goldens():
    for case in GOLDENS:
        trie = Trie()
        for w in case["inserts"]:
            trie.insert(w)
        for row in case["search"]:
            assert trie.search(row["word"]) == row["expected"]
        for row in case["startsWith"]:
            assert trie.starts_with(row["prefix"]) == row["expected"]
