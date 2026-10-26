# Practice — Binary tree level order traversal

from __future__ import annotations

from collections import deque


class TreeNode:
    def __init__(
        self, val: int = 0, left: TreeNode | None = None, right: TreeNode | None = None
    ) -> None:
        self.val = val
        self.left = left
        self.right = right


def build_tree_level_order(values: list[int | None]) -> TreeNode | None:
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


def level_order(values: list[int | None]) -> list[list[int]]:
    """Level-order traversal from a heap-style array (null = missing child).

    Time: O(n); Space O(n).
    """
    root = build_tree_level_order(values)
    if root is None:
        return []
    out: list[list[int]] = []
    q: deque[TreeNode] = deque([root])
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
