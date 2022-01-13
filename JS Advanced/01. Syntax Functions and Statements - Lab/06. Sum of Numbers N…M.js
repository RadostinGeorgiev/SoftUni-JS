function sumOfNumbersNtoM(firstInput, secondInput) {

    let firstNumber = Number(firstInput);
    let secondNumber = Number(secondInput);
    let result = 0;

    for (let index = firstNumber; index <= secondNumber; index++) {
        result += index;
    }

    console.log(result);
}

sumOfNumbersNtoM('1', '5');