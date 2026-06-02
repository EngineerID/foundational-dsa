/** Trees — Interval Tree */

/**
 * Interval tree (augmented BST by low endpoint, stores maxEnd).
 * overlapSearch O(log n + k) typical.
 */

class Interval {
  /** Closed interval [low, high]. */
  constructor(low, high) {
    if (low > high) {
      throw new Error('low > high');
    }
    this.low = low;
    this.high = high;
  }

  overlaps(other) {
    return this.low <= other.high && other.low <= this.high;
  }
}

class INode {
  constructor(interval) {
    this.interval = interval;
    this.maxEnd = interval.high;
    this.left = null;
    this.right = null;
  }
}

class IntervalTree {
  constructor() {
    this.root = null;
  }

  /** Inserts an interval. Time: O(h); Space: O(1). */
  insert(interval) {
    this.root = this._insert(this.root, interval);
  }

  /** Returns all intervals overlapping query. Time: O(log n + k); Space: O(k). */
  overlapSearch(query) {
    const result = [];
    this._search(this.root, query, result);
    return result;
  }

  _insert(node, interval) {
    if (node === null) {
      return new INode(interval);
    }
    if (interval.low < node.interval.low) {
      node.left = this._insert(node.left, interval);
    } else {
      node.right = this._insert(node.right, interval);
    }
    node.maxEnd = Math.max(node.maxEnd, interval.high);
    if (node.left !== null) {
      node.maxEnd = Math.max(node.maxEnd, node.left.maxEnd);
    }
    if (node.right !== null) {
      node.maxEnd = Math.max(node.maxEnd, node.right.maxEnd);
    }
    return node;
  }

  _search(node, query, result) {
    if (node === null || node.maxEnd < query.low) {
      return;
    }
    if (node.left !== null) {
      this._search(node.left, query, result);
    }
    if (node.interval.overlaps(query)) {
      result.push(node.interval);
    }
    if (node.right !== null && node.interval.low <= query.high) {
      this._search(node.right, query, result);
    }
  }
}

module.exports = { Interval, IntervalTree };
