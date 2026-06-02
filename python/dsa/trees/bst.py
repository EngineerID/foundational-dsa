# Trees — Binary Search Tree

"""Binary search tree for ordered key storage.

Technique: Binary search tree
Invariant: Left subtree keys < node < right subtree keys.
search/insert/delete: Time O(h) height; Space O(n).
"""

from __future__ import annotations

from typing import Generic, TypeVar

K = TypeVar("K")
V = TypeVar("V")


class BSTNode(Generic[K, V]):
    """Node for binary search trees and augmentations."""

    def __init__(self, key: K, value: V) -> None:
        self.key = key
        self.value = value
        self.left: BSTNode[K, V] | None = None
        self.right: BSTNode[K, V] | None = None
        self.parent: BSTNode[K, V] | None = None
        self.subtree_size = 1
        self.max_end = 0


class BST(Generic[K, V]):
    """Binary search tree with parent pointers."""

    def __init__(self) -> None:
        self.root: BSTNode[K, V] | None = None

    def insert(self, key: K, value: V) -> None:
        """Inserts or updates key-value pair.

        Time: O(h); Space: O(1).
        """
        if self.root is None:
            self.root = BSTNode(key, value)
            return
        cur = self.root
        while True:
            cmp = (key > cur.key) - (key < cur.key)
            if cmp == 0:
                cur.value = value
                return
            if cmp < 0:
                if cur.left is None:
                    cur.left = BSTNode(key, value)
                    cur.left.parent = cur
                    return
                cur = cur.left
            else:
                if cur.right is None:
                    cur.right = BSTNode(key, value)
                    cur.right.parent = cur
                    return
                cur = cur.right

    def search(self, key: K) -> V | None:
        """Searches for a key; returns value or None.

        Time: O(h); Space: O(1).
        """
        node = self._find_node(key)
        return None if node is None else node.value

    def delete(self, key: K) -> None:
        """Deletes a key if present.

        Time: O(h); Space: O(1).
        """
        node = self._find_node(key)
        if node is None:
            return
        if node.left is not None and node.right is not None:
            succ = node.right
            while succ.left is not None:
                succ = succ.left
            node.key = succ.key
            node.value = succ.value
            node = succ
        child = node.left if node.left is not None else node.right
        if node.parent is None:
            self.root = child
        elif node is node.parent.left:
            node.parent.left = child
        else:
            node.parent.right = child
        if child is not None:
            child.parent = node.parent

    def successor(self, key: K) -> K | None:
        """Returns the successor key, or None.

        Time: O(h); Space: O(1).
        """
        node = self._find_node(key)
        if node is None:
            return None
        if node.right is not None:
            node = node.right
            while node.left is not None:
                node = node.left
            return node.key
        parent = node.parent
        while parent is not None and node is parent.right:
            node = parent
            parent = parent.parent
        return None if parent is None else parent.key

    def predecessor(self, key: K) -> K | None:
        """Returns the predecessor key, or None.

        Time: O(h); Space: O(1).
        """
        node = self._find_node(key)
        if node is None:
            return None
        if node.left is not None:
            node = node.left
            while node.right is not None:
                node = node.right
            return node.key
        parent = node.parent
        while parent is not None and node is parent.left:
            node = parent
            parent = parent.parent
        return None if parent is None else parent.key

    def in_order(self) -> list[K]:
        """In-order traversal keys.

        Time: O(n); Space: O(h).
        """
        out: list[K] = []
        self._in_order(self.root, out)
        return out

    def get_root(self) -> BSTNode[K, V] | None:
        return self.root

    def _find_node(self, key: K) -> BSTNode[K, V] | None:
        cur = self.root
        while cur is not None:
            cmp = (key > cur.key) - (key < cur.key)
            if cmp == 0:
                return cur
            cur = cur.left if cmp < 0 else cur.right
        return None

    def _in_order(self, node: BSTNode[K, V] | None, out: list[K]) -> None:
        if node is None:
            return
        self._in_order(node.left, out)
        out.append(node.key)
        self._in_order(node.right, out)
