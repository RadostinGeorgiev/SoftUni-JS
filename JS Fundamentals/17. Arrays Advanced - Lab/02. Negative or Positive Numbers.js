function negativeOrPositiveNumbers(input) {
    array = [];
    input.map(Number).forEach(x => { x < 0 ? array.unshift(x) : array.push(x); });

    console.log(array.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);