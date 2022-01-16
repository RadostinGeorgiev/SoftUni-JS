function minNumber(input) {
    let command = input.shift();
    let min = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber < min) {
            min = currentNumber
        }

        command = input.shift();
    }

    console.log(min);
}

minNumber(["100","99","80","70","Stop"]);
minNumber(["45","-20","7","99","Stop"]);