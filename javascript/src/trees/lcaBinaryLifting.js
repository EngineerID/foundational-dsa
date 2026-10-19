// Trees — LCA via binary lifting

/**
 * Lowest common ancestor on a rooted tree.
 * Technique: Binary lifting
 * Invariant: up[k][v] is 2^k-th ancestor of v.
 * query: Time O(log n); Space O(n log n).
 */

class LCABinaryLifting {
  constructor(parent) {
    const n = parent.length;
    if (n === 0) {
      this._up = [];
      this._depth = [];
      return;
    }
    const depth = new Array(n).fill(0);
    for (let v = 0; v < n; v += 1) {
      const p = parent[v];
      if (p !== v && p >= 0 && p < n) depth[v] = depth[p] + 1;
    }
    const maxDepth = Math.max(...depth);
    const log = Math.max(1, maxDepth.toString(2).length);
    const up = Array.from({ length: log }, () => new Array(n));
    for (let v = 0; v < n; v += 1) up[0][v] = v;
    for (let v = 0; v < n; v += 1) {
      const p = parent[v];
      if (p !== v && p >= 0 && p < n) up[0][v] = p;
    }
    for (let k = 1; k < log; k += 1) {
      const prev = up[k - 1];
      for (let v = 0; v < n; v += 1) up[k][v] = prev[prev[v]];
    }
    this._up = up;
    this._depth = depth;
  }

  query(u, v) {
    if (!this._up.length) throw new RangeError(String(u));
    let du = this._depth[u];
    let dv = this._depth[v];
    if (du < dv) {
      [u, v] = [v, u];
      [du, dv] = [dv, du];
    }
    let diff = du - dv;
    let bit = 0;
    while (diff) {
      if (diff & 1) u = this._up[bit][u];
      diff >>= 1;
      bit += 1;
    }
    if (u === v) return u;
    for (let k = this._up.length - 1; k >= 0; k -= 1) {
      if (this._up[k][u] !== this._up[k][v]) {
        u = this._up[k][u];
        v = this._up[k][v];
      }
    }
    return this._up[0][u];
  }
}

module.exports = { LCABinaryLifting };
