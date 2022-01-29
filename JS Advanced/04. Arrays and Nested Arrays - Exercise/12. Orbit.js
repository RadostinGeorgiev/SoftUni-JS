function orbit(input) {
    const [cols, rows, x, y] = input;

    let matrix = [];
    for (let row = 0; row < rows; row++) {

        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 1 + distance(row, col);
        }
    }

    matrix.forEach(r => console.log(r.join(' ')));

    function distance(row, col) {
        return Math.max(Math.abs(row - x), Math.abs(col - y));
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);