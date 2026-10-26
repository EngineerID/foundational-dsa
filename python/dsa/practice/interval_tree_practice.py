from dsa.trees.interval_tree import Interval, IntervalTree


class IntervalTreePractice:
    def __init__(self) -> None:
        self._tree = IntervalTree()

    def insert(self, low: int, high: int) -> None:
        self._tree.insert(Interval(low, high))

    def overlap_sorted(self, q_low: int, q_high: int) -> list[list[int]]:
        found = self._tree.overlap_search(Interval(q_low, q_high))
        return sorted([[i.low, i.high] for i in found])
