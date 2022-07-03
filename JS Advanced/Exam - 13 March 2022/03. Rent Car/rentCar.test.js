const { expect, assert } = require('chai');
const { rentCar } = require('./rentCar');

describe('rentCar test', () => {
    let instance = {};

    beforeEach(() => { instance = rentCar; });

    it('Has all methods', () => {
        expect(instance).to.has.ownProperty('searchCar');
        expect(instance).to.has.ownProperty('calculatePriceOfCar');
        expect(instance).to.has.ownProperty('checkBudget');
    })

    describe('searchCar function test', () => {
        it('Happy path', () => {
            assert.strictEqual(rentCar.searchCar(['Audi', 'BMW', 'Toyota'], 'Audi'), `There is 1 car of model Audi in the catalog!`)
            assert.strictEqual(rentCar.searchCar(['Audi', 'BMW', 'Toyota', 'Audi'], 'Audi'), `There is 2 car of model Audi in the catalog!`)
        });

        it('No matching elements', () => {
            assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], 'Honda'), 'There are no such models in the catalog!');
        });

        describe('Invalid inputs', () => {
            it('Expect to throw error if shop array is invalid', () => {
                assert.throws(() => rentCar.searchCar(null, 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(NaN, 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(undefined, 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar({}, 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar('Audi', 'BMW', 'Toyota', 'Audi', 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(1.5, 'Audi'), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(true, 'Audi'), 'Invalid input!');
            });

            it('Expect to throw error if searched car is invalid', () => {
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], null), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], undefined), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], {}), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], []), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], 1.5), 'Invalid input!');
                assert.throws(() => rentCar.searchCar(['Audi', 'BMW', 'Toyota'], true), 'Invalid input!');
            });
        });
    });

    describe('calculatePriceOfCar function test', () => {
        it('Happy path', () => {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 1), `You choose Audi and it will cost $36!`)
            assert.equal(rentCar.calculatePriceOfCar('Audi', 2), `You choose Audi and it will cost $72!`)
            assert.equal(rentCar.calculatePriceOfCar('BMW', 1), `You choose BMW and it will cost $45!`)
        });

        it('No matching elements', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('Honda', 3), 'No such model in the catalog!');
        });

        describe('Invalid inputs', () => {
            it('Expect to throw error if car data is invalid string', () => {
                assert.throws(() => rentCar.calculatePriceOfCar(undefined, 3), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar(NaN, 3), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar(3, 3), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar(true, 3), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar([], 3), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar({}, 3), Error, 'Invalid input!');
            });

            it('Expect to throw error if price or quantity are not integers', () => {
                assert.throws(() => rentCar.calculatePriceOfCar('Audi', '3'), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar('Audi', '5'), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar('Audi', 5.5), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar('Audi', NaN), Error, 'Invalid input!');
                assert.throws(() => rentCar.calculatePriceOfCar('Audi', undefined), Error, 'Invalid input!');
            });
        });
    });

    describe('checkBudget function test', () => {
        it('Happy path', () => {
            assert.equal(rentCar.checkBudget(10, 1, 100), `You rent a car!`);
            assert.equal(rentCar.checkBudget(10, 10, 100), `You rent a car!`);
            assert.equal(rentCar.checkBudget(10, 15, 100), `You need a bigger budget!`);

        });

        describe('Invalid inputs', () => {
            it('Expect to throw error if input data is not Integer', () => {
                assert.throws(() => rentCar.checkBudget(3.53, 1, 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, 1.05, 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, 1, 255.65), 'Invalid input!');
            });

            it('Expect to throw error if budget data is invalid', () => {
                assert.throws(() => rentCar.checkBudget(NaN, 1, 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, NaN, 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, 1, NaN), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget('abc', 1, 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, 'day', 2), 'Invalid input!');
                assert.throws(() => rentCar.checkBudget(10, 1, 'budget'), 'Invalid input!');
            });
        });
    });
});