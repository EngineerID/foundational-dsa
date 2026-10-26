const { deserialize, serialize } = require('../../src/trees/serializeBinaryTree');

describe('serializeBinaryTree', () => {
  test('round trip', () => {
    const values = [1, 2, 3, null, null, 4, 5];
    expect(deserialize(serialize(values))).toEqual(values);
    expect(serialize(values)).toBe('1,2,3,#,#,4,5');
  });
});
