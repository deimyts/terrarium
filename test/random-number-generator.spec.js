import test from 'ava';

import generateRandomValue from '../src/random-number-generator';

test('Using the same seed should result in the same value', (t) => {
  const seed1 = 1;
  const value1 = generateRandomValue(seed1);
  const value2 = generateRandomValue(seed1);
  t.is(value1, value2);
 
  const seed2 = 'hello';
  const value3 = generateRandomValue(seed2);
  const value4 = generateRandomValue(seed2);
  t.is(value3, value4);
});

test('Using different seeds should result in different values', (t) => {
  const seed1 = 1;
  const seed2 = 2;
  const value1 = generateRandomValue(seed1);
  const value2 = generateRandomValue(seed2);
  t.not(value1, value2);
});
