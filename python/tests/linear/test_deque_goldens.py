import json
from pathlib import Path

from dsa.linear.deque import Deque

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "deque-goldens.json").read_text()
)


def test_deque_shared_goldens():
    for case in GOLDENS:
        dq = Deque()
        if case.get("empty") and not case["addLast"] and not case["addFirst"]:
            assert dq.is_empty()
            continue
        for v in case["addLast"]:
            dq.add_last(v)
        for v in case["addFirst"]:
            dq.add_first(v)
        if case.get("removeFirst") is not None:
            assert dq.remove_first() == case["removeFirst"]
        if case.get("removeLast") is not None:
            assert dq.remove_last() == case["removeLast"]
        if case.get("remainingValue") is not None:
            assert dq.remove_first() == case["remainingValue"]
        assert dq.is_empty()
