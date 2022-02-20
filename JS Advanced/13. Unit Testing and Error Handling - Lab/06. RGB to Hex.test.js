const { expect } = require('chai');
const { rgbToHexColor } = require('./06. RGB to Hex');

describe('RGB to Hex checker', () => {
    describe('Happy path', () => {
        it('Test with white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('Test with black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('Test with teal', () => {
            expect(rgbToHexColor(0, 128, 128)).to.equal('#008080');
        });
    });

    describe('Invalid inputs', () => {
        it('Missing color', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });

        it('Color outside expected range', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        });

        it('Invalid type of color', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
            expect(rgbToHexColor('r', 0, 0)).to.be.undefined;
            expect(rgbToHexColor(0, 'g', 0)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 'b')).to.be.undefined;
        });
    });
})