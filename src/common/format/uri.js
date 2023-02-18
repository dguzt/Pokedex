import { dropLastWhile, dropWhile, endsWith, equals, pipe, startsWith, when } from 'ramda';

const removeSlashes = pipe(
  when(endsWith('/'), dropLastWhile(equals('/'))),
  when(startsWith('/'), dropWhile(equals('/')))
);

export { removeSlashes };
