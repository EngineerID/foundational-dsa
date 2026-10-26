package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CourseScheduleTest {

    @Test
    void canFinish() {
        assertTrue(CourseSchedule.canFinish(2, new int[][] {{1, 0}}));
        assertFalse(CourseSchedule.canFinish(2, new int[][] {{1, 0}, {0, 1}}));
    }
}
