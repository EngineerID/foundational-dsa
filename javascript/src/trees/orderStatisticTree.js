/** Trees — Order-Statistic Tree */

const { BSTNode } = require('./bst');

/**
 * BST augmented with subtree sizes for order statistics.
 * select/rank O(log n) when balanced.
 */
class OrderStatisticTree {
  constructor() {
    this.root = null;
  }

  /** Inserts a key-value pair. Time: O(h); Space: O(1). */
  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  /** Returns the k-th smallest key (1-based). Time: O(h); Space: O(1). */
  select(k) {
    if (k < 1 || k > this._size(this.root)) {
      throw new Error('k out of range');
    }
    return this._select(this.root, k);
  }

  /** Returns the rank of key (1-based). Time: O(h); Space: O(1). */
  rank(key) {
    return this._rank(this.root, key);
  }

  _insert(node, key, value) {
    if (node === null) {
      return new BSTNode(key, value);
    }
    const cmp = key < node.key ? -1 : key > node.key ? 1 : 0;
    if (cmp < 0) {
      node.left = this._insert(node.left, key, value);
    } else if (cmp > 0) {
      node.right = this._insert(node.right, key, value);
    } else {
      node.value = value;
    }
    node.subtreeSize = this._size(node.left) + this._size(node.right) + 1;
    return node;
  }

  _select(node, k) {
    const leftSize = this._size(node.left);
    if (k <= leftSize) {
      return this._select(node.left, k);
    }
    if (k === leftSize + 1) {
      return node.key;
    }
    return this._select(node.right, k - leftSize - 1);
  }

  _rank(node, key) {
    if (node === null) {
      return 0;
    }
    const cmp = key < node.key ? -1 : key > node.key ? 1 : 0;
    if (cmp < 0) {
      return this._rank(node.left, key);
    }
    if (cmp > 0) {
      return this._size(node.left) + 1 + this._rank(node.right, key);
    }
    return this._size(node.left) + 1;
  }

  _size(node) {
    return node === null ? 0 : node.subtreeSize;
  }
}

module.exports = { OrderStatisticTree };
