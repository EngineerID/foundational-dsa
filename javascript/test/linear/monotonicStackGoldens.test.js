const fs = require('fs');
const path = require('path');
const { nextGreaterElement } = require('../../src/linear/monotonicStack');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/monotonic-stack-goldens.json'), 'utf8'),
);

describe('monotonic stack shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.nums), () => {
      if (case_.expectError) {
        expect(() => nextGreaterElement(case_.nums)).toThrow();
        return;
      }
      expect(nextGreaterElement(case_.nums)).toEqual(case_.expected);
    });
  }
});
