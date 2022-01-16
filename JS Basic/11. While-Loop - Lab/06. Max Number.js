function maxNumber(input) {
    let command = input.shift();
    let max = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber > max) {
            max = currentNumber
        }

        command = input.shift();
    }

    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);