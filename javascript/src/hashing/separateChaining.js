// Hashing — Separate Chaining

/**
 * Hash map with linked-list buckets and load-factor resize.
 * Technique: Separate chaining
 * Invariant: Load factor <= 0.75 before resize.
 * put/get/remove: Time O(1) average; resize O(n); Space O(n).
 */

const LOAD_FACTOR = 0.75;

class HashTableChaining {
  constructor() {
    this._buckets = Array.from({ length: 8 }, () => []);
    this._size = 0;
  }

  put(key, value) {
    const idx = this._index(key);
    const bucket = this._buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i] = [key, value];
        return;
      }
    }
    bucket.push([key, value]);
    this._size += 1;
    if (this._size / this._buckets.length > LOAD_FACTOR) {
      this._resize();
    }
  }

  get(key) {
    for (const [k, v] of this._buckets[this._index(key)]) {
      if (k === key) {
        return v;
      }
    }
    return null;
  }

  remove(key) {
    const idx = this._index(key);
    const bucket = this._buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this._size -= 1;
        return true;
      }
    }
    return false;
  }

  size() {
    return this._size;
  }

  _index(key) {
    const h = typeof key === 'number' ? key : hashString(String(key));
    return Math.abs(h) % this._buckets.length;
  }

  _resize() {
    const old = this._buckets;
    this._buckets = Array.from({ length: old.length * 2 }, () => []);
    this._size = 0;
    for (const bucket of old) {
      for (const [k, v] of bucket) {
        this.put(k, v);
      }
    }
  }
}

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}

module.exports = { HashTableChaining };
