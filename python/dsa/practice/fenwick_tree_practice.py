from dsa.trees.fenwick_tree import FenwickTree


class FenwickTreePractice:
    def __init__(self, n: int) -> None:
        self._tree = FenwickTree(n)

    def add(self, index: int, delta: int) -> None:
        self._tree.add(index, delta)

    def prefix_sum(self, index: int) -> int:
        return self._tree.prefix_sum(index)

    def range_sum(self, left: int, right: int) -> int:
        return self._tree.range_sum(left, right)
