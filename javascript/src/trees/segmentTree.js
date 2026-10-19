// Trees — Segment Tree (range sum)

class SegmentTree {
  constructor(arr) {
    this._n = arr.length;
    this._tree = new Array(Math.max(1, 4 * this._n)).fill(0);
    if (this._n) this._build(arr, 1, 0, this._n - 1);
  }

  update(index, value) {
    if (index < 0 || index >= this._n) throw new RangeError(String(index));
    this._update(1, 0, this._n - 1, index, value);
  }

  rangeSum(left, right) {
    if (this._n === 0) return 0;
    if (left < 0 || right >= this._n || left > right) throw new RangeError(`${left},${right}`);
    return this._query(1, 0, this._n - 1, left, right);
  }

  _build(arr, node, start, end) {
    if (start === end) {
      this._tree[node] = arr[start];
      return;
    }
    const mid = Math.floor((start + end) / 2);
    this._build(arr, node * 2, start, mid);
    this._build(arr, node * 2 + 1, mid + 1, end);
    this._tree[node] = this._tree[node * 2] + this._tree[node * 2 + 1];
  }

  _update(node, start, end, idx, value) {
    if (start === end) {
      this._tree[node] = value;
      return;
    }
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) this._update(node * 2, start, mid, idx, value);
    else this._update(node * 2 + 1, mid + 1, end, idx, value);
    this._tree[node] = this._tree[node * 2] + this._tree[node * 2 + 1];
  }

  _query(node, start, end, left, right) {
    if (right < start || end < left) return 0;
    if (left <= start && end <= right) return this._tree[node];
    const mid = Math.floor((start + end) / 2);
    return this._query(node * 2, start, mid, left, right)
      + this._query(node * 2 + 1, mid + 1, end, left, right);
  }
}

module.exports = { SegmentTree };
