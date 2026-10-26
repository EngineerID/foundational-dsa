import json
from pathlib import Path

from dsa.linear.queue import Queue

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "queue-goldens.json").read_text()
)


def test_queue_shared_goldens():
    for case in GOLDENS:
        q = Queue()
        for v in case["enqueue"]:
            q.enqueue(v)
        for expected in case["dequeueValues"]:
            assert q.dequeue() == expected
        if case.get("peek") is None or case.get("empty"):
            assert q.is_empty()
            try:
                q.peek()
                raise AssertionError("expected empty queue peek to fail")
            except Exception:
                pass
        else:
            assert q.peek() == case["peek"]
