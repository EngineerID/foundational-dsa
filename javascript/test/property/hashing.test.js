const { HashTableChaining } = require('../../src/hashing/separateChaining');
const { HashTableOpenAddressing, ProbingStrategy } = require('../../src/hashing/openAddressing');
const { PROPERTY_TRIALS, seededRng } = require('../_propertyHelpers');

function runPutGetRemove(Table) {
  const rng = seededRng();
  for (let t = 0; t < PROPERTY_TRIALS; t++) {
    const table = new Table();
    const ref = new Map();
    for (let i = 0; i < 20 + Math.floor(rng() * 60); i++) {
      const op = Math.floor(rng() * 3);
      const key = Math.floor(rng() * 31);
      if (op === 0) {
        const val = Math.floor(rng() * 101);
        table.put(key, val);
        ref.set(key, val);
      } else if (op === 1) {
        expect(table.get(key) ?? null).toBe(ref.get(key) ?? null);
      } else {
        table.remove(key);
        ref.delete(key);
      }
      for (const [k, v] of ref) expect(table.get(k)).toBe(v);
    }
  }
}

describe('property hashing', () => {
  test('separate chaining', () => runPutGetRemove(HashTableChaining));

  test('open addressing put/get', () => {
    const rng = seededRng();
    for (let t = 0; t < PROPERTY_TRIALS; t++) {
      const table = new HashTableOpenAddressing(ProbingStrategy.LINEAR);
      const ref = new Map();
      for (let i = 0; i < 30 + Math.floor(rng() * 70); i++) {
        if (rng() < 0.7) {
          const key = Math.floor(rng() * 41);
          const val = Math.floor(rng() * 101);
          table.put(key, val);
          ref.set(key, val);
        } else {
          const key = Math.floor(rng() * 41);
          expect(table.get(key) ?? null).toBe(ref.get(key) ?? null);
        }
      }
      for (const [k, v] of ref) expect(table.get(k)).toBe(v);
    }
  });
});
