function accountBalance(input) {
    let command = input.shift();
    let sum = 0.00;

    while (command !== "NoMoreMoney") {
        let currentNumber = Number(command);

        if (currentNumber < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${currentNumber.toFixed(2)}`);
            sum += currentNumber;
        }
        command = input.shift();
    }

    console.log(`Total: ${sum.toFixed(2)}`);

}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);