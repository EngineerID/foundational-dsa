package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ZAlgorithmTest {

    @Test
    void searchAndEmptyPattern() {
        assertEquals(0, ZAlgorithm.search("ababcababa", "aba"));
        assertEquals(0, ZAlgorithm.search("abc", ""));
        assertEquals(-1, ZAlgorithm.search("", "a"));
    }

    @Test
    void zArray() {
        assertEquals(7, ZAlgorithm.zArray("aabcaab")[0]);
    }
}
