const minMax = require('./../../arrays/smallest-biggest-numbers');

describe('Find the Smallest and Biggest Numbers', () => {

  it('minMax([2334454, 5]) ➞ [5, 2334454]', () => {
    expect(minMax([2334454, 5])).toEqual([5, 2334454]);
  });

  it('minMax([1, 2, 3, 4, 5]) ➞ [1, 5]', () => {
    expect(minMax([1, 2, 3, 4, 5])).toEqual([1, 5]);
  });

  it('minMax([1]) ➞ [1, 1]', () => {
    expect(minMax([1])).toEqual([1, 1]);
  });

  it('minMax([]) ➞ null', () => {
    expect(minMax([])).toEqual(null);
  });

});