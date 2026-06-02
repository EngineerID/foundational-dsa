/** Trees — B-Tree */

/**
 * B-tree with minimum degree t (each node has at most 2t-1 keys).
 * search/insert O(log n).
 */
class BNode {
  constructor() {
    this.leaf = false;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  /**
   * Creates a B-tree with minimum degree t (t >= 2).
   * Time: O(1); Space: O(1).
   */
  constructor(t) {
    if (t < 2) {
      throw new Error('t must be >= 2');
    }
    this._minDegree = t;
    this._root = new BNode();
    this._root.leaf = true;
  }

  /** Searches for a key. Time: O(log n); Space: O(1). */
  search(key) {
    return this._search(this._root, key);
  }

  /** Inserts a key. Time: O(log n); Space: O(1). */
  insert(key) {
    const r = this._root;
    if (r.keys.length === 2 * this._minDegree - 1) {
      const newRoot = new BNode();
      newRoot.leaf = false;
      newRoot.children.push(this._root);
      this._splitChild(newRoot, 0);
      this._root = newRoot;
    }
    this._insertNonFull(this._root, key);
  }

  _search(node, key) {
    let i = 0;
    while (i < node.keys.length && key > node.keys[i]) {
      i += 1;
    }
    if (i < node.keys.length && key === node.keys[i]) {
      return true;
    }
    if (node.leaf) {
      return false;
    }
    return this._search(node.children[i], key);
  }

  _insertNonFull(node, key) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      node.keys.push(key);
      while (i >= 0 && key < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i -= 1;
      }
      node.keys[i + 1] = key;
    } else {
      while (i >= 0 && key < node.keys[i]) {
        i -= 1;
      }
      i += 1;
      if (node.children[i].keys.length === 2 * this._minDegree - 1) {
        this._splitChild(node, i);
        if (key > node.keys[i]) {
          i += 1;
        }
      }
      this._insertNonFull(node.children[i], key);
    }
  }

  _splitChild(parent, index) {
    const full = parent.children[index];
    const newNode = new BNode();
    newNode.leaf = full.leaf;
    const t = this._minDegree;
    for (let j = 0; j < t - 1; j += 1) {
      newNode.keys.push(full.keys[j + t]);
    }
    if (!full.leaf) {
      for (let j = 0; j < t; j += 1) {
        newNode.children.push(full.children[j + t]);
      }
      full.children.splice(t);
    }
    const mid = full.keys[t - 1];
    full.keys.splice(t - 1);
    parent.keys.splice(index, 0, mid);
    parent.children.splice(index + 1, 0, newNode);
  }
}

module.exports = { BTree };
