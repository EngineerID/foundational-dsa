// Practice — Open addressing hash table (linear probing)

package com.dsa.examples.practice;

import com.dsa.examples.hashing.HashTableOpenAddressing;

public final class OpenAddressingPractice {

    private final HashTableOpenAddressing<Integer, String> table =
            new HashTableOpenAddressing<>(HashTableOpenAddressing.ProbingStrategy.LINEAR);

    public void put(int key, String value) {
        table.put(key, value);
    }

    public String get(int key) {
        return table.get(key);
    }

    public boolean remove(int key) {
        return table.remove(key);
    }
}
