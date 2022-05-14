function spiralMatrix(rows, cols) {
    const array = new Array(rows);

    for (let index = 0; index < rows; index++) {
        array[index] = [];
    }

    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let index = startCol; index <= endCol; index++) {
            array[startRow][index] = counter;
            counter++;
        }
        startRow++;

        for (let index = startRow; index <= endRow; index++) {
            array[index][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let index = endCol; index >= startCol; index--) {
            array[endRow][index] = counter;
            counter++;
        }
        endRow--;

        for (let index = endRow; index >= startRow; index--) {
            array[index][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    for (let row = 0; row < rows; row++) {
        console.log(array[row].join(' '));      
    }
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
spiralMatrix(7, 7);
spiralMatrix(6, 6);