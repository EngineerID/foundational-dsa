// Practice — LRU cache design

package com.dsa.examples.practice;

import com.dsa.examples.linear.LRUCache;

public class LRUCacheDesign {

    private final LRUCache cache;

    public LRUCacheDesign(int capacity) {
        cache = new LRUCache(capacity);
    }

    public int get(int key) {
        return cache.get(key);
    }

    public void put(int key, int value) {
        cache.put(key, value);
    }
}
