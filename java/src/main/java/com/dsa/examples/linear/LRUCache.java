// Linear — LRU cache

package com.dsa.examples.linear;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Least-recently-used cache with O(1) get and put.
 * Technique: Hash map + linked order
 * Invariant: MRU at head, LRU at tail.
 * get/put: Time O(1); Space O(capacity).
 */
public class LRUCache {

    private final int capacity;
    private final Map<Integer, Integer> map;

    public LRUCache(int capacity) {
        if (capacity <= 0) {
            throw new IllegalArgumentException("capacity must be positive");
        }
        this.capacity = capacity;
        this.map = new LinkedHashMap<>(capacity, 0.75f, true);
    }

    public int get(int key) {
        if (!map.containsKey(key)) {
            return -1;
        }
        return map.get(key);
    }

    public void put(int key, int value) {
        map.put(key, value);
        if (map.size() > capacity) {
            Integer first = map.keySet().iterator().next();
            map.remove(first);
        }
    }
}
