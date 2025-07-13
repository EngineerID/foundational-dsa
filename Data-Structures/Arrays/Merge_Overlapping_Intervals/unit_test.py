import unittest
from merge_overlapping_intervals import merge_overlapping_intervals  # Adjust the import based on your file name

class TestMergeIntervals(unittest.TestCase):

    def test_sample_case(self):
        intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
        expected = [[1, 2], [3, 8], [9, 10]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_no_overlaps(self):
        intervals = [[1, 2], [3, 4], [5, 6]]
        expected = [[1, 2], [3, 4], [5, 6]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_fully_nested_intervals(self):
        intervals = [[1, 10], [2, 5], [3, 4]]
        expected = [[1, 10]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_single_interval(self):
        intervals = [[4, 9]]
        expected = [[4, 9]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_empty_input(self):
        intervals = []
        expected = []
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_already_merged(self):
        intervals = [[1, 3], [3, 5], [5, 7]]
        expected = [[1, 7]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

    def test_with_negative_values(self):
        intervals = [[-10, -1], [-5, 0], [1, 3]]
        expected = [[-10, 0], [1, 3]]
        self.assertEqual(merge_overlapping_intervals(intervals), expected)

if __name__ == '__main__':
    unittest.main()
