# Trees — Binary tree level order traversal

"""
Level-order traversal from a heap-style level array (None = missing child).
Technique: BFS with level boundaries
Invariant: Each queue layer is one tree level.
level_order: Time O(n); Space O(n).
"""

from __future__ import annotations

from collections import deque


class _TreeNode:
    __slots__ = ("val", "left", "right")

    def __init__(self, val: int) -> None:
        self.val = val
        self.left: _TreeNode | None = None
        self.right: _TreeNode | None = None


def _build(values: list[int | None]) -> _TreeNode | None:
    if not values or values[0] is None:
        return None
    root = _TreeNode(int(values[0]))
    q: deque[_TreeNode] = deque([root])
    i = 1
    while q and i < len(values):
        node = q.popleft()
        if i < len(values) and values[i] is not None:
            node.left = _TreeNode(int(values[i]))
            q.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = _TreeNode(int(values[i]))
            q.append(node.right)
        i += 1
    return root


def level_order(values: list[int | None] | None) -> list[list[int]]:
    """Return values grouped by depth left-to-right."""
    if not values:
        return []
    root = _build(values)
    if root is None:
        return []
    out: list[list[int]] = []
    q: deque[_TreeNode] = deque([root])
    while q:
        level: list[int] = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        out.append(level)
    return out
