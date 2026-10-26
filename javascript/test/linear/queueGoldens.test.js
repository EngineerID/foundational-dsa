const fs = require('fs');
const path = require('path');
const { Queue } = require('../../src/linear/queue');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/queue-goldens.json'), 'utf8'),
);

describe('queue shared goldens', () => {
  for (const case_ of goldens) {
    test('fifo', () => {
      const q = new Queue();
      for (const v of case_.enqueue) q.enqueue(v);
      for (const expected of case_.dequeueValues) expect(q.dequeue()).toBe(expected);
      expect(q.peek()).toBe(case_.peek);
    });
  }
});
