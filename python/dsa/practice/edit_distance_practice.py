# Practice — Edit distance (Levenshtein DP)


def edit_distance(a: str, b: str) -> int:
    """Minimum insert/delete/replace ops to transform a into b.

    Time: O(nm); Space O(min(n,m)).
    """
    if len(a) < len(b):
        a, b = b, a
    prev = list(range(len(b) + 1))
    for i, ch_a in enumerate(a, start=1):
        cur = [i]
        for j, ch_b in enumerate(b, start=1):
            cost = 0 if ch_a == ch_b else 1
            cur.append(min(prev[j] + 1, cur[-1] + 1, prev[j - 1] + cost))
        prev = cur
    return prev[-1]
