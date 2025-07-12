import unittest

from hash_table_open_addressing import HashTable  # Replace with actual import path if needed

class TestHashTable(unittest.TestCase):

    def setUp(self):
        self.hash_table = HashTable()

    def test_insert_and_get(self):
        self.hash_table.insert("apple", 1)
        self.hash_table.insert("banana", 2)
        self.assertEqual(self.hash_table.get("apple"), 1)
        self.assertEqual(self.hash_table.get("banana"), 2)

    def test_update_value(self):
        self.hash_table.insert("key", 100)
        self.hash_table.insert("key", 200)
        self.assertEqual(self.hash_table.get("key"), 200)

    def test_get_nonexistent_key(self):
        self.assertIsNone(self.hash_table.get("not-found"))

    def test_remove_existing_key(self):
        self.hash_table.insert("delete-me", 99)
        self.assertTrue(self.hash_table.remove("delete-me"))
        self.assertIsNone(self.hash_table.get("delete-me"))

    def test_remove_nonexistent_key(self):
        self.assertFalse(self.hash_table.remove("ghost"))

    def test_collision_resolution(self):
        # Force collision by mocking _hash if necessary, or use keys with same hash mod size
        size = self.hash_table.size
        key1 = "abc"
        key2 = "acb"  # Likely to collide in small tables
        while self.hash_table._hash(key1) != self.hash_table._hash(key2):
            key2 += "x"  # Try until collision
        self.hash_table.insert(key1, 10)
        self.hash_table.insert(key2, 20)
        self.assertEqual(self.hash_table.get(key1), 10)
        self.assertEqual(self.hash_table.get(key2), 20)

if __name__ == '__main__':
    unittest.main()
