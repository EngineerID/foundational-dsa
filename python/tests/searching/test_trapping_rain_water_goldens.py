import json
from pathlib import Path

import pytest

from dsa.searching.trapping_rain_water import trap

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "trapping-rain-water-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("height")))
def test_shared_goldens(case):
    assert trap(case["height"]) == case["expected"]
