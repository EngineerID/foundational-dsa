# Trees — Traversals (recursive + iterative)

"""Tree traversal utilities for binary trees.

Time: O(n) per traversal; Space: O(h) recursive, O(n) level-order.
"""

from __future__ import annotations

from typing import Generic, TypeVar

from dsa.trees.bst import BSTNode

K = TypeVar("K")
V = TypeVar("V")


def in_order_recursive(root: BSTNode[K, V] | None) -> list[K]:
    """In-order recursive.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    _in_order_rec(root, out)
    return out


def pre_order_recursive(root: BSTNode[K, V] | None) -> list[K]:
    """Pre-order recursive.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    _pre_order_rec(root, out)
    return out


def post_order_recursive(root: BSTNode[K, V] | None) -> list[K]:
    """Post-order recursive.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    _post_order_rec(root, out)
    return out


def in_order_iterative(root: BSTNode[K, V] | None) -> list[K]:
    """In-order iterative.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    stack: list[BSTNode[K, V]] = []
    cur = root
    while cur is not None or stack:
        while cur is not None:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        out.append(cur.key)
        cur = cur.right
    return out


def pre_order_iterative(root: BSTNode[K, V] | None) -> list[K]:
    """Pre-order iterative.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    if root is None:
        return out
    stack = [root]
    while stack:
        node = stack.pop()
        out.append(node.key)
        if node.right is not None:
            stack.append(node.right)
        if node.left is not None:
            stack.append(node.left)
    return out


def post_order_iterative(root: BSTNode[K, V] | None) -> list[K]:
    """Post-order iterative.

    Time: O(n); Space: O(h).
    """
    out: list[K] = []
    if root is None:
        return out
    stack = [root]
    out_stack: list[BSTNode[K, V]] = []
    while stack:
        node = stack.pop()
        out_stack.append(node)
        if node.left is not None:
            stack.append(node.left)
        if node.right is not None:
            stack.append(node.right)
    while out_stack:
        out.append(out_stack.pop().key)
    return out


def level_order(root: BSTNode[K, V] | None) -> list[K]:
    """Level-order (BFS).

    Time: O(n); Space: O(w) width.
    """
    out: list[K] = []
    if root is None:
        return out
    queue: list[BSTNode[K, V]] = [root]
    while queue:
        node = queue.pop(0)
        out.append(node.key)
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)
    return out


def _in_order_rec(node: BSTNode[K, V] | None, out: list[K]) -> None:
    if node is None:
        return
    _in_order_rec(node.left, out)
    out.append(node.key)
    _in_order_rec(node.right, out)


def _pre_order_rec(node: BSTNode[K, V] | None, out: list[K]) -> None:
    if node is None:
        return
    out.append(node.key)
    _pre_order_rec(node.left, out)
    _pre_order_rec(node.right, out)


def _post_order_rec(node: BSTNode[K, V] | None, out: list[K]) -> None:
    if node is None:
        return
    _post_order_rec(node.left, out)
    _post_order_rec(node.right, out)
    out.append(node.key)
