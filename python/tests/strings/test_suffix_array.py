from dsa.strings.suffix_array import build


def test_build():
    assert build("ab")[0] == 0
