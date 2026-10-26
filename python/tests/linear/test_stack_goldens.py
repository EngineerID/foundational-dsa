import json
from pathlib import Path

from dsa.linear.stack import Stack

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "stack-goldens.json").read_text()
)


def test_stack_shared_goldens():
    for case in GOLDENS:
        stack = Stack()
        for value in case["push"]:
            stack.push(value)
        pops = [stack.pop() for _ in case["popValues"]]
        assert pops == case["popValues"]
        if case.get("peek") is None or case.get("empty"):
            assert stack.is_empty()
            try:
                stack.peek()
                raise AssertionError("expected empty stack peek to fail")
            except Exception:
                pass
        else:
            assert stack.peek() == case["peek"]
