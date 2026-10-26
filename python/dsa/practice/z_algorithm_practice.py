from dsa.strings.z_algorithm import search, z_array


def find_index(text: str, pattern: str) -> int:
    return search(text, pattern)


def z_values(text: str) -> list[int]:
    return z_array(text)
