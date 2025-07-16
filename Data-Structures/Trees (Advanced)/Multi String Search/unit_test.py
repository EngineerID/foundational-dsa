import unittest
from multi_string_search import multi_string_search

class TestMultiStringSearch(unittest.TestCase):

    def test_sample_input_1(self):
        string = "this is a big string"
        substrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"]
        expected = [True, False, True, True, False, True, False]
        result = multi_string_search(string, substrings)
        self.assertEqual(result, expected)

    def test_sample_input_2(self):
        string = "abcdefghijklmnopqrstuvwxyz"
        substrings = ["abc", "mnopq", "wyz", "no", "e", "tuuv"]
        expected = [True, True, False, True, True, False]
        result = multi_string_search(string, substrings)
        self.assertEqual(result, expected)

    def test_empty_substrings(self):
        string = "anything"
        substrings = []
        expected = []
        result = multi_string_search(string, substrings)
        self.assertEqual(result, expected)

    def test_empty_string(self):
        string = ""
        substrings = ["a", "b", "c"]
        expected = [False, False, False]
        result = multi_string_search(string, substrings)
        self.assertEqual(result, expected)

    def test_overlapping_words(self):
        string = "overlapping overlap"
        substrings = ["lap", "ping", "over", "lap ping", "pinglap"]
        expected = [True, True, True, False, False]
        result = multi_string_search(string, substrings)
        self.assertEqual(result, expected)

if __name__ == "__main__":
    unittest.main()
