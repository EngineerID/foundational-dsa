# Trees — Red-Black Tree

"""Balanced BST with red-black invariants.

Technique: Red-black tree
Invariant: Black-height equal; no consecutive red nodes.
search/insert: Time O(log n); Space O(n).
"""

from __future__ import annotations


class _Node:
    __slots__ = ("key", "value", "left", "right", "parent", "red")

    def __init__(self, key: int, value: int) -> None:
        self.key = key
        self.value = value
        self.left: _Node | None = None
        self.right: _Node | None = None
        self.parent: _Node | None = None
        self.red = True


class RedBlackTree:
    """Integer-key red-black tree."""

    def __init__(self) -> None:
        self.root: _Node | None = None

    def search(self, key: int) -> int | None:
        """Returns value or None. Time O(log n)."""
        cur = self.root
        while cur:
            if key == cur.key:
                return cur.value
            cur = cur.left if key < cur.key else cur.right
        return None

    def insert(self, key: int, value: int) -> None:
        """Inserts or updates. Time O(log n)."""
        node = _Node(key, value)
        parent: _Node | None = None
        cur: _Node | None = self.root
        while cur:
            parent = cur
            if key < cur.key:
                cur = cur.left
            elif key > cur.key:
                cur = cur.right
            else:
                cur.value = value
                return
        node.parent = parent
        if parent is None:
            self.root = node
        elif key < parent.key:
            parent.left = node
        else:
            parent.right = node
        self._fix_insert(node)

    def _fix_insert(self, z: _Node) -> None:
        while z.parent and z.parent.red:
            gp = z.parent.parent
            if gp is None:
                break
            if z.parent == gp.left:
                y = gp.right
                if y and y.red:
                    gp.red = True
                    z.parent.red = False
                    y.red = False
                    z = gp
                else:
                    if z == z.parent.right:
                        z = z.parent
                        self._rotate_left(z)
                    z.parent.red = False
                    gp.red = True
                    self._rotate_right(gp)
            else:
                y = gp.left
                if y and y.red:
                    gp.red = True
                    z.parent.red = False
                    y.red = False
                    z = gp
                else:
                    if z == z.parent.left:
                        z = z.parent
                        self._rotate_right(z)
                    z.parent.red = False
                    gp.red = True
                    self._rotate_left(gp)
        if self.root:
            self.root.red = False

    def _rotate_left(self, x: _Node) -> None:
        y = x.right
        if y is None:
            return
        x.right = y.left
        if y.left:
            y.left.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        y.left = x
        x.parent = y

    def _rotate_right(self, x: _Node) -> None:
        y = x.left
        if y is None:
            return
        x.left = y.right
        if y.right:
            y.right.parent = x
        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.right:
            x.parent.right = y
        else:
            x.parent.left = y
        y.right = x
        x.parent = y
