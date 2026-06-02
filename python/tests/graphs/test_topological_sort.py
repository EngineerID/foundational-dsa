from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn


def test_topo_dag_order():
    dag = Graph(4, directed=True, weighted=False)
    dag.add_edge(0, 1)
    dag.add_edge(0, 2)
    dag.add_edge(1, 3)
    order = kahn(dag)
    assert order == [0, 1, 2, 3] or order == [0, 2, 1, 3]
    assert order.index(0) < order.index(3)


def test_cycle_returns_empty():
    g = Graph(3, directed=True, weighted=False)
    g.add_edge(0, 1)
    g.add_edge(1, 2)
    g.add_edge(2, 0)
    assert kahn(g) == []


def test_empty_graph():
    g = Graph(0, directed=True, weighted=False)
    assert kahn(g) == []
