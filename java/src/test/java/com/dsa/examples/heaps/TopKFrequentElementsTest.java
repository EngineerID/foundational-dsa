package com.dsa.examples.heaps;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TopKFrequentElementsTest {

    @Test
    void topKFrequent() {
        assertEquals(List.of(1, 2), TopKFrequentElements.topKFrequent(new int[] {1, 1, 1, 2, 2, 3}, 2));
        assertThrows(IllegalArgumentException.class, () -> TopKFrequentElements.topKFrequent(new int[] {}, 1));
    }
}
