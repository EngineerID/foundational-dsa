const fs = require('fs');
const path = require('path');
const { OrderStatisticTree } = require('../../src/trees/orderStatisticTree');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/order-statistic-tree-goldens.json'), 'utf8'));

describe('order statistic tree shared goldens', () => {
  for (const case_ of goldens) {
    test('rank/select', () => {
      const tree = new OrderStatisticTree();
      for (const [key, value] of case_.inserts) tree.insert(key, value);
      expect(tree.select(3)).toBe(case_.select3);
      expect(tree.rank(5)).toBe(case_.rank5);
    });
  }
});
