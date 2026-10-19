// Trees — Sparse table (static RMQ)

/**
 * Static range minimum queries on an array.
 * Technique: Sparse table
 * Invariant: st[k][i] is min on length-2^k interval at i.
 * query: Time O(1); Space O(n log n).
 */

class SparseTable {
  constructor(arr) {
    const n = arr.length;
    if (n === 0) {
      this._st = [];
      return;
    }
    const log = Math.floor(Math.log2(n)) + 1;
    const st = [arr.slice()];
    for (let k = 1; k < log; k += 1) {
      const row = [];
      const half = 1 << (k - 1);
      const span = 1 << k;
      const prev = st[k - 1];
      for (let i = 0; i <= n - span; i += 1) {
        row.push(Math.min(prev[i], prev[i + half]));
      }
      st.push(row);
    }
    this._st = st;
  }

  query(left, right) {
    if (left > right) throw new Error('invalid range');
    const length = right - left + 1;
    const k = Math.floor(Math.log2(length));
    const row = this._st[k];
    return Math.min(row[left], row[right - (1 << k) + 1]);
  }
}

module.exports = { SparseTable };
