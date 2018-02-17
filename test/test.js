import test from 'ava';

import { Game, Map } from '../src/main';

function createGame() {
  return new Game();
}

function createMap(width, height) {
  return new Map(width, height);
}

test('It should create a game object', (t) => {
  const game = createGame();
  t.not(game, undefined);
});

test('The game shoud have a seed property', (t) => {
  const game = createGame();
  t.not(game.seed, undefined);
});

test('The game should have a map', (t) => {
  const game = createGame();
  t.not(game.map, undefined);
});

test('The map should have a width', (t) => {
  const map = createMap();
  t.not(map.width, undefined);
});

test('The map should have a height', (t) => {
  const map = createMap();
  t.not(map.width, undefined);
});

test('You should be able to set the map width and height when you create it', (t) => {
  const map = createMap(50, 50);
  t.is(map.width, 50);
  t.is(map.height, 50);
});

test('The map should have tiles', (t) => {
  const map = createMap(2, 2);
  t.true(map.tiles instanceof Array);
});

test('The map should have a number of tiles equal to it\'s area', (t) => {
  const map1 = createMap(2, 2);
  t.is(map1.tiles.length, 4);

  const map2 = createMap(3, 3);
  t.is(map2.tiles.length, 9);

  const map3 = createMap(2, 3);
  t.is(map3.tiles.length, 6);
});
