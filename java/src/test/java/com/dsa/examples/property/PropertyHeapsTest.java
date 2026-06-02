package com.dsa.examples.property;

import com.dsa.examples.heaps.BinaryHeap;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PropertyHeapsTest {

    @Test
    void heapExtractOrderProperty() throws Exception {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            BinaryHeap<Integer> heap = new BinaryHeap<>();
            int n = rng.nextInt(40);
            for (int i = 0; i < n; i++) {
                heap.insert(rng.nextInt(61) - 30);
            }
            assertTrue(PropertyHelpers.extractMinSorted(heap));
        }
    }
}
