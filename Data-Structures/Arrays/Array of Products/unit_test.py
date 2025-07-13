import unittest
from array_of_products import array_of_products  # Import your function

class TestArrayOfProducts(unittest.TestCase):

    def test_sample_case(self):
        self.assertEqual(array_of_products([5, 1, 4, 2]), [8, 40, 10, 20])

    def test_single_element(self):
        self.assertEqual(array_of_products([7]), [1])  # Typically, product of nothing = 1

    def test_with_zero(self):
        self.assertEqual(array_of_products([0, 4, 5]), [20, 0, 0])

    def test_with_multiple_zeros(self):
        self.assertEqual(array_of_products([0, 4, 0]), [0, 0, 0])

    def test_all_ones(self):
        self.assertEqual(array_of_products([1, 1, 1, 1]), [1, 1, 1, 1])

    def test_negative_numbers(self):
        self.assertEqual(array_of_products([-1, 2, -3, 4]), [-24, 12, -8, 6])

    def test_large_uniform_input(self):
        self.assertEqual(array_of_products([1]*1000), [1]*1000)

    def test_two_elements(self):
        self.assertEqual(array_of_products([3, 7]), [7, 3])

if __name__ == '__main__':
    unittest.main()
