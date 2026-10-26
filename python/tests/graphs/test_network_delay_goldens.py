import json
from pathlib import Path

import pytest

from dsa.graphs.network_delay import network_delay

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "network-delay-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("n")))
def test_shared_goldens(case):
    assert network_delay(case["n"], case["times"], case["source"]) == case["expected"]
