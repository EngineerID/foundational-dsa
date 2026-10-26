package com.dsa.examples.heaps;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MeetingRoomsIITest {

    @Test
    void minMeetingRooms() {
        assertEquals(2, MeetingRoomsII.minMeetingRooms(new int[][] {{0, 30}, {5, 10}, {15, 20}}));
        assertEquals(0, MeetingRoomsII.minMeetingRooms(new int[0][]));
    }
}
