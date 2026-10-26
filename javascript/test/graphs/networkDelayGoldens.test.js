const fs = require('fs');
const path = require('path');
const { networkDelay } = require('../../src/graphs/networkDelay');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/network-delay-goldens.json'), 'utf8'),
);

describe('network delay shared goldens', () => {
  for (const case_ of goldens) {
    test(String(case_.n), () => {
      expect(networkDelay(case_.n, case_.times, case_.source)).toBe(case_.expected);
    });
  }
});
