import unittest
from three_number_sum import threeNumberSum

class TestThreeNumberSum(unittest.TestCase):
    def test_sample_case(self):
        array = [12, 3, 1, 2, -6, 5, -8, 6]
        target = 0
        expected = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
        self.assertEqual(threeNumberSum(array, target), expected)

    def test_no_triplets(self):
        array = [1, 2, 3]
        target = 100
        expected = []
        self.assertEqual(threeNumberSum(array, target), expected)

    def test_all_negative_numbers(self):
        array = [-8, -6, -5, -1, -2]
        target = -15
        expected = [[-8, -6, -1], [-8, -5, -2]]
        result = threeNumberSum(array, target)
        self.assertEqual(sorted(result), sorted(expected))

    def test_all_positive_numbers(self):
        array = [1, 2, 3, 4, 5]
        target = 9
        expected = [[1, 3, 5], [2, 3, 4]]
        self.assertEqual(threeNumberSum(array, target), expected)

    def test_triplets_with_zero(self):
        array = [-1, 0, 1, 2, -1, -4]
        target = 0
        expected = [[-1, -1, 2], [-1, 0, 1]]
        result = threeNumberSum(array, target)
        self.assertEqual(sorted(result), sorted(expected))

    def test_large_array(self):
        array = list(range(-100, 101))
        target = 0
        result = threeNumberSum(array, target)
        self.assertIn([-100, 0, 100], result)
        self.assertIn([-2, 0, 2], result)

if __name__ == '__main__':
    unittest.main()
