# Suffix Trie Construction (Ivan)

# Implement a `SuffixTrie` class that builds a suffix trie from a given string.
# The class should:
#  - Have a `root` property that stores the trie structure.
#  - Include a `populateSuffixTrieFrom(string)` method that fills the `root` with all suffixes of the string.
#  - Use "*" as the end symbol to mark the end of a valid suffix.
#  - Support searching for substrings using a `contains(string)` method.

# Constraints:
#  - Insertion and search operations should each run in O(n) time, where n is the length of the input string.
#  - Space complexity should be O(n²) in the worst case due to overlapping suffixes, but efficient implementations may optimize this.

"""
class SuffixTrie:
    def __init__(self):
        self.root = {}
    
    def populateSuffixTrieFrom(self, string):
        # Insert all suffixes of the input string into the trie
        for i in range(len(string)):
            self._insert_suffix(string[i:])
    
    def _insert_suffix(self, suffix):
        # Helper method to insert a single suffix into the trie
        current_node = self.root
        for char in suffix:
            if char not in current_node:
                current_node[char] = {}
            current_node = current_node[char]
        current_node['*'] = True  # Mark the end of a valid suffix
    
    def contains(self, string):
        # Check if the trie contains the given string as a suffix
        current_node = self.root
        for char in string:
            if char not in current_node:
                return False
            current_node = current_node[char]
        return '*' in current_node  # Check if we reached the end of a valid suffix
"""

# Implement a `SuffixTrie` class that builds a suffix trie from a given string.
# The class should:
#  - Be initialized with a string: the constructor `__init__(self, string)` should be used to instantiate the trie.
#  - Have a `root` property that stores the trie structure.
#  - Include a `populateSuffixTrieFrom(string)` method that fills the `root` with all suffixes of the string.
#  - Use "*" as the end symbol to mark the end of a valid suffix.
#  - Support searching for substrings using a `contains(string)` method.

# Constraints:
#  - Insertion and search operations should each run in O(n) time, where n is the length of the input string.
#  - Space complexity should be O(n²) in the worst case due to overlapping suffixes, but efficient implementations may optimize this.

class SuffixTrie:
    def __init__(self, string):
        self.root = {}
        self.populateSuffixTrieFrom(string)

    def populateSuffixTrieFrom(self, string):
        # Insert all suffixes of the input string into the trie
        for i in range(len(string)):
            self._insert_suffix(string[i:])

    def _insert_suffix(self, suffix):
        # Helper method to insert a single suffix into the trie
        current_node = self.root
        for char in suffix:
            if char not in current_node:
                current_node[char] = {}
            current_node = current_node[char]
        current_node['*'] = True  # Mark the end of a valid suffix

    def contains(self, string):
        # Check if the trie contains the given string as a suffix
        current_node = self.root
        for char in string:
            if char not in current_node:
                return False
            current_node = current_node[char]
        return '*' in current_node  # Check if we reached the end of a valid suffix