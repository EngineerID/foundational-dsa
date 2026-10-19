// Trees — Red-Black Tree

/**
 * Balanced BST with red-black invariants.
 * Technique: Red-black tree
 * Invariant: Black-height equal; no consecutive red nodes.
 * search/insert: Time O(log n); Space O(n).
 */

class _Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.red = true;
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
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
    const node = new _Node(key, value);
    let parent = null;
    let cur = this.root;
    while (cur) {
      parent = cur;
      if (key < cur.key) cur = cur.left;
      else if (key > cur.key) cur = cur.right;
      else {
        cur.value = value;
        return;
      }
    }
    node.parent = parent;
    if (!parent) this.root = node;
    else if (key < parent.key) parent.left = node;
    else parent.right = node;
    this._fixInsert(node);
  }

  _fixInsert(z) {
    while (z.parent && z.parent.red) {
      const gp = z.parent.parent;
      if (!gp) break;
      if (z.parent === gp.left) {
        const y = gp.right;
        if (y && y.red) {
          gp.red = true;
          z.parent.red = false;
          y.red = false;
          z = gp;
        } else {
          if (z === z.parent.right) {
            z = z.parent;
            this._rotateLeft(z);
          }
          z.parent.red = false;
          gp.red = true;
          this._rotateRight(gp);
        }
      } else {
        const y = gp.left;
        if (y && y.red) {
          gp.red = true;
          z.parent.red = false;
          y.red = false;
          z = gp;
        } else {
          if (z === z.parent.left) {
            z = z.parent;
            this._rotateRight(z);
          }
          z.parent.red = false;
          gp.red = true;
          this._rotateLeft(gp);
        }
      }
    }
    if (this.root) this.root.red = false;
  }

  _rotateLeft(x) {
    const y = x.right;
    if (!y) return;
    x.right = y.left;
    if (y.left) y.left.parent = x;
    y.parent = x.parent;
    if (!x.parent) this.root = y;
    else if (x === x.parent.left) x.parent.left = y;
    else x.parent.right = y;
    y.left = x;
    x.parent = y;
  }

  _rotateRight(x) {
    const y = x.left;
    if (!y) return;
    x.left = y.right;
    if (y.right) y.right.parent = x;
    y.parent = x.parent;
    if (!x.parent) this.root = y;
    else if (x === x.parent.right) x.parent.right = y;
    else x.parent.left = y;
    y.right = x;
    x.parent = y;
  }
}

module.exports = { RedBlackTree };
