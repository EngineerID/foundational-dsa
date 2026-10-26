from dsa.strings import longest_substring_without_repeating


def test_length_of_longest_substring():
    assert longest_substring_without_repeating.length_of_longest_substring("abcabcbb") == 3
    assert longest_substring_without_repeating.length_of_longest_substring("") == 0
    assert longest_substring_without_repeating.length_of_longest_substring(None) == 0
