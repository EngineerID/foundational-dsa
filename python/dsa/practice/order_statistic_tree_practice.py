from dsa.trees.order_statistic_tree import OrderStatisticTree


class OrderStatisticTreePractice:
    def __init__(self) -> None:
        self._tree: OrderStatisticTree[int, str] = OrderStatisticTree()

    def insert(self, key: int, value: str) -> None:
        self._tree.insert(key, value)

    def select(self, k: int) -> int:
        return self._tree.select(k)

    def rank(self, key: int) -> int:
        return self._tree.rank(key)
