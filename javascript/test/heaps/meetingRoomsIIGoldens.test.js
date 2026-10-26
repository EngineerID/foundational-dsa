const fs = require('fs');
const path = require('path');
const { minMeetingRooms } = require('../../src/heaps/meetingRoomsII');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/meeting-rooms-ii-goldens.json'), 'utf8'),
);

describe('meeting rooms II shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.intervals), () => {
      expect(minMeetingRooms(case_.intervals)).toBe(case_.expected);
    });
  }
});
