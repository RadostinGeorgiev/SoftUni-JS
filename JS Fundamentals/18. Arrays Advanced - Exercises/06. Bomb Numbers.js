function bombNumbers(numbers, [bomb, power]) {
    while (numbers.includes(bomb)) {
        let position = numbers.indexOf(bomb);
        numbers.splice(position - power < 0 ? 0 : position - power, 2 * power + 1)
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
}

bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);

bombNumbers(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]);

bombNumbers(
    [1, 7, 7, 1, 2, 3],
    [7, 1]);

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);