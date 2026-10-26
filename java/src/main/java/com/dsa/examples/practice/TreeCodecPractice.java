// Practice — Serialize / deserialize binary tree (level-order)

package com.dsa.examples.practice;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
public final class TreeCodecPractice {

    private TreeCodecPractice() {
    }

    static final class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int val) {
            this.val = val;
        }
    }

    public static String serialize(Integer[] values) {
        List<String> parts = new ArrayList<>();
        for (Integer v : values) {
            parts.add(v == null ? "#" : String.valueOf(v));
        }
        while (!parts.isEmpty() && "#".equals(parts.get(parts.size() - 1))) {
            parts.remove(parts.size() - 1);
        }
        return String.join(",", parts);
    }

    public static Integer[] deserialize(String data) {
        if (data == null || data.isEmpty()) {
            return new Integer[0];
        }
        Integer[] vals = Arrays.stream(data.split(","))
                .map(t -> "#".equals(t) ? null : Integer.valueOf(t))
                .toArray(Integer[]::new);
        TreeNode root = build(vals);
        List<Integer> level = levelOrder(root);
        return level.toArray(new Integer[0]);
    }

    private static TreeNode build(Integer[] values) {
        if (values.length == 0 || values[0] == null) {
            return null;
        }
        TreeNode root = new TreeNode(values[0]);
        Deque<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < values.length) {
            TreeNode node = q.remove();
            if (i < values.length && values[i] != null) {
                node.left = new TreeNode(values[i]);
                q.add(node.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                node.right = new TreeNode(values[i]);
                q.add(node.right);
            }
            i++;
        }
        return root;
    }

    private static List<Integer> levelOrder(TreeNode root) {
        if (root == null) {
            return List.of();
        }
        List<Integer> out = new ArrayList<>();
        Deque<Object> q = new LinkedList<>();
        q.add(root);
        while (!q.isEmpty()) {
            Object item = q.remove();
            if (item == null) {
                out.add(null);
                continue;
            }
            TreeNode node = (TreeNode) item;
            out.add(node.val);
            q.add(node.left);
            q.add(node.right);
        }
        while (!out.isEmpty() && out.get(out.size() - 1) == null) {
            out.remove(out.size() - 1);
        }
        return out;
    }
}
