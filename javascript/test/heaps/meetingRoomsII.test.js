const { minMeetingRooms } = require('../../src/heaps/meetingRoomsII');

describe('meeting rooms II', () => {
  test('min heap of end times', () => {
    expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    expect(minMeetingRooms([])).toBe(0);
  });
});
