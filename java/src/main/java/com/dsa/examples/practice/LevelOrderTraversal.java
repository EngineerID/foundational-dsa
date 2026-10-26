// Practice — Binary tree level order traversal

package com.dsa.examples.practice;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

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

    public static TreeNode build(Integer[] values) {
        if (values.length == 0 || values[0] == null) {
            return null;
        }
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

    public static List<List<Integer>> levelOrder(Integer[] values) {
        TreeNode root = build(values);
        List<List<Integer>> out = new ArrayList<>();
        if (root == null) {
            return out;
        }
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
}
