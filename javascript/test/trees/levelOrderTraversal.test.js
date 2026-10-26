const { levelOrder } = require('../../src/trees/levelOrderTraversal');

describe('level order traversal', () => {
  test('bfs by level', () => {
    expect(levelOrder([3, 9, 20, null, null, 15, 7])).toEqual([[3], [9, 20], [15, 7]]);
  });
});
