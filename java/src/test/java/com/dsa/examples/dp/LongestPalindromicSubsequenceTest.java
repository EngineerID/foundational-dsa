package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LongestPalindromicSubsequenceTest {

    @Test
    void length() {
        assertEquals(0, LongestPalindromicSubsequence.length(""));
        assertEquals(4, LongestPalindromicSubsequence.length("bbbab"));
        assertEquals(2, LongestPalindromicSubsequence.length("cbbd"));
    }
}
