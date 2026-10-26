// Graphs — Word search

package com.dsa.examples.graphs;

/**
 * Whether {@code word} exists in {@code board} using adjacent cells without reuse.
 * Technique: DFS backtracking
 * Invariant: Path prefix matches word; visited cells marked temporarily.
 * wordSearch: Time O(rows·cols·4^L); Space O(L).
 */
public final class WordSearch {

    private WordSearch() {
    }

    /**
     * {@code null} or empty word → {@code true}. Empty board with non-empty word → {@code false}.
     * Time: O(rows·cols·4^L); Space O(L).
     */
    public static boolean wordSearch(char[][] board, String word) {
        if (word == null || word.isEmpty()) {
            return true;
        }
        if (board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }
        int rows = board.length;
        int cols = board[0].length;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (dfs(board, word, r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean dfs(char[][] board, String word, int r, int c, int i) {
        if (i == word.length()) {
            return true;
        }
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] != word.charAt(i)) {
            return false;
        }
        char tmp = board[r][c];
        board[r][c] = '#';
        boolean found = dfs(board, word, r + 1, c, i + 1)
                || dfs(board, word, r - 1, c, i + 1)
                || dfs(board, word, r, c + 1, i + 1)
                || dfs(board, word, r, c - 1, i + 1);
        board[r][c] = tmp;
        return found;
    }
}
