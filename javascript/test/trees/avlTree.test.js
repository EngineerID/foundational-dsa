const { AVLTree } = require('../../src/trees/avlTree');

describe('AVLTree', () => {
  test('sequential insert stays sorted', () => {
    const avl = new AVLTree();
    for (let i = 1; i <= 10; i += 1) {
      avl.insert(i, '');
    }
    expect(avl.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('search after rebalance', () => {
    const avl = new AVLTree();
    [10, 20, 30, 40, 50].forEach((i) => avl.insert(i, String(i)));
    expect(avl.search(30)).toBe('30');
    expect(avl.search(25)).toBeNull();
  });

  test('delete maintains order', () => {
    const avl = new AVLTree();
    [3, 1, 4, 2, 5].forEach((i) => avl.insert(i, ''));
    avl.delete(4);
    expect(avl.inOrder()).toEqual([1, 2, 3, 5]);
  });

  test('update key', () => {
    const avl = new AVLTree();
    avl.insert(7, 'old');
    avl.insert(7, 'new');
    expect(avl.search(7)).toBe('new');
  });
});
