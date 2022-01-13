function sumOfNumbers(input) {
    let numberAsString = input.toString();
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        let symbol = numberAsString[i];
        sum += Number(symbol);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);