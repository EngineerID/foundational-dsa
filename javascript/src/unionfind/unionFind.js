// Union-Find (Disjoint Set)

/**
 * Disjoint-set connectivity with union and find.
 * Technique: Union-find (path compression, union by rank)
 * Invariant: Parent pointers form forest; ranks approximate tree height.
 * find/union/connected: Time O(α(n)) amortized; Space O(n).
 */

class UnionFind {
  constructor(n) {
    this._parent = Array.from({ length: n }, (_, i) => i);
    this._rank = new Array(n).fill(0);
    this._components = n;
  }

  find(x) {
    if (this._parent[x] !== x) {
      this._parent[x] = this.find(this._parent[x]);
    }
    return this._parent[x];
  }

  union(a, b) {
    let ra = this.find(a);
    let rb = this.find(b);
    if (ra === rb) {
      return;
    }
    if (this._rank[ra] < this._rank[rb]) {
      this._parent[ra] = rb;
    } else if (this._rank[ra] > this._rank[rb]) {
      this._parent[rb] = ra;
    } else {
      this._parent[rb] = ra;
      this._rank[ra] += 1;
    }
    this._components -= 1;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }

  countComponents() {
    return this._components;
  }
}

module.exports = { UnionFind };
