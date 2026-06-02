# Trees — Order-Statistic Tree

"""BST augmented with subtree sizes for rank and select.

Technique: Order-statistic tree augmentation
Invariant: size field equals 1 + left.size + right.size.
rank/select/insert/delete: Time O(log n); Space O(n).
"""

from __future__ import annotations

from typing import Generic, TypeVar

from dsa.trees.bst import BSTNode

K = TypeVar("K")
V = TypeVar("V")


class OrderStatisticTree(Generic[K, V]):
    """BST augmented with subtree sizes."""

    def __init__(self) -> None:
        self.root: BSTNode[K, V] | None = None

    def insert(self, key: K, value: V) -> None:
        """Inserts a key-value pair.

        Time: O(h); Space: O(1).
        """
        self.root = self._insert(self.root, key, value)

    def select(self, k: int) -> K:
        """Returns the k-th smallest key (1-based).

        Time: O(h); Space: O(1).
        """
        if k < 1 or k > self._size(self.root):
            raise ValueError("k out of range")
        return self._select(self.root, k)

    def rank(self, key: K) -> int:
        """Returns the rank of key (1-based count of keys less than or equal).

        Time: O(h); Space: O(1).
        """
        return self._rank(self.root, key)

    def _insert(self, node: BSTNode[K, V] | None, key: K, value: V) -> BSTNode[K, V]:
        if node is None:
            return BSTNode(key, value)
        cmp = (key > node.key) - (key < node.key)
        if cmp < 0:
            node.left = self._insert(node.left, key, value)
        elif cmp > 0:
            node.right = self._insert(node.right, key, value)
        else:
            node.value = value
        node.subtree_size = self._size(node.left) + self._size(node.right) + 1
        return node

    def _select(self, node: BSTNode[K, V], k: int) -> K:
        left_size = self._size(node.left)
        if k <= left_size:
            return self._select(node.left, k)
        if k == left_size + 1:
            return node.key
        return self._select(node.right, k - left_size - 1)

    def _rank(self, node: BSTNode[K, V] | None, key: K) -> int:
        if node is None:
            return 0
        cmp = (key > node.key) - (key < node.key)
        if cmp < 0:
            return self._rank(node.left, key)
        if cmp > 0:
            return self._size(node.left) + 1 + self._rank(node.right, key)
        return self._size(node.left) + 1

    @staticmethod
    def _size(node: BSTNode[K, V] | None) -> int:
        return 0 if node is None else node.subtree_size
