const { expect, assert } = require('chai');
const { PaymentPackage } = require('./12. Payment Package.js');

describe('PaymentPackage Testing', () => {
    describe('Property - name Testing', () => {
        it('Happy Test - success name set', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            expect(hrPack.name).to.be.equal('HR Services');

            hrPack2 = new PaymentPackage('Consultation', 800);
            expect(hrPack2.name).to.be.equal('Consultation');

            hrPack3 = new PaymentPackage('Partnership Fee', 7000);
            expect(hrPack3.name).to.be.equal('Partnership Fee');
        });

        it('Incorrect name type', () => {
            expect(() => new PaymentPackage(null, 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(undefined, 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage([], 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage({}, 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(true, 1)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(1, 1)).to.throw('Name must be a non-empty string');
        });

        it('Empty name set', () => {
            expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        });
    });

    describe('Property - value Testing', () => {
        it('Happy Test - success value set', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            expect(hrPack.value).to.be.equal(1500);

            hrPack2 = new PaymentPackage('Consultation', 800);
            expect(hrPack2.value).to.be.equal(800);

            hrPack3 = new PaymentPackage('Partnership Fee', 7000);
            expect(hrPack3.value).to.be.equal(7000);
        });

        it('Incorrect value type', () => {
            expect(() => new PaymentPackage('Consultation', null)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Consultation', undefined)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Consultation', [])).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Consultation', {})).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Consultation', true)).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Consultation', '1')).to.throw('Value must be a non-negative number');
        });

        it('Negative value set', () => {
            expect(() => new PaymentPackage('Consultation', -1)).to.throw('Value must be a non-negative number');
        });
    });

    describe('Property - VAT Testing', () => {
        it('Happy Test - success VAT set', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            hrPack.VAT = 30;
            expect(hrPack.VAT).to.be.equal(30);

            hrPack2 = new PaymentPackage('Consultation', 800);
            hrPack2.VAT = 16;
            expect(hrPack2.VAT).to.be.equal(16);

            hrPack3 = new PaymentPackage('Partnership Fee', 7000);
            hrPack3.VAT = 14;
            expect(hrPack3.VAT).to.be.equal(14);
        });

        it('Happy Test - check default VAT', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            expect(hrPack.VAT).to.be.equal(20);
        });

        it('Incorrect VAT type', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);

            expect(() => hrPack.VAT = null).to.throw('VAT must be a non-negative number');
            expect(() => hrPack.VAT = undefined).to.throw('VAT must be a non-negative number');
            expect(() => hrPack.VAT = []).to.throw('VAT must be a non-negative number');
            expect(() => hrPack.VAT = {}).to.throw('VAT must be a non-negative number');
            expect(() => hrPack.VAT = true).to.throw('VAT must be a non-negative number');
            expect(() => hrPack.VAT = '1').to.throw('VAT must be a non-negative number');
        });

        it('Negative VAT set', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            expect(() => hrPack.VAT = -10).to.throw('VAT must be a non-negative number');
        });
    });

    describe('Property - active Testing', () => {
        it('Happy Test - success active set', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);

            hrPack.active = false;
            expect(hrPack.active).to.be.false;

            hrPack.active = true;
            expect(hrPack.active).to.be.true;

        });

        it('Happy Test - check default active', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);
            expect(hrPack.active).to.be.true;
        });

        it('Incorrect active type', () => {
            const hrPack = new PaymentPackage('HR Services', 1500);

            expect(() => hrPack.active = null).to.throw('Active status must be a boolean');
            expect(() => hrPack.active = undefined).to.throw('Active status must be a boolean');
            expect(() => hrPack.active = []).to.throw('Active status must be a boolean');
            expect(() => hrPack.active = {}).to.throw('Active status must be a boolean');
            expect(() => hrPack.active = 1).to.throw('Active status must be a boolean');
            expect(() => hrPack.active = '1').to.throw('Active status must be a boolean');
        });
    });

    describe('toString method testing', () => {
        it('Happy Test - toString with default VAT and active values', () => {
            const hrPack = new PaymentPackage('Consultation', 800);

            expect(hrPack.toString()).to.be.equal([
                `Package: Consultation`,
                `- Value (excl. VAT): 800`,
                `- Value (VAT 20%): 960`
            ].join('\n'));
        });

        it('Happy Test - toString with default VAT and active = false', () => {
            const hrPack = new PaymentPackage('Consultation', 800);
            hrPack.active = false;

            expect(hrPack.toString()).to.be.equal([
                `Package: Consultation (inactive)`,
                `- Value (excl. VAT): 800`,
                `- Value (VAT 20%): 960`
            ].join('\n'));
        });

        it('Happy Test - toString with default VAT and 0 value', () => {
            const hrPack = new PaymentPackage('Consultation', 0);

            expect(hrPack.toString()).to.be.equal([
                `Package: Consultation`,
                `- Value (excl. VAT): 0`,
                `- Value (VAT 20%): 0`
            ].join('\n'));
        });
    });
});