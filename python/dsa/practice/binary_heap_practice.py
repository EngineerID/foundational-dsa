# Practice — Binary min-heap extract order

from dsa.heaps.binary_heap import BinaryHeap


def extract_order(inserts: list[int]) -> list[int]:
    heap = BinaryHeap()
    for v in inserts:
        heap.insert(v)
    out: list[int] = []
    while heap.size() > 0:
        out.append(heap.extract_min())
    return out
