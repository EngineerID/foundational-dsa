package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TrappingRainWaterTest {

    @Test
    void trap() {
        assertEquals(6, TrappingRainWater.trap(new int[] {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}));
        assertEquals(0, TrappingRainWater.trap(new int[] {}));
    }
}
