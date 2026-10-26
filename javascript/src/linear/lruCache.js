// Linear — LRU cache

/**
 * Least-recently-used cache with O(1) get and put.
 * Technique: Hash map + linked order
 * Invariant: MRU at head, LRU at tail.
 * get/put: Time O(1); Space O(capacity).
 */

class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) throw new Error('capacity must be positive');
    this._cap = capacity;
    this._map = new Map();
  }

  get(key) {
    if (!this._map.has(key)) return -1;
    const val = this._map.get(key);
    this._map.delete(key);
    this._map.set(key, val);
    return val;
  }

  put(key, value) {
    if (this._map.has(key)) this._map.delete(key);
    this._map.set(key, value);
    if (this._map.size > this._cap) {
      const first = this._map.keys().next().value;
      this._map.delete(first);
    }
  }
}

module.exports = { LRUCache };
