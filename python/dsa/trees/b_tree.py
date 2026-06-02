# Trees — B-Tree

"""Disk-oriented multi-way search tree with bounded node fanout.

Technique: B-tree
Invariant: All leaves same depth; keys per node between t and 2t-1 (except root).
search/insert/delete: Time O(log_t n); Space O(n).
"""


class _Node:
    def __init__(self) -> None:
        self.leaf = False
        self.keys: list[int] = []
        self.children: list[_Node] = []


class BTree:
    """B-tree for integer keys."""

    def __init__(self, t: int) -> None:
        """Creates a B-tree with minimum degree t (t >= 2).

        Time: O(1); Space: O(1).
        """
        if t < 2:
            raise ValueError("t must be >= 2")
        self._min_degree = t
        self._root = _Node()
        self._root.leaf = True

    def search(self, key: int) -> bool:
        """Searches for a key.

        Time: O(log n); Space: O(1).
        """
        return self._search(self._root, key)

    def insert(self, key: int) -> None:
        """Inserts a key.

        Time: O(log n); Space: O(1).
        """
        root = self._root
        if len(root.keys) == 2 * self._min_degree - 1:
            new_root = _Node()
            new_root.leaf = False
            new_root.children.append(root)
            self._split_child(new_root, 0)
            self._root = new_root
        self._insert_non_full(self._root, key)

    def _search(self, node: _Node, key: int) -> bool:
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        if i < len(node.keys) and key == node.keys[i]:
            return True
        if node.leaf:
            return False
        return self._search(node.children[i], key)

    def _insert_non_full(self, node: _Node, key: int) -> None:
        i = len(node.keys) - 1
        if node.leaf:
            node.keys.append(key)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            if len(node.children[i].keys) == 2 * self._min_degree - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            self._insert_non_full(node.children[i], key)

    def _split_child(self, parent: _Node, index: int) -> None:
        full = parent.children[index]
        new_node = _Node()
        new_node.leaf = full.leaf
        t = self._min_degree
        for j in range(t - 1):
            new_node.keys.append(full.keys[j + t])
        if not full.leaf:
            for j in range(t):
                new_node.children.append(full.children[j + t])
            del full.children[t:]
        mid = full.keys[t - 1]
        del full.keys[t - 1:]
        parent.keys.insert(index, mid)
        parent.children.insert(index + 1, new_node)
