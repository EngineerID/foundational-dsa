package com.dsa.examples.linear;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class MonotonicStackTest {

    @Test
    void nextGreaterElement() {
        assertArrayEquals(
                new int[] {4, 2, 4, -1, -1},
                MonotonicStack.nextGreaterElement(new int[] {2, 1, 2, 4, 3}));
        assertArrayEquals(new int[] {-1}, MonotonicStack.nextGreaterElement(new int[] {5}));
        assertThrows(IllegalArgumentException.class, () -> MonotonicStack.nextGreaterElement(new int[] {}));
    }
}
