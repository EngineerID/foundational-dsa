// Practice — Course schedule

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.TopologicalSort;

public final class CourseSchedule {

    private CourseSchedule() {
    }

    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        Graph g = new Graph(numCourses, true, false);
        for (int[] p : prerequisites) {
            g.addEdge(p[1], p[0]);
        }
        return TopologicalSort.kahn(g).size() == numCourses;
    }
}
