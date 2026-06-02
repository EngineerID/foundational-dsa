// Hashing — Separate Chaining

package com.dsa.examples.hashing;

import java.util.LinkedList;
import java.util.List;

/**
 * Hash table with separate chaining (bucket linked lists).
 * Average insert/lookup/remove O(1); resize O(n).
 */
public class HashTableChaining<K, V> {

    private static final double LOAD_FACTOR = 0.75;
    private List<Entry<K, V>>[] buckets;
    private int size;

    private record Entry<K, V>(K key, V value) {
    }

    /**
     * Creates a table with initial capacity 8.
     * Time: O(1); Space: O(1).
     */
    @SuppressWarnings("unchecked")
    public HashTableChaining() {
        buckets = new List[8];
        for (int i = 0; i < buckets.length; i++) {
            buckets[i] = new LinkedList<>();
        }
    }

    /**
     * Inserts or updates a key-value pair.
     * Time: O(1) average; Space: O(1).
     */
    public void put(K key, V value) {
        int idx = index(key);
        for (Entry<K, V> e : buckets[idx]) {
            if (e.key().equals(key)) {
                buckets[idx].remove(e);
                buckets[idx].add(new Entry<>(key, value));
                return;
            }
        }
        buckets[idx].add(new Entry<>(key, value));
        size++;
        if ((double) size / buckets.length > LOAD_FACTOR) {
            resize();
        }
    }

    /**
     * Returns the value for a key, or null.
     * Time: O(1) average; Space: O(1).
     */
    public V get(K key) {
        for (Entry<K, V> e : buckets[index(key)]) {
            if (e.key().equals(key)) {
                return e.value();
            }
        }
        return null;
    }

    /**
     * Removes a key if present.
     * Time: O(1) average; Space: O(1).
     */
    public boolean remove(K key) {
        int idx = index(key);
        for (Entry<K, V> e : buckets[idx]) {
            if (e.key().equals(key)) {
                buckets[idx].remove(e);
                size--;
                return true;
            }
        }
        return false;
    }

    /**
     * Returns the number of entries.
     * Time: O(1); Space: O(1).
     */
    public int size() {
        return size;
    }

    @SuppressWarnings("unchecked")
    private void resize() {
        List<Entry<K, V>>[] old = buckets;
        buckets = new List[old.length * 2];
        for (int i = 0; i < buckets.length; i++) {
            buckets[i] = new LinkedList<>();
        }
        size = 0;
        for (List<Entry<K, V>> bucket : old) {
            for (Entry<K, V> e : bucket) {
                put(e.key(), e.value());
            }
        }
    }

    private int index(K key) {
        return Math.floorMod(key.hashCode(), buckets.length);
    }
}
