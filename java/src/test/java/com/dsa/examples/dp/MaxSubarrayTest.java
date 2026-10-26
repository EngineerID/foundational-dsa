package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class MaxSubarrayTest {

    @Test
    void kadane() {
        assertEquals(6, MaxSubarray.maxSubarray(new int[] {-2, 1, -3, 4, -1, 2, 1, -5, 4}));
        assertEquals(-1, MaxSubarray.maxSubarray(new int[] {-2, -1}));
        assertThrows(IllegalArgumentException.class, () -> MaxSubarray.maxSubarray(new int[] {}));
    }
}
