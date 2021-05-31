function integerAndFloat(firstNumber, secondNumber, thirdNumber) {

    let sum = firstNumber + secondNumber + thirdNumber;

    console.log(sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);