from dsa.strings.kmp import search


def test_found():
    assert search("ababcababa", "aba") == 0


def test_not_found():
    assert search("hello", "world") == -1


def test_empty_pattern():
    assert search("abc", "") == 0


def test_null():
    assert search(None, "a") == -1
