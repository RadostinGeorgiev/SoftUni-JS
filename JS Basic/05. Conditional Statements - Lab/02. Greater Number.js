function greatNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    console.log(firstNumber >= secondNumber ? firstNumber : secondNumber);
}

greatNumber(['3', '5']);
greatNumber(['5', '3']);