

const reverseStr = require('./reverseStr');

test('reverseStr function reverses a string', () => {
  expect(reverseStr('hello')).toBe('olleh');
});
