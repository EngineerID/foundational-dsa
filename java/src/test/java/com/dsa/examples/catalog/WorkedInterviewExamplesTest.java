package com.dsa.examples.catalog;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.TopologicalSort;
import com.dsa.examples.linear.SlidingWindowMaximum;
import com.dsa.examples.searching.BinarySearch;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

/** Scenarios aligned with docs/worked-examples.md interview walkthroughs. */
class WorkedInterviewExamplesTest {

    @Test
    void topologicalSortCourseScheduleDag() {
        Graph dag = new Graph(4, true, false);
        dag.addEdge(0, 1);
        dag.addEdge(0, 2);
        dag.addEdge(1, 3);
        assertEquals(List.of(0, 1, 2, 3), TopologicalSort.kahn(dag));
    }

    @Test
    void slidingWindowMaximumWindowThree() {
        assertEquals(
                Arrays.asList(3, 3, 5, 5, 6, 7),
                SlidingWindowMaximum.maxSlidingWindow(new int[] {1, 3, -1, -3, 5, 3, 6, 7}, 3));
    }

    @Test
    void binarySearchAnswerFirstIndexAtLeastSeven() {
        assertEquals(3, BinarySearch.firstOccurrence(new int[] {1, 3, 5, 7, 9, 11}, 7));
    }
}
