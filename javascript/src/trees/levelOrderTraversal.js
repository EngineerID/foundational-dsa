// Trees — Binary tree level order traversal

/**
 * Level-order traversal from a heap-style level array (null = missing child).
 * Technique: BFS with level boundaries
 * Invariant: Each queue layer is one tree level.
 * levelOrder: Time O(n); Space O(n).
 */

function buildTree(values) {
  if (!values.length || values[0] == null) return null;
  const root = { val: values[0], left: null, right: null };
  const q = [root];
  let i = 1;
  while (q.length && i < values.length) {
    const node = q.shift();
    if (i < values.length && values[i] != null) {
      node.left = { val: values[i], left: null, right: null };
      q.push(node.left);
    }
    i += 1;
    if (i < values.length && values[i] != null) {
      node.right = { val: values[i], left: null, right: null };
      q.push(node.right);
    }
    i += 1;
  }
  return root;
}

function levelOrder(values) {
  if (!values || values.length === 0) return [];
  const root = buildTree(values);
  if (!root) return [];
  const out = [];
  const q = [root];
  while (q.length) {
    const level = [];
    const size = q.length;
    for (let t = 0; t < size; t += 1) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    out.push(level);
  }
  return out;
}

module.exports = { levelOrder };
