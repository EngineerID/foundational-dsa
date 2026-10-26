from dsa.linear.valid_parentheses import is_valid_parentheses


def test_is_valid_parentheses():
    assert is_valid_parentheses("()[]{}") is True
    assert is_valid_parentheses("(]") is False
    assert is_valid_parentheses("") is True
