import json
from pathlib import Path

from dsa.linear.deque import Deque

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "deque-goldens.json").read_text()
)


def test_deque_shared_goldens():
    for case in GOLDENS:
        dq = Deque()
        for v in case["addLast"]:
            dq.add_last(v)
        for v in case["addFirst"]:
            dq.add_first(v)
        assert dq.remove_first() == case["removeFirst"]
        assert dq.remove_last() == case["removeLast"]
        assert dq.remove_first() == case["remainingValue"]
        assert dq.is_empty()
