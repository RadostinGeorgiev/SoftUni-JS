function janNotation(input) {
    const numbers = [];

    for (const x of input) {
        if (isFinite(x)) {
            numbers.push(x);
        } else {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let numberTwo = numbers.pop();
                let numberOne = numbers.pop();
                let result = eval(numberOne + x + numberTwo);
                numbers.push(result);
            }
        }
    }

    numbers.length == 1
        ? console.log(numbers.shift())
        : console.log('Error: too many operands!');
}

janNotation([3, 4, '+']);
janNotation([5, 3, 4, '*', '-']);
janNotation([7, 33, 8, '-']);
janNotation([15, '/']);
janNotation([31, 2, '+', 11, '/']);
janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);