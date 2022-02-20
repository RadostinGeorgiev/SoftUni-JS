const assert = require('assert').strict;
const { expect } = require('chai');
const sum = require('./01. Sub Sum.js');

it('Should calc sum with index larger than length', () => {
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    
    let actualSum = sum(numbers, startIndex, endIndex);
    
    assert.equal(actualSum, expectedSum);
})