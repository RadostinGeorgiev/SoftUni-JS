const { expect } = require('chai');
const { isOddOrEven } = require('./02. Even Or Odd');

describe('isOddOrEven function checker', () => {
    describe('Happy path', () => {
        it('Expect even', () => {
            expect(isOddOrEven('Te')).to.equal('even');
            expect(isOddOrEven('Test')).to.equal('even');
        });

        it('Expect odd', () => {
            expect(isOddOrEven('T')).to.equal('odd');
            expect(isOddOrEven('Tests')).to.equal('odd');
        });
    });

    describe('Invalid inputs', () => {
        it('Missing input', () => {
            expect(isOddOrEven(undefined)).to.be.undefined;
            expect(isOddOrEven([])).to.be.undefined;
            expect(isOddOrEven({})).to.be.undefined;
        });

        it('Wrong type of input', () => {
            expect(isOddOrEven(1)).to.be.undefined;
            expect(isOddOrEven(false)).to.be.undefined;
            expect(isOddOrEven([1,2])).to.be.undefined;
        });
    });
});