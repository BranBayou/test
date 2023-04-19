const stringLength = require('./strLen');

test('returns the correct length of the string', () => {
  const myString = "Hello, world!";
  expect(stringLength(myString)).toBe(13);
});

test('returns 0 when given an empty string', () => {
  expect(stringLength('')).toBe(0);
});

test ('if the string is at least 1 character long and not longer than 10 characters', () => {
  if (stringLength < 2){
    throw console.error('small string');
  }
  else if(stringLength > 10){
    throw console.error('large string');
  }
});
