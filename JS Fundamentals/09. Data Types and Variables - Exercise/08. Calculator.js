function calculator(firstNumber, operator, secondNumber) {
    
    console.log(eval(firstNumber + operator + secondNumber).toFixed(2));
}

calculator(5, '+', 10);
calculator(5, '-', 10);
calculator(5, '*', 10);
calculator(5, '/', 10);
calculator(5, '%', 10);