const { simpleCal } = require('./simpleCal');

describe('simpleCal function', () => {
  it('should return the correct result for valid input', () => {
    const result = simpleCal(10, 5);
    expect(result).toEqual([15, 5, 50, 2]);
  });

  it('should return undefined for invalid input', () => {
    const result = simpleCal('10', '5');
    expect(result).toBeUndefined();
  });
});
