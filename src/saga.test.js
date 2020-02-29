import { incrementAsync } from './sagas'

test('incrementAsync Saga test', () => {
  const gen = incrementAsync();
  gen.next();
  let {done}=gen.next();

  expect(done).toBe(false);
  // now what ?
});