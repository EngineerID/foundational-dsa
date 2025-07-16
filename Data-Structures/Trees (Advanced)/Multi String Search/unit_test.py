import unittest
from multi_string_search import multi_string_search

class TestMultiStringSearch(unittest.TestCase):

    def test_sample_input_1(self):
        bigString = "this is a big string"
        smallStrings = ["this", "yo", "is", "a", "bigger", "string", "kappa"]
        expected = [True, False, True, True, False, True, False]
        result = multi_string_search(bigString, smallStrings)
        self.assertEqual(result, expected)

    def test_sample_input_2(self):
        bigString = "abcdefghijklmnopqrstuvwxyz"
        smallStrings = ["abc", "mnopq", "wyz", "no", "e", "tuuv"]
        expected = [True, True, False, True, True, False]
        result = multi_string_search(bigString, smallStrings)
        self.assertEqual(result, expected)

    def test_empty_smallStrings(self):
        bigString = "anything"
        smallStrings = []
        expected = []
        result = multi_string_search(bigString, smallStrings)
        self.assertEqual(result, expected)

    def test_empty_bigString(self):
        bigString = ""
        smallStrings = ["a", "b", "c"]
        expected = [False, False, False]
        result = multi_string_search(bigString, smallStrings)
        self.assertEqual(result, expected)

    def test_overlapping_words(self):
        bigString = "overlapping overlap"
        smallStrings = ["lap", "ping", "over", "lap ping", "pinglap"]
        expected = [True, True, True, False, False]
        result = multi_string_search(bigString, smallStrings)
        self.assertEqual(result, expected)

if __name__ == "__main__":
    unittest.main()
