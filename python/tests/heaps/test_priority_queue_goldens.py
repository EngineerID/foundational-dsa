import json
from pathlib import Path

from dsa.heaps.priority_queue import PriorityQueue

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "priority-queue-goldens.json").read_text()
)


def test_priority_queue_shared_goldens():
    for case in GOLDENS:
        pq = PriorityQueue()
        for v in case["inserts"]:
            pq.insert(v)
        order = []
        while pq.size() > 0:
            order.append(pq.extract_min())
        assert order == case["extractOrder"]
