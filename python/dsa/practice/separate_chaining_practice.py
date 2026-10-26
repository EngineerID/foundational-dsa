from dsa.hashing.separate_chaining import HashTableChaining


class SeparateChainingPractice:
    def __init__(self) -> None:
        self._table: HashTableChaining[str, int] = HashTableChaining()

    def put(self, key: str, value: int) -> None:
        self._table.put(key, value)

    def get(self, key: str) -> int | None:
        return self._table.get(key)
