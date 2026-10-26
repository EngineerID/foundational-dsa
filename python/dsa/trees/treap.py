# Trees — Treap

"""Randomized BST via heap priorities on keys.

Technique: Treap
Invariant: Heap order on priorities, BST order on keys.
search/insert: Time O(log n); Space O(n).
"""

from __future__ import annotations


class _Node:
    __slots__ = ("key", "value", "prio", "left", "right")

    def __init__(self, key: int, value: int, prio: int) -> None:
        self.key = key
        self.value = value
        self.prio = prio
        self.left: _Node | None = None
        self.right: _Node | None = None


class Treap:
    """Treap with integer keys."""

    def __init__(self, seed: int | None = None) -> None:
        self._state = (0 if seed is None else seed) & 0xFFFFFFFF
        self.root: _Node | None = None

    def _rand(self) -> int:
        self._state = (1664525 * self._state + 1013904223) & 0xFFFFFFFF
        return self._state % (1 << 30)

    def search(self, key: int) -> int | None:
        cur = self.root
        while cur:
            if key == cur.key:
                return cur.value
            cur = cur.left if key < cur.key else cur.right
        return None

    def insert(self, key: int, value: int) -> None:
        self.root = self._insert(self.root, key, value)

    def _insert(self, node: _Node | None, key: int, value: int) -> _Node | None:
        if node is None:
            return _Node(key, value, self._rand())
        if key == node.key:
            node.value = value
            return node
        if key < node.key:
            left = self._insert(node.left, key, value)
            node.left = left
            if left is not None and left.prio > node.prio:
                node = self._rotate_right(node)
        else:
            right = self._insert(node.right, key, value)
            node.right = right
            if right is not None and right.prio > node.prio:
                node = self._rotate_left(node)
        return node

    def _rotate_left(self, x: _Node) -> _Node:
        y = x.right
        if y is None:
            return x
        x.right = y.left
        y.left = x
        return y

    def _rotate_right(self, x: _Node) -> _Node:
        y = x.left
        if y is None:
            return x
        x.left = y.right
        y.right = x
        return y
