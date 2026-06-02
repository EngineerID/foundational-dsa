// Hashing — Open Addressing

package com.dsa.examples.hashing;

/**
 * Hash table with open addressing and swappable probing strategies.
 * Average insert/lookup O(1); clustering varies by strategy.
 */
public class HashTableOpenAddressing<K, V> {

    /**
     * Probing strategy for collision resolution.
     */
    public enum ProbingStrategy {
        LINEAR,
        QUADRATIC,
        DOUBLE_HASHING
    }

    private static final double LOAD_FACTOR = 0.7;
    private static final Object DELETED = new Object();

    private Object[] keys;
    private Object[] values;
    private int size;
    private final ProbingStrategy strategy;

    /**
     * Creates a table with the given probing strategy.
     * Time: O(1); Space: O(1).
     */
    public HashTableOpenAddressing(ProbingStrategy strategy) {
        this.strategy = strategy;
        keys = new Object[8];
        values = new Object[8];
    }

    /**
     * Inserts or updates a key-value pair.
     * Time: O(1) average; Space: O(1).
     */
    @SuppressWarnings("unchecked")
    public void put(K key, V value) {
        ensureCapacity();
        int i = 0;
        int firstDeleted = -1;
        while (i < keys.length) {
            int idx = probe(key, i);
            if (keys[idx] == null) {
                int slot = firstDeleted >= 0 ? firstDeleted : idx;
                keys[slot] = key;
                values[slot] = value;
                size++;
                return;
            }
            if (keys[idx] == DELETED) {
                if (firstDeleted < 0) {
                    firstDeleted = idx;
                }
            } else if (keys[idx].equals(key)) {
                values[idx] = value;
                return;
            }
            i++;
        }
    }

    /**
     * Returns the value for a key, or null.
     * Time: O(1) average; Space: O(1).
     */
    @SuppressWarnings("unchecked")
    public V get(K key) {
        int i = 0;
        while (i < keys.length) {
            int idx = probe(key, i);
            if (keys[idx] == null) {
                return null;
            }
            if (keys[idx] != DELETED && keys[idx].equals(key)) {
                return (V) values[idx];
            }
            i++;
        }
        return null;
    }

    /**
     * Removes a key if present.
     * Time: O(1) average; Space: O(1).
     */
    public boolean remove(K key) {
        int i = 0;
        while (i < keys.length) {
            int idx = probe(key, i);
            if (keys[idx] == null) {
                return false;
            }
            if (keys[idx] != DELETED && keys[idx].equals(key)) {
                keys[idx] = DELETED;
                values[idx] = null;
                size--;
                return true;
            }
            i++;
        }
        return false;
    }

    private int probe(K key, int i) {
        int h1 = Math.floorMod(key.hashCode(), keys.length);
        return switch (strategy) {
            case LINEAR -> Math.floorMod(h1 + i, keys.length);
            case QUADRATIC -> Math.floorMod(h1 + i * i, keys.length);
            case DOUBLE_HASHING -> {
                int h2 = 1 + Math.floorMod(key.hashCode(), keys.length - 1);
                yield Math.floorMod(h1 + i * h2, keys.length);
            }
        };
    }

    @SuppressWarnings("unchecked")
    private void ensureCapacity() {
        if ((double) size / keys.length < LOAD_FACTOR) {
            return;
        }
        Object[] oldKeys = keys;
        Object[] oldValues = values;
        keys = new Object[oldKeys.length * 2];
        values = new Object[keys.length];
        size = 0;
        for (int i = 0; i < oldKeys.length; i++) {
            if (oldKeys[i] != null && oldKeys[i] != DELETED) {
                put((K) oldKeys[i], (V) oldValues[i]);
            }
        }
    }
}
