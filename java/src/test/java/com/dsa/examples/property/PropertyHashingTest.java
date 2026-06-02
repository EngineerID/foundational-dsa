package com.dsa.examples.property;

import com.dsa.examples.hashing.HashTableChaining;
import com.dsa.examples.hashing.HashTableOpenAddressing;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class PropertyHashingTest {

    @Test
    void separateChainingProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            HashTableChaining<Integer, Integer> table = new HashTableChaining<>();
            Map<Integer, Integer> ref = new HashMap<>();
            for (int i = 0; i < 20 + rng.nextInt(60); i++) {
                int op = rng.nextInt(3);
                int key = rng.nextInt(31);
                if (op == 0) {
                    int val = rng.nextInt(101);
                    table.put(key, val);
                    ref.put(key, val);
                } else if (op == 1) {
                    assertEquals(ref.get(key), table.get(key));
                } else {
                    table.remove(key);
                    ref.remove(key);
                }
                for (Map.Entry<Integer, Integer> e : ref.entrySet()) {
                    assertEquals(e.getValue(), table.get(e.getKey()));
                }
            }
        }
    }

    @Test
    void openAddressingPutGetProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            HashTableOpenAddressing<Integer, Integer> table =
                    new HashTableOpenAddressing<>(HashTableOpenAddressing.ProbingStrategy.LINEAR);
            Map<Integer, Integer> ref = new HashMap<>();
            for (int i = 0; i < 30 + rng.nextInt(70); i++) {
                if (rng.nextDouble() < 0.7) {
                    int key = rng.nextInt(41);
                    int val = rng.nextInt(101);
                    table.put(key, val);
                    ref.put(key, val);
                } else {
                    int key = rng.nextInt(41);
                    Integer got = table.get(key);
                    if (!ref.containsKey(key)) {
                        assertNull(got);
                    } else {
                        assertEquals(ref.get(key), got);
                    }
                }
            }
            for (Map.Entry<Integer, Integer> e : ref.entrySet()) {
                assertEquals(e.getValue(), table.get(e.getKey()));
            }
        }
    }
}
