import unittest
from tries import SuffixTrie

class TestSuffixTrie(unittest.TestCase):
    def setUp(self):
        self.trie = SuffixTrie()
        self.trie.populateSuffixTrieFrom("babc")

    def test_trie_structure(self):
        expected = {
            "c": {"*": True},
            "b": {
                "c": {"*": True},
                "a": {"b": {"c": {"*": True}}},
            },
            "a": {
                "b": {
                    "c": {"*": True}
                }
            }
        }
        self.assertEqual(self.trie.root, expected)

    def test_contains_true(self):
        self.assertTrue(self.trie.contains("abc"))
        self.assertTrue(self.trie.contains("babc"))
        self.assertTrue(self.trie.contains("c"))

    def test_contains_false(self):
        self.assertFalse(self.trie.contains("cab"))
        self.assertFalse(self.trie.contains("bac"))
        self.assertFalse(self.trie.contains("xyz"))

if __name__ == "__main__":
    unittest.main()
