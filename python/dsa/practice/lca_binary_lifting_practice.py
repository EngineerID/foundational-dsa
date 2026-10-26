from dsa.trees.lca_binary_lifting import LCABinaryLifting


class LcaBinaryLiftingPractice:
    def __init__(self, parent: list[int]) -> None:
        self._lca = LCABinaryLifting(parent)

    def query(self, u: int, v: int) -> int:
        return self._lca.query(u, v)
