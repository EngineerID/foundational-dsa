// Trees — BST node (shared by augmented trees)

package com.dsa.examples.trees;

/**
 * Node for binary search trees and augmentations.
 */
public class BSTNode<K extends Comparable<K>, V> {

    public K key;
    public V value;
    public BSTNode<K, V> left;
    public BSTNode<K, V> right;
    public BSTNode<K, V> parent;
    public int subtreeSize;
    public int maxEnd;

    public BSTNode(K key, V value) {
        this.key = key;
        this.value = value;
        this.subtreeSize = 1;
    }
}
