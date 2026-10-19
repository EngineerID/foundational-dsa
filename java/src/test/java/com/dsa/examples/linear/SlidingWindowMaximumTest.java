package com.dsa.examples.linear;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SlidingWindowMaximumTest {

    @Test
    void maxSlidingWindow() {
        assertArrayEquals(new int[] {3, 3, 5, 5, 6, 7},
                SlidingWindowMaximum.maxSlidingWindow(new int[] {1, 3, -1, -3, 5, 3, 6, 7}, 3));
        assertThrows(IllegalArgumentException.class,
                () -> SlidingWindowMaximum.maxSlidingWindow(new int[] {1}, 0));
    }
}
