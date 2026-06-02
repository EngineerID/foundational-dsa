const { BST } = require('../../src/trees/bst');

describe('BST', () => {
  test('insert search delete successor', () => {
    const bst = new BST();
    bst.insert(5, 'five');
    bst.insert(2, 'two');
    bst.insert(8, 'eight');
    expect(bst.search(5)).toBe('five');
    expect(bst.inOrder()).toEqual([2, 5, 8]);
    expect(bst.successor(5)).toBe(8);
    bst.delete(5);
    expect(bst.search(5)).toBeNull();
  });

  test('update existing key', () => {
    const bst = new BST();
    bst.insert(1, 'one');
    bst.insert(1, 'ONE');
    expect(bst.search(1)).toBe('ONE');
    expect(bst.inOrder()).toEqual([1]);
  });

  test('predecessor and missing key', () => {
    const bst = new BST();
    bst.insert(10, '');
    bst.insert(5, '');
    bst.insert(15, '');
    expect(bst.predecessor(10)).toBe(5);
    expect(bst.successor(15)).toBeNull();
    expect(bst.search(99)).toBeNull();
  });

  test('delete leaf and single child', () => {
    const bst = new BST();
    bst.insert(10, '');
    bst.insert(5, '');
    bst.delete(5);
    expect(bst.inOrder()).toEqual([10]);
    bst.insert(15, '');
    bst.delete(10);
    expect(bst.inOrder()).toEqual([15]);
  });
});
