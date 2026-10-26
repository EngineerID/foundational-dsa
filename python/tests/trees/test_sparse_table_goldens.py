import json
from pathlib import Path

from dsa.trees.sparse_table import SparseTable

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "sparse-table-goldens.json").read_text()
)


def test_sparse_table_shared_goldens():
    for case in GOLDENS:
        st = SparseTable(case["initial"])
        for left, right, expected in case["queries"]:
            assert st.query(left, right) == expected
