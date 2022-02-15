const check = require('./../../control-flow/increasing-decreasing');

describe('Strictly Increasing or Decreasing', () => {

  it('check([1, 2, 3]) ➞ "increasing"', () => {
    expect(check([1, 2, 3])).toBe("increasing");
  });

  it('check([3, 2, 1]) ➞ "decreasing"', () => {
    expect(check([3, 2, 1])).toBe("decreasing");
  });

  it('check([1, 2, 1]) ➞ "neither"', () => {
    expect(check([1, 2, 1])).toBe("neither");
  });

  it('check([1, 1, 2]) ➞ "neither"', () => {
    expect(check([1, 1, 2])).toBe("neither");
  });

  it('check([]) ➞ "neither"', () => {
    expect(check([])).toBe("neither");
  });

  it('check([1]) ➞ "neither"', () => {
    expect(check([1])).toBe("neither");
  });

});