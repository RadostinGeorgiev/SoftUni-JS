const { expect } = require('chai');
const { createCalculator } = require('./07. Add-Subtract');

describe('CreateCalculator checker', () => {
    let instance = {};

    beforeEach(() => {
        instance = createCalculator();
    });

    it('Has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('Starts empty', () => {
        expect(instance.get()).to.equal(0);
    })

    describe('Add function check', () => {
        it('add single number', () => {
            instance.add(1);
            expect(instance.get()).to.equal(1);
        })

        it('add multiple numbers', () => {
            instance.add(1);
            instance.add(2);
            expect(instance.get()).to.equal(3);
        })

        it('add single number as string', () => {
            instance.add('1');
            expect(instance.get()).to.equal(1);
        })

        it('add multiple numbers as string', () => {
            instance.add('1');
            instance.add('2');
            expect(instance.get()).to.equal(3);
        })
    })

    describe('Subtract function check', () => {
        it('subtract single number', () => {
            instance.subtract(1);
            expect(instance.get()).to.equal(-1);
        })

        it('subtract multiple numbers', () => {
            instance.subtract(1);
            instance.subtract(2);
            expect(instance.get()).to.equal(-3);
        })

        it('subtract single number as string', () => {
            instance.subtract('1');
            expect(instance.get()).to.equal(-1);
        })

        it('subtract multiple numbers as string', () => {
            instance.subtract('1');
            instance.subtract('2');
            expect(instance.get()).to.equal(-3);
        })

        describe('Add and Subtract function check', () => {

            it('subtract multiple numbers', () => {
                instance.add(2);
                instance.add(3);
                instance.subtract(4);
                expect(instance.get()).to.equal(1);
            })

            it('subtract multiple numbers as string', () => {
                instance.add('2');
                instance.add('3');
                instance.subtract('4');
                expect(instance.get()).to.equal(1);
            })
        })
    })
})