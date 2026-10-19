const fc = require('fast-check');
const { search } = require('../../src/strings/kmp');

describe('property strings', () => {
  test('kmp search matches String.indexOf', () => {
    fc.assert(
      fc.property(
        fc.string({ maxLength: 24 }),
        fc.string({ maxLength: 10 }),
        (text, pattern) => {
          expect(search(text, pattern)).toBe(text.indexOf(pattern));
        },
      ),
    );
  });

  test('empty pattern convention', () => {
    expect(search('xyz', '')).toBe(0);
    expect(search('', '')).toBe(0);
  });
});
