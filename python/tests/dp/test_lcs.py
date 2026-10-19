from dsa.dp import lcs


def test_length():
    assert lcs.length("", "abc") == 0
    assert lcs.length("abcde", "ace") == 3
