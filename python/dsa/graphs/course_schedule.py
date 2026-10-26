# Graphs — Course schedule

"""
Whether all courses can be finished given prerequisite pairs [course, prereq].
Technique: Kahn topological sort
Invariant: DAG iff topological order has all courses.
can_finish: Time O(V+E); Space O(V).
"""

from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn


def can_finish(num_courses: int, prerequisites: list[list[int]] | None) -> bool:
    """Each [course, prereq] means prereq must be taken before course."""
    if num_courses <= 0:
        return True
    g = Graph(num_courses, True, False)
    if prerequisites:
        for course, prereq in prerequisites:
            g.add_edge(prereq, course)
    return len(kahn(g)) == num_courses
