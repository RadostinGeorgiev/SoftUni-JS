function diagonalAttack(array) {
    array = array.map(r => r.split(' ').map(Number));

    let primaryDiagonalSum = array.map((r, i) => r[i]).reduce((a, b) => a + b);
    let secondaryDiagonalSum = array.map((r, i) => r[array.length - 1 - i]).reduce((a, b) => a + b);

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array[row].length; col++) {

                if (row == col || row == array.length - 1 - col) continue;

                array[row][col] = primaryDiagonalSum;
            }
        }
    }

    array.forEach(r => console.log(r.join(' ')));
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0']);