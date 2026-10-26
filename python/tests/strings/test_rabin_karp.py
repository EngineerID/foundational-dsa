from dsa.strings import rabin_karp


def test_search():
    assert rabin_karp.search("abracadabra", "abra") == 0
    assert rabin_karp.search("abc", "") == 0
    assert rabin_karp.search("abc", "z") == -1
    assert rabin_karp.search("", "a") == -1
    assert rabin_karp.search("a", "a") == 0
    assert rabin_karp.search("aaaa", "aa") == 0
    assert rabin_karp.search("abcabcabc", "abc") == 0


def test_pattern_longer_than_text():
    assert rabin_karp.search("ab", "abcd") == -1
