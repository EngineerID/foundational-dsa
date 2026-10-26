// Trees — Binary tree level order traversal

package com.dsa.examples.trees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

/**
 * Level-order traversal from a heap-style level array ({@code null} = missing child).
 * Technique: BFS with level boundaries
 * Invariant: Each queue layer is one tree level.
 * levelOrder: Time O(n); Space O(n).
 */
public final class LevelOrderTraversal {

    public static final class TreeNode {
        public int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int val) {
            this.val = val;
        }
    }

    private LevelOrderTraversal() {
    }

    /**
     * Returns values grouped by depth left-to-right. Time: O(n); Space O(n).
     */
    public static List<List<Integer>> levelOrder(Integer[] values) {
        if (values == null || values.length == 0 || values[0] == null) {
            return List.of();
        }
        TreeNode root = build(values);
        List<List<Integer>> out = new ArrayList<>();
        Deque<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int t = 0; t < size; t++) {
                TreeNode node = q.removeFirst();
                level.add(node.val);
                if (node.left != null) {
                    q.addLast(node.left);
                }
                if (node.right != null) {
                    q.addLast(node.right);
                }
            }
            out.add(level);
        }
        return out;
    }

    static TreeNode build(Integer[] values) {
        TreeNode root = new TreeNode(values[0]);
        Deque<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < values.length) {
            TreeNode node = q.removeFirst();
            if (i < values.length && values[i] != null) {
                node.left = new TreeNode(values[i]);
                q.addLast(node.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                node.right = new TreeNode(values[i]);
                q.addLast(node.right);
            }
            i++;
        }
        return root;
    }
}
