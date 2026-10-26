# Trees — Fenwick Tree (Binary Indexed Tree)

"""Prefix sums and range sums with point updates.

Technique: Fenwick tree (binary indexed tree)
Invariant: BIT stores cumulative deltas for responsible ranges.
add/prefixSum/rangeSum: Time O(log n); Space O(n).
"""


class FenwickTree:
    """1-indexed Fenwick tree for prefix sums (0-based API)."""

    def __init__(self, n: int) -> None:
        """Creates a tree for ``n`` elements (all zero).

        Time: O(n); Space: O(n).
        """
        if n < 0:
            raise ValueError("n must be non-negative")
        self._n = n
        self._bit = [0] * (n + 1)

    def add(self, index: int, delta: int) -> None:
        """Adds ``delta`` at ``index``.

        Time: O(log n); Space: O(1).
        """
        if index < 0 or index >= self._n:
            raise IndexError(index)
        i = index + 1
        while i <= self._n:
            self._bit[i] += delta
            i += i & -i

    def prefix_sum(self, index: int) -> int:
        """Sum of ``[0..index]`` inclusive.

        Time: O(log n); Space: O(1).
        """
        if self._n == 0:
            return 0
        if index < 0 or index >= self._n:
            raise IndexError(index)
        i = index + 1
        total = 0
        while i > 0:
            total += self._bit[i]
            i -= i & -i
        return total

    def range_sum(self, left: int, right: int) -> int:
        """Inclusive range sum.

        Time: O(log n); Space: O(1).
        """
        if left > right:
            raise IndexError((left, right))
        if right < 0 or left >= self._n:
            raise IndexError((left, right))
        left_sum = self.prefix_sum(left - 1) if left > 0 else 0
        return self.prefix_sum(right) - left_sum
