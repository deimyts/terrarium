import test from 'ava';

import game from '../dist/bundle';

test('the module should exist', (t) => {
  t.not(game, undefined);
});

