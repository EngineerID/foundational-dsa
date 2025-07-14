import unittest
import sys
import os

# Ensure we can import from same directory
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from continuous_median import ContinuousMedianHandler

class TestContinuousMedianHandler(unittest.TestCase):
    def test_sample_usage(self):
        cmh = ContinuousMedianHandler()
        cmh.insert(5)
        cmh.insert(10)
        self.assertEqual(cmh.get_median(), 7.5)
        cmh.insert(100)
        self.assertEqual(cmh.get_median(), 10.0)

    def test_odd_number_of_elements(self):
        cmh = ContinuousMedianHandler()
        for num in [1, 2, 3]:
            cmh.insert(num)
        self.assertEqual(cmh.get_median(), 2.0)

    def test_even_number_of_elements(self):
        cmh = ContinuousMedianHandler()
        for num in [1, 2, 3, 4]:
            cmh.insert(num)
        self.assertEqual(cmh.get_median(), 2.5)

    def test_negative_numbers(self):
        cmh = ContinuousMedianHandler()
        for num in [-10, -5, -1]:
            cmh.insert(num)
        self.assertEqual(cmh.get_median(), -5.0)

    def test_large_stream(self):
        cmh = ContinuousMedianHandler()
        for i in range(1, 1001):  # 1 to 1000
            cmh.insert(i)
        self.assertEqual(cmh.get_median(), 500.5)

if __name__ == "__main__":
    unittest.main()
