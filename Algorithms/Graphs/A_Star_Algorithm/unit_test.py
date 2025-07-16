import unittest
from a_star_algorithm import a_star_algorithm

class TestAStarAlgorithm(unittest.TestCase):

    def test_sample_input_1(self):
        graph = [
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ]
        start_row, start_col = 0, 1
        end_row, end_col = 4, 3

        expected_path = [
            [0, 1], [0, 0], [1, 0], [2, 0],
            [2, 1], [3, 1], [4, 1], [4, 2], [4, 3]
        ]
        result = a_star_algorithm(graph, start_row, start_col, end_row, end_col)
        self.assertEqual(result, expected_path)

    def test_direct_path(self):
        graph = [
            [0, 0],
            [0, 0]
        ]
        start_row, start_col = 0, 0
        end_row, end_col = 1, 1

        expected_path = [[0, 0], [0, 1], [1, 1]]
        result = a_star_algorithm(graph, start_row, start_col, end_row, end_col)
        self.assertEqual(result, expected_path)

    def test_no_path(self):
        graph = [
            [0, 1],
            [1, 0]
        ]
        start_row, start_col = 0, 0
        end_row, end_col = 1, 1

        expected_path = []  # Or possibly None, depending on your implementation
        result = a_star_algorithm(graph, start_row, start_col, end_row, end_col)
        self.assertEqual(result, expected_path)

    def test_start_is_end(self):
        graph = [
            [0, 0],
            [0, 0]
        ]
        start_row = end_row = 1
        start_col = end_col = 0

        expected_path = [[1, 0]]
        result = a_star_algorithm(graph, start_row, start_col, end_row, end_col)
        self.assertEqual(result, expected_path)

if __name__ == "__main__":
    unittest.main()
