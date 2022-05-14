function diagonalAttack(input) {
    let array = [];

    for (let row = 0; row < input.length; row++) {
        array[row] = input[row].split(' ').map(Number);
    }

    let leftDiagonalSum = rightDiagonalSum = 0;

    for (let row = 0; row < array.length; row++) {
        leftDiagonalSum += array[row][row];
        rightDiagonalSum += array[row][array.length - 1 - row];
    }

    if (leftDiagonalSum == rightDiagonalSum) {
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array[row].length; col++) {
                if (col != row && col != (array[row].length - 1 - row)) {
                    array[row][col] = leftDiagonalSum;
                }
            }
        }
    }

    for (let row = 0; row < array.length; row++) {
        console.log(array[row].join(' '));

    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'])    