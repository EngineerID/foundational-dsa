# Trees — Serialize and deserialize binary tree (level-order)

"""
Encode/decode a binary tree from heap-style level order (None = missing child).
Technique: BFS level-order with comma-separated tokens
Invariant: Trailing # tokens trimmed; round-trip restores the same level array.
serialize/deserialize: Time O(n); Space O(n).
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


def _level_order(root: _TreeNode | None) -> list[int | None]:
    if root is None:
        return []
    out: list[int | None] = []
    q: deque[_TreeNode | None] = deque([root])
    while q:
        node = q.popleft()
        if node is None:
            out.append(None)
            continue
        out.append(node.val)
        q.append(node.left)
        q.append(node.right)
    while out and out[-1] is None:
        out.pop()
    return out


def serialize(values: list[int | None]) -> str:
    """Encode level-order values as comma-separated tokens (# = null). Time: O(n); Space O(n)."""
    parts: list[str] = []
    for v in values:
        parts.append("#" if v is None else str(v))
    while parts and parts[-1] == "#":
        parts.pop()
    return ",".join(parts)


def deserialize(data: str) -> list[int | None]:
    """Decode a serialized string back to level-order values. Time: O(n); Space O(n)."""
    if not data:
        return []
    tokens = data.split(",")
    vals: list[int | None] = []
    for t in tokens:
        vals.append(None if t == "#" else int(t))
    root = _build(vals)
    return _level_order(root)
