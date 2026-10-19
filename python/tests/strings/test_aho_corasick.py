from dsa.strings.aho_corasick import search


def test_search():
    assert 0 in search("aba", ["a"])
