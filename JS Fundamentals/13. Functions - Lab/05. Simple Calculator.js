function simpleCalculator(numOne, numTwo, operation) {
    const result = {
        'add': () => numOne + numTwo,
        'multiply': () => numOne * numTwo,
        'subtract': () => numOne - numTwo,
        'divide': () => numOne / numTwo,
    }

    console.log(result[operation]());
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');