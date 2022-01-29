function magicMatrices(matrix) {
    let sumRow = matrix.map(x => x.reduce((a, b) => a + b));
    let sumCol = matrix.reduce((a, b) => a.map((v, i) => v + b[i]));

    return sumRow.every(x => x === sumRow[0])
        && sumCol.every(x => x === sumRow[0]);
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));