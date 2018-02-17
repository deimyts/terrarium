import test from 'ava';

import { Game, Map } from '../src/main';

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

test('The map should have a width', (t) => {
  const map = new Map();
  t.not(map.width, undefined);
});

test('The map should have a height', (t) => {
  const map = new Map();
  t.not(map.width, undefined);
});

