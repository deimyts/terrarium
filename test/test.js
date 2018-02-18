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

test('The map should create the correct number of tiles', (t) => {
  const dimensions = {
    x: null,
    y: null,
  };

  dimensions.x = 2;
  dimensions.y = 2;
  const map1 = createMap(dimensions.x, dimensions.y);
  t.is(map1.tiles.length, dimensions.x);
  t.is(map1.tiles[0].length, dimensions.y);

  dimensions.x = 3;
  dimensions.y = 3;
  const map2 = createMap(dimensions.x, dimensions.y);
  t.is(map2.tiles.length, dimensions.x);
  t.is(map2.tiles[0].length, dimensions.y);

  dimensions.x = 2;
  dimensions.y = 3;
  const map3 = createMap(dimensions.x, dimensions.y);
  t.is(map3.tiles.length, dimensions.x);
  t.is(map3.tiles[0].length, dimensions.y);
});

test('The tiles array should be two-dimensional', (t) => {
  const map = createMap(1, 2);
  t.deepEqual(map.tiles, [['(0, 0)', '(0, 1)']]);

  const map2 = createMap(2, 2);
  t.deepEqual(map2.tiles, [['(0, 0)', '(0, 1)'], ['(1, 0)', '(1, 1)']]);
});

test('You should be able to look up tiles by their coordinates', (t) => {
  const map = createMap(2, 2);
  t.is(map.tiles[0][0], '(0, 0)');
  t.is(map.tiles[0][1], '(0, 1)');
  t.is(map.tiles[1][0], '(1, 0)');
  t.is(map.tiles[1][1], '(1, 1)');
});
