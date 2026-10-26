// Practice — LRU cache design

const { LRUCache } = require('../linear/lruCache');

class LRUCacheDesign {
  /** @param {number} capacity */
  constructor(capacity) {
    this._cache = new LRUCache(capacity);
  }

  /** @param {number} key */
  get(key) {
    return this._cache.get(key);
  }

  /** @param {number} key @param {number} value */
  put(key, value) {
    this._cache.put(key, value);
  }
}

module.exports = { LRUCacheDesign };
