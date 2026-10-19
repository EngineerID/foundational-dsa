package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MatrixChainTest {

    @Test
    void minMultiplications() {
        assertEquals(0, MatrixChain.minMultiplications(new int[] {10}));
        assertEquals(8500, MatrixChain.minMultiplications(new int[] {10, 30, 5, 60, 20}));
    }
}
