// Practice — Serialize / deserialize binary tree (level-order)

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function build(values) {
  if (!values.length || values[0] == null) return null;
  const root = new TreeNode(values[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < values.length) {
    const node = q.shift();
    if (i < values.length && values[i] != null) {
      node.left = new TreeNode(values[i]);
      q.push(node.left);
    }
    i += 1;
    if (i < values.length && values[i] != null) {
      node.right = new TreeNode(values[i]);
      q.push(node.right);
    }
    i += 1;
  }
  return root;
}

function levelOrder(root) {
  if (!root) return [];
  const out = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (!node) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }
  while (out.length && out[out.length - 1] == null) out.pop();
  return out;
}

function serialize(values) {
  const parts = values.map((v) => (v == null ? '#' : String(v)));
  while (parts.length && parts[parts.length - 1] === '#') parts.pop();
  return parts.join(',');
}

function deserialize(data) {
  if (!data) return [];
  const vals = data.split(',').map((t) => (t === '#' ? null : Number(t)));
  return levelOrder(build(vals));
}

module.exports = { serialize, deserialize, TreeNode };
