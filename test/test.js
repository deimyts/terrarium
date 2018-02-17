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

test('You should be able to set the map width and height when you create it', (t) => {
  const map = new Map(50, 50);
  t.is(map.width, 50);
  t.is(map.height, 50);
});

test('The map should have tiles', (t) => {
  const map = new Map(2, 2);
  t.true(map.tiles instanceof Array);
});

test('The map should have a number of tiles equal to it\'s area', (t) => {
  const map1 = new Map(2, 2);
  t.is(map1.tiles.length, 4);

  const map2 = new Map(3, 3);
  t.is(map2.tiles.length, 9);

  const map3 = new Map(2, 3);
  t.is(map3.tiles.length, 6);
});
