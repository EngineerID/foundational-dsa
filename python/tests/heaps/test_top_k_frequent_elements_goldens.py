import json
from pathlib import Path

import pytest

from dsa.heaps.top_k_frequent_elements import top_k_frequent

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "top-k-frequent-elements-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("nums")))
def test_shared_goldens(case):
    if case.get("expectError"):
        with pytest.raises(ValueError):
            top_k_frequent(case["nums"], case["k"])
        return
    assert top_k_frequent(case["nums"], case["k"]) == case["expected"]
