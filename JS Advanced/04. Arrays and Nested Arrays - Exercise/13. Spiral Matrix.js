function spiralMatrix(rows, cols) {
    const matrix = new Array(rows).fill()
        .map(() => new Array(cols).fill());

    let value = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = value++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = value++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = value++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = value++;
        }
        startCol++;
    }

    matrix.forEach(r => console.log(r.join(' ')));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);