import json
from pathlib import Path

import pytest

from dsa.linear.valid_parentheses import is_valid_parentheses

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "valid-parentheses-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: c["s"])
def test_shared_goldens(case):
    assert is_valid_parentheses(case["s"]) is case["expected"]
