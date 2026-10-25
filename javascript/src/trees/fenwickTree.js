// Trees — Fenwick Tree

class FenwickTree {
  constructor(n) {
    if (n < 0) throw new Error('n must be non-negative');
    this._n = n;
    this._bit = new Array(n + 1).fill(0);
  }

  add(index, delta) {
    if (index < 0 || index >= this._n) throw new RangeError(String(index));
    let i = index + 1;
    while (i <= this._n) {
      this._bit[i] += delta;
      i += i & -i;
    }
  }

  prefixSum(index) {
    if (this._n === 0) return 0;
    if (index < 0 || index >= this._n) throw new RangeError(String(index));
    let i = index + 1;
    let total = 0;
    while (i > 0) {
      total += this._bit[i];
      i -= i & -i;
    }
    return total;
  }

  rangeSum(left, right) {
    if (left > right) throw new RangeError(`${left},${right}`);
    const leftSum = left > 0 ? this.prefixSum(left - 1) : 0;
    return this.prefixSum(right) - leftSum;
  }
}

module.exports = { FenwickTree };
