# Practice — Trie insert / search / prefix

from dsa.trees.trie import Trie


class TriePractice:
    def __init__(self) -> None:
        self._trie = Trie()

    def insert(self, word: str) -> None:
        self._trie.insert(word)

    def search(self, word: str) -> bool:
        return self._trie.search(word)

    def starts_with(self, prefix: str) -> bool:
        return self._trie.starts_with(prefix)
