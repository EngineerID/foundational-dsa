# Practice — Serialize / deserialize binary tree (level-order)

from __future__ import annotations

from collections import deque


class TreeNode:
    def __init__(
        self, val: int = 0, left: TreeNode | None = None, right: TreeNode | None = None
    ) -> None:
        self.val = val
        self.left = left
        self.right = right


def _build(values: list[int | None]) -> TreeNode | None:
    if not values or values[0] is None:
        return None
    root = TreeNode(int(values[0]))
    q: deque[TreeNode] = deque([root])
    i = 1
    while q and i < len(values):
        node = q.popleft()
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(int(values[i]))
            q.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(int(values[i]))
            q.append(node.right)
        i += 1
    return root


def _level_order(root: TreeNode | None) -> list[int | None]:
    if root is None:
        return []
    out: list[int | None] = []
    q: deque[TreeNode | None] = deque([root])
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
    """Encode heap-style level-order array as comma-separated tokens (# = null).

    Time: O(n); Space O(n).
    """
    parts: list[str] = []
    for v in values:
        parts.append("#" if v is None else str(v))
    while parts and parts[-1] == "#":
        parts.pop()
    return ",".join(parts)


def deserialize(data: str) -> list[int | None]:
    """Decode string back to level-order values (trim trailing nulls).

    Time: O(n); Space O(n).
    """
    if not data:
        return []
    tokens = data.split(",")
    vals: list[int | None] = []
    for t in tokens:
        vals.append(None if t == "#" else int(t))
    root = _build(vals)
    return _level_order(root)
