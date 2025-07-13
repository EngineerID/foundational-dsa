import unittest

from knapsack_algorithm import knapsack  # Update this with your actual module filename

class TestKnapsack(unittest.TestCase):

    def test_sample_case(self):
        items = [[4, 3], [6, 7], [1, 2], [5, 6]]
        capacity = 10
        expected_value = 10  # [4,3] + [6,7] is max value = 10 under weight = 10
        value, indices = knapsack(items, capacity)
        self.assertEqual(value, expected_value)
        self.assertTrue(sum(items[i][1] for i in indices) <= capacity)
        self.assertEqual(sum(items[i][0] for i in indices), expected_value)

    def test_basic_case(self):
        items = [[3, 2], [2, 1], [4, 3], [2, 2]]
        max_weight = 5
        value, selected = knapsack(items, max_weight)
        self.assertEqual(value, 7)
        self.assertTrue(sum(items[i][1] for i in selected) <= max_weight)
        self.assertEqual(sum(items[i][0] for i in selected), value)

    def test_exact_fit(self):
        items = [[5, 3], [3, 2], [3, 2]]
        max_weight = 5
        value, selected = knapsack(items, max_weight)
        self.assertEqual(value, 8)
        self.assertTrue(sum(items[i][1] for i in selected) <= max_weight)

    def test_no_items(self):
        items = []
        max_weight = 10
        value, selected = knapsack(items, max_weight)
        self.assertEqual(value, 0)
        self.assertEqual(selected, [])

    def test_zero_capacity(self):
        items = [[2, 1], [3, 2]]
        max_weight = 0
        value, selected = knapsack(items, max_weight)
        self.assertEqual(value, 0)
        self.assertEqual(selected, [])

    def test_multiple_optimal_combinations(self):
        items = [[1, 1], [1, 1], [1, 1], [1, 1]]
        max_weight = 2
        value, selected = knapsack(items, max_weight)
        self.assertEqual(value, 2)
        self.assertEqual(len(selected), 2)
        self.assertTrue(all(i in range(len(items)) for i in selected))

if __name__ == "__main__":
    unittest.main()
