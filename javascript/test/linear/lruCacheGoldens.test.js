const fs = require('fs');
const path = require('path');
const { LRUCache } = require('../../src/linear/lruCache');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/lru-cache-goldens.json'), 'utf8'),
);

describe('LRU cache shared goldens', () => {
  for (const { capacity, steps } of goldens) {
    test(`capacity=${capacity}`, () => {
      const cache = new LRUCache(capacity);
      for (const step of steps) {
        if (step.op === 'put') {
          cache.put(step.key, step.value);
        } else if (step.op === 'get') {
          expect(cache.get(step.key)).toBe(step.expected);
        }
      }
    });
  }
});
