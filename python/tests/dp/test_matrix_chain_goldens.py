import json
from pathlib import Path

from dsa.dp.matrix_chain import min_multiplications

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "matrix-chain-goldens.json").read_text()
)


def test_matrix_chain_shared_goldens():
    for case in GOLDENS:
        assert min_multiplications(case["dimensions"]) == case["expected"]
