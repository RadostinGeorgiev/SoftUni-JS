const { expect } = require('chai');
const { lookupChar } = require('./03. Char Lookup');

describe('lookupChar checker', () => {
    describe('Happy path', () => {
        it('Expect correct symbol depending of the index', () => {
            expect(lookupChar('Test', 0)).to.be.equal('T');
            expect(lookupChar('Test', 3)).to.be.equal('t');
        });
    });

    describe('Invalid inputs', () => {
        it('Invalid type of string input', () => {
            expect(lookupChar(undefined, 0)).to.be.undefined;
            expect(lookupChar([], 0)).to.be.undefined;
            expect(lookupChar({}, 0)).to.be.undefined;
            expect(lookupChar(false, 0)).to.be.undefined;
            expect(lookupChar(5, 0)).to.be.undefined;
        });

        it('Invalid type of index input', () => {
            expect(lookupChar('Test', NaN)).to.be.undefined;
            expect(lookupChar('Test', false)).to.be.undefined;
            expect(lookupChar('Test', [])).to.be.undefined;
            expect(lookupChar('Test', 1.5)).to.be.undefined;
            expect(lookupChar('Test', '1')).to.be.undefined;
        });

        it('Invalid index - out of string length', () => {
            expect(lookupChar('', 0)).to.equal('Incorrect index');
            expect(lookupChar('Test', 5)).to.equal('Incorrect index');
            expect(lookupChar('Test', -1)).to.equal('Incorrect index');
        });
    });
});