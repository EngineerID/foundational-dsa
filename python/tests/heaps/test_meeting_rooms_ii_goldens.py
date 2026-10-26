import json
from pathlib import Path

import pytest

from dsa.heaps.meeting_rooms_ii import min_meeting_rooms

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "meeting-rooms-ii-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("intervals")))
def test_shared_goldens(case):
    assert min_meeting_rooms(case["intervals"]) == case["expected"]
