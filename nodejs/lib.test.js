const { expect } = require("chai");
const { Play } = require("./lib");

describe('Play', () => {
    it('adds up scores and return the sum for [5,2,C,D,+]', () => {
        var result = Play(["5", "2", "C", "D", "+"]);
        expect(result).to.equal(30);
    });

    it('adds up scores and return the sum for [5,-2,4,C,D,9,+,+]', () => {
        var result = Play(["5", "-2", "4", "C", "D", "9", "+", "+"]);
        expect(result).to.equal(27);
    });

    it('adds up scores and return the sum for [1]', () => {
        var result = Play([1]);
        expect(result).to.equal(1);
    });
});

