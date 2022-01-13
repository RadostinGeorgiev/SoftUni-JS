function minNumber(input) {
    let number = Number(input[0]);
    let minNum = Number.MAX_VALUE;

    for (let i = 1; i <= number; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber < minNum) {
            minNum = currentNumber;
        }
    }

    console.log(minNum)
}

minNumber(["4", "45", "-20", "7", "99"]);
