# File: unit_test.py

import unittest
from min_number_of_jumps import min_number_of_jumps

class TestMinNumberOfJumps(unittest.TestCase):

    def assertJump(self, array, expected):
        result = min_number_of_jumps(array)
        self.assertEqual(
            result,
            expected,
            msg=f"\nFailed for input: {array}\nExpected: {expected}, Got: {result}"
        )

    def test_case_1(self):
        self.assertJump([3, 4, 2, 1, 2, 3, 7, 1, 1, 3], 4)

    def test_case_2(self):
        self.assertJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 3)

    def test_case_3(self):
        self.assertJump([1, 1, 1, 1, 1], 4)

    def test_case_4(self):
        self.assertJump([2, 3, 1, 1, 4], 2)

    def test_case_5(self):
        self.assertJump([5, 4, 3, 2, 1, 0], 1)

    def test_case_6(self):
        self.assertJump([0], 0)

    def test_case_7(self):
        self.assertJump([1, 0, 0, 0], -1)  # or whatever unreachable marker you use

if __name__ == '__main__':
    unittest.main()
