from dsa.trees.treap import Treap


class TreapPractice:
    def __init__(self, seed: int) -> None:
        self._treap = Treap(seed)

    def insert(self, key: int, value: int) -> None:
        self._treap.insert(key, value)

    def search(self, key: int) -> int | None:
        return self._treap.search(key)
