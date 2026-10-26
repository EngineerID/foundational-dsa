from dsa.trees.b_tree import BTree


class BTreePractice:
    def __init__(self, t: int) -> None:
        self._tree = BTree(t)

    def insert(self, key: int) -> None:
        self._tree.insert(key)

    def search(self, key: int) -> bool:
        return self._tree.search(key)
