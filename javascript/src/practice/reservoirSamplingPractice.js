const { sample } = require('../searching/reservoirSampling');

function reservoirSample(stream, k, seed) {
  return sample(stream, k, seed);
}

module.exports = { reservoirSample };
