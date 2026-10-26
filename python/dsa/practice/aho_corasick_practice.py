from dsa.strings.aho_corasick import search


def find_hits(text: str, patterns: list[str]) -> list[int]:
    return search(text, patterns)
