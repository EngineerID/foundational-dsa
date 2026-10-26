import json
from pathlib import Path

from dsa.unionfind.union_find import UnionFind

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "union-find-goldens.json").read_text()
)


def test_union_find_shared_goldens():
    for case in GOLDENS:
        uf = UnionFind(case["n"])
        for a, b in case["unions"]:
            uf.union(a, b)
        for q in case["connected"]:
            assert uf.connected(q["a"], q["b"]) == q["expected"]
