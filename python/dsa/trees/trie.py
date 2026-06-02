# Trees — Trie (prefix tree)

"""Prefix tree for string keys with prefix search.

Technique: Trie (R-way tree)
Invariant: Path characters spell prefix to node.
insert/search/startsWith: Time O(L) key length; Space O(total chars).
"""


class _Node:
    def __init__(self) -> None:
        self.end = False
        self.children: list[_Node | None] = [None] * 26


class Trie:
    """Prefix tree for lowercase a-z strings."""

    def __init__(self) -> None:
        self._root = _Node()

    def insert(self, word: str) -> None:
        """Inserts a word.

        Time: O(L); Space: O(L).
        """
        cur = self._root
        for ch in word:
            idx = ord(ch) - ord("a")
            if cur.children[idx] is None:
                cur.children[idx] = _Node()
            cur = cur.children[idx]
        cur.end = True

    def search(self, word: str) -> bool:
        """Returns true if the word exists.

        Time: O(L); Space: O(1).
        """
        node = self._traverse(word, False)
        return node is not None and node.end

    def starts_with(self, prefix: str) -> bool:
        """Returns true if any word has the given prefix.

        Time: O(L); Space: O(1).
        """
        return self._traverse(prefix, True) is not None

    def _traverse(self, s: str, prefix_only: bool) -> _Node | None:
        cur = self._root
        for ch in s:
            idx = ord(ch) - ord("a")
            if idx < 0 or idx >= 26:
                return None
            if cur.children[idx] is None:
                return None
            cur = cur.children[idx]
        return cur
