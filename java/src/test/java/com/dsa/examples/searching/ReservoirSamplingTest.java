package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ReservoirSamplingTest {

    @Test
    void sample() {
        assertEquals(List.of(), ReservoirSampling.sample(new int[] {1, 2, 3}, 0));
        assertEquals(List.of(5, 2), ReservoirSampling.sample(new int[] {1, 2, 3, 4, 5}, 2, 0));
        assertEquals(List.of(1, 2, 3), ReservoirSampling.sample(new int[] {1, 2, 3}, 5));
        assertThrows(IllegalArgumentException.class, () -> ReservoirSampling.sample(new int[] {1}, -1));
    }
}
