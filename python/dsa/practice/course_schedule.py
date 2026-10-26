# Practice — Course schedule (can finish all courses?)

from dsa.graphs.graph import Graph
from dsa.graphs.topological_sort import kahn


def can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:
    """True when all courses can be taken (no cycle in prereq graph).

    Each pair [course, prereq] means prereq must be taken before course.
    Time: O(V+E); Space O(V).
    """
    g = Graph(num_courses, True, False)
    for course, prereq in prerequisites:
        g.add_edge(prereq, course)
    return len(kahn(g)) == num_courses
