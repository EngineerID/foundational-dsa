const fs = require('fs');
const path = require('path');
const { longestPalindromeLength } = require('../../src/strings/manacher');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/manacher-goldens.json'), 'utf8'));

describe('manacher shared goldens', () => {
  for (const case_ of goldens) {
    test('length', () => {
      expect(longestPalindromeLength(case_.s)).toBe(case_.expected);
    });
  }
});
