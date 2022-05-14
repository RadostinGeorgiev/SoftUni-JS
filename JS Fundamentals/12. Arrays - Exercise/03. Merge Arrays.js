function mergeArrays(firstArray, secondArray) {

    let output = [];

    for (let index = 0; index < firstArray.length; index++) {
        index % 2 !== 0
            ? output[index] = firstArray[index] + secondArray[index]
            : output[index] = Number(firstArray[index]) + Number(secondArray[index]);
    }

    console.log(output.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);