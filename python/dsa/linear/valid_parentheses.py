# Linear — Valid parentheses

"""Check balanced nesting of ()[]{} brackets.

Technique: Stack
Invariant: Stack holds unmatched open brackets in order.
isValidParentheses: Time O(n); Space O(n).
"""

_PAIRS = {")": "(", "]": "[", "}": "{"}


def is_valid_parentheses(s: str | None) -> bool:
    """Return True when brackets are balanced; None/empty is valid."""
    if not s:
        return True
    stack: list[str] = []
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif ch in ")]}":
            if not stack or stack.pop() != _PAIRS[ch]:
                return False
        else:
            return False
    return not stack
