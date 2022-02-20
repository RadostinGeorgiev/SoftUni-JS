const { expect } = require('chai');
const { sum } = require('./04. Sum of Numbers');

describe('Sum checker', () => {
    it('Expect sum to be 15', () => {
        expect(sum([1, 2, 3, 4, 5])).to.be.equal(15);
    })
});