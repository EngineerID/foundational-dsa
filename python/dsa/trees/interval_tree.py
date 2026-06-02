# Trees — Interval Tree

"""Interval tree (augmented BST by low endpoint, stores maxEnd).

overlap_search O(log n + k) typical.
"""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Interval:
    """Closed interval [low, high]."""

    low: int
    high: int

    def __post_init__(self) -> None:
        if self.low > self.high:
            raise ValueError("low > high")

    def overlaps(self, other: Interval) -> bool:
        return self.low <= other.high and other.low <= self.high


class _INode:
    def __init__(self, interval: Interval) -> None:
        self.interval = interval
        self.max_end = interval.high
        self.left: _INode | None = None
        self.right: _INode | None = None


class IntervalTree:
    """Interval tree for overlap queries."""

    def __init__(self) -> None:
        self.root: _INode | None = None

    def insert(self, interval: Interval) -> None:
        """Inserts an interval.

        Time: O(h); Space: O(1).
        """
        self.root = self._insert(self.root, interval)

    def overlap_search(self, query: Interval) -> list[Interval]:
        """Returns all intervals overlapping query.

        Time: O(log n + k); Space: O(k).
        """
        result: list[Interval] = []
        self._search(self.root, query, result)
        return result

    def _insert(self, node: _INode | None, interval: Interval) -> _INode:
        if node is None:
            return _INode(interval)
        if interval.low < node.interval.low:
            node.left = self._insert(node.left, interval)
        else:
            node.right = self._insert(node.right, interval)
        node.max_end = max(node.max_end, interval.high)
        if node.left is not None:
            node.max_end = max(node.max_end, node.left.max_end)
        if node.right is not None:
            node.max_end = max(node.max_end, node.right.max_end)
        return node

    def _search(self, node: _INode | None, query: Interval, result: list[Interval]) -> None:
        if node is None or node.max_end < query.low:
            return
        if node.left is not None:
            self._search(node.left, query, result)
        if node.interval.overlaps(query):
            result.append(node.interval)
        if node.right is not None and node.interval.low <= query.high:
            self._search(node.right, query, result)
