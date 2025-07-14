# Least Recently Used (LRU) Cache Implementation
# 
# This implementation defines an LRUCache class using a combination of a dictionary (hash map)
# and a doubly linked list to achieve O(1) time complexity for all operations.
#
# Features:
# - Supports the following operations in constant time (O(1)):
#     - insertKeyValuePair(key, value): Inserts or updates a key-value pair.
#       If the cache exceeds its maxSize, it evicts the least recently used item.
#     - getValueFromKey(key): Retrieves the value for a given key, if it exists.
#       Marks the key as the most recently used.
#     - getMostRecentKey(): Returns the most recently used key.
#
# Implementation Details:
# - The cache maintains a maxSize, set at initialization.
# - When inserting a new item and the cache is full, the least recently used item is removed.
#
# Complexity:
# - Time Complexity: O(1) for all operations.
# - Space Complexity: O(1), where n is the number of items stored in the cache.

class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, maxSize):
        self.maxSize = maxSize
        self.cache = {}
        self.head = Node(None, None)  # Dummy head
        self.tail = Node(None, None)  # Dummy tail
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        """Remove a node from the linked list."""
        prev_node = node.prev
        next_node = node.next
        prev_node.next = next_node
        next_node.prev = prev_node

    def _add_to_front(self, node):
        """Add a node to the front of the linked list."""
        node.prev = self.head
        node.next = self.head.next
        self.head.next.prev = node
        self.head.next = node

    def insertKeyValuePair(self, key, value):
        if key in self.cache:
            # Update existing key
            node = self.cache[key]
            node.value = value
            self._remove(node)
            self._add_to_front(node)
        else:
            # Insert new key-value pair
            if len(self.cache) >= self.maxSize:
                # Evict least recently used item
                lru_node = self.tail.prev
                self._remove(lru_node)
                del self.cache[lru_node.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add_to_front(new_node)

    def getValueFromKey(self, key):
        if key in self.cache:
            node = self.cache[key]
            # Move the accessed node to the front (most recently used)
            self._remove(node)
            self._add_to_front(node)
            return node.value
        return None

    def getMostRecentKey(self):
        if self.head.next == self.tail:
            return None  # Cache is empty
        return self.head.next.key  # Most recently used key is at the front of the list