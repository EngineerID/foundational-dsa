# Write a Hash tabl with open addressing. Include methods for insert lookup, and remove. Use a linked list for collision resolution. Optimize for Fast key-value lookups in real-time. Provide clear comments and a simple hash function.

class HashTable:
    def __init__(self, size=8):
        self.size = size
        self.table = [None] * size

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = (key, value)  # Update existing key
                return
            index = (index + 1) % self.size  # Linear probing
        self.table[index] = (key, value)

    def get(self, key):
        index = self._hash(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                return self.table[index][1]
            index = (index + 1) % self.size
        return None  # Key not found

    def remove(self, key):
        index = self._hash(key)
        while self.table[index] is not None:
            if self.table[index][0] == key:
                self.table[index] = None  # Mark as deleted
                return True
            index = (index + 1) % self.size
        return False  # Key not found

    def __str__(self):
        return str([item for item in self.table if item is not None])