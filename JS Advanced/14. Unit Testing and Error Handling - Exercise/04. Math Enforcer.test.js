const { assert } = require('chai');
const { mathEnforcer } = require('./04. Math Enforcer');

describe('mathEnforcer checker', () => {
    describe('addFive function test', () => {
        it('Happy path', () => {
            assert.strictEqual(mathEnforcer.addFive(0), 5);
            assert.strictEqual(mathEnforcer.addFive(5), 10);
            assert.strictEqual(mathEnforcer.addFive(-5), 0);
            assert.closeTo(mathEnforcer.addFive(1.55), 6.55, 0.01);
            assert.closeTo(mathEnforcer.addFive(1.555), 6.55, 0.01);
            assert.closeTo(mathEnforcer.addFive(-1.55), 3.45, 0.01);
        });

        describe('Invalid inputs', () => {
            it('Should return undefined at non-numeric input', () => {
                assert.isUndefined(mathEnforcer.addFive());
                assert.isUndefined(mathEnforcer.addFive(undefined));
                assert.isUndefined(mathEnforcer.addFive('5'));
                assert.isUndefined(mathEnforcer.addFive([]));
                assert.isUndefined(mathEnforcer.addFive({}));
                assert.isUndefined(mathEnforcer.addFive(false));
            });
        });
    });

    describe('subtractTen function test', () => {
        it('Happy path', () => {
            assert.strictEqual(mathEnforcer.subtractTen(0), -10);
            assert.strictEqual(mathEnforcer.subtractTen(10), 0);
            assert.strictEqual(mathEnforcer.subtractTen(-5), -15);
            assert.closeTo(mathEnforcer.subtractTen(1.55), -8.45, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(1.555), -8.45, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-1.55), -11.55, 0.01);
        });

        describe('Invalid inputs', () => {
            it('Should return undefined at non-numeric input', () => {
                assert.isUndefined(mathEnforcer.subtractTen());
                assert.isUndefined(mathEnforcer.subtractTen(undefined));
                assert.isUndefined(mathEnforcer.subtractTen('5'));
                assert.isUndefined(mathEnforcer.subtractTen([]));
                assert.isUndefined(mathEnforcer.subtractTen({}));
                assert.isUndefined(mathEnforcer.subtractTen(false));
            });
        });
    });

    describe('sum function test', () => {
        it('Happy path', () => {
            assert.strictEqual(mathEnforcer.sum(0, 0), 0);
            assert.strictEqual(mathEnforcer.sum(0, 10), 10);
            assert.strictEqual(mathEnforcer.sum(-5, 10), 5);
            assert.closeTo(mathEnforcer.sum(1.555, 1.455), 3.0, 0.01);
            assert.closeTo(mathEnforcer.sum(1.11 + 2.22, 3.32), 6.65, 0.01);
            assert.closeTo(mathEnforcer.sum(-1.55, -5.5), -7.05, 0.01);
        });

        describe('Invalid inputs', () => {
            it('Should return undefined at non-numeric input', () => {
                assert.isUndefined(mathEnforcer.sum(NaN,undefined));
                assert.isUndefined(mathEnforcer.sum(0, undefined));
                assert.isUndefined(mathEnforcer.sum(undefined, 0));
                assert.isUndefined(mathEnforcer.sum('5' + '0.3'));
                assert.isUndefined(mathEnforcer.sum([], []));
                assert.isUndefined(mathEnforcer.sum({}, false));
            });
        });
    });
});