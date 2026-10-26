const fs = require('fs');
const path = require('path');
const { UnionFind } = require('../../src/unionfind/unionFind');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/union-find-goldens.json'), 'utf8'),
);

describe('union-find shared goldens', () => {
  for (const { n, unions, connected } of goldens) {
    test(`n=${n}`, () => {
      const uf = new UnionFind(n);
      for (const [a, b] of unions) {
        uf.union(a, b);
      }
      for (const { a, b, expected } of connected) {
        expect(uf.connected(a, b)).toBe(expected);
      }
    });
  }
});
