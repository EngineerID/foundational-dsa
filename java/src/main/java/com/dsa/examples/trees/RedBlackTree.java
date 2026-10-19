// Trees — Red-black tree

package com.dsa.examples.trees;

/**
 * Balanced BST with red-black invariants.
 * search/insert: Time O(log n); Space O(n).
 */
public class RedBlackTree {

    private static final class Node {
        int key;
        int value;
        Node left;
        Node right;
        Node parent;
        boolean red = true;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    private Node root;

    public Integer search(int key) {
        Node cur = root;
        while (cur != null) {
            if (key == cur.key) {
                return cur.value;
            }
            cur = key < cur.key ? cur.left : cur.right;
        }
        return null;
    }

    public void insert(int key, int value) {
        Node node = new Node(key, value);
        Node parent = null;
        Node cur = root;
        while (cur != null) {
            parent = cur;
            if (key < cur.key) {
                cur = cur.left;
            } else if (key > cur.key) {
                cur = cur.right;
            } else {
                cur.value = value;
                return;
            }
        }
        node.parent = parent;
        if (parent == null) {
            root = node;
        } else if (key < parent.key) {
            parent.left = node;
        } else {
            parent.right = node;
        }
        fixInsert(node);
    }

    private void fixInsert(Node z) {
        while (z.parent != null && z.parent.red) {
            Node gp = z.parent.parent;
            if (gp == null) {
                break;
            }
            if (z.parent == gp.left) {
                Node y = gp.right;
                if (y != null && y.red) {
                    gp.red = true;
                    z.parent.red = false;
                    y.red = false;
                    z = gp;
                } else {
                    if (z == z.parent.right) {
                        z = z.parent;
                        rotateLeft(z);
                    }
                    z.parent.red = false;
                    gp.red = true;
                    rotateRight(gp);
                }
            } else {
                Node y = gp.left;
                if (y != null && y.red) {
                    gp.red = true;
                    z.parent.red = false;
                    y.red = false;
                    z = gp;
                } else {
                    if (z == z.parent.left) {
                        z = z.parent;
                        rotateRight(z);
                    }
                    z.parent.red = false;
                    gp.red = true;
                    rotateLeft(gp);
                }
            }
        }
        if (root != null) {
            root.red = false;
        }
    }

    private void rotateLeft(Node x) {
        Node y = x.right;
        if (y == null) {
            return;
        }
        x.right = y.left;
        if (y.left != null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    private void rotateRight(Node x) {
        Node y = x.left;
        if (y == null) {
            return;
        }
        x.left = y.right;
        if (y.right != null) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent == null) {
            root = y;
        } else if (x == x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }
}
