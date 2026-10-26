import json
from pathlib import Path

from dsa.trees.lca_binary_lifting import LCABinaryLifting

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "lca-binary-lifting-goldens.json").read_text()
)


def test_lca_binary_lifting_shared_goldens():
    for case in GOLDENS:
        lca = LCABinaryLifting(case["parent"])
        for u, v, expected in case["queries"]:
            assert lca.query(u, v) == expected
