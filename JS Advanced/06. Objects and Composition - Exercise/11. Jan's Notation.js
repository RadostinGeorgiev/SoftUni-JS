function janNotation(input) {
    let numbers = [];

    let calculation = {
        '+': (second, first) => { return first + second; },
        '-': (second, first) => { return first - second; },
        '*': (second, first) => { return first * second; },
        '/': (second, first) => { return first / second; },
    }

    for (const item of input) {
        if (!isNaN(item)) {
            numbers.push(item);
        }
        else {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            numbers.push(calculation[item](numbers.pop(), numbers.pop()));
        }
    }

    numbers.length == 1
        ? console.log(numbers.shift())
        : console.log('Error: too many operands!');
}

// janNotation([3, 4, '+']);
// janNotation([5, 3, 4, '*', '-']);
// janNotation([7, 33, 8, '-']);
janNotation([15, '/']);