const fs = require('fs');
const path = require('path');
const { minCoins } = require('../../src/dp/coinChange');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/coin-change-goldens.json'), 'utf8'),
);

describe('coin change shared goldens', () => {
  for (const { coins, amount, expected } of goldens) {
    test(`amount ${amount}`, () => {
      expect(minCoins(coins, amount)).toBe(expected);
    });
  }
});
