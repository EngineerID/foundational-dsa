from dsa.strings import rabin_karp


def test_search():
    assert rabin_karp.search("abracadabra", "abra") == 0
    assert rabin_karp.search("abc", "") == 0
    assert rabin_karp.search("abc", "z") == -1
