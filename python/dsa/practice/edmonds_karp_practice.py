from dsa.graphs.edmonds_karp import max_flow


def max_flow_value(n: int, edges: list[list[int]], source: int, sink: int) -> int:
    triples = [(e[0], e[1], e[2]) for e in edges]
    return max_flow(n, triples, source, sink)
