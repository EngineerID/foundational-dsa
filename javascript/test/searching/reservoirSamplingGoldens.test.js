const fs = require('fs');
const path = require('path');
const { sample } = require('../../src/searching/reservoirSampling');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/reservoir-sampling-goldens.json'), 'utf8'),
);

describe('reservoir sampling shared goldens', () => {
  for (const { stream, k, seed, expected } of goldens) {
    test(`k=${k} seed=${seed} stream=${JSON.stringify(stream)}`, () => {
      expect(sample(stream, k, seed)).toEqual(expected);
    });
  }
});
