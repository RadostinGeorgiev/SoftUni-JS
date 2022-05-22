function negativePositiveNumbers(input) {
    let array = [];

    input.forEach(x => x < 0 ? array.unshift(x) : array.push(x));
    console.log(array.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);