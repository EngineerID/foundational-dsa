import json
from pathlib import Path

import pytest

from dsa.sorting.merge_intervals import merge_intervals

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "merge-intervals-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("intervals")))
def test_shared_goldens(case):
    assert merge_intervals(case["intervals"]) == case["expected"]
