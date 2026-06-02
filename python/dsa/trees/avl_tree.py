# Trees — AVL Tree (balanced BST)

"""Self-balancing BST with height-balance after insert/delete.

Technique: AVL tree (rotations)
Invariant: Balance factor in {-1,0,1} at every node.
search/insert/delete: Time O(log n); Space O(n).
"""

from __future__ import annotations

from typing import TypeVar

from dsa.trees.bst import BST, BSTNode

K = TypeVar("K")
V = TypeVar("V")


class AVLTree(BST[K, V]):
    """AVL tree extending BST with rebalancing rotations."""

    def insert(self, key: K, value: V) -> None:
        """Inserts a key-value pair and rebalances.

        Time: O(log n); Space: O(1).
        """
        self.root = self._insert(self.root, key, value)

    def delete(self, key: K) -> None:
        """Deletes a key and rebalances.

        Time: O(log n); Space: O(1).
        """
        self.root = self._delete(self.root, key)

    def _insert(self, node: BSTNode[K, V] | None, key: K, value: V) -> BSTNode[K, V]:
        if node is None:
            return BSTNode(key, value)
        cmp = (key > node.key) - (key < node.key)
        if cmp < 0:
            node.left = self._insert(node.left, key, value)
            if node.left is not None:
                node.left.parent = node
        elif cmp > 0:
            node.right = self._insert(node.right, key, value)
            if node.right is not None:
                node.right.parent = node
        else:
            node.value = value
            return node
        return self._rebalance(node)

    def _delete(self, node: BSTNode[K, V] | None, key: K) -> BSTNode[K, V] | None:
        if node is None:
            return None
        cmp = (key > node.key) - (key < node.key)
        if cmp < 0:
            node.left = self._delete(node.left, key)
            if node.left is not None:
                node.left.parent = node
        elif cmp > 0:
            node.right = self._delete(node.right, key)
            if node.right is not None:
                node.right.parent = node
        else:
            if node.left is None or node.right is None:
                temp = node.left if node.left is not None else node.right
                if temp is not None:
                    temp.parent = node.parent
                return temp
            succ = node.right
            while succ.left is not None:
                succ = succ.left
            node.key = succ.key
            node.value = succ.value
            node.right = self._delete(node.right, succ.key)
            if node.right is not None:
                node.right.parent = node
        return self._rebalance(node)

    def _height(self, node: BSTNode[K, V] | None) -> int:
        if node is None:
            return -1
        return 1 + max(self._height(node.left), self._height(node.right))

    def _balance_factor(self, node: BSTNode[K, V]) -> int:
        return self._height(node.left) - self._height(node.right)

    def _rebalance(self, node: BSTNode[K, V]) -> BSTNode[K, V]:
        bf = self._balance_factor(node)
        if bf > 1:
            if self._balance_factor(node.left) < 0:
                node.left = self._rotate_left(node.left)
            return self._rotate_right(node)
        if bf < -1:
            if self._balance_factor(node.right) > 0:
                node.right = self._rotate_right(node.right)
            return self._rotate_left(node)
        return node

    def _rotate_right(self, y: BSTNode[K, V]) -> BSTNode[K, V]:
        x = y.left
        assert x is not None
        t2 = x.right
        x.right = y
        y.left = t2
        x.parent = y.parent
        y.parent = x
        if t2 is not None:
            t2.parent = y
        return x

    def _rotate_left(self, x: BSTNode[K, V]) -> BSTNode[K, V]:
        y = x.right
        assert y is not None
        t2 = y.left
        y.left = x
        x.right = t2
        y.parent = x.parent
        x.parent = y
        if t2 is not None:
            t2.parent = x
        return y
