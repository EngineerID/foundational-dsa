# Write a Python class that implements a Bloom Filter using only standard libraries. The class should be initialized with two parameters: size (number of bits) and hash_count (number of hash functions). It should support the following methods: add(item) to insert an item into the filter, and contains(item) to check if an item might be in the filter (returns True if possibly present, False if definitely not). Use multiple hash functions by applying hashlib with different salts or variations. Do not use any external libraries. Optionally, include a clear() method to reset the filter and a false_positive_probability(n) method to estimate the false positive rate after inserting n items. Keep the implementation simple and well-commented. Include a short usage example at the end.

import hashlib

class BloomFilter:
    def __init__(self, size, hash_count):
        """
        Initialize the Bloom Filter with a given size and number of hash functions.
        
        :param size: Number of bits in the filter.
        :param hash_count: Number of hash functions to use.
        """
        self.size = size
        self.hash_count = hash_count
        self.bit_array = [0] * size

    def _hash(self, item, salt):
        """
        Create a hash for the item using a specific salt.
        
        :param item: The item to hash.
        :param salt: The salt to use for hashing.
        :return: A hash value within the bounds of the bit array.
        """
        hash_object = hashlib.md5((str(item) + str(salt)).encode())
        return int(hash_object.hexdigest(), 16) % self.size

    def add(self, item):
        """
        Add an item to the Bloom Filter.
        
        :param item: The item to add.
        """
        for i in range(self.hash_count):
            index = self._hash(item, i)
            self.bit_array[index] = 1

    def contains(self, item):
        """
        Check if an item might be in the Bloom Filter.
        
        :param item: The item to check.
        :return: True if possibly present, False if definitely not present.
        """
        for i in range(self.hash_count):
            index = self._hash(item, i)
            if self.bit_array[index] == 0:
                return False
        return True

    def clear(self):
        """Reset the Bloom Filter."""
        self.bit_array = [0] * self.size

    def false_positive_probability(self, n):
        """
        Estimate the false positive rate after inserting n items.
        
        :param n: Number of items inserted.
        :return: Estimated false positive probability.
        """
        return (1 - (1 - 1/self.size) ** (self.hash_count * n)) ** self.hash_count