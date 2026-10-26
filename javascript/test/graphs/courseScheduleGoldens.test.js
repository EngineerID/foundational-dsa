const fs = require('fs');
const path = require('path');
const { canFinish } = require('../../src/graphs/courseSchedule');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/course-schedule-goldens.json'), 'utf8'),
);

describe('course schedule shared goldens', () => {
  for (const case_ of goldens) {
    test(String(case_.numCourses), () => {
      expect(canFinish(case_.numCourses, case_.prerequisites)).toBe(case_.expected);
    });
  }
});
