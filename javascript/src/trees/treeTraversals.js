/** Trees — Traversals (recursive + iterative) */

/**
 * Tree traversal utilities for binary trees.
 * Time: O(n) per traversal; Space: O(h) recursive, O(n) level-order.
 */

function inOrderRecursive(root) {
  const out = [];
  inOrderRec(root, out);
  return out;
}

function preOrderRecursive(root) {
  const out = [];
  preOrderRec(root, out);
  return out;
}

function postOrderRecursive(root) {
  const out = [];
  postOrderRec(root, out);
  return out;
}

/** In-order iterative. Time: O(n); Space: O(h). */
function inOrderIterative(root) {
  const out = [];
  const stack = [];
  let cur = root;
  while (cur !== null || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    out.push(cur.key);
    cur = cur.right;
  }
  return out;
}

/** Pre-order iterative. Time: O(n); Space: O(h). */
function preOrderIterative(root) {
  const out = [];
  if (root === null) {
    return out;
  }
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    out.push(node.key);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return out;
}

/** Post-order iterative. Time: O(n); Space: O(h). */
function postOrderIterative(root) {
  const out = [];
  if (root === null) {
    return out;
  }
  const stack = [root];
  const outStack = [];
  while (stack.length > 0) {
    const node = stack.pop();
    outStack.push(node);
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  while (outStack.length > 0) {
    out.push(outStack.pop().key);
  }
  return out;
}

/** Level-order (BFS). Time: O(n); Space: O(w) width. */
function levelOrder(root) {
  const out = [];
  if (root === null) {
    return out;
  }
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    out.push(node.key);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return out;
}

function inOrderRec(node, out) {
  if (node === null) {
    return;
  }
  inOrderRec(node.left, out);
  out.push(node.key);
  inOrderRec(node.right, out);
}

function preOrderRec(node, out) {
  if (node === null) {
    return;
  }
  out.push(node.key);
  preOrderRec(node.left, out);
  preOrderRec(node.right, out);
}

function postOrderRec(node, out) {
  if (node === null) {
    return;
  }
  postOrderRec(node.left, out);
  postOrderRec(node.right, out);
  out.push(node.key);
}

module.exports = {
  inOrderRecursive,
  preOrderRecursive,
  postOrderRecursive,
  inOrderIterative,
  preOrderIterative,
  postOrderIterative,
  levelOrder,
};
