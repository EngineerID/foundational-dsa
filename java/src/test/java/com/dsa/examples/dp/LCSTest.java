package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LCSTest {

    @Test
    void length() {
        assertEquals(0, LCS.length("", "abc"));
        assertEquals(3, LCS.length("abcde", "ace"));
    }
}
