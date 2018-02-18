const seedrandom = require('seedrandom');

// const throwError = (msg) => { throw Error(msg); };

// function generateRandomValue(seed = throwError('Random Number Generator must have a seed')) {
function generateRandomValue(seed) {
  const generator = seedrandom(seed);
  return generator();
}

export default generateRandomValue;
