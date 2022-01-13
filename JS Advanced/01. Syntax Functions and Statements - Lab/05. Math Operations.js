function mathOperations(number1, number2, operator) {
    console.log(eval(number1 + operator + number2));
}

mathOperations(5, 6, '+');
mathOperations(6, 5, '-');
mathOperations(5, 6, '*');
mathOperations(10, 5, '/');
mathOperations(11, 5, '%');
mathOperations(5, 3, '**');