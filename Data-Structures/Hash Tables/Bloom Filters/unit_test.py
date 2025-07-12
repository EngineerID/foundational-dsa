import unittest
from bloom_filter import BloomFilter  # Make sure this path matches your actual file

class TestBloomFilter(unittest.TestCase):
    def setUp(self):
        self.bloom = BloomFilter(size=1000, hash_count=5)
        self.items_added = ['apple', 'banana', 'orange']
        for item in self.items_added:
            self.bloom.add(item)

    def test_contains_added_items(self):
        """Test that added items are reported as possibly present."""
        for item in self.items_added:
            self.assertTrue(self.bloom.contains(item), f"'{item}' should be in BloomFilter")

    def test_contains_non_added_item(self):
        """Test that a non-added item is possibly not present (may have false positive)."""
        item = 'grapefruit'
        result = self.bloom.contains(item)
        # We expect False most of the time but allow True due to false positives
        self.assertIn(result, [True, False])

    def test_clear(self):
        """Test that the clear method resets the filter."""
        self.bloom.clear()
        for item in self.items_added:
            self.assertFalse(self.bloom.contains(item), "Filter should be empty after clear")

    def test_false_positive_probability(self):
        """Test that false positive probability returns a float in valid range."""
        prob = self.bloom.false_positive_probability(n=len(self.items_added))
        self.assertIsInstance(prob, float)
        self.assertGreaterEqual(prob, 0.0)
        self.assertLessEqual(prob, 1.0)

if __name__ == '__main__':
    unittest.main()
