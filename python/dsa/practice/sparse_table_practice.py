from dsa.trees.sparse_table import SparseTable


class SparseTablePractice:
    def __init__(self, initial: list[int]) -> None:
        self._table = SparseTable(initial)

    def query(self, left: int, right: int) -> int:
        return self._table.query(left, right)
