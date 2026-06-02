package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class KMPTest {

    @Test
    void findsPattern() {
        assertEquals(0, KMP.search("ababcababa", "aba"));
    }

    @Test
    void notFound() {
        assertEquals(-1, KMP.search("hello", "world"));
    }

    @Test
    void emptyPattern() {
        assertEquals(0, KMP.search("abc", ""));
    }

    @Test
    void nullText() {
        assertEquals(-1, KMP.search(null, "a"));
    }
}
