const { expect } = require('chai');
const { isSymmetric } = require('./05. Check for Symmetry');

describe('Array symmetry checker', () => {
    it('Expect true for symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
    });

    it('Expect false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 3, 2])).to.be.false;
    });

    it('Expect false for non-array input', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('Expect false for symmetric array with different types', () => {
        expect(isSymmetric([1, 5, 5, '1'])).to.be.false;
    });
});