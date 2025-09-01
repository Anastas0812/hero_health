import lifeLine from "../health.js";

test('type of name', () => {
  const result = lifeLine({ name: 80, health: 8});
  expect(result).toBe('Error, name must be String, health must be Number');
});

test('type of health', () => {
  const result = lifeLine({ name: 'Ведьмак', health: 'красавчик'});
  expect(result).toBe('Error, name must be String, health must be Number');
});

// const superheroes = [
//   ['Человек Паук', 83, 'healthy'],
//   ['Бетмен', 28, 'wounded'],
//   ['Ртуть', 9, 'critical'],
// ];

// const handler = test.each(superheroes);

// handler('testing lifeLine function', (name, health, expected) => {
//   const result = lifeLine({name, health});
//   expect(result).toBe(expected);
// });

test.each([
  ['Человек Паук', 83, 'healthy'],
  ['Бетмен', 28, 'wounded'],
  ['Ртуть', 9, 'critical'],
])('testing lifeLine function', (name, health, expected) => {
  const result = lifeLine({name, health});
  expect(result).toBe(expected);
});