from dsa.graphs.dfs import traverse_iterative, traverse_recursive
from dsa.graphs.graph import Graph


def test_dfs_recursive_discovery_finish():
    dag = Graph(4, directed=True, weighted=False)
    dag.add_edge(0, 1)
    dag.add_edge(0, 2)
    dag.add_edge(1, 3)
    result = traverse_recursive(dag, 0)
    assert len(result.discovery) == 4
    assert result.discovery[0] == 0
    assert result.finish[0] > result.discovery[0]


def test_dfs_iterative_matches_structure():
    g = Graph(3, directed=True, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    result = traverse_iterative(g, 0)
    assert result.discovery[0] == 0
    assert result.discovery[1] != -1


def test_unreachable_vertices_stay_minus_one():
    g = Graph(3, directed=True, weighted=False)
    g.add_edge(0, 1)
    result = traverse_recursive(g, 0)
    assert result.discovery[2] == -1
