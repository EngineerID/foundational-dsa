const fs = require('fs');
const path = require('path');
const { Deque } = require('../../src/linear/deque');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/deque-goldens.json'), 'utf8'),
);

describe('deque shared goldens', () => {
  for (const case_ of goldens) {
    test('deque ops', () => {
      const dq = new Deque();
      for (const v of case_.addLast) dq.addLast(v);
      for (const v of case_.addFirst) dq.addFirst(v);
      expect(dq.removeFirst()).toBe(case_.removeFirst);
      expect(dq.removeLast()).toBe(case_.removeLast);
      expect(dq.removeFirst()).toBe(case_.remainingValue);
      expect(dq.isEmpty()).toBe(true);
    });
  }
});
