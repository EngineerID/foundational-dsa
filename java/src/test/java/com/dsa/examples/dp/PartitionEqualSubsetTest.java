package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PartitionEqualSubsetTest {

    @Test
    void canPartition() {
        assertTrue(PartitionEqualSubset.canPartition(new int[] {1, 5, 11, 5}));
        assertFalse(PartitionEqualSubset.canPartition(new int[] {1, 2, 3, 5}));
    }
}
