// Trees — Treap

/**
 * Randomized BST via heap priorities on keys.
 * Technique: Treap
 * Invariant: Heap order on priorities, BST order on keys.
 * search/insert: Time O(log n) expected; Space O(n).
 */

class Treap {
  constructor(seed = null) {
    this._seed = seed != null ? seed : Date.now();
    this._state = this._seed >>> 0;
    this.root = null;
  }

  _rand() {
    this._state = (Math.imul(1664525, this._state) + 1013904223) >>> 0;
    return this._state % (1 << 30);
  }

  search(key) {
    let cur = this.root;
    while (cur) {
      if (key === cur.key) return cur.value;
      cur = key < cur.key ? cur.left : cur.right;
    }
    return null;
  }

  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  _insert(node, key, value) {
    if (!node) {
      return { key, value, prio: this._rand(), left: null, right: null };
    }
    if (key === node.key) {
      node.value = value;
      return node;
    }
    if (key < node.key) {
      node.left = this._insert(node.left, key, value);
      if (node.left && node.left.prio > node.prio) {
        return this._rotateRight(node);
      }
    } else {
      node.right = this._insert(node.right, key, value);
      if (node.right && node.right.prio > node.prio) {
        return this._rotateLeft(node);
      }
    }
    return node;
  }

  _rotateLeft(x) {
    const y = x.right;
    if (!y) return x;
    x.right = y.left;
    y.left = x;
    return y;
  }

  _rotateRight(x) {
    const y = x.left;
    if (!y) return x;
    x.left = y.right;
    y.right = x;
    return y;
  }
}

module.exports = { Treap };
