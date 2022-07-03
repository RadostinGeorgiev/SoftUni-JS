const { assert, expect } = require('chai');
const { carService } = require('./03. Car service_Resources');

describe('carService Test', () => {
    describe('isItExpensive test', () => {
        it('Happy path', () => {
            expect(carService.isItExpensive('Engine')).to.be.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money');
        });
        it('Different input', () => {
            expect(carService.isItExpensive('A')).to.be.equal('The overall price will be a bit cheaper');
        });
    });

    describe('discount test', () => {
        it('Happy path', () => {
            expect(carService.discount(3, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(8, 100)).to.be.equal('Discount applied! You saved 30$');
            expect(carService.discount(1, 100)).to.be.equal('You cannot apply a discount');
            expect(carService.discount(2, 100)).to.be.equal('You cannot apply a discount');
        });

        it('Wrong inputs', () => {
            expect(() => carService.discount(null, 1)).to.throw('Invalid input');
            expect(() => carService.discount(undefined, 1)).to.throw('Invalid input');
            expect(() => carService.discount({}, 1)).to.throw('Invalid input');
            expect(() => carService.discount([1], 1)).to.throw('Invalid input');
            expect(() => carService.discount('1', 1)).to.throw('Invalid input');
            expect(() => carService.discount(true, 1)).to.throw('Invalid input');

            expect(() => carService.discount(1, null)).to.throw('Invalid input');
            expect(() => carService.discount(1, undefined)).to.throw('Invalid input');
            expect(() => carService.discount(1, {})).to.throw('Invalid input');
            expect(() => carService.discount(1, [1])).to.throw('Invalid input');
            expect(() => carService.discount(1, '1')).to.throw('Invalid input');
            expect(() => carService.discount(1, true)).to.throw('Invalid input');
        });
    });

    describe('partsToBuy test', () => {
        it('Happy path', () => {
            expect(carService.partsToBuy([], [])).to.be.equal(0);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"])).to.be.equal(145);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"])).to.be.equal(145);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"])).to.be.equal(375);
         });

        it('Wrong inputs', () => {
            expect(() => carService.partsToBuy(null, [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(undefined, [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy({}, [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1, [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1.5, [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy('1', [1])).to.throw('Invalid input');
            expect(() => carService.partsToBuy(true, [1])).to.throw('Invalid input');

            expect(() => carService.partsToBuy([1], null)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], undefined)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], {})).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], 1)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], 1.5)).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], '1')).to.throw('Invalid input');
            expect(() => carService.partsToBuy([1], true)).to.throw('Invalid input');
        });
    });
});