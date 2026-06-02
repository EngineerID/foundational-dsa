// Hashing — Bloom Filter

/**
 * Probabilistic set membership with false positives possible.
 * Technique: Bloom filter (k hash functions)
 * Invariant: All bits for an element set on insert; negative lookup => definitely absent.
 * add/mightContain: Time O(k); Space O(m) bits.
 */

class BloomFilter {
  constructor(expectedItems, falsePositiveRate) {
    this._size = optimalSize(expectedItems, falsePositiveRate);
    this._numHashes = optimalHashes(this._size, expectedItems);
    this._bits = new Array(this._size).fill(false);
  }

  add(item) {
    for (let i = 0; i < this._numHashes; i++) {
      this._bits[this._hash(item, i)] = true;
    }
  }

  mightContain(item) {
    for (let i = 0; i < this._numHashes; i++) {
      if (!this._bits[this._hash(item, i)]) {
        return false;
      }
    }
    return true;
  }

  _hash(item, seed) {
    let h = hashString(String(item)) ^ (seed * 0x9e3779b9);
    h = Math.abs(h);
    return h % this._size;
  }
}

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}

function optimalSize(n, p) {
  return Math.max(8, Math.ceil((-n * Math.log(p)) / (Math.log(2) ** 2)));
}

function optimalHashes(m, n) {
  return Math.max(1, Math.round((m / n) * Math.log(2)));
}

module.exports = { BloomFilter };
