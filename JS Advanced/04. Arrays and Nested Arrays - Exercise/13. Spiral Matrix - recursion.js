function spiralMatrix(rows, cols) {
    const matrix = new Array(rows).fill()
        .map(() => new Array(cols).fill());

    spiral(0, 0, rows, cols, 1);

    matrix.forEach(r => console.log(r.join(' ')));

    function spiral(row, col, rows, cols, value) {

        if (row >= rows || col >= cols) return;

        for (let i = col; i < cols; i++) {
            matrix[row][i] = value++;
        }

        for (let i = row + 1; i < rows; i++) {
            matrix[i][cols - 1] = value++;
        }

        if ((rows - 1) != row) {
            for (let i = cols - 2; i >= col; i--) {
                matrix[rows - 1][i] = value++;
            }
        }

        if ((cols - 1) != col) {
            for (let i = rows - 2; i > row; i--) {
                matrix[i][col] = value++;
            }
        }

        spiral(row + 1, col + 1, rows - 1, cols - 1, value);
    }
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);