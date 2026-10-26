// Practice — Separate chaining hash table

package com.dsa.examples.practice;

import com.dsa.examples.hashing.HashTableChaining;

public final class SeparateChainingPractice {

    private final HashTableChaining<String, Integer> table = new HashTableChaining<>();

    public void put(String key, int value) {
        table.put(key, value);
    }

    public Integer get(String key) {
        return table.get(key);
    }
}
