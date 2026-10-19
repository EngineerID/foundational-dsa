# Trees — Sparse table (static RMQ)

"""Range minimum queries on a static array.

Technique: Sparse table
Invariant: st[k][i] is min on interval length 2^k starting at i.
query: Time O(1); Space O(n log n).
"""

from __future__ import annotations

import math


class SparseTable:
    """Immutable RMQ structure for minimum."""

    def __init__(self, arr: list[int]) -> None:
        """Builds sparse table. Time O(n log n); Space O(n log n)."""
        n = len(arr)
        if n == 0:
            self._log = 0
            self._st: list[list[int]] = []
            return
        log = int(math.log2(n)) + 1
        st = [arr[:]]
        for k in range(1, log):
            row: list[int] = []
            span = 1 << k
            half = span >> 1
            limit = n - span + 1
            prev = st[k - 1]
            for i in range(limit):
                row.append(min(prev[i], prev[i + half]))
            st.append(row)
        self._st = st
        self._log = log

    def query(self, left: int, right: int) -> int:
        """Inclusive range minimum. Time O(1)."""
        if left > right:
            raise ValueError("invalid range")
        length = right - left + 1
        k = length.bit_length() - 1
        row = self._st[k]
        return min(row[left], row[right - (1 << k) + 1])
