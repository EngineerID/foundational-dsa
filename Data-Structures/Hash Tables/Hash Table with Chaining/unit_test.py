import unittest
from hash_table_chaining import HashTable  # Replace 'your_module' with the filename if needed.

class TestHashTableWithChaining(unittest.TestCase):
    def setUp(self):
        self.ht = HashTable(size=4)

    def test_insert_and_get(self):
        self.ht.insert('apple', 10)
        self.ht.insert('banana', 20)
        self.assertEqual(self.ht.get('apple'), 10)
        self.assertEqual(self.ht.get('banana'), 20)

    def test_update_value(self):
        self.ht.insert('apple', 10)
        self.ht.insert('apple', 100)
        self.assertEqual(self.ht.get('apple'), 100)

    def test_remove_existing_key(self):
        self.ht.insert('apple', 10)
        result = self.ht.remove('apple')
        self.assertTrue(result)
        self.assertIsNone(self.ht.get('apple'))

    def test_remove_nonexistent_key(self):
        result = self.ht.remove('nonexistent')
        self.assertFalse(result)

    def test_collision_handling(self):
        # Force collision by using keys that hash to the same index
        class KeyWithHash:
            def __init__(self, key, hash_value):
                self.key = key
                self._hash = hash_value

            def __hash__(self):
                return self._hash

            def __eq__(self, other):
                return isinstance(other, KeyWithHash) and self.key == other.key

        key1 = KeyWithHash('key1', 0)
        key2 = KeyWithHash('key2', 0)  # Same hash -> same bucket

        self.ht.insert(key1, 'value1')
        self.ht.insert(key2, 'value2')

        self.assertEqual(self.ht.get(key1), 'value1')
        self.assertEqual(self.ht.get(key2), 'value2')

        self.ht.remove(key1)
        self.assertIsNone(self.ht.get(key1))
        self.assertEqual(self.ht.get(key2), 'value2')

if __name__ == '__main__':
    unittest.main()
