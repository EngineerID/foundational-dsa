from dsa.strings import z_algorithm


def test_search_and_empty_pattern():
    assert z_algorithm.search("ababcababa", "aba") == 0
    assert z_algorithm.search("abc", "") == 0
    assert z_algorithm.search("", "a") == -1


def test_z_array():
    assert z_algorithm.z_array("aabcaab")[0] == 7
    assert z_algorithm.search("ababcababa", "aba") == 0
