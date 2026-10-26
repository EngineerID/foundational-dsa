import json
from pathlib import Path

import pytest

from dsa.trees.serialize_binary_tree import deserialize, serialize

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "serialize-binary-tree-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("values")))
def test_shared_goldens(case):
    values = case["values"]
    expected = case["expected"]
    assert deserialize(serialize(values)) == expected
