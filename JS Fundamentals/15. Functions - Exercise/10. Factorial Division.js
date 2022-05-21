function factorialDivision(numberOne, numberTwo) {
    console.log((factorial(numberOne) / factorial(numberTwo)).toFixed(2));

    function factorial(number) {
        if (number == 0) { return 1; }

        return number * factorial(number - 1);
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);