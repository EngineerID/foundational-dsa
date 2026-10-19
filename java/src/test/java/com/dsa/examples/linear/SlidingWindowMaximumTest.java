package com.dsa.examples.linear;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SlidingWindowMaximumTest {

    @Test
    void maxSlidingWindow() {
        assertEquals(Arrays.asList(3, 3, 5, 5, 6, 7),
                SlidingWindowMaximum.maxSlidingWindow(new int[] {1, 3, -1, -3, 5, 3, 6, 7}, 3));
        assertThrows(IllegalArgumentException.class,
                () -> SlidingWindowMaximum.maxSlidingWindow(new int[] {1}, 0));
    }
}
