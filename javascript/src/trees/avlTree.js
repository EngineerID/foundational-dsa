/** Trees — AVL Tree (balanced BST) */

const { BST, BSTNode } = require('./bst');

/**
 * AVL tree with height balancing via rotations.
 * insert/delete/search O(log n) guaranteed.
 */
class AVLTree extends BST {
  /** Inserts a key-value pair and rebalances. Time: O(log n); Space: O(1). */
  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  /** Deletes a key and rebalances. Time: O(log n); Space: O(1). */
  delete(key) {
    this.root = this._delete(this.root, key);
  }

  _insert(node, key, value) {
    if (node === null) {
      return new BSTNode(key, value);
    }
    const cmp = key < node.key ? -1 : key > node.key ? 1 : 0;
    if (cmp < 0) {
      node.left = this._insert(node.left, key, value);
      if (node.left !== null) {
        node.left.parent = node;
      }
    } else if (cmp > 0) {
      node.right = this._insert(node.right, key, value);
      if (node.right !== null) {
        node.right.parent = node;
      }
    } else {
      node.value = value;
      return node;
    }
    return this._rebalance(node);
  }

  _delete(node, key) {
    if (node === null) {
      return null;
    }
    const cmp = key < node.key ? -1 : key > node.key ? 1 : 0;
    if (cmp < 0) {
      node.left = this._delete(node.left, key);
      if (node.left !== null) {
        node.left.parent = node;
      }
    } else if (cmp > 0) {
      node.right = this._delete(node.right, key);
      if (node.right !== null) {
        node.right.parent = node;
      }
    } else {
      if (node.left === null || node.right === null) {
        const temp = node.left !== null ? node.left : node.right;
        if (temp !== null) {
          temp.parent = node.parent;
        }
        return temp;
      }
      let succ = node.right;
      while (succ.left !== null) {
        succ = succ.left;
      }
      node.key = succ.key;
      node.value = succ.value;
      node.right = this._delete(node.right, succ.key);
      if (node.right !== null) {
        node.right.parent = node;
      }
    }
    return this._rebalance(node);
  }

  _height(node) {
    if (node === null) {
      return -1;
    }
    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }

  _balanceFactor(node) {
    return this._height(node.left) - this._height(node.right);
  }

  _rebalance(node) {
    const bf = this._balanceFactor(node);
    if (bf > 1) {
      if (this._balanceFactor(node.left) < 0) {
        node.left = this._rotateLeft(node.left);
      }
      return this._rotateRight(node);
    }
    if (bf < -1) {
      if (this._balanceFactor(node.right) > 0) {
        node.right = this._rotateRight(node.right);
      }
      return this._rotateLeft(node);
    }
    return node;
  }

  _rotateRight(y) {
    const x = y.left;
    const t2 = x.right;
    x.right = y;
    y.left = t2;
    x.parent = y.parent;
    y.parent = x;
    if (t2 !== null) {
      t2.parent = y;
    }
    return x;
  }

  _rotateLeft(x) {
    const y = x.right;
    const t2 = y.left;
    y.left = x;
    x.right = t2;
    y.parent = x.parent;
    x.parent = y;
    if (t2 !== null) {
      t2.parent = x;
    }
    return y;
  }
}

module.exports = { AVLTree };
