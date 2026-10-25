package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ManacherTest {

    @Test
    void longestPalindromeLength() {
        assertEquals(0, Manacher.longestPalindromeLength(""));
        assertEquals(1, Manacher.longestPalindromeLength("a"));
        assertEquals(3, Manacher.longestPalindromeLength("babad"));
        assertEquals(10, Manacher.longestPalindromeLength("forgeeksskeegfor"));
    }
}
