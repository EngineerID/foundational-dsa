const fs = require('fs');
const path = require('path');
const { Stack } = require('../../src/linear/stack');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/stack-goldens.json'), 'utf8'),
);

describe('stack shared goldens', () => {
  for (const case_ of goldens) {
    test('push pop peek', () => {
      const stack = new Stack();
      for (const value of case_.push) {
        stack.push(value);
      }
      const pops = case_.popValues.map(() => stack.pop());
      expect(pops).toEqual(case_.popValues);
      if (case_.peek === null || case_.empty === true) {
        expect(stack.isEmpty()).toBe(true);
        expect(() => stack.peek()).toThrow(/empty/i);
      } else {
        expect(stack.peek()).toBe(case_.peek);
      }
    });
  }
});
