function magicMatrices(array) {
    let magicSum = rowSum = colSum = 0;

    for (let col = 0; col < array.length; col++) {
        magicSum += array[0][col];

    }

    for (let index1 = 0; index1 < array.length; index1++) {
        for (let index2 = 0; index2 < array.length; index2++) {
            rowSum += array[index1][index2];
            colSum += array[index2][index1];
        }

        if (rowSum != magicSum || colSum != magicSum) {
            console.log(false);
            return;
        }

        rowSum = colSum = 0;
    }

    console.log(true);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);