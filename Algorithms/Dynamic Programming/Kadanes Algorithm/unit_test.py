import unittest
from kadanes_algorithm import kadanes_algorithm

class TestKadanesAlgorithm(unittest.TestCase):

    def test_sample_case(self):
        array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
        self.assertEqual(kadanes_algorithm(array), 19)

    def test_all_negatives(self):
        array = [-3, -4, -2, -1, -7]
        self.assertEqual(kadanes_algorithm(array), -1)

    def test_all_positives(self):
        array = [1, 2, 3, 4]
        self.assertEqual(kadanes_algorithm(array), 10)

    def test_single_positive(self):
        array = [7]
        self.assertEqual(kadanes_algorithm(array), 7)

    def test_single_negative(self):
        array = [-5]
        self.assertEqual(kadanes_algorithm(array), -5)

    def test_zeros_and_pos(self):
        array = [0, 0, 3, 0, 0]
        self.assertEqual(kadanes_algorithm(array), 3)

    def test_with_zeros_and_negatives(self):
        array = [0, -3, 5, -2, 1, 0, 3]
        self.assertEqual(kadanes_algorithm(array), 7)

    def test_empty_array(self):
        self.assertEqual(kadanes_algorithm([]), 0)

    def test_equal_max_subarrays(self):
        array = [1, -2, 3, -2, 3]
        self.assertEqual(kadanes_algorithm(array), 4)

    def test_large_negative_at_end(self):
        array = [4, 5, 6, -100]
        self.assertEqual(kadanes_algorithm(array), 15)

    def test_large_negative_at_start(self):
        array = [-100, 4, 5, 6]
        self.assertEqual(kadanes_algorithm(array), 15)

    def test_all_zeros(self):
        array = [0, 0, 0]
        self.assertEqual(kadanes_algorithm(array), 0)

if __name__ == '__main__':
    unittest.main()
