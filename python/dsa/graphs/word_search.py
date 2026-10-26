# Graphs — Word search

"""
Whether word exists in board using adjacent cells without reuse.
Technique: DFS backtracking
Invariant: Path prefix matches word; visited cells marked temporarily.
word_search: Time O(rows·cols·4^L); Space O(L).
"""


def word_search(board: list[list[str]] | None, word: str | None) -> bool:
    """Empty word is True; empty board with non-empty word is False."""
    if not word:
        return True
    if not board or not board[0]:
        return False
    rows, cols = len(board), len(board[0])

    def dfs(r: int, c: int, i: int) -> bool:
        if i == len(word):
            return True
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[i]:
            return False
        tmp, board[r][c] = board[r][c], "#"
        found = (
            dfs(r + 1, c, i + 1)
            or dfs(r - 1, c, i + 1)
            or dfs(r, c + 1, i + 1)
            or dfs(r, c - 1, i + 1)
        )
        board[r][c] = tmp
        return found

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False
