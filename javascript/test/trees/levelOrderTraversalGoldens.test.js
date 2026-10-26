const fs = require('fs');
const path = require('path');
const { levelOrder } = require('../../src/trees/levelOrderTraversal');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/level-order-traversal-goldens.json'), 'utf8'),
);

describe('level order traversal shared goldens', () => {
  for (const case_ of goldens) {
    test(String(case_.values?.length), () => {
      expect(levelOrder(case_.values)).toEqual(case_.expected);
    });
  }
});
