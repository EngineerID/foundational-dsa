from dsa.heaps.priority_queue import PriorityQueue


def extract_order(inserts: list[int]) -> list[int]:
    pq = PriorityQueue()
    for v in inserts:
        pq.insert(v)
    out: list[int] = []
    while pq.size() > 0:
        out.append(pq.extract_min())
    return out
