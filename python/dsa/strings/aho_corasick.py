# Strings — Aho-Corasick multi-pattern search

"""Find all pattern occurrences in text.

Technique: Aho-Corasick automaton
Invariant: Failure links preserve matched prefixes.
search: Time O(n + m + z); Space O(m).
"""

from __future__ import annotations

from collections import deque


def search(text: str, patterns: list[str]) -> list[int]:
    """Returns sorted start indices where any pattern occurs.

    Time: O(|text| + sum|patterns| + matches); Space: O(sum|patterns|).
    """
    if not patterns or not text:
        return []
    goto: list[dict[str, int]] = [{}]
    out: list[list[int]] = [[]]
    fail: list[int] = [0]

    def add_pattern(pid: int, pat: str) -> None:
        state = 0
        for ch in pat:
            nxt = goto[state].get(ch)
            if nxt is None:
                nxt = len(goto)
                goto[state][ch] = nxt
                goto.append({})
                out.append([])
                fail.append(0)
            state = nxt
        out[state].append(pid)

    for i, pat in enumerate(patterns):
        if pat:
            add_pattern(i, pat)

    q: deque[int] = deque()
    for ch, nxt in goto[0].items():
        fail[nxt] = 0
        q.append(nxt)
    while q:
        r = q.popleft()
        for ch, s in goto[r].items():
            q.append(s)
            f = fail[r]
            while f and ch not in goto[f]:
                f = fail[f]
            fail[s] = goto[f].get(ch, 0)
            out[s].extend(out[fail[s]])

    hits: list[int] = []
    state = 0
    for i, ch in enumerate(text):
        while state and ch not in goto[state]:
            state = fail[state]
        state = goto[state].get(ch, 0)
        if out[state]:
            for pid in out[state]:
                pat = patterns[pid]
                hits.append(i - len(pat) + 1)
    return sorted(set(hits))
