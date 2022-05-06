function sumOddNumbers(input) {
    let number = Number(input);
    let sum = 0;

    for (let index = 1; index <= 2 * number; index += 2) {
        console.log(index);
        sum += index;
    }

    console.log(`Sum: ${sum}`);
}

sumOddNumbers(5)
sumOddNumbers(3)