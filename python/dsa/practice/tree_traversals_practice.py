from dsa.trees.bst import BST
from dsa.trees import tree_traversals


class TreeTraversalsPractice:
    def __init__(self) -> None:
        self._tree: BST[int, str] = BST()

    def insert(self, key: int, value: str) -> None:
        self._tree.insert(key, value)

    def in_order(self) -> list[int]:
        return tree_traversals.in_order_recursive(self._tree.root)

    def pre_order(self) -> list[int]:
        return tree_traversals.pre_order_recursive(self._tree.root)

    def post_order(self) -> list[int]:
        return tree_traversals.post_order_recursive(self._tree.root)
