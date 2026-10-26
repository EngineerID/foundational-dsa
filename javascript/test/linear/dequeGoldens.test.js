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
      if (case_.empty === true && case_.addLast.length === 0 && case_.addFirst.length === 0) {
        expect(dq.isEmpty()).toBe(true);
        return;
      }
      for (const v of case_.addLast) dq.addLast(v);
      for (const v of case_.addFirst) dq.addFirst(v);
      if (case_.removeFirst != null) expect(dq.removeFirst()).toBe(case_.removeFirst);
      if (case_.removeLast != null) expect(dq.removeLast()).toBe(case_.removeLast);
      if (case_.remainingValue != null) expect(dq.removeFirst()).toBe(case_.remainingValue);
      expect(dq.isEmpty()).toBe(true);
    });
  }
});
