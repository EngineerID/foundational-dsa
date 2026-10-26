from dsa.trees.red_black_tree import RedBlackTree


class RedBlackTreePractice:
    def __init__(self) -> None:
        self._tree = RedBlackTree()

    def insert(self, key: int, value: int) -> None:
        self._tree.insert(key, value)

    def search(self, key: int) -> int | None:
        return self._tree.search(key)
