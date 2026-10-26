// Practice — Word search

package com.dsa.examples.practice;

public final class WordSearch {

    private WordSearch() {
    }

    public static boolean exists(char[][] board, String word) {
        if (word.isEmpty()) {
            return true;
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
