from dsa.trees.bst import BST


class BstPractice:
    def __init__(self) -> None:
        self._tree = BST()

    def insert(self, key: int, value: str) -> None:
        self._tree.insert(key, value)

    def in_order_keys(self) -> list[int]:
        return self._tree.in_order()

    def search(self, key: int) -> str | None:
        return self._tree.search(key)
