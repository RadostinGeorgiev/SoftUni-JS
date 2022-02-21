const { assert, expect } = require('chai');
const { flowerShop } = require('./flowerShop');

describe('', () => {
    describe('calcPriceOfFlowers function test', () => {
        it('Happy path', () => {
            assert.strictEqual(flowerShop.calcPriceOfFlowers('rose', 3, 5), `You need $15.00 to buy rose!`)
            assert.strictEqual(flowerShop.calcPriceOfFlowers('rose', -3, -5), `You need $15.00 to buy rose!`)
            assert.strictEqual(flowerShop.calcPriceOfFlowers('rose', -3, 5), `You need $-15.00 to buy rose!`)
            assert.strictEqual(flowerShop.calcPriceOfFlowers('rose', 3, -5), `You need $-15.00 to buy rose!`)
        });

        describe('Invalid inputs', () => {
            it('Expect to throw error if flower is invalid string', () => {
                assert.throws(() => flowerShop.calcPriceOfFlowers(undefined, 3, 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers(NaN, 3, 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers(3, 3, 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers(true, 3, 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers([], 3, 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers({}, 3, 5), Error, 'Invalid input!');
            });

            it('Expect to throw error if price or quantity are invalid integers', () => {
                assert.throws(() => flowerShop.calcPriceOfFlowers('flower', '3', 5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 3, '5'), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers('flower', 3.3, 5.5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers('flower', NaN, 5.5), Error, 'Invalid input!');
                assert.throws(() => flowerShop.calcPriceOfFlowers('flower', undefined, 5.5), Error, 'Invalid input!');
            });
        });
    });

    describe('checkFlowersAvailable function test', () => {
        it('Happy path', () => {
            assert.strictEqual(flowerShop
                .checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']), `The Rose are available!`);
            assert.strictEqual(flowerShop
                .checkFlowersAvailable('Flower', ['Rose', 'Lily', 'Orchid']), `The Flower are sold! You need to purchase more!`);
            assert.strictEqual(flowerShop
                .checkFlowersAvailable(undefined, ['Rose', 'Lily', 'Orchid']), `The undefined are sold! You need to purchase more!`);
            assert.strictEqual(flowerShop
                .checkFlowersAvailable(undefined, []), `The undefined are sold! You need to purchase more!`);
            assert.strictEqual(flowerShop
                .checkFlowersAvailable(false, []), `The false are sold! You need to purchase more!`);
        });

        describe('Invalid inputs', () => {
            it('Expect to throw error if flower array is invalid', () => {
                assert.throws(() => flowerShop.checkFlowersAvailable('Flower', undefined), Error);
                assert.throws(() => flowerShop.checkFlowersAvailable('Flower', {}), Error);
                assert.throws(() => flowerShop.checkFlowersAvailable('Flower', 0), Error);
                assert.throws(() => flowerShop.checkFlowersAvailable('Flower', false), Error);
                assert.throws(() => flowerShop.checkFlowersAvailable(false, false), Error);
            });
        });

        describe('sellFlowers function test', () => {
            it('Happy path', () => {
                assert.strictEqual(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 0), `Lily / Orchid`);
                assert.strictEqual(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1), `Rose / Orchid`);
                assert.strictEqual(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2), `Rose / Lily`);
            });

            describe('Invalid inputs', () => {
                it('Expect to throw error if flower array is invalid', () => {
                    assert.throws(() => flowerShop.checkFlowersAvailable(undefined, 0), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable({}, 0), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(0,), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(false, 0), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(false, 0), Error);
                });

                it('Expect to throw error if flower space is non-integer', () => {
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], NaN), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], {}), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], false), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], 3.5), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], undefined), Error);
                });

                it('Expect to throw error if flower space is out of range flowers array', () => {
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], 3), Error);
                    assert.throws(() => flowerShop.checkFlowersAvailable(['Rose', 'Lily', 'Orchid'], -1), Error);
                });
            });
        });
    });
});