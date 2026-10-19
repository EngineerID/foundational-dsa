const { distance } = require('../../src/dp/editDistance');

test('edit distance', () => {
  expect(distance('kitten', 'sitting')).toBe(3);
});
