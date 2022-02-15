const canNest = require('./../../arrays/array-nested-in-another');

describe('Check if One Array can be Nested in Another', () => {

  it('canNest([1, 2, 3, 4], [0, 6]) ➞ true', () => {
    expect(canNest([1, 2, 3, 4], [0, 6])).toEqual(true);
  });

  it('canNest([3, 1], [4, 0]) ➞ true', () => {
    expect(canNest([3, 1], [4, 0])).toEqual(true);
  });

  it('canNest([9, 9, 8], [8, 9]) ➞ false', () => {
    expect(canNest([9, 9, 8], [8, 9])).toEqual(false);
  });

  it('canNest([1, 2, 3, 4], [2, 3]) ➞ false', () => {
    expect(canNest([1, 2, 3, 4], [2, 3])).toEqual(false);
  });

  it('canNest([], [1, 3]) ➞ null', () => {
    expect(canNest([], [1, 3])).toEqual(null);
  });

  it('canNest([], []) ➞ null', () => {
    expect(canNest([], [])).toEqual(null);
  });

});