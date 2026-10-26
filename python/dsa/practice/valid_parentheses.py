# Practice — Valid parentheses


def is_valid_parentheses(s: str) -> bool:
    """True when brackets are balanced and correctly nested.

    Time: O(n); Space O(n).
    """
    pairs = {")": "(", "]": "[", "}": "{"}
    stack: list[str] = []
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif ch in ")]}":
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            return False
    return not stack
