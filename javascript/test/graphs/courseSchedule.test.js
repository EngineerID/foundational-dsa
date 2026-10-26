const { canFinish } = require('../../src/graphs/courseSchedule');

describe('course schedule', () => {
  test('kahn topo', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });
});
