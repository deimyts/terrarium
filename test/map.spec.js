import test from 'ava';

import { Map } from '../src/main';
import generateRandomValue from '../src/random-number-generator';

function createMap(width, height) {
  return new Map('testSeed', width, height);
}

test('The map should have a width', (t) => {
  const map = createMap();
  t.not(map.width, undefined);
});

test('The map should have a height', (t) => {
  const map = createMap();
  t.not(map.height, undefined);
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

test('You should be able to look up the X and Y coordinate of a tile', (t) => {
  const map = createMap(2, 2);
  const tile = map.tiles[0][0];
  t.is(tile.x, 0);
  t.is(tile.y, 0);
});

test('The lookup indices should match the tile coordinates', (t) => {
  const map = createMap(2, 2);

  const tile1 = map.tiles[0][0];
  t.is(tile1.x, 0);
  t.is(tile1.y, 0);

  const tile2 = map.tiles[0][1];
  t.is(tile2.x, 0);
  t.is(tile2.y, 1);

  const tile3 = map.tiles[1][0];
  t.is(tile3.x, 1);
  t.is(tile3.y, 0);

  const tile4 = map.tiles[1][1];
  t.is(tile4.x, 1);
  t.is(tile4.y, 1);
});

test('Each tile should have an associated value', (t) => {
  const map = createMap(2, 2);
  const tile1 = map.tiles[0][0];
  const tile2 = map.tiles[0][1];
  const tile3 = map.tiles[1][0];
  const tile4 = map.tiles[1][1];

  t.truthy(tile1.value);
  t.truthy(tile2.value);
  t.truthy(tile3.value);
  t.truthy(tile4.value);
});

test('what does the map look like?', (t) => {
  const map = createMap(3, 3);
  const stringMap = JSON.stringify(map, '\t', 2);
  console.log('like this: ', stringMap);
  t.pass();
});

test('Tile values should be different from one another', (t) => {
  const map = createMap(2, 2);
  const tile1 = map.tiles[0][0];
  const tile2 = map.tiles[0][1];

  t.not(tile1.value, tile2.value);
});

test.todo('Maps with different seeds should have different tile values');
test.todo('Tile values should be reproducible');
test.todo('Tile values should be rounded down to the nearest tenth');
