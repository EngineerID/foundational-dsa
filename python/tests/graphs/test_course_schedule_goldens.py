import json
from pathlib import Path

import pytest

from dsa.graphs.course_schedule import can_finish

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "course-schedule-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: str(c.get("numCourses")))
def test_shared_goldens(case):
    assert can_finish(case["numCourses"], case["prerequisites"]) is case["expected"]
