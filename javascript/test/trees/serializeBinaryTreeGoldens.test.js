const fs = require('fs');
const path = require('path');
const { deserialize, serialize } = require('../../src/trees/serializeBinaryTree');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/serialize-binary-tree-goldens.json'), 'utf8'),
);

describe('serialize binary tree shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.values), () => {
      expect(deserialize(serialize(case_.values))).toEqual(case_.expected);
    });
  }
});
