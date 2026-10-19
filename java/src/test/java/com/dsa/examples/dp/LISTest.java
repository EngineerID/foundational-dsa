package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LISTest {

    @Test
    void length() {
        assertEquals(0, LIS.length(new int[0]));
        assertEquals(4, LIS.length(new int[] {10, 9, 2, 5, 3, 7, 101, 18}));
    }
}
