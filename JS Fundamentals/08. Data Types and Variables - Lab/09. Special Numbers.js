function specialNumbers(input) {

    for (let index = 1; index <= input; index++) {

        let currentNumber = index;
        let currentSum = 0;
        while (currentNumber > 0) {
            currentSum += currentNumber % 10;
            currentNumber = parseInt(currentNumber / 10);
        }

        if (currentSum == 5 || currentSum == 7 || currentSum == 11) {
            console.log(`${index} -> True`);
        } else {
            console.log(`${index} -> False`);
        }
    }
}

specialNumbers(15);
specialNumbers(20);