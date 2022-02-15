const hackerSpeak = require('./../../control-flow/hacker-speak');

describe('H4ck3r Sp34k', () => {

  it('hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"', () => {
    expect(hackerSpeak("javascript is cool")).toBe("j4v45cr1pt 15 c00l");
  });

  it('hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"', () => {
    expect(hackerSpeak("programming is fun")).toBe("pr0gr4mm1ng 15 fun");
  });

  it('hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"', () => {
    expect(hackerSpeak("become a coder")).toBe("b3c0m3 4 c0d3r");
  });

}); 