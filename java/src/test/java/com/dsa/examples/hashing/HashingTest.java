package com.dsa.examples.hashing;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import static org.junit.jupiter.api.Assertions.*;

class HashingTest {

    @ParameterizedTest
    @EnumSource(HashTableOpenAddressing.ProbingStrategy.class)
    void openAddressing(HashTableOpenAddressing.ProbingStrategy strategy) {
        HashTableOpenAddressing<String, Integer> table = new HashTableOpenAddressing<>(strategy);
        table.put("a", 1);
        table.put("b", 2);
        assertEquals(1, table.get("a"));
        assertTrue(table.remove("a"));
        assertNull(table.get("a"));
    }

    @org.junit.jupiter.api.Test
    void chaining() {
        HashTableChaining<Integer, String> ht = new HashTableChaining<>();
        ht.put(1, "one");
        ht.put(2, "two");
        assertEquals("one", ht.get(1));
        for (int i = 0; i < 20; i++) {
            ht.put(i, "v" + i);
        }
        assertEquals("v10", ht.get(10));
    }

    @org.junit.jupiter.api.Test
    void bloomFilter() {
        BloomFilter bf = new BloomFilter(100, 0.01);
        bf.add("hello");
        assertTrue(bf.mightContain("hello"));
        assertFalse(bf.mightContain("missing"));
    }
}
