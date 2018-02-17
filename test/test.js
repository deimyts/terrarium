import test from 'ava';

import Game from '../src/main';

test('it should create a game object', (t) => {
  const world = new Game();
  t.not(world, undefined);
});
