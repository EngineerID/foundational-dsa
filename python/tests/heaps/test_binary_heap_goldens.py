import json
from pathlib import Path

from dsa.heaps.binary_heap import BinaryHeap

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "binary-heap-goldens.json").read_text()
)


def test_binary_heap_shared_goldens():
    for case in GOLDENS:
        if "inserts" in case:
            heap = BinaryHeap()
            for v in case["inserts"]:
                heap.insert(v)
            order = []
            while heap.size() > 0:
                order.append(heap.extract_min())
            assert order == case["extractOrder"]
        if "heapify" in case:
            h2 = BinaryHeap()
            h2.heapify(case["heapify"])
            assert h2.peek() == case["peek"]
            assert h2.extract_min() == case["extractMin"]
