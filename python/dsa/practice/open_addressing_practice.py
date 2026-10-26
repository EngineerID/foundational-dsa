from dsa.hashing.open_addressing import HashTableOpenAddressing, ProbingStrategy


class OpenAddressingPractice:
    def __init__(self) -> None:
        self._table: HashTableOpenAddressing[int, str] = HashTableOpenAddressing(
            ProbingStrategy.LINEAR
        )

    def put(self, key: int, value: str) -> None:
        self._table.put(key, value)

    def get(self, key: int) -> str | None:
        return self._table.get(key)

    def remove(self, key: int) -> bool:
        return self._table.remove(key)
