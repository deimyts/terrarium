import test from 'ava';

import { Game } from '../src/main';

function createGame() {
  return new Game();
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
