# unit_test.py
import unittest
from LRU_cache import LRUCache  # Make sure this matches your actual filename

class TestLRUCache(unittest.TestCase):
    def setUp(self):
        self.cache = LRUCache(3)

    def test_insert_and_get(self):
        self.cache.insertKeyValuePair(1, 'A')
        self.assertEqual(self.cache.getValueFromKey(1), 'A')

    def test_eviction_policy(self):
        self.cache.insertKeyValuePair(1, 'A')
        self.cache.insertKeyValuePair(2, 'B')
        self.cache.insertKeyValuePair(3, 'C')
        self.cache.insertKeyValuePair(4, 'D')  # Evicts key 1
        self.assertIsNone(self.cache.getValueFromKey(1))
        self.assertEqual(self.cache.getValueFromKey(2), 'B')

    def test_update_existing_key(self):
        self.cache.insertKeyValuePair(1, 'A')
        self.cache.insertKeyValuePair(1, 'B')  # Update value
        self.assertEqual(self.cache.getValueFromKey(1), 'B')

    def test_most_recent_key(self):
        self.cache.insertKeyValuePair(1, 'A')
        self.cache.insertKeyValuePair(2, 'B')
        self.assertEqual(self.cache.getMostRecentKey(), 2)
        self.cache.getValueFromKey(1)
        self.assertEqual(self.cache.getMostRecentKey(), 1)

    def test_empty_cache(self):
        empty_cache = LRUCache(2)
        self.assertIsNone(empty_cache.getMostRecentKey())

    def test_get_non_existent_key(self):
        self.assertIsNone(self.cache.getValueFromKey(999))

    def test_sample_usage_trace(self):
        cache = LRUCache(3)
        cache.insertKeyValuePair("b", 2)
        cache.insertKeyValuePair("a", 1)
        cache.insertKeyValuePair("c", 3)
        self.assertEqual(cache.getMostRecentKey(), "c")
        self.assertEqual(cache.getValueFromKey("a"), 1)
        self.assertEqual(cache.getMostRecentKey(), "a")
        cache.insertKeyValuePair("d", 4)
        self.assertIsNone(cache.getValueFromKey("b"))  # b evicted
        cache.insertKeyValuePair("a", 5)
        self.assertEqual(cache.getValueFromKey("a"), 5)

if __name__ == "__main__":
    result = unittest.TextTestRunner(verbosity=2).run(
        unittest.TestLoader().loadTestsFromTestCase(TestLRUCache)
    )
    print("\n All tests passed!" if result.wasSuccessful() else "\n Some tests failed.")
