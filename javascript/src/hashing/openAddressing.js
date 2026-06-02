// Hashing — Open Addressing

/** Hash table with open addressing and swappable probing strategies. */

const LOAD_FACTOR = 0.7;
const DELETED = Symbol('deleted');

const ProbingStrategy = {
  LINEAR: 'LINEAR',
  QUADRATIC: 'QUADRATIC',
  DOUBLE_HASHING: 'DOUBLE_HASHING',
};

class HashTableOpenAddressing {
  constructor(strategy = ProbingStrategy.LINEAR) {
    this._strategy = strategy;
    this._keys = new Array(8).fill(null);
    this._values = new Array(8).fill(null);
    this._size = 0;
  }

  put(key, value) {
    this._ensureCapacity();
    let firstDeleted = -1;
    for (let i = 0; i < this._keys.length; i++) {
      const idx = this._probe(key, i);
      const slot = this._keys[idx];
      if (slot === null) {
        const target = firstDeleted >= 0 ? firstDeleted : idx;
        this._keys[target] = key;
        this._values[target] = value;
        this._size += 1;
        return;
      }
      if (slot === DELETED) {
        if (firstDeleted < 0) {
          firstDeleted = idx;
        }
      } else if (slot === key) {
        this._values[idx] = value;
        return;
      }
    }
  }

  get(key) {
    for (let i = 0; i < this._keys.length; i++) {
      const idx = this._probe(key, i);
      const slot = this._keys[idx];
      if (slot === null) {
        return null;
      }
      if (slot !== DELETED && slot === key) {
        return this._values[idx];
      }
    }
    return null;
  }

  remove(key) {
    for (let i = 0; i < this._keys.length; i++) {
      const idx = this._probe(key, i);
      const slot = this._keys[idx];
      if (slot === null) {
        return false;
      }
      if (slot !== DELETED && slot === key) {
        this._keys[idx] = DELETED;
        this._values[idx] = null;
        this._size -= 1;
        return true;
      }
    }
    return false;
  }

  _probe(key, i) {
    const n = this._keys.length;
    const h1 = this._hash(key) % n;
    if (this._strategy === ProbingStrategy.LINEAR) {
      return (h1 + i) % n;
    }
    if (this._strategy === ProbingStrategy.QUADRATIC) {
      return (h1 + i * i) % n;
    }
    const h2 = 1 + (this._hash(key) % (n - 1));
    return (h1 + i * h2) % n;
  }

  _hash(key) {
    if (typeof key === 'number') {
      return Math.abs(key);
    }
    let h = 0;
    const s = String(key);
    for (let i = 0; i < s.length; i++) {
      h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  _ensureCapacity() {
    if (this._size / this._keys.length < LOAD_FACTOR) {
      return;
    }
    const oldKeys = this._keys;
    const oldValues = this._values;
    this._keys = new Array(oldKeys.length * 2).fill(null);
    this._values = new Array(this._keys.length).fill(null);
    this._size = 0;
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null && oldKeys[i] !== DELETED) {
        this.put(oldKeys[i], oldValues[i]);
      }
    }
  }
}

module.exports = { HashTableOpenAddressing, ProbingStrategy };
