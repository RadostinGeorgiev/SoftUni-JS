function sequence2kplus1(input) {
    let number = Number(input.shift());
    let currentNumber = 1;

    while (currentNumber <= number) {
        console.log(currentNumber);
        currentNumber = 2 * currentNumber + 1;
    }

}

sequence2kplus1(["17"]);
sequence2kplus1(["31"]);