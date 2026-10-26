// Graphs — Course schedule

package com.dsa.examples.graphs;

/**
 * Whether all courses can be finished given prerequisite pairs [course, prereq].
 * Technique: Kahn topological sort
 * Invariant: DAG iff topological order has all courses.
 * canFinish: Time O(V+E); Space O(V).
 */
public final class CourseSchedule {

    private CourseSchedule() {
    }

    /**
     * Each prerequisite {@code [course, prereq]} requires {@code prereq} before {@code course}.
     * Time: O(V+E); Space O(V).
     */
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        if (numCourses <= 0) {
            return true;
        }
        Graph g = new Graph(numCourses, true, false);
        if (prerequisites != null) {
            for (int[] p : prerequisites) {
                g.addEdge(p[1], p[0]);
            }
        }
        return TopologicalSort.kahn(g).size() == numCourses;
    }
}
