# unit_test.py

import unittest
from minimum_waiting_time import minimum_waiting_time

class TestMinimumWaitingTime(unittest.TestCase):

    def test_example_case(self):
        queries = [3, 2, 1, 2, 6]
        expected = 17
        self.assertEqual(minimum_waiting_time(queries), expected)

    def test_sorted_input(self):
        queries = [1, 2, 3, 4, 5]
        expected = 20  # 1*4 + 2*3 + 3*2 + 4*1 = 4 + 6 + 6 + 4 = 20
        self.assertEqual(minimum_waiting_time(queries), expected)

    def test_reverse_sorted_input(self):
        queries = [5, 4, 3, 2, 1]
        expected = 20  # After sort = [1,2,3,4,5]
        self.assertEqual(minimum_waiting_time(queries), expected)

    def test_identical_queries(self):
        queries = [2, 2, 2, 2]
        expected = 2*3 + 2*2 + 2*1  # = 6 + 4 + 2 = 12
        self.assertEqual(minimum_waiting_time(queries), expected)

    def test_single_query(self):
        queries = [5]
        expected = 0
        self.assertEqual(minimum_waiting_time(queries), expected)

    def test_two_queries(self):
        queries = [1, 2]
        expected = 1  # second waits 1
        self.assertEqual(minimum_waiting_time(queries), expected)

if __name__ == "__main__":
    unittest.main()
