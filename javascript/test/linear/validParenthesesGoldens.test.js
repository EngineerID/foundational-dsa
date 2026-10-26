const fs = require('fs');
const path = require('path');
const { isValidParentheses } = require('../../src/linear/validParentheses');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/valid-parentheses-goldens.json'), 'utf8'),
);

describe('valid parentheses shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.s), () => {
      expect(isValidParentheses(case_.s)).toBe(case_.expected);
    });
  }
});
