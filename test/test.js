import test from 'ava';

import Game from '../src/main';

test('It should create a game object', (t) => {
  const world = new Game();
  t.not(world, undefined);
});

test('The game shoud have a seed property', (t) => {
  const world = new Game();
  t.not(world.seed, undefined);
});

test('The world should have a map', (t) => {
  const world = new Game();
  t.not(world.map, undefined);
});

test('The map should have a width and height', (t) => {
  const world = new Game();
  t.not(world.map.width, undefined);
  t.not(world.map.height, undefined);
});

