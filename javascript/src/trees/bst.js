/** Trees — Binary Search Tree */

/**
 * Binary search tree.
 * insert/delete/search/successor O(h); traversals O(n).
 */
class BSTNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.subtreeSize = 1;
    this.maxEnd = 0;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  /** Inserts or updates key-value pair. Time: O(h); Space: O(1). */
  insert(key, value) {
    if (this.root === null) {
      this.root = new BSTNode(key, value);
      return;
    }
    let cur = this.root;
    while (true) {
      const cmp = key < cur.key ? -1 : key > cur.key ? 1 : 0;
      if (cmp === 0) {
        cur.value = value;
        return;
      }
      if (cmp < 0) {
        if (cur.left === null) {
          cur.left = new BSTNode(key, value);
          cur.left.parent = cur;
          return;
        }
        cur = cur.left;
      } else {
        if (cur.right === null) {
          cur.right = new BSTNode(key, value);
          cur.right.parent = cur;
          return;
        }
        cur = cur.right;
      }
    }
  }

  /** Searches for a key; returns value or null. Time: O(h); Space: O(1). */
  search(key) {
    const node = this._findNode(key);
    return node === null ? null : node.value;
  }

  /** Deletes a key if present. Time: O(h); Space: O(1). */
  delete(key) {
    const node = this._findNode(key);
    if (node === null) {
      return;
    }
    let target = node;
    if (node.left !== null && node.right !== null) {
      let succ = node.right;
      while (succ.left !== null) {
        succ = succ.left;
      }
      node.key = succ.key;
      node.value = succ.value;
      target = succ;
    }
    const child = target.left !== null ? target.left : target.right;
    if (target.parent === null) {
      this.root = child;
    } else if (target === target.parent.left) {
      target.parent.left = child;
    } else {
      target.parent.right = child;
    }
    if (child !== null) {
      child.parent = target.parent;
    }
  }

  /** Returns the successor key, or null. Time: O(h); Space: O(1). */
  successor(key) {
    let node = this._findNode(key);
    if (node === null) {
      return null;
    }
    if (node.right !== null) {
      node = node.right;
      while (node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    let p = node.parent;
    while (p !== null && node === p.right) {
      node = p;
      p = p.parent;
    }
    return p === null ? null : p.key;
  }

  /** Returns the predecessor key, or null. Time: O(h); Space: O(1). */
  predecessor(key) {
    let node = this._findNode(key);
    if (node === null) {
      return null;
    }
    if (node.left !== null) {
      node = node.left;
      while (node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    let p = node.parent;
    while (p !== null && node === p.left) {
      node = p;
      p = p.parent;
    }
    return p === null ? null : p.key;
  }

  /** In-order traversal keys. Time: O(n); Space: O(h). */
  inOrder() {
    const out = [];
    this._inOrder(this.root, out);
    return out;
  }

  getRoot() {
    return this.root;
  }

  _findNode(key) {
    let cur = this.root;
    while (cur !== null) {
      const cmp = key < cur.key ? -1 : key > cur.key ? 1 : 0;
      if (cmp === 0) {
        return cur;
      }
      cur = cmp < 0 ? cur.left : cur.right;
    }
    return null;
  }

  _inOrder(node, out) {
    if (node === null) {
      return;
    }
    this._inOrder(node.left, out);
    out.push(node.key);
    this._inOrder(node.right, out);
  }
}

module.exports = { BST, BSTNode };
