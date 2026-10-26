import json
from pathlib import Path

import pytest

from dsa.trees.level_order_traversal import level_order

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "level-order-traversal-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(len(c.get("values", []))))
def test_shared_goldens(case):
    assert level_order(case["values"]) == case["expected"]
