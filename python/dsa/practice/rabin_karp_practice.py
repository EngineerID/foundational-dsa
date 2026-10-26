from dsa.strings.rabin_karp import search


def first_index(text: str, pattern: str) -> int:
    return search(text, pattern)
