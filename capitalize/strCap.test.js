const strCap = require('./strCap');

test('should return upercase string', () => {
  expect(strCap("man")).toBe("MAN");
});