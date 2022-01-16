function diagonalSums(array) {
    let primary = 0;
    let secondary = 0;

    for (let row = 0; row < array.length; row++) {
        primary += array[row][row];
        secondary += array[row][array.length - row - 1];
    }

    console.log(primary, secondary);
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);