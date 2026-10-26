import json
from pathlib import Path

import pytest

from dsa.graphs.number_of_islands import num_islands

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "number-of-islands-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(len(c.get("grid", []))))
def test_shared_goldens(case):
    grid = [row[:] for row in case["grid"]]
    assert num_islands(grid) == case["expected"]
