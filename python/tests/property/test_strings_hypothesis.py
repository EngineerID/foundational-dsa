from hypothesis import given
from hypothesis import strategies as st

from dsa.strings.kmp import search


@given(
    st.text(alphabet="abc", max_size=24),
    st.text(alphabet="abc", max_size=10),
)
def test_kmp_matches_str_find(text, pattern):
    assert search(text, pattern) == text.find(pattern)


def test_kmp_empty_pattern_convention():
    assert search("xyz", "") == 0
    assert search("", "") == 0
