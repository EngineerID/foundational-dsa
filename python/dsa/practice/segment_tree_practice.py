from dsa.trees.segment_tree import SegmentTree


class SegmentTreePractice:
    def __init__(self, initial: list[int]) -> None:
        self._tree = SegmentTree(initial)

    def range_sum(self, left: int, right: int) -> int:
        return self._tree.range_sum(left, right)

    def update(self, index: int, value: int) -> None:
        self._tree.update(index, value)
