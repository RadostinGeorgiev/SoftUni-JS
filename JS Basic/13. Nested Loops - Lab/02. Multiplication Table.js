function multiplicationTable() {
    for (let firstNumber = 1; firstNumber <= 10; firstNumber++) {
        for (let secondNumber = 1; secondNumber <= 10; secondNumber++) {
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
        }
    }
}

multiplicationTable();