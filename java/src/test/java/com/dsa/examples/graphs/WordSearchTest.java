package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class WordSearchTest {

    @Test
    void wordSearch() {
        char[][] board = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'},
        };
        assertTrue(WordSearch.wordSearch(board, "ABCCED"));
        assertFalse(WordSearch.wordSearch(board, "ABCD"));
    }
}
