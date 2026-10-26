import json
from pathlib import Path

import pytest

from dsa.dp import max_subarray

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "maximum-subarray-goldens.json").read_text(
        encoding="utf-8",
    ),
)


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("nums")))
def test_maximum_subarray_shared_goldens(case):
    if case.get("expectError"):
        with pytest.raises(ValueError):
            max_subarray.max_subarray(case["nums"])
        return
    assert max_subarray.max_subarray(case["nums"]) == case["expected"]
