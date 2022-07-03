const { assert, expect } = require('chai');
const { StringBuilder } = require('./13. String Builder.js');

describe('StringBuilder Test', () => {
    describe('Constructor testing', () => {
        it('Empty array at undefined input', () => {
            const sb = new StringBuilder(undefined);

            assert.instanceOf(sb, StringBuilder);
            assert.deepEqual(sb._stringArray, []);
            assert.equal(sb._stringArray.length, 0);
        });

        it('Happy path', () => {
            const sb = new StringBuilder('Test');

            assert.instanceOf(sb, StringBuilder);
            assert.deepEqual(sb._stringArray, ['T', 'e', 's', 't']);
            assert.equal(sb._stringArray.length, 4);
            assert.equal(sb._stringArray[0], 'T');
            assert.typeOf(sb, 'object');
        });

        it('Should throw an error at non-string parameter', () => {
            assert.throws(() => { StringBuilder._vrfyParam(null) }, TypeError, 'Argument must be a string');
            assert.throws(() => { StringBuilder._vrfyParam([]) }, TypeError, 'Argument must be a string');
            assert.throws(() => { StringBuilder._vrfyParam({}) }, TypeError, 'Argument must be a string');
            assert.throws(() => { StringBuilder._vrfyParam(0) }, TypeError, 'Argument must be a string');
            assert.throws(() => { StringBuilder._vrfyParam(true) }, TypeError, 'Argument must be a string');
            assert.throws(() => { StringBuilder._vrfyParam(0.123) }, TypeError, 'Argument must be a string');
        });
    });

    describe('append test', () => {
        it('Happy path - Append add string to existing', () => {
            let sb = new StringBuilder('Append ');
            sb.append('test');
            assert.equal(sb.toString(), 'Append test');
            assert.equal(sb._stringArray.length, 11);
        });

        it('append should throw an error at non-string parameter', () => {
            let sb = new StringBuilder('I');
            assert.throws(() => { sb.append(null) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.append([]) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.append({}) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.append(0) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.append(true) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.append(0.123) }, TypeError, 'Argument must be a string');
        });
    });

    describe('prepend test', () => {
        it('Happy path - Prepend insert string before existing', () => {
            let sb = new StringBuilder('test');
            sb.prepend('Prepend ');
            assert.equal(sb.toString(), 'Prepend test');
            assert.equal(sb._stringArray.length, 12);
        });

        it('prepend should throw an error at non-string parameter', () => {
            let sb = new StringBuilder('I');
            assert.throws(() => { sb.prepend(null) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.prepend([]) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.prepend({}) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.prepend(0) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.prepend(true) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.prepend(0.123) }, TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt test', () => {
        it('Happy path', () => {
            let sb = new StringBuilder('Test successful');

            sb.insertAt(' is', 4);
            assert.equal(sb.toString(), 'Test is successful');
            assert.equal(sb._stringArray.length, 18);

            sb.insertAt(' sometimes', 18);
            assert.equal(sb.toString(), 'Test is successful sometimes');
            assert.equal(sb._stringArray.length, 28);
        });

        it('insertAt should throw an error at non-string parameter', () => {
            let sb = new StringBuilder('I');
            assert.throws(() => { sb.insertAt(null) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.insertAt([]) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.insertAt({}) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.insertAt(0) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.insertAt(true) }, TypeError, 'Argument must be a string');
            assert.throws(() => { sb.insertAt(0.123) }, TypeError, 'Argument must be a string');
        });
    })

    describe('remove test', () => {
        it('Happy path Remove should work fine', () => {
            let sb = new StringBuilder('Test is not successful sometimes');

            sb.remove(8, 4);
            assert.equal(sb.toString(), 'Test is successful sometimes');
            assert.equal(sb._stringArray.length, 28);
        });
    })

    describe('Test with multiply functions', () => {
        it('Happy path: InsertAt should work with multiple operations', () => {
            let array = new StringBuilder('One ');

            array.append('Two ');
            array.prepend('Zero ');
            array.insertAt('Three', 13)
            assert.equal(array.toString(), 'Zero One Two Three');
        });
    })

    describe('toString test', () => {
        it('toString should work fine', () => {
            let sb = new StringBuilder('test');

            sb.append(' sometimes');
            assert.equal(sb.toString(), 'test sometimes');

            sb.prepend('The ');
            assert.equal(sb.toString(), 'The test sometimes');

            sb.insertAt('is not successful ', 9);
            assert.equal(sb.toString(), 'The test is not successful sometimes');

            sb.remove(12, 4);
            assert.equal(sb.toString(), 'The test is successful sometimes');
        });
    })
})