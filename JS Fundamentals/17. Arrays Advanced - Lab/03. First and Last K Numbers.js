function firstAndLastKNumbers(input) {
    const n = input.shift();

    console.log(input.slice(0, n).join(' '));
    console.log(input.slice(input.length - n, input.length).join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);