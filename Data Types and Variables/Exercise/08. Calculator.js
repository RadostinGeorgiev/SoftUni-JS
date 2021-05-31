function calculator(firstNumber, operator, secondNumber) {

    switch (operator) {
        case '+':
            console.log((firstNumber + secondNumber).toFixed(2));
            break;
        case '-':
            console.log((firstNumber - secondNumber).toFixed(2));
            break;
        case '*':
            console.log((firstNumber * secondNumber).toFixed(2));
            break;
        case '/':
            console.log((firstNumber / secondNumber).toFixed(2));
            break;
        case '%':
            console.log((firstNumber % secondNumber).toFixed(2));
            break;
    }
}

calculator(5, '+', 10);
calculator(5, '-', 10);
calculator(5, '*', 10);
calculator(5, '/', 10);
calculator(5, '%', 10);