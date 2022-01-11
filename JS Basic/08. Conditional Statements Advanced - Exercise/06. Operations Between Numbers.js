function operationBetweenNumbers(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    let operator = input.shift();

    let result;
    let oddOrEven = '';

    switch (operator) {
        case '+':
            result = number1 + number2;
            oddOrEven = (result % 2 === 0) ? 'even' : 'odd';
            console.log(`${number1} ${operator} ${number2} = ${result.toFixed(0)} - ${oddOrEven}`);
            break;

        case '-':
            result = number1 - number2;
            oddOrEven = (result % 2 === 0) ? 'even' : 'odd';
            console.log(`${number1} ${operator} ${number2} = ${result.toFixed(0)} - ${oddOrEven}`);
            break;

        case '*':
            result = number1 * number2;
            oddOrEven = (result % 2 === 0) ? 'even' : 'odd';
            console.log(`${number1} ${operator} ${number2} = ${result.toFixed(0)} - ${oddOrEven}`);
            break;

        case '/':
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                result = 1.0 * number1 / number2;
                console.log(`${number1} / ${number2} = ${result.toFixed(2)}`);
            }
            break;

        case '%':
            if (number2 === 0) {
                console.log(`Cannot divide ${number1} by zero`);
            } else {
                result = number1 % number2;
                console.log(`${number1} % ${number2} = ${result.toFixed(0)}`);
            }
            break;
    }
}

operationBetweenNumbers(['10', '12', '+']);
operationBetweenNumbers(['10', '1', '-']);
operationBetweenNumbers(['7', '3', '*']);
operationBetweenNumbers(['123', '12', '/']);
operationBetweenNumbers(['10', '3', '%']);
operationBetweenNumbers(['112', '0', '/']);
operationBetweenNumbers(['10', '0', '%']);