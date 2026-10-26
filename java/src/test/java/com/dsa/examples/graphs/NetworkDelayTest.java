package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class NetworkDelayTest {

    @Test
    void networkDelay() {
        assertEquals(2, NetworkDelay.networkDelay(4, new int[][] {{1, 0, 1}, {1, 2, 1}, {2, 3, 1}}, 1));
    }
}
