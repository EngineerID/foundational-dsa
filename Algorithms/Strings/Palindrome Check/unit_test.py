import unittest
from palindrome_check import palindrome_check

class TestPalindromeCheck(unittest.TestCase):

    def test_basic_palindrome(self):
        self.assertTrue(palindrome_check("racecar"))

    def test_even_length_palindrome(self):
        self.assertTrue(palindrome_check("abba"))

    def test_not_palindrome(self):
        self.assertFalse(palindrome_check("hello"))

    def test_single_character(self):
        self.assertTrue(palindrome_check("a"))

    def test_empty_string(self):
        self.assertTrue(palindrome_check(""))

    def test_case_sensitive(self):
        self.assertFalse(palindrome_check("RaceCar"))  # case-sensitive

    def test_numeric_string(self):
        self.assertTrue(palindrome_check("12321"))

if __name__ == "__main__":
    unittest.main()
