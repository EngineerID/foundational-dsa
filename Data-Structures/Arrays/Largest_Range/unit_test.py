import unittest
from largest_range import largest_range  # assumes function returns a tuple like (start, end)

class TestLargestRange(unittest.TestCase):
    def test_sample_case(self):
        array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
        expected = (0, 7)
        self.assertEqual(largest_range(array), expected)

    def test_sorted_array(self):
        array = [1, 2, 3, 4, 5]
        expected = (1, 5)
        self.assertEqual(largest_range(array), expected)

    def test_full_reverse(self):
        array = [5, 4, 3, 2, 1]
        expected = (1, 5)
        self.assertEqual(largest_range(array), expected)

    def test_partial_range(self):
        array = [1, 9, 3, 10, 2, 20]
        expected = (1, 3)
        self.assertEqual(largest_range(array), expected)

    def test_single_element(self):
        array = [42]
        expected = (42, 42)
        self.assertEqual(largest_range(array), expected)

    def test_two_elements_consecutive(self):
        array = [2, 1]
        expected = (1, 2)
        self.assertEqual(largest_range(array), expected)

    def test_two_elements_non_consecutive(self):
        array = [2, 4]
        result = largest_range(array)
        self.assertIn(result, [(2, 2), (4, 4)])  # Accept either as valid

    def test_with_negatives(self):
        array = [-1, -3, -2, 4, 5, 6]
        expected = (-3, -1)
        self.assertEqual(largest_range(array), expected)

    def test_duplicate_elements(self):
        array = [1, 2, 2, 3]
        expected = (1, 3)
        self.assertEqual(largest_range(array), expected)

    def test_large_gap(self):
        array = [100, 4, 200, 1, 3, 2]
        expected = (1, 4)
        self.assertEqual(largest_range(array), expected)

if __name__ == '__main__':
    unittest.main()
