function equalEvenOddSums(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let outputString = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNumber = i.toString();

        for (let position = 0; position < 6; position++) {
            if (position % 2 !== 0) {
                oddSum += Number(currentNumber.charAt(position));
            } else {
                evenSum += Number(currentNumber.charAt(position));
            }
        }
        if (oddSum == evenSum) {
            outputString += i + " ";
        }
    }

    console.log(outputString);
}

equalEvenOddSums(["123456", "124000"]);