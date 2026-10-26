from dsa.heaps.meeting_rooms_ii import min_meeting_rooms


def test_min_meeting_rooms():
    assert min_meeting_rooms([[0, 30], [5, 10], [15, 20]]) == 2
    assert min_meeting_rooms([]) == 0
