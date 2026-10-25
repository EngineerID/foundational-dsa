package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class SuffixArrayTest {

    @Test
    void build() {
        assertArrayEquals(new int[0], SuffixArray.build(""));
        assertArrayEquals(new int[] {5, 3, 1, 0, 4, 2}, SuffixArray.build("banana"));
    }
}
