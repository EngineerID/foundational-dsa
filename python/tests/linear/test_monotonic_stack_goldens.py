import json
from pathlib import Path

import pytest

from dsa.linear.monotonic_stack import next_greater_element

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "monotonic-stack-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("nums")))
def test_shared_goldens(case):
    if case.get("expectError"):
        with pytest.raises(ValueError):
            next_greater_element(case["nums"])
        return
    assert next_greater_element(case["nums"]) == case["expected"]
