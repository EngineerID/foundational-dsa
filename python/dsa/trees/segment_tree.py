# Trees — Segment Tree (range sum)

"""Range-sum segment tree with point updates.

Technique: Segment tree
Invariant: Each node stores aggregate over its index interval.
build/update/query: Time O(log n); Space O(n).
"""


class SegmentTree:
    """Sum segment tree over a fixed initial array (point set / range sum)."""

    def __init__(self, arr: list[int]) -> None:
        """Builds from initial values.

        Time: O(n); Space: O(n).
        """
        self._n = len(arr)
        self._tree = [0] * (4 * self._n if self._n else 1)
        if self._n:
            self._build(arr, 1, 0, self._n - 1)

    def update(self, index: int, value: int) -> None:
        """Sets ``arr[index]`` to ``value``.

        Time: O(log n); Space: O(1).
        """
        if index < 0 or index >= self._n:
            raise IndexError(index)
        self._update(1, 0, self._n - 1, index, value)

    def range_sum(self, left: int, right: int) -> int:
        """Inclusive range sum on ``[left, right]``.

        Time: O(log n); Space: O(1).
        """
        if self._n == 0:
            return 0
        if left < 0 or right >= self._n or left > right:
            raise IndexError((left, right))
        return self._query(1, 0, self._n - 1, left, right)

    def _build(self, arr: list[int], node: int, start: int, end: int) -> None:
        if start == end:
            self._tree[node] = arr[start]
            return
        mid = (start + end) // 2
        self._build(arr, node * 2, start, mid)
        self._build(arr, node * 2 + 1, mid + 1, end)
        self._tree[node] = self._tree[node * 2] + self._tree[node * 2 + 1]

    def _update(self, node: int, start: int, end: int, idx: int, value: int) -> None:
        if start == end:
            self._tree[node] = value
            return
        mid = (start + end) // 2
        if idx <= mid:
            self._update(node * 2, start, mid, idx, value)
        else:
            self._update(node * 2 + 1, mid + 1, end, idx, value)
        self._tree[node] = self._tree[node * 2] + self._tree[node * 2 + 1]

    def _query(self, node: int, start: int, end: int, left: int, right: int) -> int:
        if right < start or end < left:
            return 0
        if left <= start and end <= right:
            return self._tree[node]
        mid = (start + end) // 2
        return self._query(node * 2, start, mid, left, right) + self._query(
            node * 2 + 1, mid + 1, end, left, right
        )
